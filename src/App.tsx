import { useEffect } from "react";
import Navbar from "./components/Navbar";
import VideoHero from "./components/VideoHero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  // Global page adjustments & optimization references
  useEffect(() => {
    // Standard initialization rules
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll helper matching simple, responsive target points
  const handleScrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return;

    if (sectionId === "hero") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-black text-[#f3f4f6] selection:bg-[#00f2ff]/30 selection:text-white">
      {/* 1. Frosted Navigation Bar */}
      <Navbar onScrollToSection={handleScrollToSection} />

      {/* 2. Interactive Scroll-Driven Cinematic Video Hero */}
      <VideoHero onScrollToSection={handleScrollToSection} />

      {/* 3. Institutional Info / Core About Grid */}
      <AboutSection />

      {/* 4. Portfolio / Interactive Solutions Masters */}
      <ServicesSection />

      {/* 5. Real Case Studies Showcase */}
      <ProjectsSection />

      {/* 6. Contact & Diagnosis Pipe */}
      <ContactSection />

      {/* 7. Detailed Technical Footer */}
      <Footer />
    </div>
  );
}
