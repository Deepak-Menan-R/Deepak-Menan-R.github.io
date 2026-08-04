import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-800"
    >
        <div className="mx-auto max-w-[90rem]">
        <p className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-12">
          Experience
        </p>

        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr] gap-4 md:gap-10"
            >
              {/* Left column */}
              <div className="md:pt-0.5">
                <p className="font-medium text-sm text-neutral-900 dark:text-neutral-100">
                  {exp.company}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
                  {exp.role}
                </p>
                <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 mt-1">
                  {exp.period}
                </p>
              </div>

              {/* Right column */}
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4 italic">
                  {exp.context}
                </p>
                <ul className="space-y-2.5 mb-5">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="text-sm text-neutral-700 dark:text-neutral-300 pl-4 border-l-2 border-neutral-200 dark:border-neutral-800"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-neutral-400 dark:text-neutral-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
