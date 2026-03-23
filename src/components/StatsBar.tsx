import { motion } from "motion/react";
import { ShieldCheck, Star, MapPin } from "lucide-react";

export default function StatsBar() {
  const stats = [
    { icon: <Star size={16} className="text-bronze" />, label: "4.4/5 STAR EXCELLENCE" },
    { icon: <ShieldCheck size={16} className="text-bronze" />, label: "324+ VERIFIED REVIEWS" },
    { icon: <MapPin size={16} className="text-bronze" />, label: "IKOYI, LAGOS BASED" },
  ];

  return (
    <div className="relative z-30 bg-limestone py-6 overflow-hidden border-y-2 border-obsidian">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 px-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4">
                {stat.icon}
                <span className="text-obsidian font-display font-bold text-sm tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
