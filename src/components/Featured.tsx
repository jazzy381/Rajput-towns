import { motion } from 'motion/react';
import { Bed, Bath, Square, MapPin } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "The Glass House Penthouse",
    location: "Bahria Town, Lahore",
    price: "₨ 85,000,000",
    beds: 4,
    baths: 5,
    sqft: "5,200",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1170&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Modern Minimalist Villa",
    location: "DHA Phase 6, Lahore",
    price: "₨ 123,000,000",
    beds: 6,
    baths: 7,
    sqft: "8,500",
    image: "https://images.unsplash.com/photo-1600607687988-ce4d6ed9d8d8?auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Skyline Luxury Apartment",
    location: "Gulberg III, Lahore",
    price: "₨ 42,000,000",
    beds: 3,
    baths: 3,
    sqft: "2,800",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1170&q=80",
    featured: false
  }
];

export default function Featured() {
  return (
    <section id="properties" className="py-24 bg-[#111111] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-[#b30000]">Properties</span>
            </h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              Explore our hand-picked selection of premium estates and luxury living spaces.
            </p>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white hover:text-[#b30000] font-medium flex items-center gap-2 transition-colors border-b border-transparent hover:border-[#b30000] pb-1"
          >
            View All Properties →
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all hover:-translate-y-2 shadow-lg hover:shadow-[0_10px_30px_rgba(179,0,0,0.1)]"
            >
              <div className="relative h-64 overflow-hidden">
                {property.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-[#b30000] text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                    Featured
                  </div>
                )}
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <span className="text-2xl font-bold text-white tracking-tight">{property.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#b30000] transition-colors">{property.title}</h3>
                <div className="flex items-center text-gray-400 mb-6 gap-1 text-sm">
                  <MapPin className="w-4 h-4 text-[#b30000]" />
                  {property.location}
                </div>
                
                <div className="flex justify-between items-center py-4 border-t border-white/10 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Square className="w-5 h-5 text-gray-500" />
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>

                <button className="w-full mt-4 py-3 border border-[#b30000] text-[#b30000] group-hover:bg-[#b30000] group-hover:text-white rounded-md font-medium transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
