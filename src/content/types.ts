export type ContentType = "Project" | "Research" | "Blog"

export type HomeSlot = "Announcement Bar" | "Featured Card" | ""

export type PageBlockKey =
  | "announcement"
  | "hero"
  | "agenda"
  | "methodology"
  | "collective"
  | "context"
  | "featured"
  | "projects_intro"
  | "research_intro"
  | "blog_intro"

export interface RichSpan {
  text: string
  bold?: boolean
  italic?: boolean
  code?: boolean
  strikethrough?: boolean
  underline?: boolean
  href?: string
}

export interface ListItem {
  spans: RichSpan[]
  children: ContentBlock[]
}

export type ContentBlock =
  | { type: "paragraph"; spans: RichSpan[] }
  | { type: "heading"; level: 1 | 2 | 3; spans: RichSpan[] }
  | { type: "bulleted_list"; items: ListItem[] }
  | { type: "numbered_list"; items: ListItem[] }
  | { type: "quote"; spans: RichSpan[] }
  | { type: "callout"; emoji: string; spans: RichSpan[] }
  | { type: "image"; url: string; caption: RichSpan[] }
  | { type: "code"; language: string; text: string }
  | { type: "divider" }

export interface TimelineItem {
  when: string
  title: string
  description: string
}

export interface ContentItem {
  id: string
  slug: string
  type: ContentType
  title: string
  summary: string
  description: string
  imageUrl: string
  imagePosition: "top" | "center" | "bottom"
  date: string
  category: string
  order: number
  ctaLabel: string
  ctaLink: string
  showOnHome: boolean
  homeSlot: HomeSlot
  homeOrder: number
  timeline: TimelineItem[]
  body: ContentBlock[]
}

export interface PageBlock {
  block: PageBlockKey
  heading: string
  subheading: string
  ctaLabel: string
  ctaLink: string
  visible: boolean
  order: number
  body: ContentBlock[]
}

/** Route prefix each content type is served under. */
export const routeForType: Record<ContentType, string> = {
  Project: "/projects",
  Research: "/research",
  Blog: "/blog",
}
