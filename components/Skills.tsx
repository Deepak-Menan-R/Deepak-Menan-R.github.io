import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 border-t border-neutral-200 dark:border-neutral-800"
    >
        <div className="mx-auto max-w-6xl">
        <p className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-12">
          Engineering
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-4">
                {group.label}
              </p>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
