import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { VideoPhrase } from "../types";

import DEFAULT_VIDEO_URL from "../assets/Satellite_zooming_out_from_Earth_202606202308.mp4";

const PHRASES: VideoPhrase[] = [
  {
    range: [0.0, 0.22],
    title: "A TERRA SOB NOVA PERSPECTIVA",
    tagline: "SENSORIAMENTO REMOTO & GEOPROCESSAMENTO",
    description: "Tecnologia orbital avançada para analisar, mapear e extrair dados críticos de qualquer ponto do planeta com precisão métrica.",
    highlight: "Alta Resolução",
    ctaText: "Iniciar Exploração"
  },
  {
    range: [0.26, 0.48],
    title: "MONITORAMENTO INTEGRADO E MULTIESPECTRAL",
    tagline: "COBERTURA TEMPORAL E ESPACIAL",
    description: "Algoritmos inteligentes traduzem assinaturas espectrais em diagnósticos precisos sobre sanidade de cultivos, biomassa e estresse hídrico.",
    highlight: "Análise Avançada",
    ctaText: "Ver Tecnologia"
  },
  {
    range: [0.52, 0.74],
    title: "MODELAGEM NUMÉRICA & DADOS SAR",
    tagline: "TOPOGRAFIA & RADAR ORBITAL",
    description: "Geração de modelos digitais de terreno (MDT/MDS) de altíssima fidelidade e processamento de radar de abertura sintética para transpor barreiras de nuvens.",
    highlight: "Soberania de Dados",
    ctaText: "Análise 3D"
  },
  {
    range: [0.78, 0.98],
    title: "DECISÕES ESTRATÉGICAS BASEADAS EM DADOS",
    tagline: "BIG DATA GEOGRÁFICO",
    description: "Transformando bilhões de pixels em relatórios estratégicos para o setor agrícola, ambiental, imobiliário e corporativo.",
    highlight: "Inteligência Geoespacial",
    ctaText: "Conectar Plataforma"
  }
];

