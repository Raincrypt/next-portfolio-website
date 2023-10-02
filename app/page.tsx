import SectionDivider from "@/components/SectionDivider";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero/>
      <SectionDivider/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
  )
}
