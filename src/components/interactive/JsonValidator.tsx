import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Braces, CheckCircle, AlertTriangle, Code2 } from 'lucide-react';

export const JsonValidator: React.FC = () => {
  const [json, setJson] = useState('{\n  "name": "Expert AI Agent",\n  "version": 1,\n  "capabilities": ["Reasoning", "Tool Use"]\n}');
  
  const validate = () => {
    try {
      JSON.parse(json);
      return { valid: true, error: null };
    } catch (e: any) {
      return { valid: false, error: e.message };
    }
  };

  const { valid, error } = validate();

  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-indigo-400">
          <Braces size={18} />
          <span className="text-sm font-bold uppercase tracking-widest">লাইভ JSON স্কিমা ভ্যালিডেটর</span>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase transition-all ${valid ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
          {valid ? <CheckCircle size={12} /> : <AlertTriangle size={12} />}
          {valid ? 'Valid JSON' : 'Syntax Error'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[10px] font-black uppercase text-slate-500 px-1">
             <span>Editor (Input)</span>
             <Code2 size={12} />
          </div>
          <textarea
            value={json}
            onChange={(e) => setJson(e.target.value)}
            className="w-full h-64 bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-emerald-400 font-mono text-sm focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none shadow-inner"
            spellCheck={false}
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-[10px] font-black uppercase text-slate-500 px-1">
             <span>Validation Result</span>
             <span>Strict Mode</span>
          </div>
          <div className="h-64 bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col justify-center items-center text-center">
            {valid ? (
               <motion.div 
                 initial={{ scale: 0.9, opacity: 0 }} 
                 animate={{ scale: 1, opacity: 1 }}
                 className="space-y-4"
               >
                 <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle size={32} />
                 </div>
                 <div>
                    <h5 className="text-lg font-bold text-white mb-1">পার্সিং সফল!</h5>
                    <p className="text-sm text-slate-400 max-w-[200px] mx-auto leading-relaxed">
                      মডেলটি সঠিকভাবে স্ট্রাকচারড আউটপুট জেনারেট করেছে।
                    </p>
                 </div>
               </motion.div>
            ) : (
              <motion.div 
                initial={{ x: 10, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }}
                className="space-y-4 text-red-400"
              >
                <AlertTriangle size={48} className="mx-auto opacity-50" />
                <div>
                   <h5 className="text-lg font-bold mb-1 uppercase tracking-tighter">Parsing Failed</h5>
                   <p className="text-xs font-mono text-red-400/70 p-3 bg-red-500/5 rounded-lg border border-red-500/10 mb-4 whitespace-normal break-all">
                     {error}
                   </p>
                   <p className="text-[10px] text-slate-500 uppercase font-black">AI will retry output based on this error</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-xl text-slate-400 text-xs leading-relaxed">
        <strong className="text-indigo-400">Boss Tip:</strong> আপনি যখন `Strict: true` ব্যবহার করবেন (OpenAI) অথবা Pydantic স্কিমা দেবেন, তখন মডেলটি গ্যারান্টি দেয় যে আউটপুট এই ফরম্যাটেই হবে। যদি কখনো ভুল হয় (হ্যালুসিনেশন), তবে এই এরর টাই এআই-কে ফিডব্যাক হিসেবে দিলে সে নিজেই নিজেকে সংশোধন করে সঠিক JSON দিবে।
      </div>
    </div>
  );
};
