"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AddSurvey({ onBack }) {
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    prompt: "",
    content: "",
    requirements: "",
    demographics: "",
    totalRequired: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Survey data:", formData)
    onBack() // Go back to surveys list
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-2xl font-bold tracking-tight">Add New Survey</h2>
      </div>

      <Tabs defaultValue="edit" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="edit" className="mt-6">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Survey Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title (under 20 characters)</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    maxLength={20}
                    required
                  />
                  <p className="text-xs text-muted-foreground">{formData.title.length}/20 characters</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="link">Survey Link</Label>
                  <Input id="link" name="link" value={formData.link} onChange={handleChange} type="url" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="prompt">Prompt</Label>
                  <Textarea id="prompt" name="prompt" value={formData.prompt} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea id="content" name="content" value={formData.content} onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="demographics">Demographics</Label>
                  <Textarea
                    id="demographics"
                    name="demographics"
                    value={formData.demographics}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="totalRequired">Total People Required</Label>
                  <Input
                    id="totalRequired"
                    name="totalRequired"
                    value={formData.totalRequired}
                    onChange={handleChange}
                    type="number"
                    min="1"
                    required
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={onBack}>
                  Cancel
                </Button>
                <Button type="submit">Launch Survey</Button>
              </CardFooter>
            </Card>
          </form>
        </TabsContent>

        <TabsContent value="preview" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{formData.title || "Survey Title"}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Prompt</h3>
                <p>{formData.prompt || "Survey prompt will appear here"}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Demographics</h3>
                  <p>{formData.demographics || "Target demographics"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Requirements</h3>
                  <p>{formData.requirements || "Participation requirements"}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Required</h3>
                <p>{formData.totalRequired || "0"} participants</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Link</h3>
                <p>{formData.link || "https://example.com/survey"}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
