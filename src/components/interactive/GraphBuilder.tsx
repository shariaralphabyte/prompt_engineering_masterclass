import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, RefreshCcw, Smartphone, HelpCircle } from 'lucide-react';
import { resolveIcon } from '../../utils/iconMap';

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  color: string;
  icon?: any;
}

interface Edge {
  from: string;
  to: string;
  curved?: boolean;
  type?: string;
}

interface GraphBuilderProps {
  nodes?: Node[];
  edges?: Edge[];
  descriptions?: Record<string, string>;
  title?: string;
}

const defaultNodes: Node[] = [
  { id: 'start', x: 20, y: 50, label: 'Start', color: '#6366F1' },
  { id: 'agent', x: 50, y: 50, label: 'Agent', color: '#8B5CF6' },
  { id: 'tool', x: 50, y: 20, label: 'Tool Use', color: '#EC4899' },
  { id: 'end', x: 80, y: 50, label: 'End', color: '#10B981' }
];

const defaultEdges: Edge[] = [
  { from: 'start', to: 'agent', curved: false },
  { from: 'agent', to: 'tool', curved: true, type: 'action' },
  { from: 'tool', to: 'agent', curved: true, type: 'observation' },
  { from: 'agent', to: 'end', curved: false, type: 'finish' }
];

const defaultDescriptions = {
  start: "সিস্টেম রান করা শুরু হচ্ছে।",
  agent: "এজেন্ট চিন্তা করছে পরবর্তী পদক্ষেপ কী হবে।",
  tool: "এজেন্ট বাইরের কোনো এপিআই (যেমন: গুগল সার্চ) কল করছে।",
  end: "কাজ শেষ! আউটপুট ইউজারের কাছে পাঠানো হয়েছে।"
};

const GraphBuilder: React.FC<GraphBuilderProps> = ({
  nodes: initialNodes,
  edges: initialEdges,
  descriptions: initialDescriptions,
  title = "LangGraph স্টেট মেশিন"
}) => {
  const nodes = initialNodes || defaultNodes;
  const edges = initialEdges || defaultEdges;
  const descriptions = initialDescriptions || defaultDescriptions;

  const [activeNode, setActiveNode] = useState(nodes[0]?.id || 'start');

  return (
    <div className="w-full space-y-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-indigo-400">
          <Share2 size={18} />
          <span className="text-sm font-bold uppercase tracking-widest">{title}</span>
        </div>
        <div className="bg-indigo-500/10 text-indigo-400 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
          Cyclic Workflow Demo
        </div>
      </div>

      <div className="relative bg-slate-900 rounded-3xl border border-slate-800 aspect-video overflow-hidden shadow-inner">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Edges */}
          {edges.map((edge, i) => {
            const from = nodes.find(n => n.id === edge.from);
            const to = nodes.find(n => n.id === edge.to);
            if (!from || !to) return null;
            
            return (
              <motion.path
                key={i}
                d={edge.curved 
                  ? `M ${from.x} ${from.y} Q ${from.x + (to.x - from.x)/2 + 5} ${from.y + (to.y - from.y)/2 - 10} ${to.x} ${to.y}`
                  : `M ${from.x} ${from.y} L ${to.x} ${to.y}`
                }
                stroke={activeNode === edge.from ? '#8B5CF6' : '#334155'}
                strokeWidth="0.8"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                strokeDasharray={edge.curved ? "2,2" : "none"}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => (
            <motion.g 
              key={node.id}
              onClick={() => setActiveNode(node.id)}
              className="cursor-pointer"
              animate={{ scale: activeNode === node.id ? 1.1 : 1 }}
            >
              <circle 
                cx={node.x} cy={node.y} r="5" 
                fill={activeNode === node.id ? node.color : '#1e293b'} 
                stroke={node.color} 
                strokeWidth="0.5"
              />
              <foreignObject x={node.x - 3} y={node.y - 3} width="6" height="6">
                <div className="w-full h-full flex items-center justify-center text-white">
                  {React.createElement(resolveIcon(node.icon || 'RefreshCcw'), { size: 4 })}
                </div>
              </foreignObject>
              <text 
                x={node.x} y={node.y + 10} 
                textAnchor="middle" 
                fill={activeNode === node.id ? 'white' : '#64748b'} 
                fontSize="4" 
                fontWeight="bold"
                className="pointer-events-none select-none uppercase tracking-tighter"
              >
                {node.label}
              </text>
            </motion.g>
          ))}
        </svg>

        <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                {React.createElement(resolveIcon(nodes.find(n => n.id === activeNode)?.icon || 'Activity'), { 
                  size: 20, 
                  className: activeNode === 'agent' || activeNode === 'orchestrator' ? 'animate-spin' : '' 
                })}
             </div>
             <div>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest leading-none mb-1">State: {activeNode}</p>
                <h5 className="text-sm font-bold text-white uppercase tracking-tight">{nodes.find(n => n.id === activeNode)?.label}</h5>
             </div>
          </div>
          <p className="text-xs text-slate-400 italic max-w-[250px] text-right leading-relaxed">
            {(descriptions as any)[activeNode] || "সিস্টেমের এই ধাপটি পরবর্তী স্টেট ডিসাইড করছে।"}
          </p>
        </div>
      </div>

      <div className="p-5 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl flex items-start gap-4">
        <div className="bg-indigo-600 p-2 rounded-lg text-white shadow-lg">
           <Smartphone size={20} />
        </div>
        <div>
           <h5 className="font-bold text-indigo-100 mb-1 uppercase tracking-tight">প্রোডাকশন-গ্রেড এআই ওয়ার্কফ্লো</h5>
           <p className="text-xs text-slate-400 leading-relaxed font-medium">
             LangGraph ব্যবহার করে আমরা এমন সিস্টেম বানাতে পারি যা ভুল করলে নিজেই নিজেকে সংশোধন (Self-Correction) করতে পারে এবং প্রয়োজনীয় টুল বারবার ইউজ করতে পারে।
           </p>
        </div>
      </div>
    </div>
  );
};

export default GraphBuilder;
