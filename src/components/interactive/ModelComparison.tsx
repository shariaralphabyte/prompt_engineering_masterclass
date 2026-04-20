import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Target, Brain } from 'lucide-react';

const models = [
  { name: 'Claude Opus 3.5', speed: 'Moderate', reasoning: 'Extreme', cost: 'High', strength: 'Coding & Nuanced Writing', color: '#7C3AED' },
  { name: 'GPT-4o', speed: 'Fast', reasoning: 'Very High', cost: 'Moderate', strength: 'Versatility & Vision', color: '#10B981' },
  { name: 'Gemini 3 Pro', speed: 'Massive', reasoning: 'High', cost: 'Low', strength: 'Long Context (2M+)', color: '#2563EB' },
  { name: 'OpenAI o1', speed: 'Slow', reasoning: 'God-Tier', cost: 'High', strength: 'Complex Logic & Math', color: '#000000' },
];

export const ModelComparison: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {models.map((model, i) => (
          <motion.div
            key={model.name}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/50 hover:border-slate-500 transition-all group"
          >
            <h4 className="text-lg font-bold mb-3" style={{ color: model.color }}>{model.name}</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1"><Zap size={12}/> Speed</span>
                <span className="text-slate-200 font-bold">{model.speed}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1"><Brain size={12}/> Reasoning</span>
                <span className="text-slate-200 font-bold">{model.reasoning}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1"><Shield size={12}/> Best For</span>
                <span className="text-slate-200 font-bold text-right">{model.strength}</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-700/50">
               <button className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] uppercase font-black tracking-widest transition-colors">
                 Full Technical Specs
               </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-6 text-slate-400 text-sm">
        <h5 className="text-indigo-400 font-bold mb-2 flex items-center gap-2">
          <Target size={16} /> Boss-Level Selection Logic
        </h5>
        <p>
          যদি কোডিং বা বড় আর্কিটেকচারের কাজ হয়, তবে **Claude Opus** সেরা। যদি অনেক বড় ফাইল (বই বা ভিডিও) এনালাইসিস করতে হয়, তবে **Gemini** ব্যবহার করুন। আর যদি কমপ্লেক্স ম্যাথ বা লজিক হয়, তবে **OpenAI o1** ছাড়া উপায় নেই।
        </p>
      </div>
    </div>
  );
};
