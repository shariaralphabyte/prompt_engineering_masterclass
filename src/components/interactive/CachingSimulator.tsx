import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Zap, TrendingDown, DollarSign } from 'lucide-react';

export const CachingSimulator: React.FC = () => {
  const [tokens, setTokens] = useState(10000);
  const [isCached, setIsCached] = useState(true);

  const basePricePerMillion = 3.00; // Example price for Claude 3.5 Sonnet input
  const cachedPricePerMillion = 0.30; // 90% discount example

  const currentPrice = isCached ? cachedPricePerMillion : basePricePerMillion;
  const cost = (tokens / 1000000) * currentPrice;
  const savings = (tokens / 1000000) * (basePricePerMillion - cachedPricePerMillion);

  return (
    <div className="w-full space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-400">
          <CreditCard size={18} />
          <span className="text-sm font-bold uppercase tracking-widest">টোকেন ইকোনমি ক্যালকুলেটর</span>
        </div>
        <div className="flex items-center gap-2 bg-slate-800 p-1 rounded-lg border border-slate-700">
          <button 
            onClick={() => setIsCached(false)}
            className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase transition-all ${!isCached ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Standard
          </button>
          <button 
             onClick={() => setIsCached(true)}
            className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase transition-all ${isCached ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Cached (Anthropic)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold uppercase text-slate-500">
              <span>Input Tokens (Context)</span>
              <span className="text-white">{tokens.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="1000" 
              max="200000" 
              step="1000"
              value={tokens}
              onChange={(e) => setTokens(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-slate-600 font-bold">
              <span>1K</span>
              <span>200K (Max Context)</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <DollarSign size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Estimated Cost</p>
                  <p className="text-xl font-black text-white">${cost.toFixed(4)}</p>
                </div>
              </div>
              {isCached && (
                <div className="text-right">
                  <p className="text-[10px] text-emerald-500 font-bold uppercase">You Save</p>
                  <p className="text-lg font-black text-emerald-400">-${savings.toFixed(4)}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative aspect-square flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle 
              cx="50" cy="50" r="40" 
              fill="none" stroke="#1e293b" strokeWidth="8" 
            />
            <motion.circle 
              cx="50" cy="50" r="40" 
              fill="none" 
              stroke={isCached ? "#10b981" : "#6366f1"} 
              strokeWidth="8" 
              strokeDasharray="251.2"
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 251.2 - (251.2 * (cost / ((200000 / 1000000) * basePricePerMillion))) }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
             <TrendingDown className={isCached ? "text-emerald-400" : "text-indigo-400"} size={40} />
             <p className="text-2xl font-black text-white mt-2">{isCached ? '90%' : '0%'}</p>
             <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Savings</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl flex items-start gap-3">
        <Zap className="text-emerald-400 shrink-0 mt-1" size={16} />
        <p className="text-sm text-slate-400 leading-relaxed">
          <strong className="text-emerald-400">Boss-Level Hint:</strong> যখন আপনি বড় ডাটাবেস বা কোডবেস ব্যাকগ্রাউন্ডে ইনপুট হিসেবে দেন, তখন `cache_control` ব্যবহার করলে প্রতিবার টোকেন খরচ হবে না। আপনি ৫০% থেকে ৯০% পর্যন্ত খরচ কমাতে পারবেন!
        </p>
      </div>
    </div>
  );
};
