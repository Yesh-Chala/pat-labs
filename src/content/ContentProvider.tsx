import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import fallbackContent from "./content.json"
import fallbackBlocks from "./blocks.json"
import type { ContentBlock, ContentItem, ContentType, PageBlock, PageBlockKey } from "./types"

interface ContentStore {
  content: ContentItem[]
  blocks: PageBlock[]
  ready: boolean
}

const fallbackContentItems = fallbackContent as ContentItem[]
const fallbackPageBlocks = fallbackBlocks as PageBlock[]

const fallback: ContentStore = {
  content: fallbackContentItems,
  blocks: fallbackPageBlocks,
  ready: false,
}

function hasCopy(block: PageBlock) {
  return Boolean(block.heading || block.subheading || block.body.length)
}

/** Keep seeded copy when a Notion row exists but is still empty. */
function mergeBlocks(live: PageBlock[] | null | undefined, seed: PageBlock[]): PageBlock[] {
  if (!live?.length) return seed
  const byKey = new Map(seed.map((block) => [block.block, block]))
  for (const block of live) {
    if (hasCopy(block) || !byKey.has(block.block)) byKey.set(block.block, block)
  }
  return [...byKey.values()]
}

const ContentContext = createContext<ContentStore>(fallback)

export function ContentProvider({ children }: { children: ReactNode }) {
  const [store, setStore] = useState<ContentStore>(fallback)

  useEffect(() => {
    let cancelled = false

    fetch("/api/content")
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((data) => {
        if (cancelled) return
        setStore({
          content: Array.isArray(data.content) && data.content.length ? data.content : fallbackContentItems,
          blocks: mergeBlocks(data.blocks, fallbackPageBlocks),
          ready: true,
        })
      })
      .catch(() => {
        if (!cancelled) setStore((current) => ({ ...current, ready: true }))
      })

    return () => {
      cancelled = true
    }
  }, [])

  return <ContentContext.Provider value={store}>{children}</ContentContext.Provider>
}

export function useContentStore(): ContentStore {
  return useContext(ContentContext)
}

export function useContentByType(type: ContentType): ContentItem[] {
  const { content } = useContentStore()
  return useMemo(() => content.filter((item) => item.type === type), [content, type])
}

export function useContentBySlug(type: ContentType, slug?: string): ContentItem | undefined {
  const { content } = useContentStore()
  return useMemo(
    () => (slug ? content.find((item) => item.type === type && item.slug === slug) : undefined),
    [content, type, slug]
  )
}

export function useFeaturedContent(): ContentItem[] {
  const { content } = useContentStore()
  return useMemo(
    () =>
      content
        .filter((item) => item.showOnHome && item.homeSlot !== "Announcement Bar")
        .sort((a, b) => a.homeOrder - b.homeOrder),
    [content]
  )
}

export function useAnnouncementPost(): ContentItem | undefined {
  const { content } = useContentStore()
  return useMemo(
    () =>
      content
        .filter((item) => item.showOnHome && item.homeSlot === "Announcement Bar")
        .sort((a, b) => a.homeOrder - b.homeOrder)[0],
    [content]
  )
}

export function usePageBlock(block: PageBlockKey): PageBlock | undefined {
  const { blocks } = useContentStore()
  const match = blocks.find((entry) => entry.block === block)
  return match?.visible ? match : undefined
}

const HOME_SECTIONS: PageBlockKey[] = ["hero", "agenda", "methodology", "collective", "featured", "context"]

export function useHomeSectionOrder(): PageBlockKey[] {
  const { blocks } = useContentStore()
  return useMemo(
    () =>
      blocks
        .filter((entry) => entry.visible && HOME_SECTIONS.includes(entry.block))
        .sort((a, b) => a.order - b.order)
        .map((entry) => entry.block),
    [blocks]
  )
}

export function paragraphsOf(blocks: ContentBlock[] = []): ContentBlock[] {
  return blocks.filter((block) => block.type === "paragraph")
}

export function firstBlockOfType<T extends ContentBlock["type"]>(
  blocks: ContentBlock[] = [],
  type: T
): Extract<ContentBlock, { type: T }> | undefined {
  return blocks.find((block) => block.type === type) as Extract<ContentBlock, { type: T }> | undefined
}

export function blockText(blocks: ContentBlock[] = []): string[] {
  return paragraphsOf(blocks).map((block) =>
    block.type === "paragraph" ? block.spans.map((span) => span.text).join("") : ""
  )
}
