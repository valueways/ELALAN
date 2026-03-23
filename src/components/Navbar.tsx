import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-start mix-blend-difference"
    >
      <div className="flex flex-col">
        <span className="text-2xl font-display font-bold tracking-tighter text-limestone">ELALAN</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-bronze mt-1">Construction Co.</span>
      </div>

      <div className="hidden md:flex flex-col items-end text-right">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-limestone/60">
          <MapPin size={12} className="text-bronze" />
          <span>6.4520° N, 3.4373° E</span>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-limestone/40 mt-1">9 Macgregor Rd, Ikoyi, Lagos</span>
      </div>

      <div className="flex gap-8 items-center">
        <button className="group relative overflow-hidden">
          <span className="text-[11px] uppercase tracking-widest text-limestone block transition-transform duration-500 group-hover:-translate-y-full">Menu</span>
          <span className="text-[11px] uppercase tracking-widest text-bronze absolute top-full left-0 transition-transform duration-500 group-hover:-translate-y-full">Explore</span>
        </button>
      </div>
    </motion.nav>
  );
}
