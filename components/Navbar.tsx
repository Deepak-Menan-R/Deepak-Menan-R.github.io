"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f7f7f6]/90 dark:bg-[#0d0d0d]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 hover:opacity-60 transition-opacity"
        >
          {profile.name}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-base text-neutral-500 dark:text-neutral-400">
            {[
              { label: "Work", href: "#work" },
              { label: "Experience", href: "#experience" },
              { label: "Skills", href: "#skills" },
              { label: "About", href: "#about" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 pl-6 border-l border-neutral-200 dark:border-neutral-800 text-base">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-neutral-900 dark:text-neutral-100 hover:opacity-60 transition-opacity"
            >
              Resume
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-1 text-neutral-600 dark:text-neutral-400"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-[#f7f7f6] dark:bg-[#0d0d0d] px-6 py-5 flex flex-col gap-5 text-sm">
          <div className="flex flex-col gap-4 text-neutral-600 dark:text-neutral-400">
            {[
              { label: "Work", href: "#work" },
              { label: "Experience", href: "#experience" },
              { label: "Skills", href: "#skills" },
              { label: "About", href: "#about" },
            ].map(({ label, href }) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex gap-5 text-sm">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="font-medium text-neutral-900 dark:text-neutral-100" onClick={closeMenu}>
              Resume
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-neutral-400" onClick={closeMenu}>
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 dark:text-neutral-400" onClick={closeMenu}>
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
