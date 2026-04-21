import React, { useState, useEffect } from 'react';
import { GitBranch, Target, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';

interface Node {
  id: number;
  title: string;
  status: 'done' | 'pruned' | 'success' | 'processing' | 'pending';
  depth: number;
  pos: { x: number; y: number };
}

interface ReasoningGraphProps {
  nodes?: Node[];
  analysisSteps?: string[];
  title?: string;
}

const ReasoningGraph: React.FC<ReasoningGraphProps> = ({
  nodes: initialNodes,
  analysisSteps: initialSteps,
  title = "Cognitive Lab: Tree-of-Thought (ToT) Visualizer"
}) => {
  const [activeNode, setActiveNode] = useState(0);

  const defaultNodes: Node[] = [
    { id: 0, title: 'Input Query', status: 'done', depth: 0, pos: { x: 50, y: 10 } },
    { id: 1, title: 'Thought A (Logic)', status: 'pruned', depth: 1, pos: { x: 20, y: 40 } },
    { id: 2, title: 'Thought B (Context)', status: 'success', depth: 1, pos: { x: 50, y: 40 } },
    { id: 3, title: 'Thought C (Safety)', status: 'processing', depth: 1, pos: { x: 80, y: 40 } },
    { id: 4, title: 'Refined Path', status: 'pending', depth: 2, pos: { x: 50, y: 75 } },
  ];

  const defaultSteps = [
    "মডেল ইনপুট কুয়েরি থেকে একাধিক থট পাথ জেনারেট করছে।",
    "Thought A লজিক্যাল ভুলের কারণে রিজেক্ট বা প্রুনিং (Pruned) করা হয়েছে।",
    "Thought B সবথেকে সঠিক পথ হিসেবে সিলেক্ট করা হয়েছে।",
    "Thought C এর সেফটি গার্ডরেইল চেক করা হচ্ছে।",
    "ফাইনাল অপ্টিমাইজড আউটপুট তৈরি হচ্ছে।"
  ];

  const nodes = initialNodes || defaultNodes;
  const analysisSteps = initialSteps || defaultSteps;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="premium-card" style={{ padding: '3rem', marginTop: '2rem', background: '#F0F2F5', minHeight: '400px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', zIndex: 10 }}>
        <h4 style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
          Cognitive Lab: Tree-of-Thought (ToT) Visualizer
        </h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
          <GitBranch size={16} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>MONTE CARLO SEARCH ACTIVE</span>
        </div>
      </div>

      <svg width="100%" height="320" style={{ marginTop: '2rem' }}>
        {/* Dynamic Edges */}
        <line x1="50%" y1="10%" x2="20%" y2="40%" stroke="#E5E7EB" strokeWidth="2" />
        <line x1="50%" y1="10%" x2="50%" y2="40%" stroke="#E5E7EB" strokeWidth="2" />
        <line x1="50%" y1="10%" x2="80%" y2="40%" stroke="#E5E7EB" strokeWidth="2" />
        <line x1="50%" y1="40%" x2="50%" y2="75%" stroke="#E5E7EB" strokeWidth="2" />

        {nodes.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <foreignObject 
              key={node.id} 
              x={`${node.pos.x - 10}%`} 
              y={`${node.pos.y - 6}%`} 
              width="20%" 
              height="60"
            >
              <div className="glass" style={{
                padding: '0.75rem',
                borderRadius: '12px',
                border: isActive ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)',
                backgroundColor: isActive ? 'white' : 'rgba(255,255,255,0.7)',
                textAlign: 'center',
                boxShadow: isActive ? '0 10px 20px rgba(212,175,55,0.15)' : 'none',
                opacity: node.status === 'pruned' ? 0.4 : 1,
                transition: 'var(--transition-smooth)'
              }}>
                <div style={{ 
                  color: node.status === 'success' ? '#4CAF50' : 
                         node.status === 'pruned' ? '#F44336' : 
                         node.status === 'processing' ? 'var(--accent-gold)' : 'var(--accent-navy)',
                  marginBottom: '0.25rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {node.status === 'success' ? <CheckCircle2 size={16} /> :
                   node.status === 'pruned' ? <AlertTriangle size={16} /> :
                   <Target size={16} />}
                </div>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-navy)' }}>{node.title}</div>
              </div>
            </foreignObject>
          );
        })}
      </svg>

      <div style={{ 
        marginTop: '2rem', 
        padding: '1.5rem', 
        backgroundColor: 'var(--accent-navy)', 
        borderRadius: '16px',
        color: 'white',
        fontSize: '0.85rem',
        lineHeight: 1.6,
        fontFamily: 'var(--font-bengali)'
      }}>
        <strong>Status এনালাইসিস:</strong> {
          activeNode === 0 ? "মডেল ইনপুট কুয়েরি থেকে একাধিক থট পাথ জেনারেট করছে।" :
          activeNode === 1 ? "Thought A লজিক্যাল ভুলের কারণে রিজেক্ট বা প্রুনিং (Pruned) করা হয়েছে।" :
          activeNode === 2 ? "Thought B সবথেকে সঠিক পথ হিসেবে সিলেক্ট করা হয়েছে।" :
          activeNode === 3 ? "Thought C এর সেফটি গার্ডরেইল চেক করা হচ্ছে।" :
          "ফাইনাল অপ্টিমাইজড আউটপুট তৈরি হচ্ছে।"
        }
      </div>

      <style>{`
        @keyframes flowPulse {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -20; }
        }
      `}</style>
    </div>
  );
};

export default ReasoningGraph;
