import type React from "react"

interface TimelineItem {
  date: string
  title: string
  description: string
}

interface ProjectTimelineProps {
  timeline: TimelineItem[]
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ timeline }) => {
  return (
    <div className="space-y-8">
      {timeline.map((item, index) => (
        <div key={index} className="relative pl-8 border-l border-gray-200">
          <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-black" />
          <div className="mb-1 text-sm text-gray-500 font-sans">{item.date}</div>
          <h4 className="text-lg font-medium font-serif">{item.title}</h4>
          <p className="text-gray-600 font-sans">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProjectTimeline
