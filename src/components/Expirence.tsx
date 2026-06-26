import React from "react";

const experiences = [
  {
    title: "Frontend Developer",
    period: "2023 — Present",
    details: "Designing and building user-facing products with a strong emphasis on usability and performance.",
  },
  {
    title: "Web Development Intern",
    period: "2022 — 2023",
    details: "Worked closely with teams to improve interface quality and implement responsive web features.",
  },
];

export default function Expirence() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Experience</p>
      <div className="mt-6 space-y-6">
        {experiences.map((item) => (
          <div key={item.title} className="border-l border-zinc-200 pl-4 dark:border-zinc-700">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="text-sm text-zinc-500">{item.period}</span>
            </div>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
