import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ServiceItem } from "../types";
import { 
  TreePine, 
  Sprout, 
  Mountain, 
  Building2, 
  ArrowRight, 
  CheckCircle,
  Activity,
  Maximize2
} from "lucide-react";

const SERVICES_DATA: ServiceItem[] = [
  {
    id: "amb",
    iconName: "TreePine",
    title: "Mapeamento e Regularização Ambiental",
    description: "Serviços integrados para regularização fundiária, fiscalização de APPs, cálculo de Reserva Legal e suporte ao CAR (Cadastro Ambiental Rural).",
    details: [
      "Diagnósticos de desmatamento e regeneração",
      "Inventário florestal geoespacializado",
      "Análise temporal multitemporal de desmate",
      "Regularização florestal e planos de recomposição (PRADA)"
    ]
  },
  {
    id: "agr",
    iconName: "Sprout",
    title: "Monitoramento Agrícola Inteligente",
    description: "Sensoriamento focado em produtores e agroindústrias para acompanhamento de safras, mapeamento de falhas, saúde foliar e estresse hídrico.",
    details: [
      "Cálculo de índices espectrais (NDVI, NDRE, EVI)",
      "Mapeamento fitossanitário periódico",
      "Zoneamento agrícola de precisão",
      "Planejamento automatizado de linhas de plantio"
    ]
  },
  {
    id: "topo",
    iconName: "Mountain",
    title: "Modelagem Tridimensional e Terreno (MDS/MDT)",
    description: "Atendimento técnico avançado com geração de nuvens de pontos densas via perfilamento laser (LiDAR), fotogrametria aérea e curvas de nível.",
    details: [
      "Modelagem Numérica do Terreno (MDT) e de Superfície (MDS)",
      "Ortomosaicos georreferenciados de altíssima resolução",
      "Estudos hidrológicos de bacias hidrográficas",
      "Cálculo de movimentação de terra e volumetria de pilhas"
    ]
  },
  {
    id: "urb",
    iconName: "Building2",
    title: "Planejamento e Cadastro Urbano",
    description: "Inteligência territorial voltada para gestão pública e investidores imobiliários, fornecendo cadastros técnicos multifinalitários dinâmicos.",
    details: [
      "Vetorização automatizada de malha urbana",
      "Mapeamento de dinâmica e expansão de cidades",
      "Simulação de sombreamento e ilhas de calor",
      "Integração GIS robusta para planos diretores"
    ]
  }
];

export default function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(SERVICES_DATA[0].id);

  // Map icons
  const getIcon = (name: string) => {
    switch (name) {
      case "TreePine": return TreePine;
      case "Sprout": return Sprout;
      case "Mountain": return Mountain;
      case "Building2": return Building2;
      default: return Activity;
    }
  };

  return (
    <section
      id="servicos"
      className="relative w-full py-24 md:py-36 bg-[#050505] border-t border-white/10 overflow-hidden"
    >
      {/* Dynamic cosmic backdrop */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#00f2ff]/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 md:mb-24">
          <span className="font-mono text-xs text-[#00f2ff] uppercase tracking-[0.3em] block mb-3">
            02 // PORTFÓLIO DE SOLUÇÕES
          </span>
          <h2 className="font-display font-light text-3xl md:text-5xl text-white tracking-tight">
            Nossas Especialidades
          </h2>
          <p className="font-sans font-light text-sm text-gray-400 max-w-xl mt-4 leading-relaxed">
            Unindo tecnologia avançada com algoritmos sob demanda para processamento rápido e relatórios assertivos.
          </p>
        </div>

        {/* Master-Detail Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Services List (Left) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {SERVICES_DATA.map((service, index) => {
              const Icon = getIcon(service.iconName);
              const isActive = activeId === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`w-full text-left p-6 rounded-sm border transition-all duration-300 flex items-start gap-5 cursor-pointer focus:outline-none relative group ${
                    isActive
                      ? "bg-gradient-to-r from-[#00f2ff]/10 to-transparent border-[#00f2ff]/30 shadow-lg"
                      : "bg-[#050505]/40 hover:bg-white/[0.03] border-white/5 hover:border-white/10"
                  }`}
                  id={`service-list-item-${index}`}
                >
                  {/* Subtle active light indicator on side */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#00f2ff]" />
                  )}

                  <div className={`p-3 rounded-sm border transition-colors ${
                    isActive ? "bg-[#00f2ff]/10 border-[#00f2ff]/30 text-[#00f2ff]" : "bg-white/5 border-white/5 text-gray-400 group-hover:text-white"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-[#00f2ff] font-semibold">
                        0{index + 1}
                      </span>
                      <h3 className={`font-display font-medium text-sm md:text-base transition-colors ${
                        isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="font-sans font-light text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <div className="self-center hidden sm:block">
                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      isActive ? "text-[#00f2ff] translate-x-1" : "text-gray-600 group-hover:text-gray-400 group-hover:translate-x-0.5"
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed Panel (Right) */}
          <div className="lg:col-span-5">
            <div className="h-full bg-gradient-to-b from-[#050505] via-black to-[#050505] border border-[#00f2ff]/20 rounded-sm p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              
              {/* Grid abstract design */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff1a 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

              <AnimatePresence mode="wait">
                {activeId && (
                  <motion.div
                    key={activeId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="flex flex-col h-full justify-between relative z-10"
                  >
                    <div>
                      {/* Section Badge */}
                      <span className="font-mono text-[9px] text-[#00f2ff] tracking-[0.25em] block uppercase mb-6">
                        Detalhamento Operacional
                      </span>

                      {/* Header Title */}
                      <h3 className="font-display font-semibold text-lg md:text-xl text-white mb-4 leading-tight">
                        {SERVICES_DATA.find((s) => s.id === activeId)?.title}
                      </h3>

                      {/* Descriptive paragraph */}
                      <p className="font-sans font-light text-xs md:text-sm text-gray-300 leading-relaxed mb-8">
                        {SERVICES_DATA.find((s) => s.id === activeId)?.description}
                      </p>

                      {/* Key deliverables checklist */}
                      <div className="flex flex-col gap-3.5">
                        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-wider block mb-1">
                          Entregáveis Técnicos Incluídos:
                        </span>
                        {SERVICES_DATA.find((s) => s.id === activeId)?.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5">
                            <CheckCircle className="w-3.5 h-3.5 text-[#00f2ff] mt-0.5 flex-shrink-0" />
                            <span className="font-sans font-light text-xs text-gray-300">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-mono text-[8px] text-gray-500 uppercase">Acurácia Esperada</span>
                        <span className="font-sans text-[11px] text-[#00f2ff] font-medium">Sub-métrica (RTK/PPK)</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="font-mono text-[8px] text-gray-500 uppercase">Processador Dedicado</span>
                        <span className="font-sans text-[11px] text-[#00f2ff] font-medium">GIS // AI OS Node</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
