import React from "react";

const projects = [
  {
    title: "Tcenteros",
    description: "Health training network platform (HTNP). Build a multi tenant, offline -first SaaS platform that connects independent health training centers into one network.enable Cross center member access.provides white label center management system,",
  },
  {
    title: "Echo- Women APP",
    description: "It's a E-commerce project, headquartered in UK. It sells beauty, wellness and pharmaceutical products through this app. The super admin will likely have access to features like product, order ,user management and other administrative tasks. ",
  },
  {
    title: "Ripplr",
    description: "It's a social network for environmental enthusiasts, So that people can come into the platform, create a profile, upload content and share the environmental efforts. They can also explore other people's profile, as well as their activities and upcoming events that are taking place. To oversee all these things there should be a super admin panel",
  },
  {
    title: "Rental Management System ",
    description: "The system track of rent paid by the tenants of their commercial or living property and also rotate that money for more construction purpose. Managers are in charge of adding all the incomes and expenses incurred by the company and super admin can view all these details and vahe adit access. ",
  },
  {
    title: "Biju and Biju CA Associates ",
    description: "The project would involve creating Hybrid Mobile App for the Field Executives, and Web for Super Admin along with different roles created to manage customer verifications for Banking Products.",
  },
  {
    title: "Twaddan 2.0 ",
    description: "Twaddan is a car washing application in which users can schedule their service for there car at anywhere, anytime. https//twaddan.com",
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
