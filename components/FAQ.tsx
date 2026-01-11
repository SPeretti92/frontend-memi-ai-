
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 max-w-3xl mx-auto px-6">
      <h2 className="text-4xl font-extrabold text-center mb-16">Questions fréquentes</h2>
      <div className="space-y-4">
        {FAQS.map((faq, idx) => (
          <div 
            key={idx} 
            className="border border-white/10 rounded-2xl overflow-hidden glass-card transition-all"
          >
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              {openIndex === idx ? <Minus className="w-5 h-5 text-sky-400" /> : <Plus className="w-5 h-5 text-gray-500" />}
            </button>
            <div 
              className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 p-6 pt-0 border-t border-white/5' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
              <p className="text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
