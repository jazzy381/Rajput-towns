import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Michael Chen",
    role: "Tech Executive",
    content: "RajputTowns found me the perfect penthouse. Their agents were incredibly discreet, professional, and negotiated a fantastic deal. The definition of modern luxury service.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Sarah Sterling",
    role: "Property Investor",
    content: "I've worked with many agencies over the years. The team here provides unmatched market insights. Bought two commercial properties through them and the process was flawless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "James & Emma Watson",
    role: "Homeowners",
    content: "We were looking for a specific type of modern villa. RajputTowns delivered exactly what we dreamed of. The transparency and ease of the transaction were highly impressive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <span className="text-[#b30000] font-bold tracking-widest uppercase text-sm mb-2 block">Reviews</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Client <span className="text-[#b30000]">Testimonials</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#111111] p-8 rounded-2xl border border-white/5 relative"
            >
              <Quote className="w-10 h-10 text-[#b30000]/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#b30000] text-[#b30000]" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic text-sm leading-loose">
                "{test.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#b30000]" />
                <div>
                  <h4 className="text-white font-bold">{test.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
