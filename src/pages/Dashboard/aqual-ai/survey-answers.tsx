"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Temporary answers data
const generateAnswers = (surveyId) => {
  return Array.from({ length: 10 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - Math.floor(Math.random() * 30))

    return {
      id: `ANS${String(i + 1).padStart(3, "0")}`,
      surveyId,
      submittedAt: date.toISOString(),
      length: Math.floor(Math.random() * 500) + 100,
      rating: Math.floor(Math.random() * 5) + 1,
      transcription: `This is a sample transcription for answer ${i + 1}. It contains the conversation between the user and the AI assistant. The conversation covers various topics related to the survey.`,
      metrics: {
        relevance: Math.floor(Math.random() * 100),
        attitude: Math.floor(Math.random() * 100),
        tone: Math.floor(Math.random() * 100),
        clarity: Math.floor(Math.random() * 100),
      },
      summary:
        "This is a summary of the conversation highlighting the key points discussed and the overall sentiment of the user.",
    }
  })
}

export default function SurveyAnswers({ survey, onBack, onAnswerClick }) {
  const answers = generateAnswers(survey.id)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold tracking-tight">Survey Answers</h2>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{survey.title}</CardTitle>
          <Badge variant={survey.status === "active" ? "default" : "secondary"}>{survey.status}</Badge>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-6">ID: {survey.id}</p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Length</TableHead>
                <TableHead>Rating</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {answers.map((answer) => (
                <TableRow
                  key={answer.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => onAnswerClick(answer)}
                >
                  <TableCell className="font-medium">{answer.id}</TableCell>
                  <TableCell>{new Date(answer.submittedAt).toLocaleDateString()}</TableCell>
                  <TableCell>{answer.length} chars</TableCell>
                  <TableCell>{answer.rating}/5</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
