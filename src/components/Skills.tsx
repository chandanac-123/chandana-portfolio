import React from "react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "HTML/CSS",
  "JavaScript",
  "Git & GitHub",
  "REST APIs",
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Skills</p>
        <h2 className="text-3xl font-semibold">Tools and technologies I work with.</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <div key={skill} className="rounded-2xl border border-zinc-200 bg-white p-5 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
