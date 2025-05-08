import type React from "react"

interface ProjectCardProps {
  title: string
  image: string
  category?: string
  date?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, category = "Project", date = "2025" }) => {
  return (
    <div className="group relative w-full overflow-hidden transition-all duration-300 hover:shadow-sm">
      {/* Image Container */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>

      {/* Title and Metadata Container */}
      <div className="pt-4 pb-8">
        <h3 className="text-xl font-medium text-black font-serif mb-1">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 font-sans">
          <span className="mr-3">{category}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
