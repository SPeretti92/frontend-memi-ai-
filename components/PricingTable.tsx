
import React from 'react';
import { PricingTier } from '../types';

interface PricingTableProps {
  tiers: PricingTier[];
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export const PricingTable: React.FC<PricingTableProps> = ({ tiers, title, subtitle, icon }) => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white/5 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-400 italic">{subtitle}</p>
        </div>
      </div>
      
      <div className="overflow-x-auto rounded-xl border border-white/10 glass-card">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">Pack</th>
              <th className="px-6 py-4 font-semibold">Nb d’images</th>
              <th className="px-6 py-4 font-semibold">Recolle</th>
              <th className="px-6 py-4 font-semibold">Durée totale</th>
              <th className="px-6 py-4 font-semibold">Prix</th>
              <th className="px-6 py-4 font-semibold">Prix / photo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {tiers.map((tier, idx) => (
              <tr 
                key={idx} 
                className={`group transition-colors hover:bg-white/5 ${tier.highlight ? 'bg-sky-500/5' : ''}`}
              >
                <td className="px-6 py-5 font-bold text-white">
                    <div className="flex items-center gap-2">
                        {tier.pack}
                        {tier.highlight && <span className="text-[10px] bg-sky-500 px-1.5 py-0.5 rounded text-white uppercase font-black">Top</span>}
                    </div>
                </td>
                <td className="px-6 py-5 text-gray-300">{tier.images}</td>
                <td className="px-6 py-5 text-gray-300">{tier.recolle}</td>
                <td className="px-6 py-5 text-gray-300">{tier.duration}</td>
                <td className="px-6 py-5 font-bold text-white text-lg">{tier.price}</td>
                <td className="px-6 py-5 text-gray-400 text-sm italic">{tier.pricePerPhoto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
