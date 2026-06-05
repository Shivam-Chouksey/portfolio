import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Capabilities from "@/components/Capabilities";
import { portfolioData } from "@/data/info";
import { About } from "@/components/About";
import ProjectProvider from "@/providers/ProjectProvider";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {

  return (
    <>
      <ProjectProvider>

        <ProjectModal />

        <Hero hero={portfolioData.hero} />
        <About about={portfolioData.aboutProfile} />
        <Experience experience={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Skills />
        <Capabilities />
        <Contact />
      </ProjectProvider>
    </>
  )
}
