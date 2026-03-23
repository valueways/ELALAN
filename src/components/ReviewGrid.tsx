import { motion } from "motion/react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Oluwaseun Adeyemi",
    role: "Real Estate Developer",
    text: "ELALAN transformed our vision into a digital monolith. Their attention to structural detail is unmatched in Lagos.",
    rating: 5
  },
  {
    name: "Chidi Okoro",
    role: "Architectural Consultant",
    text: "Precision in motion. They don't just build; they engineer legacies. The Ikoyi project was a masterclass in efficiency.",
    rating: 4
  },
  {
    name: "Fatima Yusuf",
    role: "Private Client",
    text: "The weight of the concrete and the precision of the steel—you feel it in their work. Simply the best in Nigeria.",
    rating: 5
  },
  {
    name: "Emeka Nwosu",
    role: "Industrialist",
    text: "A fusion of Swiss precision and Nigerian resilience. ELALAN is the only contractor I trust with my industrial projects.",
    rating: 5
  },
  {
    name: "Tunde Bakare",
    role: "Commercial Investor",
    text: "Built on trust, reinforced by excellence. Their 4.4-star reputation is well-deserved and frankly, an understatement.",
    rating: 4
  }
];

export default function ReviewGrid() {
  return (
    <section className="py-32 px-6 md:px-12 bg-obsidian relative overflow-hidden">
      <div className="container mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">REINFORCED BY<br /><span className="text-bronze">TESTIMONIALS</span></h2>
          <p className="text-limestone/40 uppercase tracking-widest text-sm">324+ Reviews. One Standard: Perfection.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid bg-limestone/5 p-8 border-[1px] border-limestone/10 hover:border-bronze/40 transition-colors duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className={i < review.rating ? "text-bronze fill-bronze" : "text-limestone/20"} />
                ))}
              </div>
              <p className="text-lg text-limestone/80 mb-8 italic leading-relaxed">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-limestone">{review.name}</h4>
                <span className="text-xs text-bronze uppercase tracking-widest">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-limestone/5 pointer-events-none" />
      <div className="absolute top-0 left-2/3 w-[1px] h-full bg-limestone/5 pointer-events-none" />
    </section>
  );
}
