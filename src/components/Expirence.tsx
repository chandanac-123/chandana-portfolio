import React from "react";

const experiences = [
  {
    title: "Full Stack Developer",
    period: "Jan 2026 — Present",
    details: "IBadvisory",
  },
  {
    title: "Frontend Developer",
    period: "Feb 2023 — Dec 2024",
    details: "Metric tree labs",
  },
   {
    title: "Junior React Developer",
    period: "Mar 2022 — Feb 2023",
    details: "Dataspot Technologies",
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
