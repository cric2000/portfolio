export const portfolioConfig = {
  personal: {
    name: "Anmol Lamba",
    role: "Full-Stack Software Engineer",
    location: "Chandigarh, India",
    email: "anmollamba30@gmail.com",

  },
  social: {
    linkedin: "LINKEDIN_URL",
    github: "GITHUB_URL",
  },
  metrics: [
    { value: "1M+", label: "Downloads on products I've contributed to" },
    { value: "5K+", label: "Daily active users supported" },
    { value: "10×", label: "Performance improvement delivered" },
    { value: "3+ Years", label: "Building production software" },
  ],
  projects: {
    spendAlarm: {
      id: "spend-alarm",
      title: "Spend Alarm",
      tag: "B2B SaaS · Full-Stack",
      positioning: "Advertising monitoring that catches expensive problems before they become expensive mistakes.",
      description: "Spend Alarm is an intelligent advertising monitoring platform designed to continuously monitor business-critical advertising metrics and surface meaningful anomalies before they create larger problems.",
      url: "https://spendalarm.com",
      image: "/hero.png",
      dimensions: [
        {
          name: "Frontend",
          description: "Data-heavy SaaS interfaces, dashboard experiences, responsive product UI, complex application states and user-facing monitoring workflows."
        },
        {
          name: "Backend",
          description: "Monitoring engine, scheduled jobs, advertising data processing, business-rule evaluation and anomaly detection logic."
        },
        {
          name: "Full Product",
          description: "End-to-end product workflows connecting advertising data, monitoring systems, anomaly detection, alerts and the product interface."
        }
      ],
      capabilities: [
        "Automated advertising monitoring",
        "Spend anomaly detection",
        "Zero-conversion detection",
        "Spend-halted detection",
        "Conversion monitoring",
        "Efficiency monitoring",
        "Scheduled background monitoring",
        "Actionable alerts",
        "Analytics dashboard"
      ]
    },
    intellident: {
      id: "intellident",
      title: "IntelliDent",
      tag: "Mobile · AI · Backend",
      positioning: "AI-powered dental screening built from mobile interface to backend inference.",
      description: "IntelliDent is an end-to-end mobile product that analyzes dental images using AI-powered computer vision and generates informational reports highlighting potential dental concerns.",
      url: "https://play.google.com/store/apps/details?id=com.rohan_pareek.IntelliDent",
      images: ["/mobile-1.webp", "/mobile-2.webp"],
      dimensions: [
        {
          name: "Mobile",
          description: "Cross-platform React Native development, complex mobile interfaces, image workflows, API integrations and production application behavior."
        },
        {
          name: "Backend",
          description: "FastAPI services, image processing pipelines, structured APIs and backend deployment."
        },
        {
          name: "AI Integration",
          description: "Computer-vision inference integrated into a complete user-facing product experience."
        }
      ],
      capabilities: [
        "Image capture and upload",
        "AI/computer-vision integration",
        "FastAPI backend",
        "Multiple inference pipelines",
        "Report generation",
        "PDF generation and sharing",
        "Scan history",
        "Multilingual support across 8 languages",
        "Production deployment"
      ]
    }
  },
  services: [
    {
      id: "frontend",
      title: "Frontend",
      headline: "Interfaces that feel as good as they work.",
      icon: "layout",
      capabilities: [
        "Web applications",
        "SaaS dashboards",
        "Admin interfaces",
        "Complex product UI",
        "Responsive development",
        "Frontend performance"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Nuxt"]
    },
    {
      id: "backend",
      title: "Backend & APIs",
      headline: "The systems behind the interface.",
      icon: "database",
      capabilities: [
        "Backend services",
        "REST APIs",
        "Integrations",
        "Database-backed systems",
        "Background jobs",
        "Authentication",
        "Complex business logic"
      ],
      technologies: ["Go", "Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB"]
    },
    {
      id: "mobile",
      title: "Mobile",
      headline: "Production cross-platform applications for Android and iOS.",
      icon: "smartphone",
      capabilities: [
        "API integrations",
        "Payments",
        "Deep linking",
        "Production debugging",
        "App Store workflows",
        "Play Store workflows"
      ],
      technologies: ["Flutter", "React Native"]
    },
    {
      id: "fullstack",
      title: "Full Product",
      headline: "Complete product development from architecture to deployment.",
      icon: "layers",
      capabilities: [
        "Architecture and database design",
        "Frontend implementation",
        "Backend & API development",
        "Third-party integrations",
        "Production deployment",
        "End-to-end ownership"
      ],
      technologies: [] 
    }
  ],
  experience: [
    {
      title: "Scale & Performance",
      description: "Contributed to a consumer mobile application with 1M+ downloads, worked on systems supporting 5K+ daily active users, and delivered up to 10× performance improvements."
    },
    {
      title: "Domain Expertise",
      description: "Worked and delivered production products across various domains including astrology, marketing (Google Ads & Meta Ads), healthcare, and finance."
    },
    {
      title: "AI & Integrations",
      description: "Built AI and RAG-powered systems, alongside automated conversational workflows using WhatsApp Business integrations."
    },
    {
      title: "Business Logic & Monetization",
      description: "Implemented complex payments, monetization systems, admin dashboards, and custom business automation tooling."
    }
  ],
  capabilities: {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Nuxt", "Tailwind CSS"],
    backend: ["Go", "Node.js", "Python", "FastAPI"],
    mobile: ["Flutter", "React Native", "Dart"],
    data: ["PostgreSQL", "MongoDB", "SQLAlchemy"],
    engineering: ["Docker", "REST APIs", "CI/CD", "Git", "GitHub", "GitLab", "Bitbucket", "Postman"]
  },
  process: [
    {
      step: "01",
      title: "Understand",
      description: "I start with the problem, users, constraints and what success actually looks like."
    },
    {
      step: "02",
      title: "Plan",
      description: "I define the scope, technical approach and practical delivery milestones before unnecessary complexity enters the project."
    },
    {
      step: "03",
      title: "Build",
      description: "I develop the product with production-quality engineering while keeping communication clear and progress visible."
    },
    {
      step: "04",
      title: "Ship",
      description: "I test, deploy and make sure the product works reliably outside the development environment."
    }
  ],
  trustSignals: [
    "Clear communication",
    "Production-quality code",
    "End-to-end ownership",
    "Regular progress updates",
    "Practical engineering decisions",
    "Reliable delivery"
  ]
};
