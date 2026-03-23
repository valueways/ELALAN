import { motion } from "motion/react";
import { Construction, ShieldCheck, Clock } from "lucide-react";

export default function StructuralIntegrity() {
  return (
    <section className="relative min-h-screen bg-limestone text-obsidian flex flex-col md:flex-row overflow-hidden">
      {/* Left Side: Macro Shot */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          src="https://images.unsplash.com/photo-1517089534706-33c241f2b3ee?auto=format&fit=crop&q=80&w=1974" 
          alt="Concrete Texture"
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-bronze/10 mix-blend-multiply" />
        
        <div className="absolute top-12 left-12">
          <span className="text-[10vw] font-bold text-obsidian/5 leading-none select-none">INTEGRITY</span>
        </div>
      </div>

      {/* Right Side: Copy */}
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center border-l-2 border-obsidian">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-bronze font-bold uppercase tracking-[0.4em] text-xs mb-6 block">Methodology</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-[0.9]">
            THE IKOYI STANDARD OF<br />
            <span className="italic font-light">QUALITY.</span>
          </h2>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 flex-shrink-0 border-2 border-obsidian flex items-center justify-center">
                <Construction size={20} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Structural Permanence</h4>
                <p className="text-obsidian/60 leading-relaxed">We engineer for generations. Every foundation is a testament to our commitment to the Lagos skyline.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 flex-shrink-0 border-2 border-obsidian flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Reinforced Trust</h4>
                <p className="text-obsidian/60 leading-relaxed">Transparency in every beam. Our clients are partners in the engineering process from day one.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 flex-shrink-0 border-2 border-obsidian flex items-center justify-center">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Precision Timeline</h4>
                <p className="text-obsidian/60 leading-relaxed">Engineering mastery means meeting deadlines without compromising the structural soul of the project.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Grain */}
      <div className="absolute inset-0 grain-overlay opacity-[0.03] pointer-events-none" />
    </section>
  );
}
