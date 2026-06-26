import React from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="text-lg font-semibold tracking-wide">
          Chandana
        </a>
        <nav className="flex gap-4 text-sm text-zinc-600 dark:text-zinc-300">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-zinc-900 dark:hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
