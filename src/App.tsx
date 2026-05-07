/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquareText } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import WhyUs from './components/WhyUs';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#111111] text-white selection:bg-[#b30000] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <WhyUs />
        <Categories />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Floating AI Chatbot Icon */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-[#b30000] rounded-full shadow-[0_0_20px_rgba(179,0,0,0.6)] flex items-center justify-center text-white hover:bg-[#8a0000] hover:scale-110 transition-all z-50 group">
        <MessageSquareText className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-[#1a1a1a] text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 whitespace-nowrap pointer-events-none">
          Chat with our AI Agent
        </span>
      </button>
    </div>
  );
}
