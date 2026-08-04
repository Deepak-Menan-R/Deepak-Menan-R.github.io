import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
  if (!featured) {
    return (
      <div className="group p-5 border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors h-full flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-medium text-sm text-neutral-900 dark:text-neutral-100 leading-snug">
            {project.title}
          </h3>
          <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600 shrink-0 mt-0.5">
            {project.year}
          </span>
        </div>

        <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-x-2.5 gap-y-1 mb-4">
          {project.techStack.map((t) => (
            <span key={t} className="text-xs font-mono text-neutral-400 dark:text-neutral-600">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-medium"
            >
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-medium"
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="group p-7 sm:p-8 border border-neutral-200 dark:border-neutral-800 rounded-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors h-full flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-widest block mb-1.5">
            {project.category}
          </span>
          <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {project.title}
          </h3>
        </div>
        <span className="text-xs font-mono text-neutral-400 dark:text-neutral-600 shrink-0 mt-1">
          {project.year}
        </span>
      </div>

      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="space-y-4 mb-6 flex-1">
        <div className="pl-4 border-l-2 border-neutral-200 dark:border-neutral-800">
          <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-1">
            Built
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{project.ARCHITECTURE}</p>
        </div>
        <div className="pl-4 border-l-2 border-neutral-200 dark:border-neutral-800">
          <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-1">
            Outcome
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{project.IMPACT}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.techStack.map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-neutral-500 dark:text-neutral-500 px-2 py-0.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-5">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            GitHub ↗
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}
