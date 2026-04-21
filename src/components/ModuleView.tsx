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
    <div className="markdown-content" style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--accent-navy)', fontFamily: 'var(--font-bengali)' }}>
      {lines.map((line, i) => {
        if (line.startsWith('### ')) return <h3 key={i} style={{ marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--accent-navy)' }}>{line.replace('### ', '')}</h3>;
        if (line.startsWith('#### ')) return <h4 key={i} style={{ marginTop: '1.5rem', marginBottom: '1rem', fontSize: '1.2rem', color: 'var(--accent-gold)' }}>{line.replace('#### ', '')}</h4>;
        if (line.startsWith('* ')) return <li key={i} style={{ marginLeft: '1.5rem', marginBottom: '0.5rem' }}>{line.replace('* ', '')}</li>;
        if (line.trim() === '') return <br key={i} />;
        
        // Handle bold text **...**
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={i} style={{ marginBottom: '1rem' }}>
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j} style={{ color: 'var(--accent-gold)' }}>{part.slice(2, -2)}</strong>;
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
            marginBottom: '2rem',
            fontSize: '0.9rem' 
          }}
        >
          <ArrowLeft size={16} /> Back to Module Overview
        </button>
        
        <header style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, marginBottom: '0.5rem' }}>
            {module.title}
          </div>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--accent-navy)', lineHeight: 1.2 }}>
            {selectedLessonDeepData.title}
          </h2>
        </header>

        <div className="premium-card" style={{ padding: '3rem' }}>
          <SimpleMarkdown content={selectedLessonDeepData.deepDive} />
        </div>

        {/* Floating Action for Lab if exists in Module */}
        {module.labType && (
          <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border-color)', paddingTop: '3rem' }}>
            <h5 style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Interactive Lab for this Module</h5>
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
      <header style={{ marginBottom: '3rem' }}>
        <div style={{ 
          fontSize: '0.8rem', 
          color: 'var(--accent-gold)', 
          fontWeight: 700, 
          letterSpacing: '0.1em', 
          textTransform: 'uppercase',
          marginBottom: '0.5rem'
        }}>
          {phaseTitle}
        </div>
        <h2 style={{ fontSize: '2.5rem', lineHeight: '1.2', color: 'var(--accent-navy)' }}>
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

      <div className="lesson-grid" style={{ display: 'grid', gap: '1.5rem', margin: '3rem 0' }}>
        {module.lessons.map((lesson) => (
          <div key={lesson.id} className="premium-card" style={{ padding: '2rem', display: 'flex', gap: '1.5rem' }}>
            <div style={{ color: 'var(--accent-gold)' }}>
              <PlayCircle size={28} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--accent-navy)' }}>
                {lesson.title}
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1.05rem', fontFamily: 'var(--font-bengali)' }}>
                {lesson.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      {module.bossSecret && (
        <section style={{ 
          marginTop: '4rem', 
          padding: '2.5rem', 
          backgroundColor: 'var(--accent-navy)', 
          borderRadius: '24px',
          color: 'white',
          boxShadow: '0 20px 40px rgba(0,29,74,0.15)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '-20px', 
            right: '-20px', 
            opacity: 0.1, 
            transform: 'rotate(15deg)' 
          }}>
            <Lock size={150} color="white" />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
            <Sparkles size={20} />
            <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Boss-Level Secret</span>
          </div>
          
          <h3 style={{ fontSize: '1.75rem', lineHeight: '1.4', fontFamily: 'var(--font-bengali)' }}>
            {module.bossSecret}
          </h3>
        </section>
      )}

      <footer style={{ marginTop: '5rem', padding: '2rem 0', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
        <p>© 2026 Boss-Level AI Mastery</p>
        <p>Premium Education Experience</p>
      </footer>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ModuleView;
