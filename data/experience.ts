export interface Experience {
  company: string;
  role: string;
  period: string;
  context: string;
  bullets: string[];
  tech: string[];
  url?: string;
}

export const experiences: Experience[] = [
  {
    company: "[24]7.ai",
    role: "Software Engineer",
    period: "Nov 2025 — Present",
    context: "Building an AI-powered platform for customer-care agent training.",
    bullets: [
      "Built an in-house Python LLM platform replacing Flowise, supporting configurable multi-client workflows for chatbot responses, call/chat summarisation, and FLE/PLE rating generation — reduced workflow failures from 83% to 2%.",
      "Led the migration of real-time Speech-to-Text from Deepgram to Azure Speech-to-Text, completing and validating the Stage migration within 3 days as part of a cost-reduction initiative.",
      "Developed a scenario allocation system distributing balanced training combinations across agents, increasing scenario coverage from ~20% to over 95% while reducing manual allocation effort.",
      "Independently investigated and resolved production issues across backend and AI-driven workflows.",
    ],
    tech: ["Python", "FastAPI", "Node.js", "LLMs", "Azure Speech-to-Text"],
  },
  {
    company: "[24]7.ai",
    role: "Software Engineer Intern",
    period: "May 2025 — Nov 2025",
    context: "Building automation tooling and simulation features for the voice and chat training platform.",
    bullets: [
      "Built a Python automation framework to replay failed voice and chat interactions by retrieving transcripts and scheduling replay execution — reduced blank FLE/PLE ratings from 80% to 10%.",
      "Developed agent-training simulation features including configurable response delays, inactivity tracking, and voice-hold simulation to reproduce real customer-service scenarios.",
    ],
    tech: ["Python", "Node.js", "REST APIs", "PostgreSQL"],
  },
  {
    company: "SAP Concur",
    role: "Student Mentor",
    period: "Feb 2024 — Apr 2024",
    context: "Built an interactive VR hotel exploration prototype end-to-end.",
    bullets: [
      "Built a VR hotel exploration application supporting interactive navigation across 15 hotels using Unity and React360.",
      "Developed a Flask API backed by SQLite to serve hotel and amenity data to the interactive experience.",
      "Integrated the backend, dashboard, and 360° interface into a complete end-to-end prototype.",
    ],
    tech: ["Python", "Flask", "SQLite", "Unity", "React360"],
  },
  {
    company: "Lam Research",
    role: "Project Intern",
    period: "Sep 2023 — Nov 2023",
    context: "Developed an AI-powered test case generation tool for multi-language codebases.",
    bullets: [
      "Designed and developed an AI-powered test case generation tool supporting C, C++, Python, Java, and Smalltalk, achieving 87.2% precision during training.",
      "Implemented the AAA (Arrange-Act-Assert) classification framework, increasing defect identification by 30% and improving software reliability.",
    ],
    tech: ["Python", "Java", "Machine Learning", "NLP"],
  },
];
