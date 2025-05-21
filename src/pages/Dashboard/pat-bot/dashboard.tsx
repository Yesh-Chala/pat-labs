"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ClipboardList } from "lucide-react"
import UsersList from "./users-list"
import SurveysList from "./surveys-list"
import SurveyDetails from "./survey-details"
import AddSurvey from "./add-survey"

// Temporary data
const userData = {
  totalUsers: 1245,
  totalSurveys: 32,
}

export default function PatBotDashboard() {
  const [view, setView] = useState("main") // main, surveyDetails, addSurvey
  const [selectedSurvey, setSelectedSurvey] = useState(null)

  const handleSurveyClick = (survey) => {
    setSelectedSurvey(survey)
    setView("surveyDetails")
  }

  const handleBackClick = () => {
    setView("main")
  }

  const handleAddSurveyClick = () => {
    setView("addSurvey")
  }

  if (view === "surveyDetails" && selectedSurvey) {
    return <SurveyDetails survey={selectedSurvey} onBack={handleBackClick} />
  }

  if (view === "addSurvey") {
    return <AddSurvey onBack={handleBackClick} />
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.totalUsers}</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Surveys</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.totalSurveys}</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="surveys">Surveys</TabsTrigger>
        </TabsList>
        <TabsContent value="users" className="mt-6">
          <UsersList />
        </TabsContent>
        <TabsContent value="surveys" className="mt-6">
          <SurveysList onSurveyClick={handleSurveyClick} onAddSurveyClick={handleAddSurveyClick} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
