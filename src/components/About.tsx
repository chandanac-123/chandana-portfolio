import React from "react";

export default function About() {
  return (
    <section id="about" className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:p-10">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">About Me</p>
        <h2 className="text-3xl font-semibold">I turn thoughtful design into smooth user experiences.</h2>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          I&apos;m a frontend developer with a strong focus on building responsive, accessible, and maintainable web applications. I enjoy working with React, Next.js, and modern styling tools to create interfaces that feel both elegant and intuitive.
        </p>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          My approach combines clean code, user-centered thinking, and continuous learning so every project not only looks good, but also performs well.
        </p>
      </div>
    </section>
  );
}
