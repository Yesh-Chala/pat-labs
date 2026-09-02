/**
 * Shared Notion fetch used by the runtime API (Netlify function + Vite
 * middleware). The API key never leaves the server.
 *
 * See NOTION_SETUP.md for the database schemas this expects.
 */
import { Client, isFullBlock, isFullPage } from "@notionhq/client"

const warnings = []
const warn = (message) => {
  if (!warnings.includes(message)) warnings.push(message)
}

/* ------------------------------------------------------------------ props */

function readProp(page, name, shape = "text") {
  const prop = page.properties?.[name]
  if (!prop) return shape === "number" ? 0 : shape === "boolean" ? false : shape === "spans" ? [] : ""

  switch (prop.type) {
    case "title":
    case "rich_text":
      return shape === "spans" ? toSpans(prop[prop.type]) : plainText(prop[prop.type])
    case "url":
      return prop.url ?? ""
    case "email":
      return prop.email ?? ""
    case "select":
      return prop.select?.name ?? ""
    case "status":
      return prop.status?.name ?? ""
    case "multi_select":
      return prop.multi_select.map((option) => option.name).join(", ")
    case "date":
      return prop.date?.start ?? ""
    case "number":
      return prop.number ?? 0
    case "checkbox":
      return prop.checkbox
    case "files": {
      const file = prop.files[0]
      if (!file) return ""
      if (file.type === "external") return file.external.url
      warn(
        `"${name}" on "${pageTitle(page)}" uses a Notion-uploaded file. Those URLs expire — ` +
          `use the Image URL property with a repo path or a public link instead.`
      )
      return ""
    }
    case "formula":
      return prop.formula?.string ?? prop.formula?.number ?? prop.formula?.boolean ?? ""
    case "relation":
      return prop.relation.map((relation) => relation.id)
    case "rollup":
      return prop.rollup?.number ?? ""
    default:
      return shape === "number" ? 0 : shape === "boolean" ? false : shape === "spans" ? [] : ""
  }
}

function pageTitle(page) {
  const titleProp = Object.values(page.properties ?? {}).find((prop) => prop.type === "title")
  return titleProp ? plainText(titleProp.title) : page.id
}

const plainText = (richText = []) => richText.map((span) => span.plain_text).join("").trim()

function toSpans(richText = []) {
  return richText
    .filter((span) => span.plain_text !== "")
    .map((span) => {
      const out = { text: span.plain_text }
      const { bold, italic, code, strikethrough, underline } = span.annotations ?? {}
      if (bold) out.bold = true
      if (italic) out.italic = true
      if (code) out.code = true
      if (strikethrough) out.strikethrough = true
      if (underline) out.underline = true
      if (span.href) out.href = span.href
      return out
    })
}

/* ----------------------------------------------------------------- images */

const DRIVE_SHARE = /drive\.google\.com\/file\/d\/([\w-]+)/
const NOTION_SIGNED = /^https:\/\/(prod-files|s3\.us-west-2\.amazonaws\.com\/secure\.notion-static)/

function normaliseImageUrl(url, label) {
  if (!url) return ""

  const drive = url.match(DRIVE_SHARE)
  if (drive) {
    warn(
      `"${label}" uses a Google Drive share link. Rewriting it to a direct link — ` +
        `make sure the file is shared with "Anyone with the link".`
    )
    return `https://drive.google.com/uc?export=view&id=${drive[1]}`
  }

  if (NOTION_SIGNED.test(url)) {
    warn(`"${label}" points at a Notion-hosted file. That URL expires within the hour and will break.`)
    return ""
  }

  return url
}

/* ----------------------------------------------------------------- blocks */

