import { Home, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#b30000]/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#b30000] rounded-lg flex items-center justify-center">
                <Home className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Rajput<span className="text-[#b30000]">Towns</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Turning Dreams Into Addresses. We are the premier luxury real estate agency dedicated to securing the finest properties for elite clients globally.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center text-gray-400 hover:bg-[#b30000] hover:text-white transition-all"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center text-gray-400 hover:bg-[#b30000] hover:text-white transition-all"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center text-gray-400 hover:bg-[#b30000] hover:text-white transition-all"><Instagram className="w-5 h-5"/></a>
              <a href="#" className="w-10 h-10 bg-[#111111] rounded-full flex items-center justify-center text-gray-400 hover:bg-[#b30000] hover:text-white transition-all"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'Properties', 'About Us', 'Agents', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-[#b30000] transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b30000]"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Categories</h4>
            <ul className="flex flex-col gap-3">
              {['Luxury Villas', 'Penthouses', 'Commercial Spaces', 'Plots & Lands', 'Farmhouses'].map((cat) => (
                <li key={cat}>
                  <a href="#" className="text-gray-400 hover:text-[#b30000] transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b30000]"></span>
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive the latest luxury property updates and market news.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-[#111111] border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-[#b30000] transition-colors text-sm w-full"
              />
              <button className="bg-[#b30000] hover:bg-[#8a0000] text-white py-3 rounded-lg font-medium transition-colors text-sm flex items-center justify-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} RajputTowns. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
