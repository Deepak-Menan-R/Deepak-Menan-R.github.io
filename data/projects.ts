export interface Project {
  title: string;
  year: string;
  description: string;
  ARCHITECTURE: string;
  IMPACT: string;
  techStack: string[];
  category: string;
  featured: boolean;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Agentic Jira Resolver",
    year: "2026",
    description:
      "Multi-agent software engineering platform that converts Jira tickets into implementation-ready, human-reviewed GitHub pull requests.",
    ARCHITECTURE:
      "Designed a 7-node LangGraph workflow for repository analysis, implementation, code review, and pull request generation. Built an MCP server that unified Jira and GitHub operations for AI agents.",
    IMPACT:
      "Automates the workflow from Jira issue to review-ready GitHub pull request while keeping a human in the loop before repository changes are applied.",
    techStack: ["Python", "LangGraph", "FastAPI", "MCP", "OpenRouter", "Gemini", "GPT-4.1"],
    category: "AI / Agents",
    featured: true,
  },
  {
    title: "Repository Intelligence System",
    year: "2026",
    description:
      "Code intelligence platform that parses Python repositories using AST and constructs knowledge graphs representing files, classes, functions, imports, and call relationships.",
    ARCHITECTURE:
      "Built an AST-based knowledge graph with a hybrid GraphRAG retrieval pipeline, exposed through FastAPI APIs.",
    IMPACT:
      "GraphRAG-powered repository assistant that enables developers to understand API flows, data flow, dependencies, and code relationships through natural language queries.",
    techStack: ["Python", "FastAPI", "Neo4j", "ChromaDB", "GraphRAG", "NetworkX", "OpenAI"],
    category: "AI / Backend",
    featured: true,
  },
  {
    title: "BartTune",
    year: "2025",
    description:
      "Domain-specific fine-tuned BART model that converts college management use cases into structured user stories for requirements engineering.",
    ARCHITECTURE:
      "Fine-tuned facebook/bart-base on college management system datasets and packaged the workflow into a FastAPI application with authentication, model selection, and Hugging Face deployment.",
    IMPACT:
      "Automates the generation of user stories for academic and college management systems, reducing manual effort while improving clarity, consistency, and domain relevance.",
    techStack: ["Python", "FastAPI", "PyTorch", "Transformers", "BART", "MongoDB", "Docker", "Hugging Face"],
    category: "AI / NLP",
    featured: true,
    demo: "https://mrcodder-barttune.hf.space/",
  },
];
