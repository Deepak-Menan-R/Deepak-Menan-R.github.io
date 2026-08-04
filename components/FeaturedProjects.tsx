import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="work"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="mx-auto max-w-[90rem]">
        <p className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-12">
          Work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featured.map((project, i) => (
            <div
              key={project.title}
              className={
                featured.length % 2 !== 0 && i === featured.length - 1
                  ? "lg:col-span-2"
                  : ""
              }
            >
              <ProjectCard project={project} featured />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
