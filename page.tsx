"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Circle, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 px-6",
          scrolled ? "bg-[#FAF9F6] py-4 shadow-sm" : "py-6",
        )}
      >
        <div
          className={cn(
            "max-w-7xl mx-auto transition-all duration-300",
            scrolled ? "flex justify-center" : "flex justify-between",
          )}
        >
          <Link
            href="/"
            className={cn(
              "text-xl font-medium transition-opacity duration-300",
              scrolled && "opacity-0 pointer-events-none",
            )}
          >
            Nasnaga
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center text-sm">
            <Link href="#work" className="hover:text-primary transition-colors">
              Work
            </Link>
            <Link href="#services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Button variant="outline" className="rounded-full">
              Contact
            </Button>
          </nav>
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 pt-16">
                <Link href="#work" className="text-lg hover:text-primary transition-colors">
                  Work
                </Link>
                <Link href="#services" className="text-lg hover:text-primary transition-colors">
                  Services
                </Link>
                <Link href="#about" className="text-lg hover:text-primary transition-colors">
                  About
                </Link>
                <Button variant="outline" className="rounded-full w-full">
                  Contact
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-48 pb-24">
        <div className="max-w-4xl">
          <h1 className="space-y-2 text-2xl sm:text-3xl font-normal leading-tight md:text-4xl">
            <div>
              Oh, <span className="rounded-full border px-3 py-0.5">hi</span>
            </div>
            <div>
              We <span className="rounded-full border px-3 py-0.5">research</span> build{" "}
              <span className="rounded-full border px-3 py-0.5">strategy</span> and
            </div>
            <div>
              create people oriented <span className="rounded-full border px-3 py-0.5">design</span> for small
            </div>
            <div>and medium-sized businesses</div>
          </h1>
          <Button className="mt-8 rounded-full" size="lg">
            Contact us
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-2xl border p-8">
          <div className="grid grid-cols-3 divide-x">
            <div className="px-8 text-center">
              <div className="text-5xl font-medium">4</div>
              <div className="mt-2 text-sm text-muted-foreground">Years</div>
            </div>
            <div className="px-8 text-center">
              <div className="text-5xl font-medium">18</div>
              <div className="mt-2 text-sm text-muted-foreground">Clients</div>
            </div>
            <div className="px-8 text-center">
              <div className="text-5xl font-medium">34</div>
              <div className="mt-2 text-sm text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="mb-8 text-3xl font-medium">Our Process</h2>
        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <Circle className="h-4 w-4 text-primary fill-background" />
                {index !== timeline.length - 1 && <div className="h-full w-px bg-border" />}
              </div>
              <div className="space-y-1 pb-6">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Projects */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-medium">Current Projects</h2>
          <Button variant="ghost" className="gap-2">
            View all projects <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="group border rounded-lg p-6 hover:bg-muted/50 transition-colors">
              <div className="text-sm text-muted-foreground mb-2">{project.category}</div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-xl font-medium">Let's work together</h3>
              <p className="mt-2 text-muted-foreground">Get in touch to discuss your next project</p>
            </div>
            <Button size="lg" className="rounded-full">
              Start a project
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

const timeline = [
  {
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and target audience through in-depth research and analysis.",
  },
  {
    title: "Strategy",
    description:
      "Based on our findings, we develop a comprehensive strategy that aligns with your objectives and market position.",
  },
  {
    title: "Design",
    description:
      "Our design process focuses on creating intuitive, user-centered experiences that reflect your brand identity.",
  },
  {
    title: "Development",
    description: "We bring designs to life using modern technologies and best practices for optimal performance.",
  },
]

const projects = [
  {
    title: "Brand Refresh",
    category: "Branding",
  },
  {
    title: "E-commerce Platform",
    category: "Web Development",
  },
  {
    title: "Mobile App Design",
    category: "UI/UX",
  },
  {
    title: "Marketing Campaign",
    category: "Digital Marketing",
  },
]

