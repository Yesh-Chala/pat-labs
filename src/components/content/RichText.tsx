import type React from "react"
import { Link } from "react-router-dom"
import type { RichSpan } from "@/content"

const isInternal = (href: string) => href.startsWith("/") && !href.startsWith("//")

/** Renders Notion inline formatting: bold, italic, code, links, strikethrough. */
const RichText: React.FC<{ spans?: RichSpan[] }> = ({ spans }) => {
  if (!spans?.length) return null

  return (
    <>
      {spans.map((span, index) => {
        let node: React.ReactNode = span.text

        if (span.code) {
          node = <code className="rounded bg-stone-200/70 px-1.5 py-0.5 font-mono text-[0.9em]">{node}</code>
        }
        if (span.bold) node = <strong className="font-medium">{node}</strong>
        if (span.italic) node = <em>{node}</em>
        if (span.underline) node = <u>{node}</u>
        if (span.strikethrough) node = <s>{node}</s>

        if (span.href) {
          const className = "underline decoration-stone-400 underline-offset-4 hover:decoration-stone-900"
          node = isInternal(span.href) ? (
            <Link to={span.href} className={className}>
              {node}
            </Link>
          ) : (
            <a href={span.href} target="_blank" rel="noreferrer noopener" className={className}>
              {node}
            </a>
          )
        }

        return <span key={index}>{node}</span>
      })}
    </>
  )
}

export default RichText
