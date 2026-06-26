import React from "react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern storefront built for smooth product discovery, cart flow, and checkout experience.",
  },
  {
    title: "Analytics Dashboard",
    description: "A clear and interactive dashboard for visualizing business metrics and trends.",
  },
  {
    title: "Portfolio Website",
    description: "A refined personal site designed to highlight work, personality, and contact information.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Projects</p>
        <h2 className="text-3xl font-semibold">Recent work that blends design and function.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