async function fetchBlocks(notion, blockId) {
  const raw = []
  let cursor
  do {
    const response = await notion.blocks.children.list({ block_id: blockId, start_cursor: cursor })
    raw.push(...response.results.filter(isFullBlock))
    cursor = response.has_more ? response.next_cursor : undefined
  } while (cursor)

  const blocks = []

  for (const block of raw) {
    const listType =
      block.type === "bulleted_list_item"
        ? "bulleted_list"
        : block.type === "numbered_list_item"
          ? "numbered_list"
          : null

    if (listType) {
      const item = {
        spans: toSpans(block[block.type].rich_text),
        children: block.has_children ? await fetchBlocks(notion, block.id) : [],
      }
      const previous = blocks.at(-1)
      if (previous?.type === listType) previous.items.push(item)
      else blocks.push({ type: listType, items: [item] })
      continue
    }

    const converted = await convertBlock(notion, block)
    if (converted) blocks.push(converted)
  }

  return blocks
}

async function convertBlock(notion, block) {
  switch (block.type) {
    case "paragraph": {
      const spans = toSpans(block.paragraph.rich_text)
      return spans.length ? { type: "paragraph", spans } : null
    }
    case "heading_1":
      return { type: "heading", level: 1, spans: toSpans(block.heading_1.rich_text) }
    case "heading_2":
      return { type: "heading", level: 2, spans: toSpans(block.heading_2.rich_text) }
    case "heading_3":
      return { type: "heading", level: 3, spans: toSpans(block.heading_3.rich_text) }
    case "quote":
      return { type: "quote", spans: toSpans(block.quote.rich_text) }
    case "callout":
      return {
        type: "callout",
        emoji: block.callout.icon?.type === "emoji" ? block.callout.icon.emoji : "",
        spans: toSpans(block.callout.rich_text),
      }
    case "divider":
      return { type: "divider" }
    case "code":
      return {
        type: "code",
        language: block.code.language ?? "text",
        text: plainText(block.code.rich_text),
      }
    case "image": {
      const source = block.image.type === "external" ? block.image.external.url : block.image.file?.url
      const url = normaliseImageUrl(source ?? "", "An inline image")
      return url ? { type: "image", url, caption: toSpans(block.image.caption) } : null
    }
    case "toggle": {
      const children = block.has_children ? await fetchBlocks(notion, block.id) : []
      return children.length
        ? { type: "heading", level: 3, spans: toSpans(block.toggle.rich_text) }
        : null
    }
    default:
      return null
  }
}

/* ------------------------------------------------------------------ query */

async function resolveDataSource(notion, databaseId) {
  const database = await notion.databases.retrieve({ database_id: databaseId })
  const dataSourceId = database.data_sources?.[0]?.id
  if (!dataSourceId) throw new Error(`Database ${databaseId} has no data source`)
  return dataSourceId
}

async function queryAll(notion, databaseId) {
  const dataSourceId = await resolveDataSource(notion, databaseId)
  const pages = []
  let cursor
  do {
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      start_cursor: cursor,
      page_size: 100,
    })
    pages.push(...response.results.filter(isFullPage))
    cursor = response.has_more ? response.next_cursor : undefined
  } while (cursor)
  return pages
}

/* ---------------------------------------------------------------- mapping */

const VALID_TYPES = new Set(["Project", "Research", "Blog"])
const VALID_POSITIONS = new Set(["top", "center", "bottom"])

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

