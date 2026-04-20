import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Video, Mic, FileSearch, Sparkles } from 'lucide-react';

const mediaTypes = [
  { id: 'image', icon: Image, label: 'Image', color: '#6366F1', desc: 'ভিশন এপিআই দিয়ে ডকুমেন্ট বা চার্ট এনালাইসিস।' },
  { id: 'video', icon: Video, label: 'Video', color: '#EC4899', desc: 'ভিডিও থেকে টাইমস্ট্যাম্প অনুযায়ী তথ্য খুঁজে বের করা।' },
  { id: 'audio', icon: Mic, label: 'Audio', color: '#F59E0B', desc: 'ট্রান্সক্রিপশন এবং অটোমেটেড সামারি জেনারেশন।' }
];

export const MultimodalDemo: React.FC = () => {
  const [activeType, setActiveType] = useState('image');

  const activeData = mediaTypes.find(t => t.id === activeType)!;

  return (
    <div className="w-full space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-400">
          <Sparkles size={18} />
          <span className="text-sm font-bold uppercase tracking-widest">মাল্টিমোডাল ইনপুট ডেমো</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {mediaTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setActiveType(type.id)}
            className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 ${
              activeType === type.id 
                ? 'bg-slate-800 border-indigo-500 shadow-xl shadow-indigo-500/10' 
                : 'bg-slate-900/50 border-slate-700 hover:border-slate-500 opacity-60'
            }`}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: type.color }}>
               <type.icon size={24} />
            </div>
            <span className={`text-xs font-black uppercase tracking-widest ${activeType === type.id ? 'text-white' : 'text-slate-500'}`}>
              {type.label}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
           key={activeType}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -10 }}
           className="bg-slate-800/80 rounded-3xl border border-slate-700 p-8 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center relative overflow-hidden group">
             <activeData.icon size={64} className="text-slate-700 group-hover:text-indigo-500/50 transition-colors" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
             <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-[10px] font-black uppercase text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">Simulation</span>
             </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-white leading-tight uppercase font-mono">
              Multimodal {activeType} Processing
            </h4>
            <p className="text-slate-400 font-medium">
               {activeData.desc}
            </p>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
               <FileSearch size={20} className="text-emerald-400" />
               <div>
                  <p className="text-[10px] text-slate-500 font-black uppercase">Example Output</p>
                  <p className="text-sm font-medium text-slate-200 italic">"The document shows a 25% growth in Q3 profits..."</p>
               </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="p-4 bg-slate-800 border border-slate-700 rounded-xl text-slate-500 text-[10px] font-black uppercase tracking-tighter text-center">
        Gemini 1.5 Pro & GPT-4o are native multimodal models
      </div>
    </div>
  );
};
