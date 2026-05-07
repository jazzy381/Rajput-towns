import { motion } from 'motion/react';

const categories = [
  { name: "Luxury Villas", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80", count: "45 Properties" },
  { name: "Modern Apartments", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80", count: "128 Properties" },
  { name: "Commercial Spaces", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80", count: "32 Properties" },
  { name: "Private Farmhouses", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80", count: "18 Properties" },
];

export default function Categories() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Explore By <span className="text-[#b30000]">Category</span>
            </h2>
            <p className="text-gray-400 text-lg">Find exactly what you're looking for.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((col, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={col.image} 
                alt={col.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-[#b30000]/80 transition-colors duration-500 text-white p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-1">{col.name}</h3>
                <p className="text-sm font-medium text-gray-300 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {col.count}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
