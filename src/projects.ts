export interface TimelineItem {
    date: string
    title: string
    description: string
  }
  
  export interface Project {
    title: string
    image: string
    category?: string
    date?: string
    summary: string
    description: string
    content: string[]
    timeline: TimelineItem[]
  }
  
  export const projects: Record<string, Project> = {
    "PatBot": {
      title: "PatBot",
      image: "/PatBot-Background.png",
      category: "Technology and Research",
      date: "2025",
      summary: "An insight collection pipeline based on WhatsApp",
      description:
      "PatBot is a real-time data collection system built on top of WhatsApp, designed to reach participants where they already are. By leveraging India's most widely used communication platform, PatBot removes barriers to participation and enables scalable behavioural research and insights distribution.",
      content: [
        "We chose WhatsApp not just for convenience, but because it represents everyday digital life in India. It’s where conversations happen, trust exists, and people respond.",
    "PatBot lets us deliver surveys, questions, and prompts in a format that feels familiar and low-friction—creating higher response rates and more genuine engagement.",
    "Our goal with PatBot is not just to collect data but to build an ongoing loop of insight generation, distribution, and action—rooted in ethical practices and full consent.",
    "This project reflects our belief that the future of behavioural research lies in distribution: meeting people where they are, not forcing them to come to us."
  ],
      timeline: [
        {
          date: "January 2025",
          title: "Conception",
          description: "Comprehensive analysis of existing systems and processes.",
        },
        {
          date: "March 2025",
          title: "Version 1 built",
          description: "The first version of PatBot was built.",
        },
        {
          date: "April 2025",
          title: "Undergoing pilot testing",
          description: "The first pilot testing of PatBot was conducted, insights were collected and the team is pivoting directions.",
        },
      ],
    },

    // "sustainable-architecture": {
    //   title: "Sustainable Architecture",
    //   image: "/SCID-Background.png",
    //   category: "Design",
    //   date: "2023",
    //   summary: "Award-winning sustainable architecture project for urban spaces.",
    //   description:
    //     "This groundbreaking project reimagined urban architecture through a sustainability lens, creating spaces that harmonize with the environment while meeting the needs of modern urban dwellers.",
    //   content: [
    //     "Our design philosophy centered on minimizing environmental impact while maximizing functionality and aesthetic appeal. We incorporated renewable materials, energy-efficient systems, and biophilic design principles.",
    //     "The project included extensive research into local ecosystems and climate patterns to ensure the building would work with, rather than against, natural processes.",
    //     "Community engagement was a key component, with multiple workshops and feedback sessions informing the design process and ensuring the final product would truly serve its intended users.",
    //     "The completed project has received multiple awards for innovation in sustainable design and has become a blueprint for future urban development projects.",
    //   ],
    //   timeline: [
    //     {
    //       date: "March 2021",
    //       title: "Concept Development",
    //       description: "Initial design concepts and sustainability framework.",
    //     },
    //     {
    //       date: "July 2021",
    //       title: "Environmental Assessment",
    //       description: "Detailed analysis of site conditions and environmental factors.",
    //     },
    //     {
    //       date: "October 2021",
    //       title: "Community Engagement",
    //       description: "Workshops and feedback sessions with local stakeholders.",
    //     },
    //     {
    //       date: "January 2022",
    //       title: "Design Finalization",
    //       description: "Completion of detailed architectural plans.",
    //     },
    //     {
    //       date: "April 2022",
    //       title: "Construction Begins",
    //       description: "Groundbreaking and initial construction phase.",
    //     },
    //     {
    //       date: "November 2022",
    //       title: "Systems Integration",
    //       description: "Installation of sustainable energy and water systems.",
    //     },
    //     { date: "May 2023", title: "Project Completion", description: "Final touches and official opening." },
    //   ],
    // },

    // "ai-implementation": {
    //   title: "AI Implementation",
    //   image: "/images/ai-implementation.jpg",
    //   category: "Technology",
    //   date: "2022",
    //   summary: "Enterprise-scale AI implementation for predictive analytics.",
    //   description:
    //     "This cutting-edge project involved implementing advanced artificial intelligence solutions to transform data processing and predictive capabilities for a global enterprise.",
    //   content: [
    //     "Our team developed custom machine learning models tailored to the client's specific industry challenges and data structures, enabling unprecedented insights and predictive capabilities.",
    //     "The implementation included both supervised and unsupervised learning approaches, with a focus on creating explainable AI that stakeholders could trust and understand.",
    //     "Data infrastructure was completely redesigned to support real-time processing and analysis, with robust security measures to protect sensitive information.",
    //     "The project has resulted in a 65% improvement in prediction accuracy and has enabled the client to identify opportunities and challenges months before they would have been apparent through traditional analysis.",
    //   ],
    //   timeline: [
    //     {
    //       date: "February 2022",
    //       title: "Data Assessment",
    //       description: "Evaluation of existing data quality and infrastructure.",
    //     },
    //     { date: "April 2022", title: "Model Development", description: "Creation of initial AI models and algorithms." },
    //     {
    //       date: "July 2022",
    //       title: "Infrastructure Upgrade",
    //       description: "Implementation of necessary computing resources.",
    //     },
    //     {
    //       date: "September 2022",
    //       title: "Pilot Testing",
    //       description: "Controlled deployment and testing of AI systems.",
    //     },
    //     { date: "November 2022", title: "Refinement", description: "Model optimization based on pilot results." },
    //     {
    //       date: "January 2023",
    //       title: "Full Deployment",
    //       description: "Enterprise-wide implementation of AI solutions.",
    //     },
    //     {
    //       date: "March 2023",
    //       title: "Ongoing Support",
    //       description: "Transition to maintenance and continuous improvement phase.",
    //     },
    //   ],
    // },
    // "brand-evolution": {
    //   title: "Brand Evolution",
    //   image: "/images/brand-evolution.jpg",
    //   category: "Branding",
    //   date: "2022",
    //   summary: "Complete brand evolution for a global retail chain.",
    //   description:
    //     "This comprehensive brand evolution project transformed a legacy retail brand into a modern, customer-centric powerhouse ready to compete in today's market.",
    //   content: [
    //     "Our approach began with extensive market research and customer insights, identifying both the strengths to preserve and the areas requiring transformation.",
    //     "The evolution encompassed all brand touchpoints, from visual identity and store design to digital presence and customer experience journeys.",
    //     "We worked closely with leadership to ensure the evolved brand remained authentic to core values while positioning the company for future growth and relevance.",
    //     "The result has been a 28% increase in brand perception metrics and a significant uptick in both customer acquisition and retention, demonstrating the power of thoughtful brand evolution.",
    //   ],
    //   timeline: [
    //     {
    //       date: "September 2021",
    //       title: "Brand Audit",
    //       description: "Comprehensive assessment of existing brand assets and perception.",
    //     },
    //     {
    //       date: "November 2021",
    //       title: "Market Research",
    //       description: "In-depth analysis of market trends and customer expectations.",
    //     },
    //     {
    //       date: "January 2022",
    //       title: "Strategy Development",
    //       description: "Creation of brand evolution roadmap and key initiatives.",
    //     },
    //     {
    //       date: "March 2022",
    //       title: "Identity Redesign",
    //       description: "Development of new visual identity and brand guidelines.",
    //     },
    //     {
    //       date: "June 2022",
    //       title: "Internal Launch",
    //       description: "Employee engagement and training on new brand positioning.",
    //     },
    //     {
    //       date: "August 2022",
    //       title: "Phased Rollout",
    //       description: "Systematic implementation across all customer touchpoints.",
    //     },
    //     {
    //       date: "December 2022",
    //       title: "Campaign Launch",
    //       description: "Major marketing campaign introducing the evolved brand.",
    //     },
    //   ],
    // },
  }
  