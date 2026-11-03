import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CompetitiveProgramming from "@/components/CompetitiveProgramming";
import CertificationsSection from "@/components/CertificationsSection";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b12] text-slate-100 relative">
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <ProjectsSection />
      <CompetitiveProgramming />
      <SkillsSection />
      <CertificationsSection />
      <InteractiveTerminal />
      <ContactSection />
      <Footer />
    </main>
  );
}
