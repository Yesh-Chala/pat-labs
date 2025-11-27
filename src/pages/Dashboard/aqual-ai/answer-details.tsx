"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function AnswerDetails({ answer, onBack }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold tracking-tight">Answer Details</h2>
      </div>

      <div className="grid gap-6">
        {/* Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Relevance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{answer.metrics.relevance}%</div>
              <Progress value={answer.metrics.relevance} className="h-2 mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Attitude</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{answer.metrics.attitude}%</div>
              <Progress value={answer.metrics.attitude} className="h-2 mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Tone</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{answer.metrics.tone}%</div>
              <Progress value={answer.metrics.tone} className="h-2 mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Clarity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{answer.metrics.clarity}%</div>
              <Progress value={answer.metrics.clarity} className="h-2 mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{answer.summary}</p>
          </CardContent>
        </Card>

        {/* Transcription */}
        <Card>
          <CardHeader>
            <CardTitle>Transcription</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg">
              <p className="whitespace-pre-line">{answer.transcription}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
