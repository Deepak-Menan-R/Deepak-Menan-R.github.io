import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="min-h-svh flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="mx-auto max-w-[90rem] w-full py-16 sm:py-20 hero-animate">
        <p className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-6">
          Software Engineer
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-[1.1] mb-7 max-w-4xl 2xl:max-w-6xl">
          {profile.headline}
        </h1>

        <p className="text-base sm:text-lg xl:text-xl text-neutral-600 dark:text-neutral-400 max-w-xl xl:max-w-2xl leading-relaxed mb-10">
          {profile.description}
        </p>

        <div className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href="#work"
            className="px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
          >
            View Work
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>

        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600 tracking-wide">
          {profile.coreTech.join("  ·  ")}
        </p>
      </div>
    </section>
  );
}
