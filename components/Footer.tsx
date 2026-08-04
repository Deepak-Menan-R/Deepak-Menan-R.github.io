import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-[90rem] flex items-center justify-between">
        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600">
          {profile.name}
        </p>
        <p className="text-xs font-mono text-neutral-400 dark:text-neutral-600">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
