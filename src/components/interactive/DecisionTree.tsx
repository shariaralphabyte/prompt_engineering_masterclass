import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ArrowRight, RefreshCcw, CheckCircle2 } from 'lucide-react';

interface DecisionOption {
  label: string;
  nextId?: string;
  result?: string;
}

interface DecisionNode {
  id: string;
  question: string;
  options: DecisionOption[];
}

interface DecisionTreeProps {
  data?: Record<string, DecisionNode>;
  title?: string;
  banner?: string;
}

const defaultTree: Record<string, DecisionNode> = {
  start: {
    id: 'start',
    question: "আপনার কাজের মূল লক্ষ্য কী?",
    options: [
      { label: "দ্রুত প্রোটোটাইপ বানানো", nextId: 'vibe' },
      { label: "প্রোডাকশন-গ্রেড এআই অ্যাপ মেকিং", nextId: 'prod' }
    ]
  },
  vibe: {
    id: 'vibe',
    question: "আপনি কি কোডিং-এ খুব দক্ষ?",
    options: [
      { label: "হ্যাঁ, প্রো লেভেল", result: "Vibe Coding with Cursor/Claude Code (Antigravity mode)" },
      { label: "না, বেসিক জানি", result: "Vibe Coding with n8n / Cursor Composer" }
    ]
  },
  prod: {
    id: 'prod',
    question: "আপনার অ্যাপে কি মাল্টি-এজেন্ট কোলাবরেশন দরকার?",
    options: [
      { label: "হ্যাঁ, অনেক এজেন্ট লাগবে", nextId: 'multi' },
      { label: "না, সিঙ্গেল এজেন্ট যথেষ্ট", result: "Production Coding with SPEC.md + Cursor (Agent Mode)" }
    ]
  },
  multi: {
    id: 'multi',
    question: "আপনি কি স্টেট মেশিন এবং লুপ কন্ট্রোল করতে চান?",
    options: [
      { label: "হ্যাঁ, ফুল কন্ট্রোল দরকার", result: "LangGraph (Production-Grade State Machine)" },
      { label: "না, সিম্পল অর্কেস্ট্রেশন হলে হবে", result: "CrewAI or OpenAI Swarm" }
    ]
  }
};

const DecisionTree: React.FC<DecisionTreeProps> = ({ 
  data = defaultTree, 
  title = "ডিসিশন ট্রি সিমুলেটর",
  banner = "প্রজেক্টের শুরুতেই সঠিক ফ্রেমওয়ার্ক এবং মেথডোলজি বেছে নেওয়া অর্ধেক যুদ্ধের সমান। ভাইব কোডিং দিয়ে শুরু করলেও প্রোডাকশনে যাওয়ার আগে অবশ্যই SDD (SPEC-Driven Development) ফলো করা উচিত।"
}) => {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [history, setHistory] = useState<string[]>([]);

  const node = data[currentNodeId] || data['start'];

  const handleOptionClick = (option: DecisionOption) => {
    if (option.nextId) {
      setHistory([...history, currentNodeId]);
      setCurrentNodeId(option.nextId);
    } else if (option.result) {
      setCurrentNodeId(`result:${option.result}`);
    }
  };

  const reset = () => {
    setCurrentNodeId('start');
    setHistory([]);
  };

  return (
    <div className="w-full space-y-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-emerald-400">
          <HelpCircle size={18} />
          <span className="text-sm font-bold uppercase tracking-widest">{title}</span>
        </div>
        <button 
          onClick={reset}
          className="text-[10px] text-slate-500 hover:text-slate-300 flex items-center gap-1 uppercase font-bold tracking-tighter transition-colors"
        >
          <RefreshCcw size={12} /> Reset Tree
        </button>
      </div>

      <div className="relative min-h-[300px] flex items-center justify-center p-8 bg-slate-800/40 rounded-3xl border border-slate-700/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
        
        <AnimatePresence mode="wait">
          {currentNodeId.startsWith('result:') ? (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="text-center space-y-6"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto shadow-xl shadow-emerald-500/10">
                <CheckCircle2 size={40} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">আপনার জন্য সঠিক চয়েস:</p>
                <h3 className="text-2xl font-black text-white">{currentNodeId.split(':')[1]}</h3>
              </div>
              <button 
                onClick={reset}
                className="bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all shadow-lg"
              >
                আবার শুরু করুন
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={currentNodeId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-md space-y-8"
            >
              <h3 className="text-xl font-bold text-slate-100 text-center leading-relaxed">
                {node.question}
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                {node.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(option)}
                    className="group bg-slate-800 hover:bg-emerald-600 border border-slate-700 hover:border-emerald-400 p-5 rounded-2xl flex items-center justify-between transition-all duration-300 text-left shadow-lg"
                  >
                    <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{option.label}</span>
                    <ArrowRight size={18} className="text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-slate-400 text-xs italic leading-relaxed">
        <strong>সতর্কতা:</strong> {banner}
      </div>
    </div>
  );
};

export default DecisionTree;


export default DecisionTree;
