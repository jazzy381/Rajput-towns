import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#111111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="text-[#b30000]">Touch</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Ready to find your dream property? Our luxury real estate experts are available 24/7 for consultation.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group hover:border-[#b30000] hover:bg-[#b30000]/10 transition-colors">
                  <Phone className="w-5 h-5 text-[#b30000]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Phone</p>
                  <p className="text-white font-medium text-lg">+923207617362</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group hover:border-[#b30000] hover:bg-[#b30000]/10 transition-colors">
                  <Mail className="w-5 h-5 text-[#b30000]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Email</p>
                  <p className="text-white font-medium text-lg">hasnainrajput0316@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group hover:border-[#b30000] hover:bg-[#b30000]/10 transition-colors">
                  <MapPin className="w-5 h-5 text-[#b30000]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Office</p>
                  <p className="text-white font-medium text-lg">Bahria Town, Lahore</p>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder (Styled Map img) */}
            <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10 relative">
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                 alt="Map Location" 
                 className="w-full h-full object-cover filter grayscale opacity-50"
               />
               <div className="absolute inset-0 bg-[#b30000]/10 mix-blend-overlay"></div>
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                 <div className="w-12 h-12 bg-[#b30000] rounded-full flex items-center justify-center animate-bounce shadow-[0_0_20px_rgba(179,0,0,0.6)]">
                    <MapPin className="w-6 h-6 text-white" />
                 </div>
               </div>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1a1a1a] p-8 md:p-10 rounded-2xl border border-white/5"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send Us A Message</h3>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400">First Name</label>
                  <input type="text" className="bg-[#111111] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#b30000] transition-colors" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-gray-400">Last Name</label>
                  <input type="text" className="bg-[#111111] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#b30000] transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400">Email Address</label>
                <input type="email" className="bg-[#111111] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#b30000] transition-colors" placeholder="john@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400">Property Interest</label>
                <select className="bg-[#111111] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#b30000] transition-colors appearance-none">
                  <option>Buying a Property</option>
                  <option>Selling a Property</option>
                  <option>Renting a Property</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea rows={4} className="bg-[#111111] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#b30000] transition-colors" placeholder="Tell us about what you're looking for..."></textarea>
              </div>

              <button type="button" className="w-full py-4 mt-2 bg-[#b30000] hover:bg-[#8a0000] text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
