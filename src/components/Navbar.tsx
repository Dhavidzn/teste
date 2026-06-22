import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Satellite } from "lucide-react";

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", id: "hero" },
    { name: "Sobre", id: "sobre" },
    { name: "Serviços", id: "servicos" },
    { name: "Projetos", id: "projetos" },
    { name: "Contato", id: "contato" },
  ];

  return (
    <>
      <motion.nav
        id="main-nav"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onScrollToSection("hero")}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
            id="nav-logo"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-sm border border-[#00f2ff]/20 overflow-hidden bg-[#00f2ff]/5 group-hover:border-[#00f2ff]/60 transition-colors">
              <Satellite className="w-4 h-4 text-white group-hover:text-[#00f2ff] transition-colors" />
              <div className="absolute inset-0 bg-[#00f2ff]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold tracking-widest text-sm text-white uppercase">
                GEOSENSE<span className="text-[#00f2ff]"> // OS</span>
              </span>
              <span className="font-mono text-[8px] tracking-[0.2em] text-gray-400 uppercase leading-none">
                Earth Observation
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onScrollToSection(link.id)}
                className="font-sans text-xs tracking-wider uppercase text-gray-400 hover:text-[#00f2ff] transition-colors cursor-pointer focus:outline-none relative py-1 group"
                id={`nav-link-${link.id}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00f2ff] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <button
              onClick={() => onScrollToSection("contato")}
              className="group flex items-center gap-2 border border-white/10 hover:border-[#00f2ff]/40 bg-white/5 hover:bg-[#00f2ff]/5 text-white font-sans text-xs tracking-wider uppercase py-2 px-4 rounded transition-all cursor-pointer focus:outline-none"
              id="cta-nav"
            >
              Falar com Especialista
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#00f2ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] bg-black/95 backdrop-blur-2xl border-b border-white/5 z-40 py-8 px-6 md:hidden flex flex-col gap-6"
            id="mobile-drawer"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setIsOpen(false);
                    // Small timeout to let drawer animation complete nicely
                    setTimeout(() => onScrollToSection(link.id), 250);
                  }}
                  className="font-sans text-sm tracking-widest uppercase text-gray-400 hover:text-white text-left py-2 border-b border-white/5 focus:outline-none"
                  id={`nav-mobile-${link.id}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setTimeout(() => onScrollToSection("contato"), 250);
              }}
              className="flex items-center justify-center gap-2 border border-[#00f2ff]/30 hover:border-[#00f2ff] bg-[#00f2ff]/10 text-white font-sans text-xs tracking-wider uppercase py-3 px-5 rounded transition-all cursor-pointer focus:outline-none"
              id="cta-nav-mobile"
            >
              Falar com Especialista
              <ArrowUpRight className="w-4 h-4 text-[#00f2ff]" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
