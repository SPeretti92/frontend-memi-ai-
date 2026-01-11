
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo className="h-10" />
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#produit" className="hover:text-white transition-colors">Produit</a>
          <a href="#tarifs" className="hover:text-white transition-colors">Tarifs</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button className="bg-gradient-primary px-5 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-sky-500/20">
          Démarrer
        </button>
      </div>
    </nav>
  );
};
