"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PatBotDashboard from "./pat-bot/dashboard"
import AqualAiDashboard from "./aqual-ai/dashboard"
import { NavLink } from "react-router-dom"
import AuthGateway from "@/components/AuthGateway"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("pat-bot")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <AuthGateway onAuthenticated={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <nav className="fixed top-0 left-0 right-0 h-16 border-b bg-background flex items-center justify-between px-10">
        <NavLink 
          to="/" 
          className="text-xl font-medium tracking-tight hover:opacity-80 transition-opacity"
        >
          Patronus Labs
        </NavLink>
        
        <div className="flex items-center space-x-8">
          <NavLink 
            to="/projects" 
            className={({ isActive }) => `text-sm font-medium hover:text-orangery-500 transition-colors ${isActive ? 'text-orangery-500' : ''}`}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/research" 
            className={({ isActive }) => `text-sm font-medium hover:text-orangery-500 transition-colors ${isActive ? 'text-orangery-500' : ''}`}
          >
            Research
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `text-sm font-medium hover:text-orangery-500 transition-colors ${isActive ? 'text-orangery-500' : ''}`}
          >
            About
          </NavLink>
        </div>
      </nav>

      <div className="flex-1 p-6 pt-24">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
      </div>
      <main className="flex-1 p-6">
        <Tabs defaultValue="pat-bot" className="w-full" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="mb-6 grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="pat-bot">Pat-Bot</TabsTrigger>
            <TabsTrigger value="aqual-ai">Aqual-AI</TabsTrigger>
          </TabsList>

          <TabsContent value="pat-bot" className="mt-0">
            <PatBotDashboard />
          </TabsContent>

          <TabsContent value="aqual-ai" className="mt-0">
            <AqualAiDashboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
