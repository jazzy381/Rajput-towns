import { motion } from 'motion/react';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Mansion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block py-1 px-3 bg-[#b30000]/20 text-[#b30000] border border-[#b30000]/50 rounded-full text-sm font-semibold tracking-wider mb-6">
            PREMIUM REAL ESTATE
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Find Your <span className="text-[#b30000]">Dream</span> Property with RajputTowns
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Turning Dreams Into Addresses. Discover exclusive luxury homes, modern apartments, and premium commercial spaces designed for a lifestyle of elegance.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <button className="px-8 py-4 bg-[#b30000] hover:bg-[#8a0000] text-white rounded-md font-medium transition-all shadow-[0_0_20px_rgba(179,0,0,0.4)]">
              Explore Properties
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-md font-medium transition-all">
              Contact Agent
            </button>
          </div>
        </motion.div>

        {/* Search Bar - Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 md:p-6 rounded-2xl w-full max-w-5xl shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Location
              </label>
              <input 
                type="text" 
                placeholder="City, Neighborhood..." 
                className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-[#b30000] transition-colors placeholder:text-gray-500"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1">
                <Home className="w-3 h-3" /> Property Type
              </label>
              <select className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-[#b30000] transition-colors appearance-none cursor-pointer">
                <option value="" className="bg-[#111111]">All Types</option>
                <option value="villa" className="bg-[#111111]">Luxury Villa</option>
                <option value="apartment" className="bg-[#111111]">Penthouse</option>
                <option value="commercial" className="bg-[#111111]">Commercial</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold flex items-center gap-1">
                <DollarSign className="w-3 h-3" /> Price Range
              </label>
              <select className="w-full bg-transparent border-b border-white/20 text-white pb-2 focus:outline-none focus:border-[#b30000] transition-colors appearance-none cursor-pointer">
                <option value="" className="bg-[#111111]">Any Price</option>
                <option value="1" className="bg-[#111111]">₨ 10M - ₨ 50M</option>
                <option value="2" className="bg-[#111111]">₨ 50M - ₨ 100M</option>
                <option value="3" className="bg-[#111111]">₨ 100M+</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full bg-[#b30000] hover:bg-[#8a0000] text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
