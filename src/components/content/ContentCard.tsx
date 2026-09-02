import type React from "react"
import { Link } from "react-router-dom"
import { type ContentItem, routeForType } from "@/content"

/**
 * One card in a list page or the homepage featured grid. Posts with an image get
 * the large image treatment; text-only posts fall back to a bordered card.
 */
const ContentCard: React.FC<{ item: ContentItem }> = ({ item }) => {
  const href = `${routeForType[item.type]}/${item.slug}`
  const meta = [item.category, item.date].filter(Boolean)

  if (!item.imageUrl) {
    return (
      <Link
        to={href}
        className="group flex h-full flex-col justify-between rounded-lg border border-stone-200 bg-white p-6 no-underline transition-shadow hover:shadow-md"
      >
        <div>
          <h3 className="mb-3 font-serif text-xl font-medium text-black">{item.title}</h3>
          <p className="text-stone-600 font-sans">{item.summary}</p>
        </div>
        {meta.length > 0 && (
          <div className="mt-6 flex items-center gap-3 text-sm text-stone-500 font-sans">
            {meta.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        )}
      </Link>
    )
  }

  return (
    <Link to={href} className="group relative block w-full overflow-hidden no-underline">
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          style={{ objectPosition: item.imagePosition }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="pb-8 pt-4">
        <h3 className="mb-1 font-serif text-xl font-medium text-black">{item.title}</h3>
        <div className="flex items-center gap-3 text-sm text-gray-600 font-sans">
          {meta.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default ContentCard
