import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Phone, Mail, MapPin, Globe, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    mensagem: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email) return;

    setIsLoading(true);

    // Simulate sending to high-speed corporate pipeline
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ nome: "", email: "", empresa: "", mensagem: "" });
    }, 1800);
  };

  return (
    <section
      id="contato"
      className="relative w-full py-24 md:py-36 bg-[#050505] border-t border-white/10 overflow-hidden"
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00f2ff]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Technical Info (Left Column) */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="font-mono text-xs text-[#00f2ff] uppercase tracking-[0.3em] block mb-3">
                04 // INTERAÇÃO DIRETA
              </span>
              <h2 className="font-display font-light text-3xl md:text-5xl text-white tracking-tight leading-tight mb-6">
                Inicie Seu Diagnóstico Orbital
              </h2>
              <p className="font-sans font-light text-xs md:text-sm text-gray-400 leading-relaxed mb-10 max-w-md">
                Deixe seus requisitos básicos ou descreva a área espacial de interesse. Nossos engenheiros cartógrafos, agrônomos e computacionais analisarão seus alvos preliminarmente.
              </p>
            </div>

            {/* Quick Contact Coordinates Grid */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm border border-white/10 bg-[#00f2ff]/5 flex items-center justify-center text-[#00f2ff]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-gray-500 uppercase">Contato Direto</span>
                  <span className="font-sans text-xs text-gray-300 font-medium">+55 (61) 3201-9988</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm border border-white/10 bg-[#00f2ff]/5 flex items-center justify-center text-[#00f2ff]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-gray-500 uppercase">Propostas e Orçamentos</span>
                  <span className="font-sans text-xs text-gray-300 font-medium">projetos@geosensing.co</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-sm border border-white/10 bg-[#00f2ff]/5 flex items-center justify-center text-[#00f2ff]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-gray-500 uppercase">Matriz de Engenharia</span>
                  <span className="font-sans text-xs text-gray-300 font-medium">Ed. Corporate, Asa Sul, Brasília - DF</span>
                </div>
              </div>
            </div>

            {/* Micro Metadata tag */}
            <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-3">
              <Globe className="w-4 h-4 text-[#00f2ff] animate-spin" style={{ animationDuration: '8s' }} />
              <span className="font-mono text-[9px] text-gray-500 uppercase">SISTEMA ATIVO GLOBALMENTE • UTC -3</span>
            </div>
          </div>

          {/* Form container (Right Column) */}
          <div className="lg:col-span-12 xl:col-span-7 lg:pl-8">
            <div className="relative bg-black/40 border border-[#00f2ff]/20 rounded-sm p-8 md:p-10 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-6 relative z-10"
                    id="contact-form"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="relative">
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 hover:bg-white/[0.07] focus:bg-black/50 border border-white/10 focus:border-[#00f2ff]/60 rounded-sm px-4 py-3.5 text-xs text-white placeholder-gray-500 transition-all outline-none"
                          placeholder="Seu nome completo"
                        />
                        <label
                          htmlFor="nome"
                          className="absolute -top-2 left-3 bg-[#050505] px-1 text-[9px] font-mono tracking-wider text-gray-400 uppercase"
                        >
                          Nome / Representante
                        </label>
                      </div>

                      {/* Email input */}
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 hover:bg-white/[0.07] focus:bg-black/50 border border-white/10 focus:border-[#00f2ff]/60 rounded-sm px-4 py-3.5 text-xs text-white placeholder-gray-500 transition-all outline-none"
                          placeholder="exemplo@empresa.com"
                        />
                        <label
                          htmlFor="email"
                          className="absolute -top-2 left-3 bg-[#050505] px-1 text-[9px] font-mono tracking-wider text-gray-400 uppercase"
                        >
                          E-mail Corporativo
                        </label>
                      </div>
                    </div>

                    {/* Company input */}
                    <div className="relative">
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 hover:bg-white/[0.07] focus:bg-black/50 border border-white/10 focus:border-[#00f2ff]/60 rounded-sm px-4 py-3.5 text-xs text-white placeholder-gray-500 transition-all outline-none"
                        placeholder="Nome da corporação ou órgão público"
                      />
                      <label
                        htmlFor="empresa"
                        className="absolute -top-2 left-3 bg-[#050505] px-1 text-[9px] font-mono tracking-wider text-gray-400 uppercase"
                      >
                        Organização / Empresa
                      </label>
                    </div>

                    {/* Message textarea */}
                    <div className="relative">
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={4}
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 hover:bg-white/[0.07] focus:bg-black/50 border border-white/10 focus:border-[#00f2ff]/60 rounded-sm px-4 py-3.5 text-xs text-white placeholder-gray-500 transition-all outline-none resize-none"
                        placeholder="Descreva seu projeto, extensão em hectares ou área de interesse (se aplicável)..."
                      />
                      <label
                        htmlFor="mensagem"
                        className="absolute -top-2 left-3 bg-[#050505] px-1 text-[9px] font-mono tracking-wider text-gray-400 uppercase"
                      >
                        Descrição Cartográfica / Mensagem
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group flex items-center justify-center gap-2.5 bg-[#00f2ff] hover:bg-cyan-300 disabled:bg-[#00f2ff]/30 text-black font-sans text-xs tracking-widest uppercase font-semibold py-4 px-6 rounded-sm transition-colors cursor-pointer select-none"
                      id="submit-contact"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 text-black animate-spin" />
                          <span>Processando dados...</span>
                        </>
                      ) : (
                        <>
                          <span>Iniciar Estudo Prévio</span>
                          <Send className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12 relative z-10"
                    id="success-message"
                  >
                    <CheckCircle2 className="w-14 h-14 text-emerald-400 mb-6 animate-pulse" />
                    <h3 className="font-display font-medium text-lg md:text-xl text-white uppercase tracking-wider mb-3">
                      CONEXÃO REALIZADA COM SUCESSO
                    </h3>
                    <p className="font-sans font-light text-xs md:text-sm text-gray-300 leading-relaxed max-w-md mb-8">
                      Recebemos seus parâmetros cadastrais. Um dos nossos analistas seniores de Geotecnologias analisará a cobertura de satélites ativa da sua região e responderá em até **2 horas úteis**.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] font-mono tracking-widest uppercase text-gray-500 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-sm transition-colors"
                    >
                      enviar outra mensagem
                    </button>
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
