import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="rounded-3xl border border-zinc-200 bg-zinc-900 p-8 text-white shadow-sm dark:border-zinc-800 md:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Contact</p>
      <h2 className="mt-3 text-3xl font-semibold">Let&apos;s create something meaningful together.</h2>
      <p className="mt-4 max-w-2xl text-zinc-300">
        I&apos;m currently open to new opportunities and collaborations. Feel free to reach out if you want to build something impactful.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href="mailto:chandana@example.com" className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200">
          Send Email
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-medium transition hover:border-white">
          GitHub
        </a>
      </div>
    </section>
  );
}
