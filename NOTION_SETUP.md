# Notion Content Setup

Notion is the content repository for **Projects**, **Research**, **Blog**, and the **homepage copy**.
Everything else (nav, footer, design, dashboards, About, Research Panel) stays in code.

Publishing in Notion triggers a rebuild, and the site updates within a couple of minutes.

---

## 1. Notion page hierarchy

Create one parent page called **Website Content**. Inside it, put the databases described below.

```
Website Content
├── Site Content          (database)   ← Projects, Research, Blog posts
├── Timeline Events       (database)   ← optional, project timelines only
└── Page Blocks           (database)   ← homepage sections and list page intros
```

The `Projects / Research / Blog` grouping is achieved with **views** on the `Site Content`
database rather than separate databases, so a post can be moved between sections by
changing one property. Create three linked views inside **Website Content**:

- **Projects** — filter `Type = Project`, sort by `Order` ascending
- **Research** — filter `Type = Research`, sort by `Date` descending
- **Blog** — filter `Type = Blog`, sort by `Date` descending

Also create a **On the Homepage** view — filter `Show on Home = checked`. That view is your
single source of truth for what is currently promoted on the home screen.

---

## 2. Database: `Site Content`

Property names must match **exactly** (they are case-sensitive).

| Property | Type | Options / Notes |
| --- | --- | --- |
| `Name` | Title | The post title as shown on the site |
| `Slug` | Text | URL segment, lowercase and hyphenated. e.g. `patbot` |
| `Type` | Select | `Project`, `Research`, `Blog` |
| `Status` | Select | `Draft`, `Published` — only `Published` reaches the site |
| `Summary` | Text | One or two sentences. Used on cards and list pages |
| `Description` | Text | Longer intro shown under the hero on detail pages. Optional |
| `Image URL` | URL | See [Images](#5-images) |
| `Image Position` | Select | `top`, `center`, `bottom` — how the card crops. Optional |
| `Date` | Date | Publication or project date |
| `Category` | Text | e.g. `Technology and Research`. Optional |
| `Order` | Number | Manual sort within a section. Lower appears first |
| `CTA Label` | Text | Optional button at the end of the post, e.g. `Check it out` |
| `CTA Link` | Text | Where the button goes. Internal path or full URL |
| `Show on Home` | Checkbox | Promote this post on the homepage |
| `Home Slot` | Select | `Announcement Bar`, `Featured Card` |
| `Home Order` | Number | Sort among featured items |

The **body of the post** is the Notion page content itself. Write normally: headings,
paragraphs, bullets, quotes, images, dividers, code, callouts. It is rendered on the site
in the existing typography.

### URL mapping

`Type` determines the route. `Slug` determines the path.

| `Type` | List page | Detail page |
| --- | --- | --- |
| `Project` | `/projects` | `/projects/{Slug}` |
| `Research` | `/research` | `/research/{Slug}` |
| `Blog` | `/blog` | `/blog/{Slug}` |

Slugs must be unique within a `Type`. Changing a slug changes the URL and breaks old links,
so avoid it once a post is public.

---

## 3. Database: `Timeline Events` (optional)

Only needed for projects that show a timeline. Skip it entirely if you do not want timelines.

| Property | Type | Notes |
| --- | --- | --- |
| `Name` | Title | The milestone title, e.g. `Version 1 built` |
| `When` | Text | Free text, e.g. `March 2025`. Kept as text so `Q2 2025` also works |
| `Description` | Text | One sentence about the milestone |
| `Order` | Number | Chronological order, lower first |
| `Project` | Relation → `Site Content` | The post this milestone belongs to |

---

## 4. Database: `Page Blocks`

One row per section of the site's fixed pages. You control the words, not the layout.

| Property | Type | Options / Notes |
| --- | --- | --- |
| `Name` | Title | Friendly label, e.g. `Hero`. For your eyes only |
| `Block` | Select | The key the site looks up. See the table below |
| `Heading` | Text | Section heading |
| `Subheading` | Text | Optional smaller line under the heading |
| `CTA Label` | Text | Button or link text. Leave blank for no CTA |
| `CTA Link` | Text | Internal path like `/research` or a full URL |
| `Visible` | Checkbox | Unchecked hides the whole section |
| `Order` | Number | Section order down the homepage |

The **body** of each section is the Notion page content of that row. Write normally; some
sections read specific block kinds, noted below.

Create these ten rows once:

| `Name` | `Block` | What it controls |
| --- | --- | --- |
| Announcement Bar | `announcement` | The strip above the header |
| Hero | `hero` | Full-screen intro. `Heading` plus body paragraphs |
| Agenda | `agenda` | `Heading`, then a **bulleted list** (one bullet per column) and a **quote** for the closing line |
| Methodology | `methodology` | `Heading`, body paragraphs, then a **bulleted list** for the four tiles |
| Collective | `collective` | `Heading`, body paragraphs, and a **quote** for the rounded pill |
| Featured Posts | `featured` | `Heading` and `Subheading` above the grid of posts marked `Show on Home` |
| Context | `context` | Closing section. First paragraph renders large, the rest smaller |
| Projects Intro | `projects_intro` | `Heading` and intro text on `/projects` |
| Research Intro | `research_intro` | `Heading` and intro text on `/research` |
| Blog Intro | `blog_intro` | `Heading` and intro text on `/blog` |

### Reordering the homepage

The homepage renders `hero`, `agenda`, `methodology`, `collective`, `featured` and `context`
in ascending `Order`. Change the numbers to reorder sections. Uncheck `Visible` to drop one.

### Methodology tiles

Write each tile as a bullet beginning with an emoji:

```
🔍 Ethnography
📊 Data Analysis
🧪 Experiments
🛠️ Infrastructure
```

The emoji becomes the icon and the rest becomes the label. Add or remove bullets freely.

### How the announcement bar resolves

1. If a `Site Content` post has `Show on Home` checked **and** `Home Slot = Announcement Bar`,
   the bar uses that post's `Name` and `Summary` and links to it automatically. This is the
   normal way to promote a new blog post or research piece.
2. Otherwise the bar falls back to the `announcement` row in `Page Blocks`, using `Heading`,
   `Subheading`, `CTA Label`, and `CTA Link`.
3. If neither exists, or `Visible` is unchecked, the bar does not render.

Only one post can hold the announcement slot. If several are set, the lowest `Home Order` wins.

### Featured grid

Posts with `Show on Home` checked and `Home Slot = Featured Card` (or blank) appear in the
`featured` grid on the homepage, sorted by `Home Order`. If none are marked, the whole section
is skipped.

### Fallbacks

If a `Page Blocks` row is missing, unpublished, or has an empty `Heading`, the site falls back
to the copy currently hardcoded in the components. The homepage can never go blank because of
a Notion mistake.

---

## 5. Images

`Image URL` accepts either:

- **A file already in the repo** — use the path, e.g. `/PatBot-Background.png`.
  This is what the three existing projects use.
- **Any public URL** — a CDN, an image host, or your own server.

Do **not** paste a Notion-uploaded file URL. Notion signs those URLs and they expire after
about an hour, so the image will break on the site.

### Google Drive

Drive works, but the normal share link will not render in an image tag. Set the file to
**Anyone with the link → Viewer**, then convert the link:

```
Share link:  https://drive.google.com/file/d/1AbCdEfGhIjK/view?usp=sharing
Use this:    https://drive.google.com/uc?export=view&id=1AbCdEfGhIjK
```

The build prints a warning if it sees a `/file/d/.../view` style link so you can fix it.

---

## 6. Connecting Notion to the site

### Create the integration

1. Go to <https://www.notion.so/my-integrations> and click **New integration**.
2. Name it `Patronus Site`, pick your workspace, capability **Read content** only.
3. Copy the **Internal Integration Secret**. It starts with `ntn_` or `secret_`.
4. Open the **Website Content** page in Notion, click the `...` menu → **Connections** →
   add `Patronus Site`. The databases inherit access from the parent page.

### Get the database IDs

Open each database as a full page. The ID is the 32-character string in the URL:

```
https://www.notion.so/<workspace>/1f2a3b4c5d6e7f8091a2b3c4d5e6f708?v=...
                                  ^-------------- this ---------------^
```

### Local environment

Create a `.env` file in the project root. It is already gitignored.

```
NOTION_TOKEN=ntn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_CONTENT_DB=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_BLOCKS_DB=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_TIMELINE_DB=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

`NOTION_BLOCKS_DB` and `NOTION_TIMELINE_DB` are optional.

`npm run dev` reads these and serves `/api/content` from Vite. Edit Notion, refresh the
browser, and the site updates. No extra command.

### Netlify

Add the same four variables under **Site settings → Environment variables**. That is the
only production setup step.

The live site calls `/api/content` on each visit. That hits a Netlify function which
reads Notion with the server-side token. Publish a post in Notion, refresh the site, and
it appears. No webhook. No rebuild. No JSON commit.

The committed files in `src/content/` are only a fallback if Notion is down or a post is
still `Draft`.

---

## 7. Migrating the existing content

Four posts exist today. Create them in `Site Content` with these values.

| `Name` | `Slug` | `Type` | `Image URL` | `Category` | `Date` | `Order` |
| --- | --- | --- | --- | --- | --- | --- |
| PatBot | `patbot` | Project | `/PatBot-Background.png` | Technology and Research | 2025 | 1 |
| Fama | `fama` | Project | `/fama.png` | Technology and Research | 2025 | 2 |
| Alexis | `alexis` | Project | `/alexis.png` | Technology and Research | 2025 | 3 |
| Emotional Imbalances in Everyday Life | `emotional-imbalances-in-everyday-life` | Research | | | 2025 | 1 |

Set `Fama` to `Image Position = bottom` to match the current crop. Give `Fama` and `Alexis`
`CTA Label = Check it out` with their respective `https://fama.patronuslabs.org` and
`https://alexis.patronuslabs.org` links.

`Emotional Imbalances in Everyday Life` currently holds the announcement bar: `Show on Home`
checked, `Home Slot = Announcement Bar`, `Home Order = 1`.

Copy each `Summary`, `Description`, and body from `src/content/content.json`, which holds the
exact text the site is serving today. Set `Status = Published` when a post is ready. Anything
left as `Draft` is invisible to the site.

Until a post is `Published`, the site keeps serving the fallback copy in `src/content/`.
Once you publish, that Notion page becomes the live version on the next refresh.
