import React, { useState, useEffect } from 'react';
import { FileText, ChevronRight, CheckSquare, Square, Terminal, Code, Database, Monitor, ShieldCheck } from 'lucide-react';

interface Task {
  id: number;
  label: string;
  status: 'done' | 'processing' | 'pending' | 'success';
  icon: any;
}

interface SpecVisualizerProps {
  tasks?: Task[];
  title?: string;
  bossTip?: string;
}

const SpecVisualizer: React.FC<SpecVisualizerProps> = ({
  tasks: initialTasks,
  title = "SDD (Spec-Driven Development) Visualizer",
  bossTip = "SDD মানে হলো র্যান্ডম কোড না লিখে আগে একটি ব্লু-প্রিন্ট তৈরি করা। এতে এআই এজেন্ট ভুল ছাড়াই সম্পূর্ণ অ্যাপ্লিকেশন ডেভেলপ করতে পারে।"
}) => {
  const [activeTask, setActiveTask] = useState(0);

  const defaultTasks: Task[] = [
    { id: 0, label: 'Parse SPEC.md', status: 'done', icon: FileText },
    { id: 1, label: 'Design API Schema', status: 'done', icon: Database },
    { id: 2, label: 'Initial Backend Setup', status: 'success', icon: Code },
    { id: 3, label: 'Build Frontend UI', status: 'processing', icon: Monitor },
    { id: 4, label: 'Unit Testing', status: 'pending', icon: ShieldCheck },
  ];

  const tasks = initialTasks || defaultTasks;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTask((prev) => (prev + 1) % tasks.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="premium-card" style={{ padding: '3rem', marginTop: '2rem', background: '#1A1A1A', color: 'white', borderRadius: '24px', overflow: 'hidden' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h4 style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
            SDD (Spec-Driven Development) Visualizer
          </h4>
          <p style={{ fontSize: '0.75rem', color: '#4CAF50', marginTop: '0.25rem' }}>• AGENTIC EXECUTION MODE</p>
        </div>
        <Terminal size={20} color="rgba(255,255,255,0.3)" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '2rem' }}>
        {/* Task List */}
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem' }}>
          {tasks.map((task, index) => {
            const isActive = activeTask === index;
            const isDone = activeTask > index;
            return (
              <div key={task.id} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                padding: '0.75rem', 
                borderRadius: '8px',
                background: isActive ? 'rgba(76, 175, 80, 0.1)' : 'transparent',
                marginBottom: '0.5rem',
                opacity: isDone ? 0.5 : 1,
                borderLeft: isActive ? '3px solid #4CAF50' : '3px solid transparent',
                transition: 'var(--transition-smooth)'
              }}>
                {isDone ? <CheckSquare size={16} color="#4CAF50" /> : isActive ? <Terminal size={16} color="#4CAF50" /> : <Square size={16} color="rgba(255,255,255,0.3)" />}
                <span style={{ fontSize: '0.85rem', fontWeight: isActive ? 600 : 400 }}>{task.label}</span>
              </div>
            );
          })}
        </div>

        {/* Blueprint Execution Area */}
        <div style={{ position: 'relative', background: 'rgba(0,0,0,0.3)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#4CAF50' }}>
            {`> Agent running: task-${activeTask}...`}
            <div style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.8)' }}>
              {activeTask === 0 && "// Scanning SPEC.md for business rules..."}
              {activeTask === 1 && "// Designing REST API endpoints (GET, POST)..."}
              {activeTask === 2 && "// Generating Express.js server files..."}
              {activeTask === 3 && "// Building React components with Tailwind..."}
              {activeTask === 4 && "// Running Vitest suite for data integrity..."}
            </div>
          </div>

          {/* Animated Execution Progress */}
          <div style={{ 
            position: 'absolute', 
            bottom: '1.5rem', 
            left: '1.5rem', 
            right: '1.5rem', 
            height: '4px', 
            background: 'rgba(255,255,255,0.1)', 
            borderRadius: '2px' 
          }}>
            <div style={{ 
              height: '100%', 
              background: '#4CAF50', 
              width: `${(activeTask + 1) * 20}%`,
              transition: 'width 1s ease-in-out' 
            }} />
          </div>
        </div>
      </div>

      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem 1.5rem', 
        background: 'rgba(212, 175, 55, 0.1)', 
        border: '1px solid rgba(212, 175, 55, 0.2)',
        borderRadius: '12px',
        fontSize: '0.8rem',
        color: '#D4AF37',
        fontFamily: 'var(--font-bengali)'
      }}>
        <strong>Boss-Level Logic:</strong> {bossTip}
      </div>
    </div>
  );
};

export default SpecVisualizer;
