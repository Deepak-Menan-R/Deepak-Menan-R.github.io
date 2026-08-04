import { profile } from "@/data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-800"
    >
        <div className="mx-auto max-w-[90rem]">
        <p className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-12">
          About
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] gap-10 xl:gap-16">
          <div>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-lg xl:max-w-xl">
              {profile.bio}
            </p>
          </div>

          <div>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-3">
              Education
            </p>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              {profile.education.degree}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">
              {profile.education.university}
            </p>
            <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 mt-1">
              {profile.education.year}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
