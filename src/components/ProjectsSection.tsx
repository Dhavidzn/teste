import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectItem } from "../types";
import { Maximize2, Tag, Calendar, Database, Eye } from "lucide-react";

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Classificação Multitemporal de Cobertura Florestal",
    category: "Sensoriamento Ambiental",
    description: "Análise histórica abrangente cobrindo 15 anos de dinâmica de vegetação no bioma amazônico, utilizando imagens Landsat e Sentinel-2 integradas.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800",
    stats: { label: "Área de Estudo", value: "1.2M Hectares" },
    tags: ["Time-Series", "Random Forest", "Sentinel", "Google Earth Engine"]
  },
  {
    id: "proj-2",
    title: "Modelagem Tridimensional de Linhas de Transmissão",
    category: "Topografia Digital",
    description: "Aerofotogrametria LiDAR de alta densidade voltada para detecção automática de zonas de vegetação conflitantes com corredores elétricos de alta tensão.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    stats: { label: "Precisão Vertical", value: "± 3.5 cm" },
    tags: ["LiDAR 3D", "Nuvem de Pontos", "RTK GPS", "Ortomosaico"]
  },
  {
    id: "proj-3",
    title: "Plataforma Centralizada de Inteligência Agrícola",
    category: "WebGIS Integrado",
    description: "Implementação de painel analítico interativo e dinâmico que rastreia índices NDVI de safras de soja e cana-de-açúcar em tempo real para tomada de decisão ágil.",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=800",
    stats: { label: "Produtores Monitorados", value: "+340 Clientes" },
    tags: ["NDVI / NDRE", "WebGIS", "React Leaflet", "Análise Preditiva"]
  }
];

export default function ProjectsSection() {
  const [selectedProj, setSelectedProj] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projetos"
      className="relative w-full py-24 md:py-36 bg-[#050505] border-t border-white/10 overflow-hidden"
    >
      {/* Abstract geometric stars background */}
      <div className="absolute inset-0 bg-dotted-pattern pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
          <div>
            <span className="font-mono text-xs text-[#00f2ff] uppercase tracking-[0.3em] block mb-3">
              03 // RESULTADOS REAIS
            </span>
            <h2 className="font-display font-light text-3xl md:text-5xl text-white tracking-tight">
              Estudos Técnicos e Projetos
            </h2>
          </div>
          <p className="font-sans font-light text-xs md:text-sm text-gray-400 max-w-sm mt-4 md:mt-0 leading-relaxed">
            Navegue pelos estudos de caso que comprovam a nossa excelência cartográfica, agilidade de processamento e precisão analítica.
          </p>
        </div>

        {/* Minimal showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className="group flex flex-col justify-between bg-black/40 border border-white/10 hover:border-[#00f2ff]/30 rounded-sm overflow-hidden transition-all duration-500"
              id={`project-card-${index}`}
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-85"
                  />
                  <span className="absolute top-4 left-4 z-20 font-mono text-[9px] tracking-wider uppercase text-[#00f2ff] border border-[#00f2ff]/20 bg-[#00f2ff]/5 backdrop-blur-md px-2.5 py-1 rounded-sm">
                    {project.category}
                  </span>
                  
                  {/* View Details Hover action */}
                  <button
                    onClick={() => setSelectedProj(project)}
                    className="absolute bottom-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 border border-white/10 hover:border-[#00f2ff] hover:bg-black/90 flex items-center justify-center text-white cursor-pointer transition-colors"
                    title="Expandir Estudo"
                  >
                    <Eye className="w-4 h-4 text-gray-400 hover:text-white" />
                  </button>
                </div>

                {/* Card Info content */}
                <div className="p-6">
                  <span className="font-mono text-[9px] text-gray-500 block mb-1">
                    METRICA RELEVANTE: {project.stats.label}
                  </span>
                  <span className="font-display font-medium text-white text-base">
                    {project.stats.value}
                  </span>

                  <h3 className="font-display font-medium text-[15px] text-white tracking-wide leading-snug mt-4 group-hover:text-[#00f2ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans font-light text-xs text-gray-400 mt-2.5 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Lower tags list */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[8px] bg-white/[0.02] text-gray-400 border border-white/5 px-2 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modern Detailed Drawer Modal */}
      <AnimatePresence>
        {selectedProj && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark glass backdrop layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProj(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal card content block */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-[#050505] border border-[#00f2ff]/30 rounded-sm overflow-hidden shadow-2xl flex flex-col z-10"
              id="project-drawer"
            >
              {/* Cover preview banner */}
              <div className="relative h-64 w-full bg-slate-900">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10" />
                <img
                  src={selectedProj.image}
                  alt={selectedProj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60"
                />
                
                {/* Close Button top-right corner */}
                <button
                  onClick={() => setSelectedProj(null)}
                  className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-sm bg-black/60 hover:bg-black/80 border border-[#00f2ff]/30 text-[10px] font-mono tracking-wider uppercase text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  fechar [esc]
                </button>

                <div className="absolute bottom-4 left-6 z-20">
                  <span className="font-mono text-[9px] tracking-widest text-[#00f2ff] uppercase bg-[#00f2ff]/5 backdrop-blur-sm border border-[#00f2ff]/20 px-2 py-1 rounded-sm">
                    {selectedProj.category}
                  </span>
                  <h3 className="font-display font-medium text-white text-lg md:text-xl tracking-wide mt-2">
                    {selectedProj.title}
                  </h3>
                </div>
              </div>

              {/* Informative text details */}
              <div className="p-6 md:p-8 flex flex-col gap-6">
                <div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-1">
                    Sumário Descritivo do Projeto
                  </span>
                  <p className="font-sans font-light text-xs md:text-sm text-gray-300 leading-relaxed">
                    {selectedProj.description}
                  </p>
                </div>

                {/* Tech specifications table columns */}
                <div className="grid grid-cols-2 gap-4 bg-white/[0.01] border border-white/5 p-4 rounded-sm">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] text-gray-500 uppercase flex items-center gap-1">
                      <Database className="w-3 h-3 text-[#00f2ff]" /> Metodologia Aplicada
                    </span>
                    <span className="font-sans text-xs text-white font-medium">
                      Sensoriamento Remoto Convolucional
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] text-gray-500 uppercase flex items-center gap-1">
                      <Tag className="w-3 h-3 text-[#00f2ff]" /> Métrica Alcançada
                    </span>
                    <span className="font-sans text-xs text-[#00f2ff] font-semibold uppercase">
                      {selectedProj.stats.value}
                    </span>
                  </div>
                </div>

                {/* Expanded Tag Cloud */}
                <div>
                  <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block mb-2">
                    Especificações do Dataset e Tecnologias
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] text-[#00f2ff] border border-[#00f2ff]/20 bg-[#00f2ff]/5 px-2.5 py-1 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary dynamic focus action inside the drawer */}
                <div className="pt-2 border-t border-white/5 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedProj(null);
                      // Wait slight transition
                      setTimeout(() => {
                        const contactSec = document.getElementById("contato");
                        if (contactSec) {
                          contactSec.scrollIntoView({ behavior: "smooth" });
                        }
                      }, 200);
                    }}
                    className="py-2.5 px-5 rounded-sm bg-[#00f2ff] hover:bg-cyan-300 text-black font-sans text-xs tracking-wider uppercase font-semibold transition-colors cursor-pointer"
                  >
                    Solicitar Estudo de Caso Semelhante
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
