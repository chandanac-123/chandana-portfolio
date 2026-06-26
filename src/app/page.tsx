import About from "@/components/About";
import Contact from "@/components/Contact";
import Expirence from "@/components/Expirence";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      <Navbar />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-8 sm:px-8 lg:px-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Expirence />
        <Contact />
      </div>
    </main>
  );
}
