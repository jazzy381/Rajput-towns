import { motion } from 'motion/react';
import { ShieldCheck, TrendingUp, Clock, BadgePercent } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#b30000]" />,
    title: "Trusted Agents",
    description: "Our certified professionals carry years of elite experience to secure your dream home safely."
  },
  {
    icon: <BadgePercent className="w-8 h-8 text-[#b30000]" />,
    title: "Affordable Pricing",
    description: "We offer transparent fee structures and the best market negotiations for your budget."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#b30000]" />,
    title: "Secure Investments",
    description: "Data-driven property evaluations to guarantee high-yield returns on your investments."
  },
  {
    icon: <Clock className="w-8 h-8 text-[#b30000]" />,
    title: "Fast Property Dealing",
    description: "Our streamlined legal and operational process ensures lightning-fast closures."
  }
];

export default function WhyUs() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#111111] flex to-[#1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-[#b30000]">RajputTowns</span>
            </h2>
            <p className="text-gray-400 text-lg">
              We separate ourselves through luxury service, unwavering trust, and a modern approach to real estate.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-[#b30000]/50 transition-all group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(179,0,0,0.1)] relative overflow-hidden"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-[#b30000] rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-[#b30000]/30 transition-colors">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Animated Counters */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/10">
          {[
            { metric: "150+", label: "Luxury Homes Sold" },
            { metric: "98%", label: "Client Satisfaction" },
            { metric: "15+", label: "Years Experience" },
            { metric: "$1B+", label: "Property Value Handled" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <h4 className="text-4xl md:text-5xl font-black text-white mb-2">{stat.metric}</h4>
              <p className="text-[#b30000] font-semibold tracking-wider uppercase text-xs sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
