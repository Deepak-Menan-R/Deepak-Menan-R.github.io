import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function OtherProjects() {
  const other = projects.filter((p) => !p.featured);

  if (other.length === 0) return null;

  return (
    <section className="pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[90rem]">
        <p className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-6">
          Other Projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {other.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
