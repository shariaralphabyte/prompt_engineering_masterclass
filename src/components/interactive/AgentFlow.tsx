import React, { useState, useEffect } from 'react';
import { User, ShieldCheck, Search, PenTool, Database, Cpu, ArrowRight } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  icon: any;
  color: string;
  pos: { x: number; y: number };
}

interface AgentFlowProps {
  agents?: Agent[];
  statusSteps?: string[];
  title?: string;
}

const AgentFlow: React.FC<AgentFlowProps> = ({
  agents: initialAgents,
  statusSteps: initialSteps,
  title = "Agent Swarm Simulator: Hierarchical Pattern"
}) => {
  const [step, setStep] = useState(0);

  const defaultAgents: Agent[] = [
    { id: 'supervisor', name: 'Agent Supervisor', icon: ShieldCheck, color: 'var(--accent-navy)', pos: { x: 50, y: 15 } },
    { id: 'researcher', name: 'Research Specialist', icon: Search, color: 'var(--accent-gold)', pos: { x: 20, y: 60 } },
    { id: 'coder', name: 'Coding Expert', icon: Cpu, color: 'var(--accent-gold)', pos: { x: 50, y: 80 } },
    { id: 'writer', name: 'Content Writer', icon: PenTool, color: 'var(--accent-gold)', pos: { x: 80, y: 60 } },
  ];

  const defaultSteps = [
    "সুপারভাইজার ইউজার প্রম্পট এনালাইসিস করে টাস্ক ডেলিগেট করছে।",
    "রিসার্চ এজেন্ট ইন্টারনেট থেকে লেটেস্ট তথ্য সংগ্রহ করছে।",
    "কোডিং এজেন্ট আর্কিটেকচার অনুযায়ী কোড বেস তৈরি করছে।",
    "রাইটিং এজেন্ট সব তথ্য সাজিয়ে আউটপুট জেনারেট করছে।",
    "ফাইনাল রিভিউ ও আউটপুট ডেলিভারি।"
  ];

  const agents = initialAgents || defaultAgents;
  const statusSteps = initialSteps || defaultSteps;

  return (
    <div className="premium-card" style={{ padding: '3rem', marginTop: '2rem', minHeight: '400px', background: '#F8F9FF', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
        <h4 style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
          Agent Swarm Simulator: Hierarchical Pattern
        </h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4CAF50', animation: 'pulse 1.5s infinite' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>LIVE ORCHESTRATION</span>
        </div>
      </div>

      <svg width="100%" height="300" style={{ marginTop: '2rem' }}>
        {/* Dynamic Lines (Edges) */}
        {agents.slice(1).map((agent, i) => (
          <g key={`edge-${i}`}>
            <line 
              x1={`${agents[0].pos.x}%`} y1={`${agents[0].pos.y}%`} 
              x2={`${agent.pos.x}%`} y2={`${agent.pos.y}%`} 
              stroke="var(--border-color)" 
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            {/* Animated Handoff Pulse */}
            {step === i + 1 && (
              <circle r="4" fill="var(--accent-gold)">
                <animateMotion 
                  dur="1.5s" 
                  repeatCount="indefinite" 
                  path={`M ${agents[0].pos.x * 6} ${agents[0].pos.y * 3} L ${agent.pos.x * 6} ${agent.pos.y * 3}`} 
                  keyPoints="0;1"
                  keyTimes="0;1"
                />
              </circle>
            )}
          </g>
        ))}

        {/* Agent Nodes */}
        {agents.map((agent) => (
          <foreignObject 
            key={agent.id}
            x={`${agent.pos.x - 10}%`} 
            y={`${agent.pos.y - 12}%`} 
            width="20%" 
            height="80"
          >
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              gap: '0.5rem',
              transition: 'var(--transition-smooth)',
              transform: step === (agent.id === 'supervisor' ? 0 : agents.indexOf(agent)) ? 'scale(1.1)' : 'scale(1)'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                background: step === (agent.id === 'supervisor' ? 0 : agents.indexOf(agent)) ? agent.color : 'white',
                color: step === (agent.id === 'supervisor' ? 0 : agents.indexOf(agent)) ? 'white' : agent.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                border: `2px solid ${agent.color}`,
                transition: 'var(--transition-smooth)'
              }}>
                <agent.icon size={24} />
              </div>
              <span style={{ 
                fontSize: '0.7rem', 
                fontWeight: 700, 
                textAlign: 'center', 
                color: 'var(--accent-navy)',
                whiteSpace: 'nowrap'
              }}>
                {agent.name}
              </span>
              {step === (agent.id === 'supervisor' ? 0 : agents.indexOf(agent)) && (
                <div style={{ 
                  fontSize: '0.6rem', 
                  color: 'var(--text-secondary)', 
                  background: 'white', 
                  padding: '2px 8px', 
                  borderRadius: '100px',
                  border: '1px solid var(--border-color)',
                  animation: 'fadeIn 0.3s ease-out'
                }}>
                  {agent.id === 'supervisor' ? 'Thinking...' : 'Executing Task...'}
                </div>
              )}
            </div>
          </foreignObject>
        ))}
      </svg>

      <div style={{ 
        marginTop: '2rem', 
        padding: '1.5rem', 
        background: 'white', 
        borderRadius: '12px', 
        border: '1px solid var(--border-color)',
        fontSize: '0.85rem',
        color: 'var(--accent-navy)',
        fontFamily: 'var(--font-bengali)',
        lineHeight: '1.6'
      }}>
        <strong>Current Status:</strong> {
          step === 0 ? "সুপারভাইজার ইউজার প্রম্পট এনালাইসিস করে টাস্ক ডেলিগেট করছে।" :
          step === 1 ? "রিসার্চ এজেন্ট ইন্টারনেট থেকে লেটেস্ট তথ্য সংগ্রহ করছে।" :
          step === 2 ? "কোডিং এজেন্ট আর্কিটেকচার অনুযায়ী কোড বেস তৈরি করছে।" :
          step === 3 ? "রাইটিং এজেন্ট সব তথ্য সাজিয়ে আউটপুট জেনারেট করছে।" :
          "ফাইনাল রিভিউ ও আউটপুট ডেলিভারি।"
        }
      </div>

      <style>{`
        @keyframes pulse {
          0% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.5; transform: scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AgentFlow;
