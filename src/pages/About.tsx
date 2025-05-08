import type React from "react"
import Header from "../components/Header"

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f5]">
      <Header />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[500px] lg:h-[600px] w-full">
            <img
              src="/background.png"
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black font-serif">
              About Our Research
            </h1>
            <div className="space-y-4 text-gray-700 font-sans">
              <p className="text-lg leading-relaxed">
              Patronus Labs is built out of a love for research and the belief that it should be used to make lives better. We’re a team of people obsessed with solving problems—across industries, domains, and sectors—but with one thing in common: people.
              </p>
              <p className="text-lg leading-relaxed">
              We apply behavioural science and people-centered thinking to help companies make better decisions. It started when I, Yesh, tried running a study in India and realized just how broken and inaccessible the research infrastructure really was              </p>
              <p className="text-lg leading-relaxed">
              That kicked off a mission—to build a data OS for India and South Asia. A system that takes you from real-time data to insight to action in days, not weeks. And one that actually includes the voices that usually get left out.We believe in research that is both rigorous and accessible, producing insights that can drive meaningful change in how organizations understand and serve their communities.
              </p>
              <p className="text-lg leading-relaxed">
              Patronus is also a think tank. We work at the intersection of digital cultures and social science, trying to make sure this fast-moving digital world is one that understands people—and doesn’t steamroll them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage 