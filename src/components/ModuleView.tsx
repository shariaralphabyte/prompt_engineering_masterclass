import React from 'react';
import { Sparkles, PlayCircle, Lock, ArrowLeft } from 'lucide-react';
import TokenViz from './interactive/TokenViz';
import EfficiencyLab from './interactive/EfficiencyLab';
import AgentFlow from './interactive/AgentFlow';
import MemoryTimeline from './interactive/MemoryTimeline';
import ReasoningGraph from './interactive/ReasoningGraph';
import SpecVisualizer from './interactive/SpecVisualizer';
import SecuritySandbox from './interactive/SecuritySandbox';
import { lessonRegistry } from '../data/lessons';

interface Lesson {
  id: string;
  title: string;
  content: string;
}

interface Module {
  id: string;
  title: string;
  labType?: string;
  lessons: Lesson[];
  bossSecret?: string;
}

interface ModuleViewProps {
  module: Module;
  phaseTitle: string;
  selectedLessonId: string | null;
  onSelectLesson: (id: string | null) => void;
}

// Basic Markdown-like renderer for deep dive content
const SimpleMarkdown: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split('\n');
  return (
    <div className="markdown-content" style={{ lineHeight: '1.9', fontSize: '1.15rem', color: 'var(--text-primary)', fontFamily: 'var(--font-bengali)' }}>
      {lines.map((line, i) => {
        if (line.startsWith('### ')) return <h3 key={i} style={{ marginTop: '2.5rem', marginBottom: '1.25rem', fontSize: '1.75rem', color: 'var(--text-primary)', fontWeight: 800 }}>{line.replace('### ', '')}</h3>;
        if (line.startsWith('#### ')) return <h4 key={i} style={{ marginTop: '1.75rem', marginBottom: '1.25rem', fontSize: '1.35rem', color: 'var(--accent-blue)', fontWeight: 700 }}>{line.replace('#### ', '')}</h4>;
        if (line.startsWith('* ')) return <li key={i} style={{ marginLeft: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{line.replace('* ', '')}</li>;
        if (line.trim() === '') return <br key={i} />;
        
        // Handle bold text **...**
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={i} style={{ marginBottom: '1.25rem' }}>
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j} style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
};

const ModuleView: React.FC<ModuleViewProps> = ({ module, phaseTitle, selectedLessonId, onSelectLesson }) => {
  // Find detailed lesson data if available
  const moduleDeepData = lessonRegistry[module.id];
  const selectedLessonDeepData = moduleDeepData?.lessons.find((l: any) => l.id === selectedLessonId);

  if (selectedLessonId && selectedLessonDeepData) {
    return (
      <div className="lesson-deep-view" style={{ animation: 'fadeIn 0.5s ease-out' }}>
        <button 
          onClick={() => onSelectLesson(null)}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '2.5rem',
            fontSize: '0.9rem',
            fontWeight: 600,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)'
          }}
        >
          <ArrowLeft size={18} /> Back to Module Overview
        </button>
        
        <header style={{ marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 800, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {module.title}
          </div>
          <h2 style={{ fontSize: '3rem', color: 'var(--text-primary)', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.03em' }}>
            {selectedLessonDeepData.title}
          </h2>
        </header>

        <div className="premium-card" style={{ padding: '3.5rem', border: '1.5px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
          <SimpleMarkdown content={selectedLessonDeepData.deepDive} />
        </div>

        {/* Floating Action for Lab if exists in Module */}
        {module.labType && (
          <div style={{ marginTop: '4rem', borderTop: '2px solid var(--border-color)', paddingTop: '4rem' }}>
            <h5 style={{ marginBottom: '2rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em' }}>Interactive Lab for this Module</h5>
            {module.labType === 'token' && <TokenViz />}
            {module.labType === 'efficiency' && (
              <EfficiencyLab 
                before="Write a long blog post about AI in Bengali. Make it interesting."
                after="[Claude Prompt Caching Pattern]\n<instructions>\nWrite a high-retention 1500-word blog post in Bengali...\n</instructions>\n<context>\nUser is a tech entrepreneur interested in AI-native architecture...\n</context>"
                labels={{ before: 'Basic Prompt', after: 'Cache-Optimized' }}
              />
            )}
            {module.labType === 'agent-swarm' && <AgentFlow />}
            {module.labType === 'memory' && <MemoryTimeline />}
            {module.labType === 'reasoning' && <ReasoningGraph />}
            {module.labType === 'sdd' && <SpecVisualizer />}
            {module.labType === 'security' && <SecuritySandbox />}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="module-view" key={module.id} style={{ animation: 'fadeIn 0.5s ease-out' }}>
      <header style={{ marginBottom: '3.5rem' }}>
        <div style={{ 
          fontSize: '0.85rem', 
          color: 'var(--accent-blue)', 
          fontWeight: 800, 
          letterSpacing: '0.15em', 
          textTransform: 'uppercase',
          marginBottom: '0.75rem'
        }}>
          {phaseTitle}
        </div>
        <h2 style={{ fontSize: '3.25rem', lineHeight: '1.1', color: 'var(--text-primary)', fontWeight: 900, letterSpacing: '-0.04em' }}>
          {module.title}
        </h2>
      </header>

      {/* Interactive Labs */}
      {module.labType === 'token' && <TokenViz />}
      {module.labType === 'efficiency' && (
        <EfficiencyLab 
          before="Write a long blog post about AI in Bengali. Make it interesting."
          after="[Claude Prompt Caching Pattern]\n<instructions>\nWrite a high-retention 1500-word blog post in Bengali...\n</instructions>\n<context>\nUser is a tech entrepreneur interested in AI-native architecture...\n</context>"
          labels={{ before: 'Basic Prompt', after: 'Cache-Optimized' }}
        />
      )}
      {module.labType === 'agent-swarm' && <AgentFlow />}
      {module.labType === 'memory' && <MemoryTimeline />}
      {module.labType === 'reasoning' && <ReasoningGraph />}
      {module.labType === 'sdd' && <SpecVisualizer />}
      {module.labType === 'security' && <SecuritySandbox />}

      <div className="lesson-grid" style={{ display: 'grid', gap: '2rem', margin: '4rem 0' }}>
        {module.lessons.map((lesson) => (
          <div key={lesson.id} 
            className="premium-card" 
            onClick={() => onSelectLesson(lesson.id)}
            style={{ 
              padding: '2.5rem', 
              display: 'flex', 
              gap: '2rem', 
              cursor: 'pointer',
              border: '1.5px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)'
            }}>
            <div style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center' }}>
              <PlayCircle size={32} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 800 }}>
                {lesson.title}
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.1rem', fontFamily: 'var(--font-bengali)', fontWeight: 500 }}>
                {lesson.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {module.bossSecret && (
        <section style={{ 
          marginTop: '5rem', 
          padding: '3.5rem', 
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', 
          borderRadius: '32px',
          color: 'white',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.4)',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '-30px', 
            right: '-30px', 
            opacity: 0.15, 
            transform: 'rotate(15deg)' 
          }}>
            <Lock size={180} color="white" />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: '#FCD34D' }}>
            <Sparkles size={24} />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.2em' }}>Boss-Level Secret</span>
          </div>
          
          <h3 style={{ fontSize: '2rem', lineHeight: '1.4', fontFamily: 'var(--font-bengali)', fontWeight: 700, position: 'relative', zIndex: 1 }}>
            {module.bossSecret}
          </h3>
        </section>
      )}

      <footer style={{ marginTop: '7rem', padding: '3rem 0', borderTop: '2px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>
        <p>© 2026 Boss-Level AI Mastery Platform</p>
        <p>Premium High-Performance Learning</p>
      </footer>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ModuleView;
