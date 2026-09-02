import type React from "react"
import ContentListPage from "@/components/content/ContentListPage"

const ProjectsPage: React.FC = () => (
  <ContentListPage type="Project" block="projects_intro" fallbackHeading="Projects" />
)

export default ProjectsPage
