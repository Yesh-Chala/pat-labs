import type React from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import { cn } from "@/lib/utils"
import Header from "@/components/Header"
import ProjectTimeline from "@/components/ProjectTimeline"
import NotionBlocks from "./NotionBlocks"
import { type ContentType, routeForType, useContentBySlug, useContentStore } from "@/content"

const backLabel: Record<ContentType, string> = {
  Project: "Back to Projects",
  Research: "Back to Research",
  Blog: "Back to Blog",
}

const isExternal = (href: string) => /^https?:\/\//.test(href)

const ctaClass =
  "inline-flex items-center justify-center rounded-sm bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-sans"

/** Shared shell for /projects/:slug, /research/:slug and /blog/:slug. */
const ContentDetailPage: React.FC<{ type: ContentType }> = ({ type }) => {
  const { slug } = useParams<{ slug: string }>()
  const { ready } = useContentStore()
  const item = useContentBySlug(type, slug)
  const listPath = routeForType[type]

  if (!item) {
    if (!ready) {
      return (
        <div className="min-h-screen bg-[#f8f8f5]">
          <Header />
        </div>
      )
    }
    return <Navigate to={listPath} replace />
  }

  const hasTimeline = item.timeline.length > 0
  const hasCta = Boolean(item.ctaLabel && item.ctaLink)

  const backLink = (
    <Link
      to={listPath}
      className="group mb-8 inline-flex items-center text-sm text-gray-600 transition-colors hover:text-black"
    >
      <svg
        className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {backLabel[type]}
    </Link>
  )

  return (
    <div className="min-h-screen bg-[#f8f8f5]">
      <Header />

      {item.imageUrl ? (
        <>
          <div className="relative h-[50vh] w-full md:h-[70vh]">
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{ objectPosition: item.imagePosition }}
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-white/70" />
            <div className="absolute bottom-0 left-0 z-10 p-6 md:p-12">
              <h1 className="inline-block px-4 py-2 font-serif text-4xl font-light text-black md:text-6xl">
                {item.title}
              </h1>
            </div>
          </div>
          <div className="container mx-auto px-4 pt-8">{backLink}</div>
        </>
      ) : (
        <section className="container mx-auto px-4 pt-24 text-left md:pt-32">
          {backLink}
          <h1 className="font-serif text-4xl font-light tracking-tight text-black md:text-6xl">{item.title}</h1>
          {item.date && <p className="mt-4 text-sm text-stone-500 font-sans">{item.date}</p>}
        </section>
      )}

      {item.description && (
        <div className="container mx-auto px-4 py-12 text-left">
          <p className="mx-auto max-w-4xl font-sans text-xl text-gray-700 md:text-2xl">{item.description}</p>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        <div className={cn("grid grid-cols-1 gap-12", hasTimeline && "lg:grid-cols-12")}>
          {hasTimeline && (
            <div className="col-span-1 mb-6 lg:hidden">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between bg-gray-100 p-4 font-sans font-medium">
                  <span className="text-lg font-medium">Project Timeline</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <div className="border border-gray-100 p-4">
                  <ProjectTimeline timeline={item.timeline} />
                </div>
              </details>
            </div>
          )}

          <div className={hasTimeline ? "lg:col-span-7" : "max-w-3xl"}>
            <NotionBlocks blocks={item.body} />

            {hasCta && (
              <div className="pt-10">
                {isExternal(item.ctaLink) ? (
                  <a href={item.ctaLink} target="_blank" rel="noreferrer noopener" className={ctaClass}>
                    {item.ctaLabel}
                  </a>
                ) : (
                  <Link to={item.ctaLink} className={ctaClass}>
                    {item.ctaLabel}
                  </Link>
                )}
              </div>
            )}
          </div>

          {hasTimeline && (
            <div className="hidden lg:col-span-5 lg:block">
              <div className="sticky top-8">
                <h3 className="mb-6 font-serif text-xl font-medium">Project Timeline</h3>
                <ProjectTimeline timeline={item.timeline} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContentDetailPage
