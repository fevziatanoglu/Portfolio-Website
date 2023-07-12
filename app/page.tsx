import AboutSection from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";


export default function Home() {

  return (<main className="mx-auto max-w-4xl space-y-24 md:space-y-0">
    <HeroSection />
    <AboutSection />
    <ProjectsSection/>
    </main>)

}
