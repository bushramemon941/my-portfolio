import Hero from "@/components/hero";
import Skill from "@/components/skill";
import Contact from "@/components/contact";
import Projects from "@/components/project";
import About from "@/components/about";


export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll bg-gradient-to-b from-slate-800 to-slate-600">
      
      <Hero />
      <About />
      <Projects />
      <Skill />
      <Contact />
  
    </main>

  );
}