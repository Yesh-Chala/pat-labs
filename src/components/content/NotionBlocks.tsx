import type React from "react"
import { cn } from "@/lib/utils"
import type { ContentBlock, ListItem } from "@/content"
import RichText from "./RichText"

const headingClass = {
  1: "text-3xl md:text-4xl font-serif font-light text-black mt-12 mb-5",
  2: "text-2xl md:text-3xl font-serif font-light text-black mt-10 mb-4",
  3: "text-xl md:text-2xl font-serif font-light text-black mt-8 mb-3",
} as const

const ListItems: React.FC<{ items: ListItem[] }> = ({ items }) => (
  <>
    {items.map((item, index) => (
      <li key={index} className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">
        <RichText spans={item.spans} />
        {item.children.length > 0 && (
          <div className="mt-2 ml-2">
            <NotionBlocks blocks={item.children} />
          </div>
        )}
      </li>
    ))}
  </>
)

/** Renders a Notion page body in the site's existing typography. */
const NotionBlocks: React.FC<{ blocks?: ContentBlock[]; className?: string }> = ({ blocks, className }) => {
  if (!blocks?.length) return null

  return (
    <div className={cn("space-y-6", className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={index} className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">
                <RichText spans={block.spans} />
              </p>
            )

          case "heading": {
            const Tag = `h${block.level + 1}` as "h2" | "h3" | "h4"
            return (
              <Tag key={index} className={headingClass[block.level]}>
                <RichText spans={block.spans} />
              </Tag>
            )
          }

          case "bulleted_list":
            return (
              <ul key={index} className="list-disc pl-6 space-y-3 marker:text-stone-400">
                <ListItems items={block.items} />
              </ul>
            )

          case "numbered_list":
            return (
              <ol key={index} className="list-decimal pl-6 space-y-3 marker:text-stone-400">
                <ListItems items={block.items} />
              </ol>
            )

          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-stone-300 pl-6 py-2 text-xl text-stone-600 italic font-sans"
              >
                <RichText spans={block.spans} />
              </blockquote>
            )

          case "callout":
            return (
              <div key={index} className="flex gap-4 rounded-2xl bg-stone-100 p-6">
                {block.emoji && <span className="text-2xl leading-none">{block.emoji}</span>}
                <p className="text-lg text-gray-700 leading-relaxed font-sans">
                  <RichText spans={block.spans} />
                </p>
              </div>
            )

          case "image":
            return (
              <figure key={index} className="my-10">
                <img src={block.url} alt="" loading="lazy" className="w-full rounded-lg object-cover" />
                {block.caption.length > 0 && (
                  <figcaption className="mt-3 text-sm text-stone-500 font-sans">
                    <RichText spans={block.caption} />
                  </figcaption>
                )}
              </figure>
            )

          case "code":
            return (
              <pre
                key={index}
                className="overflow-x-auto rounded-lg bg-stone-900 p-6 text-sm text-stone-100"
              >
                <code>{block.text}</code>
              </pre>
            )

          case "divider":
            return <hr key={index} className="my-12 border-stone-200" />

          default:
            return null
        }
      })}
    </div>
  )
}

export default NotionBlocks
