import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"

interface ResearchCardProps {
  title: string
  description: string
  id: string
  to?: string
}

export function ResearchCard({ title, description, id, to }: ResearchCardProps) {
  const cardContent = (
    <Card
      className={
        to
          ? "border-0 shadow-sm h-full hover:shadow-md transition-shadow cursor-pointer"
          : "border-0 shadow-sm h-full opacity-75 cursor-not-allowed"
      }
    >
      <CardContent className="p-6">
        <h3 className="text-xl font-medium text-black font-serif mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )

  if (to) {
    return (
      <Link to={to} className="block h-full no-underline">
        {cardContent}
      </Link>
    )
  }

  return cardContent
} 