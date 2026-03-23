import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-obsidian">
      {/* Background Image/Video Placeholder */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian z-10" />
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2070" 
          alt="Construction Site"
          className="w-full h-full object-cover grayscale opacity-60"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="relative z-20 container mx-auto px-6 md:px-12">
        <motion.div
          style={{ opacity, y: contentY }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-5xl"
        >
          <h1 className="text-6xl md:text-[12vw] leading-[0.85] font-bold mb-8">
            SHAPING THE<br />
            <span className="text-bronze">HORIZON.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-24">
            <p className="text-lg md:text-xl text-limestone/60 max-w-md font-light leading-relaxed">
              Nigeria’s Premier General Contractor. Engineered Excellence since inception. We don't just build buildings; we engineer legacies.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-bronze text-obsidian font-bold uppercase tracking-widest text-xs hover:bg-limestone transition-colors duration-300"
            >
              Consult Our Engineers
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Structural Lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-limestone/10 z-20" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-limestone/5 z-20" />
    </section>
  );
}
