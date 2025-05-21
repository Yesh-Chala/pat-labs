"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SurveyAnswers from "./survey-answers"
import AnswerDetails from "./answer-details"

// Temporary survey data
const surveys = [
  {
    id: "AQ001",
    title: "Customer Feedback",
    responses: 87,
    status: "active",
  },
  {
    id: "AQ002",
    title: "Product Evaluation",
    responses: 64,
    status: "active",
  },
  {
    id: "AQ003",
    title: "Service Quality",
    responses: 42,
    status: "inactive",
  },
  {
    id: "AQ004",
    title: "User Interface",
    responses: 103,
    status: "active",
  },
  {
    id: "AQ005",
    title: "Feature Requests",
    responses: 29,
    status: "active",
  },
]

export default function AqualAiDashboard() {
  const [view, setView] = useState("main") // main, surveyAnswers, answerDetails
  const [selectedSurvey, setSelectedSurvey] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const handleSurveyClick = (survey) => {
    setSelectedSurvey(survey)
    setView("surveyAnswers")
  }

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer)
    setView("answerDetails")
  }

  const handleBackToSurveys = () => {
    setView("main")
  }

  const handleBackToAnswers = () => {
    setView("surveyAnswers")
  }

  if (view === "answerDetails" && selectedAnswer) {
    return <AnswerDetails answer={selectedAnswer} onBack={handleBackToAnswers} />
  }

  if (view === "surveyAnswers" && selectedSurvey) {
    return <SurveyAnswers survey={selectedSurvey} onBack={handleBackToSurveys} onAnswerClick={handleAnswerClick} />
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Aqual-AI Surveys</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {surveys.map((survey) => (
          <Card
            key={survey.id}
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => handleSurveyClick(survey)}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{survey.title}</CardTitle>
                <Badge variant={survey.status === "active" ? "default" : "secondary"}>{survey.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">ID: {survey.id}</p>
              <p className="font-medium mt-2">{survey.responses} responses</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
