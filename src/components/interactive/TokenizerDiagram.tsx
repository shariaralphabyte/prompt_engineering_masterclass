import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Hash } from 'lucide-react';

export const TokenizerDiagram: React.FC = () => {
  const [text, setText] = useState("এলএলএম (LLM) শিখুন সহজভাবে।");
  const [tokens, setTokens] = useState<string[]>([]);

  useEffect(() => {
    // Basic pseudo-tokenization for demonstration
    const words = text.split(/(\s+)/);
    const tokenized = words.map(word => {
      if (word.length > 4 && Math.random() > 0.5) {
        return [word.slice(0, 3), word.slice(3)];
      }
      return word;
    }).flat();
    setTokens(tokenized.filter(t => t !== ""));
  }, [text]);

  const colors = [
    '#6366F1', '#F59E0B', '#10B981', '#EF4444', 
    '#8B5CF6', '#EC4899', '#06B6D4', '#F97316'
  ];

  return (
    <div className="space-y-6 w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-indigo-400">
          <Hash size={18} />
          <span className="text-sm font-bold uppercase tracking-widest">টোকেন প্রোসেসিং সিমুলেটর</span>
        </div>
        <div className="bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full font-bold flex items-center gap-2">
          <Info size={12} />
          LLM-এর জন্য প্রতিটি শব্দ সংখ্যায় রূপান্তরিত হয়
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-xs text-slate-400 font-bold uppercase">Enter Text to Tokenize</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full bg-slate-800/80 border border-slate-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none min-h-[100px]"
          placeholder="এখানে কিছু লিখুন..."
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center text-xs text-slate-400 font-bold uppercase">
          <span>Visual Output</span>
          <span className="text-indigo-400">{tokens.length} Tokens Generated</span>
        </div>
        
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 min-h-[120px] flex flex-wrap gap-2">
          <AnimatePresence mode="popLayout">
            {tokens.map((token, index) => (
              <motion.div
                key={`${token}-${index}`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="px-3 py-1.5 rounded-md text-sm font-mono font-medium shadow-sm border border-white/5"
                style={{ 
                  backgroundColor: colors[index % colors.length] + '20',
                  color: colors[index % colors.length]
                }}
              >
                {token === " " ? "␣" : token}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
          <p className="text-[10px] text-slate-500 font-bold mb-1 uppercase">Approx Tokens</p>
          <p className="text-2xl font-black text-white">{tokens.length}</p>
        </div>
        <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
          <p className="text-[10px] text-slate-500 font-bold mb-1 uppercase">Characters</p>
          <p className="text-2xl font-black text-white">{text.length}</p>
        </div>
      </div>
    </div>
  );
};
