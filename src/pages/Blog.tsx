import type React from "react"
import ContentListPage from "@/components/content/ContentListPage"

const BlogPage: React.FC = () => (
  <ContentListPage
    type="Blog"
    block="blog_intro"
    fallbackHeading="Blog"
    emptyMessage="No posts yet. The first one is on its way."
  />
)

export default BlogPage
