import React from 'react';
import { motion } from 'framer-motion';
import { Database, Search, FileText, Send, Share2 } from 'lucide-react';

interface PipelineStep {
  id: string;
  label: string;
  icon: any;
  color: string;
}

interface PipelineDiagramProps {
  steps?: PipelineStep[];
  title?: string;
  description?: string;
}

const defaultSteps: PipelineStep[] = [
  { id: 'extract', label: 'Extract', icon: Database, color: '#6366F1' },
  { id: 'classify', label: 'Classify', icon: Share2, color: '#8B5CF6' },
  { id: 'summarize', label: 'Summarize', icon: FileText, color: '#EC4899' },
  { id: 'draft', label: 'Draft', icon: Send, color: '#10B981' }
];

const PipelineDiagram: React.FC<PipelineDiagramProps> = ({ 
  steps = defaultSteps, 
  title = "কিভাবে চেইনিং কাজ করে?",
  description = "একটি বড় কাজকে সরাসরি এআই-কে না দিয়ে ছোট ছোট ধাপে ভাগ করলে একুরেসি বহুগুণ বেড়ে যায়। এই পদ্ধতিকেই বলা হয় **চেইনিং এবং ডিকম্পোজিশন**।"
}) => {
  return (
    <div className="w-full space-y-12 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden md:block z-0" />
        
        {steps.map((step, i) => {
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
              
              {i < steps.length - 1 && (
                <div className="md:hidden w-1 h-8 bg-slate-800" />
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-3xl p-8 flex flex-col items-center text-center space-y-4">
        <h5 className="text-lg font-bold text-indigo-400 uppercase tracking-widest">{title}</h5>
        <p className="text-xs text-slate-400 max-w-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default PipelineDiagram;
