import type React from "react"
import Header from "@/components/Header"
import NotionBlocks from "./NotionBlocks"
import ContentCard from "./ContentCard"
import { type ContentType, type PageBlockKey, useContentByType, usePageBlock } from "@/content"

interface ContentListPageProps {
  type: ContentType
  block: PageBlockKey
  /** Used when the Notion block is missing so the page always has a heading. */
  fallbackHeading: string
  emptyMessage?: string
}

/** Shared shell for /projects, /research and /blog. */
const ContentListPage: React.FC<ContentListPageProps> = ({
  type,
  block,
  fallbackHeading,
  emptyMessage = "Nothing published here yet. Check back soon.",
}) => {
  const intro = usePageBlock(block)
  const items = useContentByType(type)

  return (
    <div className="min-h-screen bg-[#f8f8f5]">
      <Header />

      <section className="container mx-auto px-4 pt-24 pb-12 text-left md:pt-32 md:pb-16">
        <h1 className="mb-12 font-serif text-5xl font-light tracking-tight text-black md:text-7xl">
          {intro?.heading || fallbackHeading}
        </h1>
        {intro && (
          <div className="max-w-3xl">
            <NotionBlocks blocks={intro.body} />
          </div>
        )}
      </section>

      <section className="container mx-auto px-4 py-12">
        {items.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {items.map((item) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-lg text-stone-500 font-sans">{emptyMessage}</p>
        )}
      </section>
    </div>
  )
}

export default ContentListPage
