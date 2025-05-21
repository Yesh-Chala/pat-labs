"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function SurveyDetails({ survey, onBack }) {
  const completionPercentage = Math.round((survey.responses / survey.totalRequired) * 100)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold tracking-tight">Survey Details</h2>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{survey.title}</CardTitle>
          <Badge variant={survey.status === "active" ? "default" : "secondary"}>{survey.status}</Badge>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Survey ID</h3>
              <p>{survey.id}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Link</h3>
              <a
                href={survey.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:underline"
              >
                View Survey <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Prompt</h3>
            <p className="text-sm">{survey.prompt}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Demographics</h3>
              <p className="text-sm">{survey.demographics}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Requirements</h3>
              <p className="text-sm">{survey.requirements}</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <h3 className="text-sm font-medium text-muted-foreground">Completion</h3>
              <span className="text-sm font-medium">{completionPercentage}%</span>
            </div>
            <Progress value={completionPercentage} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {survey.responses} responses out of {survey.totalRequired} required
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
