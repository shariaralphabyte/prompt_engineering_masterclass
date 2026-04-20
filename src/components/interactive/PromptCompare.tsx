import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle, XCircle } from 'lucide-react';

const examples = [
  {
    title: "Zero-Shot (সাধারণ)",
    type: "bad",
    description: "কোন উদাহরণ ছাড়া প্রম্পট। রেজাল্ট অনেক সময় ভুল হয় বা ফরম্যাট ঠিক থাকে না।",
    content: "একটি বিড়ালের ছবি বর্ণনা করো।",
    result: "বিড়াল খুব সুন্দর প্রাণী। এদের চারটা পা আছে।",
    tokens: 12
  },
  {
    title: "Few-Shot (বস লেভেল)",
    type: "good",
    description: "২-৩টি উদাহরণ যোগ করলে মডেল আপনার স্টাইল বুঝতে পারে।",
    content: `নিচের উদাহরণ অনুসরণ করে বর্ণনা করো:
[উদাহরণ ১] কুকুর: প্রভুভক্ত প্রাণী, যা বাড়ি পাহারা দেয়।
[উদাহরণ ২] বিড়াল: ...`,
    result: "বিড়াল: স্বাধীনচেতা প্রাণী, যা ইঁদুর শিকার করতে পছন্দ করে এবং মানুষের সাথে থাকতে ভালবাসে।",
    tokens: 45
  }
];

export const PromptCompare: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full space-y-6">
      <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700 w-fit">
        {examples.map((ex, i) => (
          <button
            key={ex.title}
            onClick={() => setActiveTab(i)}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === i 
                ? 'bg-indigo-500 text-white shadow-lg' 
                : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            {ex.type === 'good' ? <Sparkles size={14} /> : <XCircle size={14} />}
            {ex.title}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase text-slate-500 tracking-widest">Prompt Input</h4>
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 min-h-[150px] relative">
               <pre className="text-sm text-slate-300 font-mono whitespace-pre-wrap">{examples[activeTab].content}</pre>
               <div className="absolute bottom-4 right-4 flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase">
                  <span>{examples[activeTab].tokens} Tokens</span>
               </div>
            </div>
            <p className="text-sm text-slate-400 italic">
              {examples[activeTab].description}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase text-slate-500 tracking-widest flex items-center gap-2">
              <ArrowRight size={14} /> AI Output
            </h4>
            <div className={`p-5 rounded-2xl border min-h-[150px] flex items-center justify-center text-center ${
              examples[activeTab].type === 'good' 
                ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' 
                : 'bg-slate-800/50 border-slate-700 text-slate-500'
            }`}>
               <div>
                  {examples[activeTab].type === 'good' && <CheckCircle className="mx-auto mb-3" />}
                  <p className="font-medium">{examples[activeTab].result}</p>
               </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="bg-indigo-600/10 p-5 rounded-2xl border border-indigo-600/20 text-slate-400 text-sm">
        <strong className="text-indigo-400">Boss Pro Tip:</strong> যখন আপনার আউটপুটে নির্দিষ্ট কোনো টোন বা ফরম্যাট দরকার হবে, তখন Zero-shot এ সময় নষ্ট না করে সরাসরি ২-৩টি উদাহরণ (Few-shot) দিন। এতে মডেলের একুরেসি ২০-৩০% বাড়ে!
      </div>
    </div>
  );
};
