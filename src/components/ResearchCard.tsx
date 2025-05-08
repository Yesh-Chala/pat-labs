import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"

interface ResearchCardProps {
  title: string
  description: string
  id: string
}

export function ResearchCard({ title, description, id }: ResearchCardProps) {
  return (
    <Link to={`/research/${id}`} className="no-underline">
      <Card className="border-0 shadow-sm h-full hover:shadow-md transition-all duration-300">
        <CardContent className="p-6">
          <h3 className="text-xl font-medium text-black font-serif mb-3">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
} 