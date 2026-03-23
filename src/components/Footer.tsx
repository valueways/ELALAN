import { motion } from "motion/react";
import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-limestone text-obsidian pt-32 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Massive Background Typography */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none">
        <h2 className="text-[25vw] font-bold leading-none text-obsidian/5 translate-y-1/4">ELALAN</h2>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32">
          <div className="lg:col-span-2">
            <h3 className="text-5xl md:text-7xl font-bold mb-12 leading-none">BUILD YOUR<br /><span className="text-bronze">LEGACY.</span></h3>
            <button className="flex items-center gap-4 group">
              <span className="text-2xl font-bold border-b-2 border-obsidian pb-2 group-hover:text-bronze group-hover:border-bronze transition-colors duration-300">Start a Project</span>
              <div className="w-12 h-12 rounded-full border-2 border-obsidian flex items-center justify-center group-hover:bg-bronze group-hover:border-bronze transition-all duration-300">
                <ArrowUpRight className="group-hover:text-obsidian transition-colors" />
              </div>
            </button>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-bronze">Headquarters</h4>
            <address className="not-italic text-lg leading-relaxed text-obsidian/60">
              9 Macgregor Rd,<br />
              Ikoyi, Lagos,<br />
              Nigeria
            </address>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-bronze">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-2 hover:text-bronze transition-colors">
                <Linkedin size={18} /> <span>LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-bronze transition-colors">
                <Instagram size={18} /> <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-bronze transition-colors">
                <Twitter size={18} /> <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-obsidian/10 text-[10px] uppercase tracking-[0.3em] font-bold text-obsidian/40">
          <span>© 2026 ELALAN Construction Co.</span>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-bronze">Privacy Policy</a>
            <a href="#" className="hover:text-bronze">Terms of Service</a>
          </div>
          <span className="mt-4 md:mt-0">Engineered by AIS</span>
        </div>
      </div>
    </footer>
  );
}
