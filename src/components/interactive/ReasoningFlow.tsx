import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, HelpCircle, ArrowDown, CheckCircle2, AlertCircle } from 'lucide-react';

const reasoningSteps = [
  { 
    id: 1, 
    type: 'query', 
    text: "প্রশ্ন: প্রফেশনাল ইমেইল লেখার জন্য ৩টি টিপস কী কী?", 
    icon: HelpCircle 
  },
  { 
    id: 2, 
    type: 'reasoning', 
    text: "ধাপ ১: ইউজারের উদ্দেশ্য বুঝতে হবে (প্রফেশনাল টোন)।", 
    icon: Brain 
  },
  { 
    id: 3, 
    type: 'reasoning', 
    text: "ধাপ ২: কি কি পয়েন্ট জরুরি তা ফিল্টার করা (সাবজেক্ট লাইন, সম্ভাষণ, কল-টু-অ্যাকশন)।", 
    icon: Brain 
  },
  { 
    id: 4, 
    type: 'answer', 
    text: "উত্তর: ১. ক্লিয়ার সাবজেক্ট ২. মার্জিত সম্ভাষণ ৩. স্পষ্ট সিগনেচার।", 
    icon: CheckCircle2 
  }
];

export const ReasoningFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full space-y-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400">
            <Brain size={20} />
          </div>
          <div>
            <h3 className="text-xl font-bold">রিজনিং ইঞ্জিনিয়ারিং</h3>
            <p className="text-xs text-slate-400 uppercase tracking-widest">Chain of Thought (CoT)</p>
          </div>
        </div>
        <button 
          onClick={() => setActiveStep((prev) => (prev + 1) % (reasoningSteps.length + 1))}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 transition-all flex items-center gap-2"
        >
          {activeStep >= reasoningSteps.length ? 'রিসেট করুন' : 'পরবর্তী ধাপ'}
        </button>
      </div>

      <div className="relative space-y-6">
        <AnimatePresence>
          {reasoningSteps.slice(0, activeStep).map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`p-5 rounded-2xl border flex gap-4 items-start ${
                  step.type === 'query' ? 'bg-slate-800/80 border-slate-700' :
                  step.type === 'reasoning' ? 'bg-indigo-500/5 border-indigo-500/20 italic' :
                  'bg-emerald-500/5 border-emerald-500/20 font-bold'
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  step.type === 'query' ? 'bg-slate-700 text-slate-300' :
                  step.type === 'reasoning' ? 'bg-indigo-500/10 text-indigo-400' :
                  'bg-emerald-500/10 text-emerald-400'
                }`}>
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <p className={`text-sm ${
                    step.type === 'query' ? 'text-slate-300' :
                    step.type === 'reasoning' ? 'text-indigo-300' :
                    'text-emerald-300'
                  }`}>
                    {step.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {activeStep === 0 && (
          <div className="h-48 border-2 border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center text-slate-600 text-center p-8">
            <AlertCircle size={32} className="mb-3 opacity-20" />
            <p className="text-sm font-medium">নিচের 'পরবর্তী ধাপ' বাটনে ক্লিক করে দেখুন এআই কিভাবে ধাপে ধাপে চিন্তা করে।</p>
          </div>
        )}
      </div>

      <div className="p-5 bg-orange-500/5 border border-orange-500/20 rounded-2xl">
         <h5 className="font-bold text-orange-400 mb-2 flex items-center gap-2 text-sm">
           <Brain size={16} /> Boss-Level Tech: Chain of Thought
         </h5>
         <p className="text-xs text-slate-400 leading-relaxed font-medium">
           জটিল কোনো প্রশ্ন করলে এআই-কে বলুন "ধাপে ধাপে চিন্তা করো" (Let's think step by step)। এতে এআই সরাসরি উত্তরে না গিয়ে লজিক্যাল সিকুয়েন্স মেইনটেইন করে, যা ভুল উত্তর দেওয়ার সম্ভাবনা ব্যাপকভাবে কমিয়ে দেয়।
         </p>
      </div>
    </div>
  );
};
