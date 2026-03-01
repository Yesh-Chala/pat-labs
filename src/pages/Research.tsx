import type React from "react"
import Header from "../components/Header"
import { ResearchCard } from "../components/ResearchCard"

const ResearchPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f5]">
      <Header />
      {/* Header Section */}
      <section className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-16 text-left">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black mb-12 font-serif">Research</h1>
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">
            Our research explores the intersection of technology, culture, and human behavior.
            Through rigorous analysis and innovative methodologies, we uncover insights that shape the future of digital experiences.
          </p>
        </div>
      </section>

      {/* Research Projects */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <ResearchCard
            id="emotional-imbalances-in-everyday-life"
            title="Emotional Imbalances in Everyday Life"
            description="What we found about the emotional imbalances woven into our everyday digital lives — and what it might mean for how we all move forward."
            to="/research/emotional-imbalances-in-everyday-life"
          />
        </div>
      </section>
    </div>
  )
}

export default ResearchPage 