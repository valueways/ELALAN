import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    title: "The Obsidian Tower",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
    location: "Ikoyi, Lagos"
  },
  {
    title: "Heritage Heights",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2070",
    location: "Victoria Island"
  },
  {
    title: "Steel Foundry X",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070",
    location: "Lekki Free Zone"
  },
  {
    title: "Limestone Plaza",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070",
    location: "Banana Island"
  }
];

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-obsidian">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-12 left-12 z-10">
          <h2 className="text-4xl md:text-6xl font-bold leading-none">
            SELECTED<br />
            <span className="text-stroke">WORKS</span>
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-48">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              data-cursor="view"
              className="relative flex-shrink-0 w-[80vw] md:w-[45vw] aspect-[4/5] group overflow-hidden cursor-none"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <span className="text-bronze text-xs uppercase tracking-[0.3em] mb-2 block">{project.category}</span>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h3>
                <p className="text-limestone/40 text-sm uppercase tracking-widest">{project.location}</p>
              </div>

              {/* Structural Border Effect */}
              <div className="absolute inset-0 border-[1px] border-limestone/10 group-hover:border-bronze/40 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
