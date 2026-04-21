import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, RefreshCcw, CheckCircle, Smartphone } from 'lucide-react';

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  color: string;
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

const GraphBuilder: React.FC<GraphBuilderProps> = ({
  nodes: initialNodes,
  edges: initialEdges,
  descriptions: initialDescriptions,
  title = "LangGraph স্টেট মেশিন"
}) => {
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

  const nodes = initialNodes || defaultNodes;
  const edges = initialEdges || defaultEdges;
  const descriptions = initialDescriptions || defaultDescriptions;

  const [activeNode, setActiveNode] = useState('start');

  return (
    <div className="w-full space-y-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-purple-400">
          <Share2 size={18} />
          <span className="text-sm font-bold uppercase tracking-widest">LangGraph স্টেট মেশিন</span>
        </div>
        <div className="bg-purple-500/10 text-purple-400 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
          Cyclic Workflow Demo
        </div>
      </div>

      <div className="relative bg-slate-800/50 rounded-2xl border border-slate-700/50 aspect-video overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Edges */}
          {edges.map((edge, i) => {
            const from = nodes.find(n => n.id === edge.from)!;
            const to = nodes.find(n => n.id === edge.to)!;
            const isCyclic = edge.from === 'tool' || edge.to === 'tool';
            
            return (
              <motion.path
                key={i}
                d={edge.curved 
                  ? `M ${from.x} ${from.y} Q ${from.x + (to.x - from.x)/2 + 5} ${from.y + (to.y - from.y)/2 - 10} ${to.x} ${to.y}`
                  : `M ${from.x} ${from.y} L ${to.x} ${to.y}`
                }
                stroke={activeNode === edge.from ? '#8B5CF6' : '#334155'}
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                strokeDasharray="2,2"
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
                cx={node.x} cy={node.y} r="4" 
                fill={activeNode === node.id ? node.color : '#1e293b'} 
                stroke={node.color} 
                strokeWidth="0.5"
              />
              <text 
                x={node.x} y={node.y + 8} 
                textAnchor="middle" 
                fill={activeNode === node.id ? 'white' : '#64748b'} 
                fontSize="3" 
                fontWeight="bold"
                className="pointer-events-none select-none"
              >
                {node.label}
              </text>
            </motion.g>
          ))}
        </svg>

        <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                <RefreshCcw size={16} className={activeNode === 'agent' ? 'animate-spin' : ''} />
             </div>
             <div>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Current State</p>
                <p className="text-sm font-bold text-white uppercase">{activeNode}</p>
             </div>
          </div>
          <p className="text-[10px] text-slate-500 italic max-w-[200px] text-right">
            {descriptions[activeNode] || "State বিবরণ পাওয়া যায়নি।"}
          </p>
        </div>
      </div>

      <div className="p-5 bg-purple-500/5 border border-purple-500/20 rounded-2xl flex items-start gap-4">
        <div className="bg-purple-600 p-2 rounded-lg text-white shadow-lg">
           <Smartphone size={20} />
        </div>
        <div>
           <h5 className="font-bold text-purple-100 mb-1">প্রোডাকশন-গ্রেড এআই ওয়ার্কফ্লো</h5>
           <p className="text-[10px] text-slate-400 leading-relaxed uppercase font-medium">
             LangGraph ব্যবহার করে আমরা এমন সিস্টেম বানাতে পারি যা ভুল করলে নিজেই নিজেকে সংশোধন (Self-Correction) করতে পারে এবং প্রয়োজনীয় টুল বারবার ইউজ করতে পারে।
           </p>
        </div>
      </div>
    </div>
  );
};

export default GraphBuilder;
