import type React from "react"
import { useParams, Navigate, Link } from "react-router-dom"
import Header from "../components/Header"
import ProjectTimeline from "../components/ProjectTimeline"
import { researchDivisions } from "../research"

const ResearchProjectPage: React.FC = () => {
  const { divisionId, projectId } = useParams<{ divisionId: string; projectId: string }>()

  if (!divisionId || !projectId || !researchDivisions[divisionId]?.projects[projectId]) {
    return <Navigate to="/research" />
  }

  const project = researchDivisions[divisionId].projects[projectId]
  const division = researchDivisions[divisionId]

  return (
    <div className="min-h-screen bg-[#f8f8f5]">
      <Header />
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[70vh] w-full">
        <img
          src="/placeholder.svg"
          alt={project.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute bottom-0 left-0 p-6 md:p-12 z-10">
          <div className="flex flex-col">
            <Link 
              to={`/research/${divisionId}`}
              className="inline-flex items-center text-sm text-gray-600 hover:text-black mb-4 group"
            >
              <svg
                className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to {division.title}
            </Link>
            <h1 className="text-4xl md:text-6xl font-light text-black font-serif">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className="container mx-auto px-4 py-12 text-left">
        <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-sans">{project.description}</p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Mobile Timeline Toggle */}
          <div className="lg:hidden col-span-1 mb-6">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-gray-100 p-4 font-sans">
                <span className="text-lg font-medium">Research Timeline</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 border border-gray-100">
                <ProjectTimeline timeline={project.timeline} />
              </div>
            </details>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              {project.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed font-sans">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Timeline Column - Desktop */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-8">
              <h3 className="text-xl font-medium mb-6 font-serif">Research Timeline</h3>
              <ProjectTimeline timeline={project.timeline} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchProjectPage 