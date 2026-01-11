
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold mb-4">Ils ont fait revivre leurs souvenirs</h2>
            <p className="text-gray-400 max-w-2xl">Découvrez les retours de nos utilisateurs qui ont transformé leurs moments précieux en vidéos mémorables.</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="min-w-full md:min-w-[400px] glass-card p-8 rounded-2xl snap-start relative"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5" />
              <p className="text-lg text-gray-200 mb-8 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-sky-500/30" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
