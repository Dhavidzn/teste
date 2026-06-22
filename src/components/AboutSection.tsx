import { motion } from "motion/react";
import { Eye, Network, Compass, Award } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: Eye,
      title: "Resolução Hiper-Temporal",
      desc: "Análises recorrentes que capturam transformações da superfície terrestre em intervalos precisos.",
    },
    {
      icon: Network,
      title: "Fusão de Sensores",
      desc: "Combinação sinérgica de imagens ópticas, radar SAR e sensores termais de diversas constelações.",
    },
    {
      icon: Compass,
      title: "Algoritmos Proprietários",
      desc: "Modelagem empírica e física calibrada localmente pelas maiores mentes em fotogrametria.",
    },
    {
      icon: Award,
      title: "Precisão Certificada",
      desc: "Acurácia posicional de classe mundial para regularização fundiária e projetos civis complexos.",
    }
  ];

  return (
    <section
      id="sobre"
      className="relative w-full py-24 md:py-36 bg-[#050505] border-t border-white/10 overflow-hidden"
    >
      {/* Decorative stars / geometric nodes in background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00f2ff]/5 via-black to-black opacity-60 pointer-events-none" />

      {/* Decorative vertical grid lines */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-white/5 pointer-events-none hidden lg:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-white/5 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 md:mb-24">
          <div className="lg:col-span-4">
            <span className="font-mono text-xs text-[#00f2ff] uppercase tracking-[0.3em] block mb-3">
              01 // ORIGEM E ESCOPO
            </span>
            <h2 className="font-display font-light text-3xl md:text-4xl text-white tracking-tight">
              Soberania em Dados Geoespaciais
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="font-sans font-light text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
              Nascemos para desvendar a complexidade terrestre através de dados objetivos. Nós desenvolvemos pipelines integrados de geoprocessamento estratégico que aproximam inteligência governamental e as indústrias mais críticas para o futuro do Brasil.
            </p>
            <div className="h-[1px] w-24 bg-[#00f2ff]/30 mt-6" />
          </div>
        </div>

        {/* Highlight Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="group relative p-6 bg-[#050505]/60 hover:bg-black/90 border border-white/10 rounded-sm transition-all duration-300 hover:shadow-2xl hover:shadow-[#00f2ff]/5 hover:-translate-y-1"
                id={`about-card-${idx}`}
              >
                {/* Micro tech accent */}
                <div className="absolute top-0 right-0 w-8 h-[1px] bg-[#00f2ff]/30 group-hover:bg-[#00f2ff]/90 transition-colors" />
                <div className="absolute top-0 right-0 w-[1px] h-8 bg-[#00f2ff]/30 group-hover:bg-[#00f2ff]/90 transition-colors" />

                <div className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-[#00f2ff]/10 group-hover:border-[#00f2ff]/40 transition-all mb-6">
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-[#00f2ff] transition-colors" />
                </div>

                <h3 className="font-display font-medium text-white tracking-wide text-sm uppercase mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                  {item.title}
                </h3>
                <p className="font-sans font-light text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
