import type React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"

const EmotionalImbalancesPage: React.FC = () => {
  const paragraphs = [
    "We all have digital habits — the many ways we interact with our devices, whether that's a phone, a smartwatch, a computer, or a TV. But beyond the devices themselves, these habits shape how we connect with the people and world around us.",
    "This got us curious. Where do our ideas of \"good\" and \"bad\" digital habits actually come from? And why do so many of us want to use our devices less, yet find ourselves unable to?",
    "We wanted to understand the awareness behind that pull — what drives someone to want to reduce their digital use, where that motivation originates, and what it really means for everyday emotional life.",
    "So we ran a study. And now, we have data.",
    "We're excited to share what we found about the emotional imbalances woven into our everyday digital lives — and what it might mean for how we all move forward.",
    "More details coming soon.",
  ]

  return (
    <div className="min-h-screen bg-[#f8f8f5]">
      <Header />
      <section className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-16 text-left">
        <Link
          to="/research"
          className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-8 group"
        >
          <svg
            className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Research
        </Link>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-black mb-12 font-serif">
          Emotional Imbalances in Everyday Life
        </h1>
        <div className="max-w-3xl space-y-6">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}

export default EmotionalImbalancesPage
