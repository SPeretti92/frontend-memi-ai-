
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center gap-2 font-black tracking-tighter ${className}`}>
      <span className="text-2xl flex items-center">
        <span className="text-white">memo</span>
        <span className="text-gradient ml-1">IA</span>
      </span>
      <div className="flex gap-0.5 mt-1">
        <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
        <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse delay-75"></div>
      </div>
    </div>
  );
};
