import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-200 dark:border-neutral-800"
    >
        <div className="mx-auto max-w-[90rem]">
        <p className="text-xs font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-8">
          Contact
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-xs text-sm leading-relaxed">
          Interested in building backend systems and intelligent software.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-medium text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            Resume ↗
          </a>
        </div>
      </div>
    </section>
  );
}
