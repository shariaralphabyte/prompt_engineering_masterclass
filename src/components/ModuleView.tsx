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

// Upgraded Markdown-like renderer to support code blocks and high contrast
const SimpleMarkdown: React.FC<{ content: string }> = ({ content }) => {
  const lines = content.split('\n');
  const rendered: React.ReactNode[] = [];
  let codeBlock: string[] = [];
  let isInsideCode = false;

  lines.forEach((line, i) => {
    if (line.trim().startsWith('```')) {
      if (isInsideCode) {
        // Close code block
        rendered.push(
          <pre key={`code-${i}`} style={{ 
            background: '#1E293B', 
            color: '#F1F5F9', 
            padding: '1.5rem', 
            borderRadius: '12px', 
            margin: '1.5rem 0', 
            overflowX: 'auto',
            fontSize: '0.9rem',
            fontFamily: 'var(--font-mono)',
            border: '1px solid rgba(255,255,255,0.1)',
            lineHeight: '1.6'
          }}>
            <code>{codeBlock.join('\n')}</code>
          </pre>
        );
        codeBlock = [];
        isInsideCode = false;
      } else {
        isInsideCode = true;
      }
      return;
    }

    if (isInsideCode) {
      codeBlock.push(line);
      return;
    }

    if (line.startsWith('### ')) {
      rendered.push(<h3 key={i} style={{ marginTop: '2.5rem', marginBottom: '1.25rem', fontSize: '1.75rem', color: 'var(--text-primary)', fontWeight: 800 }}>{line.replace('### ', '')}</h3>);
    } else if (line.startsWith('#### ')) {
      rendered.push(<h4 key={i} style={{ marginTop: '1.75rem', marginBottom: '1.25rem', fontSize: '1.35rem', color: 'var(--accent-blue)', fontWeight: 700 }}>{line.replace('#### ', '')}</h4>);
    } else if (line.startsWith('* ')) {
      rendered.push(<li key={i} style={{ marginLeft: '1.5rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{line.replace('* ', '')}</li>);
    } else if (line.trim() === '') {
      rendered.push(<br key={i} />);
    } else {
      // Handle bold and inline code
      const parts = line.split(/(\*\*.*?\*\*|`.*?`)/g);
      rendered.push(
        <p key={i} style={{ marginBottom: '1.25rem' }}>
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} style={{ color: 'var(--accent-blue)', fontWeight: 700 }}>{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('`') && part.endsWith('`')) {
              return <code key={j} style={{ 
                background: '#F1F5F9', 
                color: '#EB144C', 
                padding: '0.2rem 0.4rem', 
                borderRadius: '4px',
                fontSize: '0.9em'
              }}>{part.slice(1, -1)}</code>;
            }
            return part;
          })}
        </p>
      );
    }
  });

  return (
    <div className="markdown-content" style={{ lineHeight: '1.9', fontSize: '1.15rem', color: 'var(--text-primary)', fontFamily: 'var(--font-bengali)' }}>
      {rendered}
    </div>
  );
};

const ModuleView: React.FC<ModuleViewProps> = ({ module, phaseTitle, selectedLessonId, onSelectLesson }) => {
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
            cursor: 'pointer'
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

        {module.labType && (
          <div style={{ marginTop: '4rem', borderTop: '2px solid var(--border-color)', paddingTop: '4rem' }}>
            <h5 style={{ marginBottom: '2rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em' }}>Interactive Lab for this Module</h5>
            {module.labType === 'token' && <TokenViz />}
            {module.labType === 'efficiency' && <EfficiencyLab before="..." after="..." labels={{before: 'Basic', after: 'Cache'}} />}
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
        <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          {phaseTitle}
        </div>
        <h2 style={{ fontSize: '3.25rem', lineHeight: '1.1', color: 'var(--text-primary)', fontWeight: 900, letterSpacing: '-0.04em' }}>
          {module.title}
        </h2>
      </header>

      {/* Lab Injection Logic */}
      {module.labType === 'token' && <TokenViz />}
      {module.labType === 'efficiency' && <EfficiencyLab before="..." after="..." labels={{before: 'Basic', after: 'Cache'}} />}
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
            style={{ padding: '2.5rem', display: 'flex', gap: '2rem', cursor: 'pointer', border: '1.5px solid var(--border-color)' }}>
            <div style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center' }}><PlayCircle size={32} /></div>
            <div>
              <h4 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--text-primary)', fontWeight: 800 }}>{lesson.title}</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.1rem', fontFamily: 'var(--font-bengali)' }}>{lesson.content}</p>
            </div>
          </div>
        ))}
      </div>

      {module.bossSecret && (
        <section style={{ 
          marginTop: '5rem', padding: '3.5rem', 
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)', 
          borderRadius: '32px', color: 'white',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.4)',
          position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <div style={{ position: 'absolute', top: '-30px', right: '-30px', opacity: 0.15, transform: 'rotate(15deg)' }}>
            <Lock size={180} color="white" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: '#FCD34D' }}>
            <Sparkles size={24} />
            <span style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.2em' }}>Boss-Level Secret</span>
          </div>
          <h3 style={{ 
            fontSize: '2rem', lineHeight: '1.4', fontFamily: 'var(--font-bengali)', 
            fontWeight: 700, position: 'relative', zIndex: 1,
            color: '#FFFFFF' // FIX: Ensure text is white
          }}>
            {module.bossSecret}
          </h3>
        </section>
      )}

      <footer style={{ 
        marginTop: '7rem', 
        padding: '4rem 0', 
        borderTop: '2px solid var(--border-color)', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Boss-Level AI Mastery Platform</h4>
          <p style={{ fontSize: '0.85rem' }}>Premium High-Performance Learning Experience</p>
        </div>
        
        <div style={{ 
          background: 'var(--active-bg)', 
          padding: '1.5rem 3rem', 
          borderRadius: '20px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '0.5rem',
          border: '1px solid var(--border-color)'
        }}>
          <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1rem' }}>
            Developed by Shariar Hossain
          </div>
          <a 
            href="https://www.youtube.com/@codeprobro" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'var(--accent-blue)', 
              textDecoration: 'none',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <PlayCircle size={18} /> Subscribe YouTube: @codeprobro
          </a>
        </div>

        <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>
          © 2026 Developed by Shariar Hossain. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default ModuleView;
