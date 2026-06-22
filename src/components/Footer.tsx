import { Satellite, ShieldCheck, Cpu } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 bg-[#050505] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left branding credentials */}
        <div className="flex flex-col text-center md:text-left gap-1.5">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Satellite className="w-4 h-4 text-[#00f2ff]" />
            <span className="font-display font-medium tracking-widest text-xs uppercase text-white">
              GEOSENSING • GLOBAL OBSERVATORY
            </span>
          </div>
          <span className="font-mono text-[9px] text-gray-500">
            © {currentYear} GeoSensing Ltda. Todos os direitos reservados. CNPJ 24.551.403/0001-90
          </span>
        </div>

        {/* Right certifications / security info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 font-mono text-[9px] text-gray-400 border border-white/10 bg-[#00f2ff]/5 px-3 py-1.5 rounded-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>LGPD COMPLIANT DATA</span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[9px] text-gray-400 border border-white/10 bg-[#00f2ff]/5 px-3 py-1.5 rounded-sm">
            <Cpu className="w-3.5 h-3.5 text-[#00f2ff]" />
            <span>CLOUD COMPUTE API v2.4</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