interface VideoHeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function VideoHero({ onScrollToSection }: VideoHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);

  const targetTimeRef = useRef(0.1);
  const currentTimeRef = useRef(0.1);
  const initializedRef = useRef(false);

  // ── Inicialização do vídeo ──────────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const init = () => {
      if (initializedRef.current) return;
      if (!video.duration || video.duration <= 0) return;

      initializedRef.current = true;
      setVideoDuration(video.duration);
      video.currentTime = 0.1;
      currentTimeRef.current = 0.1;
      targetTimeRef.current = 0.1;
    };

    // Tenta imediatamente (caso 304 cache já carregou tudo)
    if (video.readyState >= 2) {
      init();
      return;
    }

    video.addEventListener("loadeddata", init);
    video.addEventListener("canplay", init);

    // Fallback de polling para browsers que suprimem eventos em cache hit
    const poll = setInterval(() => {
      if (video.readyState >= 2 || video.duration > 0) {
        init();
        clearInterval(poll);
      }
    }, 100);

    return () => {
      video.removeEventListener("loadeddata", init);
      video.removeEventListener("canplay", init);
      clearInterval(poll);
    };
  }, []);

  // ── Scroll → atualiza targetTime ───────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.scrollHeight - window.innerHeight;
      const scrolled = -rect.top;

      let progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setScrollProgress(progress);

      if (videoDuration > 0) {
        targetTimeRef.current = 0.1 + progress * (videoDuration - 0.1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [videoDuration]);

  // ── rAF: interpola currentTime suavemente ──────────────────────────────────
  useEffect(() => {
    if (videoDuration <= 0) return;

    let animId: number;

    const tick = () => {
      const video = videoRef.current;
      if (video) {
        const diff = targetTimeRef.current - currentTimeRef.current;
        if (Math.abs(diff) > 0.001) {
          currentTimeRef.current += diff * 0.12;
          currentTimeRef.current = Math.max(0.1, Math.min(videoDuration, currentTimeRef.current));
          video.currentTime = currentTimeRef.current;
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [videoDuration]);

  const activePhrase = PHRASES.find(
    (p) => scrollProgress >= p.range[0] && scrollProgress <= p.range[1]
  );

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative w-full"
      style={{ height: "380vh" }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#050505] z-10 select-none">

        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_#111e29_0%,_#050505_70%)] opacity-70"></div>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#ffffff1a 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#00f2ff]/10 rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#00f2ff]/5 rounded-full pointer-events-none"></div>
        </div>

        {/* Edge overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#050505] z-20 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505]/80 to-transparent z-20 pointer-events-none" />

        {/* Vídeo — SEM crossOrigin para evitar bloqueio de CORS na Vercel */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        >
          <source src={DEFAULT_VIDEO_URL} type="video/mp4" />
        </video>

        {/* Top progress bar */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-white/5 z-30">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00f2ff] via-cyan-400 to-blue-500"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Side progress gauge */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center gap-4">
          <span className="font-mono text-[9px] text-gray-500 tracking-widest uppercase rotate-90 origin-left translate-x-1 translate-y-12">
            Progress
          </span>
          <div className="w-[1px] h-32 bg-white/10 relative">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00f2ff] to-[#00f2ff]/30"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          <span className="font-mono text-[10px] text-[#00f2ff] font-bold">
            {(scrollProgress * 100).toFixed(0)}%
          </span>
        </div>

        {/* HUD */}
        <div className="absolute right-6 md:right-12 top-6 md:top-[88px] z-30 flex flex-col items-end gap-1 font-mono text-[9px] text-gray-400 leading-none bg-[#050505]/60 backdrop-blur-md border border-[#00f2ff]/20 p-3 rounded-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] animate-pulse" />
            <span className="text-white font-semibold">GEOSENSE // OS NOMINAL</span>
          </div>
          <div className="mt-2 text-gray-500">ALTITUDE: <span className="text-[#00f2ff]">712 KM</span></div>
          <div className="text-gray-500">FPS: <span className="text-[#00f2ff]">60 FPS</span></div>
          <div className="text-gray-500">SCAN: <span className="text-gray-300">MULTISPECTRAL</span></div>
          {videoDuration > 0 && (
            <div className="text-gray-500 mt-1 pt-1 border-t border-white/5">
              TIME: <span className="text-[#00f2ff]">{(videoRef.current?.currentTime || 0).toFixed(2)}s</span> / {videoDuration.toFixed(1)}s
            </div>
          )}
        </div>

        {/* Text phrases */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 md:px-12 pointer-events-none">
          <div className="max-w-3xl text-center flex flex-col items-center">
            <AnimatePresence mode="wait">
              {activePhrase ? (
                <motion.div
                  key={activePhrase.title}
                  initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-[#00f2ff] uppercase mb-4 px-3 py-1 border border-[#00f2ff]/30 bg-[#00f2ff]/5 rounded-sm select-none">
                    {activePhrase.tagline}
                  </span>
                  <h1 className="font-display font-light tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] text-white leading-none mb-8 italic underline decoration-[#00f2ff]/30 underline-offset-8">
                    {activePhrase.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="font-bold not-italic text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00f2ff]">
                      {activePhrase.title.split(" ").slice(-1)[0]}
                    </span>
                  </h1>
                  <p className="font-sans text-sm md:text-base text-gray-300/90 leading-relaxed max-w-xl mb-12 font-light">
                    {activePhrase.description}
                  </p>
                  <div className="pointer-events-auto">
                    <button
                      onClick={() => {
                        const nextProgress = scrollProgress + 0.25;
                        if (nextProgress >= 1.0) {
                          onScrollToSection("sobre");
                        } else {
                          const container = containerRef.current;
                          if (container) {
                            const totalScroll = container.scrollHeight - window.innerHeight;
                            window.scrollTo({
                              top: window.scrollY + (totalScroll * 0.25),
                              behavior: "smooth"
                            });
                          }
                        }
                      }}
                      className="group relative inline-flex items-center gap-2 overflow-hidden px-6 py-3 rounded-sm border border-white/20 hover:border-[#00f2ff]/50 bg-[#050505]/60 backdrop-blur-md text-white text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#00f2ff]/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{activePhrase.ctaText}</span>
                      <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform text-[#00f2ff]" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="transit"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  exit={{ opacity: 0 }}
                  className="font-mono text-[10px] tracking-[0.4em] text-[#00f2ff] uppercase select-none"
                >
                  Geosense // Alinhando Sensores...
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll prompt */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 select-none pointer-events-none">
          <span className="font-mono text-[9px] tracking-[0.2em] text-[#00f2ff]/75 uppercase">
            {scrollProgress >= 0.95 ? "Role para continuar" : "Gire o Scroll do mouse"}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-[#00f2ff]/30 rounded-full flex items-start justify-center p-1 bg-[#050505]/40"
          >
            <div className="w-1 h-2 bg-[#00f2ff] rounded-full" />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