async function loadContent(notion, contentDb, timelinesByPage) {
  const pages = await queryAll(notion, contentDb)
  const items = []

  for (const page of pages) {
    const title = readProp(page, "Name") || pageTitle(page)
    const status = readProp(page, "Status")
    if (status !== "Published") continue

    const type = readProp(page, "Type")
    if (!VALID_TYPES.has(type)) {
      warn(`"${title}" has Type "${type || "(empty)"}" — expected Project, Research or Blog. Skipped.`)
      continue
    }

    const imagePosition = readProp(page, "Image Position")

    items.push({
      id: page.id,
      slug: readProp(page, "Slug") || slugify(title),
      type,
      title,
      summary: readProp(page, "Summary"),
      description: readProp(page, "Description"),
      imageUrl: normaliseImageUrl(readProp(page, "Image URL"), `Image URL on "${title}"`),
      imagePosition: VALID_POSITIONS.has(imagePosition) ? imagePosition : "center",
      date: readProp(page, "Date"),
      category: readProp(page, "Category"),
      order: Number(readProp(page, "Order", "number")) || 0,
      ctaLabel: readProp(page, "CTA Label"),
      ctaLink: readProp(page, "CTA Link"),
      showOnHome: Boolean(readProp(page, "Show on Home", "boolean")),
      homeSlot: readProp(page, "Home Slot"),
      homeOrder: Number(readProp(page, "Home Order", "number")) || 0,
      timeline: timelinesByPage.get(page.id) ?? [],
      body: await fetchBlocks(notion, page.id),
    })
  }

  const seen = new Map()
  for (const item of items) {
    const key = `${item.type}/${item.slug}`
    if (seen.has(key)) warn(`Duplicate slug "${item.slug}" for two ${item.type} posts. One will be unreachable.`)
    seen.set(key, item)
  }

  return items.sort((a, b) => a.order - b.order || b.date.localeCompare(a.date))
}

async function loadTimelines(notion, timelineDb) {
  const byPage = new Map()
  if (!timelineDb) return byPage

  const pages = await queryAll(notion, timelineDb)
  const rows = pages.map((page) => ({
    order: Number(readProp(page, "Order", "number")) || 0,
    projectIds: readProp(page, "Project"),
    item: {
      when: readProp(page, "When"),
      title: readProp(page, "Name") || pageTitle(page),
      description: readProp(page, "Description"),
    },
  }))

  for (const row of rows.sort((a, b) => a.order - b.order)) {
    for (const projectId of Array.isArray(row.projectIds) ? row.projectIds : []) {
      if (!byPage.has(projectId)) byPage.set(projectId, [])
      byPage.get(projectId).push(row.item)
    }
  }

  return byPage
}

const VALID_BLOCKS = new Set([
  "announcement",
  "hero",
  "agenda",
  "methodology",
  "collective",
  "context",
  "featured",
  "projects_intro",
  "research_intro",
  "blog_intro",
])

async function loadPageBlocks(notion, blocksDb) {
  if (!blocksDb) return []

  const pages = await queryAll(notion, blocksDb)
  const blocks = []

  for (const page of pages) {
    const name = readProp(page, "Name") || pageTitle(page)
    const block = readProp(page, "Block")
    if (!VALID_BLOCKS.has(block)) {
      warn(`Page block "${name}" has Block "${block || "(empty)"}" which the site does not recognise. Skipped.`)
      continue
    }

    blocks.push({
      block,
      heading: readProp(page, "Heading"),
      subheading: readProp(page, "Subheading"),
      ctaLabel: readProp(page, "CTA Label"),
      ctaLink: readProp(page, "CTA Link"),
      visible: Boolean(readProp(page, "Visible", "boolean")),
      order: Number(readProp(page, "Order", "number")) || 0,
      body: await fetchBlocks(notion, page.id),
    })
  }

  return blocks.sort((a, b) => a.order - b.order)
}

/**
 * Returns `{ content, blocks, source }` from Notion, or `{ content: null, blocks: null }`
 * when credentials are missing so the client can keep its fallback copy.
 */
export async function loadSiteContent(env = process.env) {
  warnings.length = 0
  const token = env.NOTION_TOKEN
  const contentDb = env.NOTION_CONTENT_DB
  const blocksDb = env.NOTION_BLOCKS_DB
  const timelineDb = env.NOTION_TIMELINE_DB

  if (!token || !contentDb) {
    return { content: null, blocks: null, source: "unconfigured", warnings: [] }
  }

  const notion = new Client({ auth: token })
  const timelines = await loadTimelines(notion, timelineDb)
  const [content, blocks] = await Promise.all([
    loadContent(notion, contentDb, timelines),
    loadPageBlocks(notion, blocksDb),
  ])

  return { content, blocks, source: "notion", warnings: [...warnings] }
}
