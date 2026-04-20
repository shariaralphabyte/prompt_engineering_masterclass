import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ArrowRight, Activity, GitBranch } from 'lucide-react';

interface Node {
  id: string;
  label: string;
  icon?: any;
  color: string;
}

interface Link {
  from: string;
  to: string;
  label?: string;
}

interface ArchitectureDiagramProps {
  nodes: Node[];
  links: Link[];
  title?: string;
  description?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ nodes, links, title, description }) => {
  return (
    <div className="w-full space-y-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Layers size={20} />
          </div>
          <div>
            <h3 className="text-xl font-bold">{title || 'Architectural Flow'}</h3>
            <p className="text-[10px] text-slate-500 uppercase tracking-widest leading-none mt-1">Cognitive Architecture Diagram</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-800 rounded-full border border-slate-700">
          <Activity size={12} className="text-emerald-400" />
          <span className="text-[9px] font-black uppercase text-slate-400">Animated Pipeline</span>
        </div>
      </div>

      <div className="relative bg-slate-900 shadow-2xl rounded-3xl border border-slate-800 p-10 overflow-hidden flex flex-wrap justify-center gap-12 items-center">
        <div className="absolute inset-0 bg-grid-slate-800 opacity-20" style={{ backgroundSize: '20px 20px', backgroundImage: 'radial-gradient(circle, #1e293b 1px, transparent 1px)' }} />
        
        {nodes.map((node, i) => (
          <React.Fragment key={node.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center gap-3 group"
            >
              <div 
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-white transition-all duration-500 border border-white/5 shadow-2xl"
                style={{ 
                  backgroundColor: node.color,
                  boxShadow: `0 0 40px ${node.color}20` 
                }}
              >
                {node.icon ? <node.icon size={32} /> : <GitBranch size={32} />}
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">{node.label}</p>
            </motion.div>
            
            {i < nodes.length - 1 && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 40 }}
                transition={{ delay: i * 0.15 }}
                className="flex items-center"
              >
                <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent flex-1" />
                <ArrowRight size={16} className="text-slate-600" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>

      {description && (
        <div className="p-5 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl flex items-start gap-4">
           <div className="bg-indigo-600/20 p-2 rounded-lg text-indigo-400">
              <Activity size={20} />
           </div>
           <p className="text-xs text-slate-400 leading-relaxed font-medium">
             {description}
           </p>
        </div>
      )}
    </div>
  );
};
