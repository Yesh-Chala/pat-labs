import type React from "react"
import { Link } from "react-router-dom"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../projects"
import Header from "../components/Header"

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f5]">
      {/* Header Section */}
      <Header />
      <section className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-16 text-left">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-black mb-12 font-serif">Projects</h1>
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-sans">
            We design insight-driven systems that bring behavioural science closer to everyday decisions.
            From real-time data collection to strategic foresight, our work shapes products, policies, and futures.
            Each project reflects our commitment to ethics, inclusion, and context-first thinking.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {Object.entries(projects).map(([id, project]) => (
            <Link to={`/projects/${id}`} key={id} className="no-underline">
              <ProjectCard
                title={project.title}
                image={project.image}
                category={project.category}
                date={project.date}
                imagePosition={project.imagePosition}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
