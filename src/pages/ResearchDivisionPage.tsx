import type React from "react"
import { useParams, Navigate, Link } from "react-router-dom"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"
import { researchDivisions } from "../research"

const ResearchDivisionPage: React.FC = () => {
  const { divisionId } = useParams<{ divisionId: string }>()

  if (!divisionId || !researchDivisions[divisionId]) {
    return <Navigate to="/research" />
  }

  const division = researchDivisions[divisionId]

  return (
    <div className="min-h-screen bg-[#f8f8f5]">
      <Header />
      {/* Header Section */}
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
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black mb-12 font-serif">{division.title}</h1>
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">
            {division.description}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {Object.entries(division.projects).map(([id, project]) => (
            <Link to={`/research/${divisionId}/${id}`} key={id} className="no-underline">
              <ProjectCard
                title={project.title}
                image="/placeholder.svg"
                category={division.title}
                date={project.timeline[0].date}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ResearchDivisionPage 