import React from "react";

export default function Hero() {
  return (
    <section id="home" className="grid items-center gap-8 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 md:grid-cols-[1.3fr_0.7fr] md:p-12">
      <div className="space-y-5">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-600">Frontend Developer</p>
        <h1 className="text-4xl font-bold sm:text-5xl">
          I build polished web experiences with React and Next.js.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          I create fast, responsive, and accessible interfaces that turn ideas into engaging digital products.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-cyan-600 dark:hover:bg-cyan-500">
            View Projects
          </a>
          <a href="#contact" className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium transition hover:border-zinc-900 dark:border-zinc-700 dark:hover:border-white">
            Let&apos;s Talk
          </a>
        </div>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-white shadow-lg">
        <p className="text-sm uppercase tracking-[0.3em]">Currently focused on</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>• Modern UI systems</li>
          <li>• Performance-first frontend builds</li>
          <li>• Clean, scalable code</li>
        </ul>
      </div>
    </section>
  );
}
