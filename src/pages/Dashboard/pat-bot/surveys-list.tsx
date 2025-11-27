"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

// Temporary survey data
const surveys = [
  {
    id: "SRV001",
    title: "User Experience",
    responses: 124,
    status: "active",
    prompt: "Tell us about your experience with our product",
    demographics: "Age 25-45, Tech users",
    requirements: "Must have used product for at least 1 month",
    totalRequired: 200,
    link: "https://example.com/survey1",
  },
  {
    id: "SRV002",
    title: "Product Feedback",
    responses: 89,
    status: "active",
    prompt: "What features would you like to see in our next update?",
    demographics: "All users",
    requirements: "No specific requirements",
    totalRequired: 150,
    link: "https://example.com/survey2",
  },
  {
    id: "SRV003",
    title: "Market Research",
    responses: 56,
    status: "inactive",
    prompt: "How do you compare our product with competitors?",
    demographics: "New users",
    requirements: "Must have used competitor products",
    totalRequired: 100,
    link: "https://example.com/survey3",
  },
  {
    id: "SRV004",
    title: "Customer Support",
    responses: 210,
    status: "active",
    prompt: "Rate your experience with our customer support team",
    demographics: "All users",
    requirements: "Must have contacted support in last 3 months",
    totalRequired: 200,
    link: "https://example.com/survey4",
  },
  {
    id: "SRV005",
    title: "Feature Adoption",
    responses: 45,
    status: "active",
    prompt: "How often do you use our new features?",
    demographics: "Regular users",
    requirements: "Must use app weekly",
    totalRequired: 150,
    link: "https://example.com/survey5",
  },
  {
    id: "SRV006",
    title: "Pricing Survey",
    responses: 78,
    status: "inactive",
    prompt: "What do you think about our pricing structure?",
    demographics: "Paying customers",
    requirements: "Must be a paying customer",
    totalRequired: 100,
    link: "https://example.com/survey6",
  },
]

export default function SurveysList({ onSurveyClick, onAddSurveyClick }) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Surveys</h2>
        <Button onClick={onAddSurveyClick}>
          <Plus className="mr-2 h-4 w-4" /> Add Survey
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {surveys.map((survey) => (
          <Card
            key={survey.id}
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onSurveyClick(survey)}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{survey.title}</CardTitle>
                <Badge variant={survey.status === "active" ? "default" : "secondary"}>{survey.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground">ID: {survey.id}</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm font-medium">
                {survey.responses} responses / {survey.totalRequired} required
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
