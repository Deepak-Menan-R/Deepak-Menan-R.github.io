export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: ["Python", "JavaScript", "SQL", "Java"],
  },
  {
    label: "Backend",
    skills: ["FastAPI", "Flask", "Node.js", "REST APIs"],
  },
  {
    label: "AI & LLM",
    skills: ["RAG", "GraphRAG", "LangGraph", "MCP", "LLM APIs", "Embeddings", "Vector Search", "LiteLLM", "LangChain"],
  },
  {
    label: "Data",
    skills: ["PostgreSQL", "MySQL", "SQLite", "ChromaDB", "Neo4j"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "HTML", "Tailwind CSS"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Docker", "CI/CD"],
  },
];
