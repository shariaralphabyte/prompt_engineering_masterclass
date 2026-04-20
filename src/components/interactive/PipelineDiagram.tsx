import React from 'react';
import { motion } from 'framer-motion';
import { Database, Search, FileText, Send, Share2 } from 'lucide-react';

const pipelineSteps = [
  { id: 'extract', label: 'Extract', icon: Database, color: '#6366F1' },
  { id: 'classify', label: 'Classify', icon: Share2, color: '#8B5CF6' },
  { id: 'summarize', label: 'Summarize', icon: FileText, color: '#EC4899' },
  { id: 'draft', label: 'Draft', icon: Send, color: '#10B981' }
];

export const PipelineDiagram: React.FC = () => {
  return (
    <div className="w-full space-y-12 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden md:block z-0" />
        
        {pipelineSteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center gap-4 group"
            >
              <div 
                className="w-20 h-20 rounded-3xl flex items-center justify-center text-white transition-all duration-500 shadow-2xl border-4 border-slate-900 group-hover:scale-110"
                style={{ backgroundColor: step.color }}
              >
                <Icon size={32} />
              </div>
              <div className="text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">Phase 0{i + 1}</p>
                <h4 className="text-sm font-bold text-slate-300">{step.label}</h4>
              </div>
              
              {i < pipelineSteps.length - 1 && (
                <div className="md:hidden w-1 h-8 bg-slate-800" />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-3xl p-8 flex flex-col items-center text-center space-y-4">
        <h5 className="text-lg font-bold text-indigo-400 uppercase tracking-widest">কিভাবে চেইনিং কাজ করে?</h5>
        <div className="flex flex-wrap justify-center gap-2">
           <span className="bg-slate-800 px-3 py-1 rounded text-xs text-slate-400 font-mono">Input Data</span>
           <span className="text-indigo-400">→</span>
           <span className="bg-indigo-500/20 px-3 py-1 rounded text-xs text-indigo-300 font-mono">Process A</span>
           <span className="text-indigo-400">→</span>
           <span className="bg-purple-500/20 px-3 py-1 rounded text-xs text-purple-300 font-mono">Process B</span>
           <span className="text-indigo-400">→</span>
           <span className="bg-emerald-500/20 px-3 py-1 rounded text-xs text-emerald-300 font-mono">Final Output</span>
        </div>
        <p className="text-xs text-slate-400 max-w-lg leading-relaxed">
          একটি বড় কাজকে সরাসরি এআই-কে না দিয়ে ছোট ছোট ধাপে ভাগ করলে একুরেসি বহুগুণ বেড়ে যায়। এই পদ্ধতিকেই বলা হয় **চেইনিং এবং ডিকম্পোজিশন**।
        </p>
      </div>
    </div>
  );
};
