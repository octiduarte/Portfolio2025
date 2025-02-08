import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Services from "@/components/Services"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Services/>
      <Skills />
      <Contact />
    </main>
  )
}

