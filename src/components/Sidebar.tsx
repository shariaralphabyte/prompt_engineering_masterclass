import React from 'react';
import { BookOpen, ChevronRight, Hexagon, Star } from 'lucide-react';

interface Module {
  id: string;
  title: string;
}

interface Phase {
  id: string;
  title: string;
  modules: Module[];
}

interface SidebarProps {
  curriculum: Phase[];
  selectedModuleId: string;
  selectedLessonId: string | null;
  onSelectModule: (id: string) => void;
  onSelectLesson: (id: string | null) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ curriculum, selectedModuleId, selectedLessonId, onSelectModule, onSelectLesson }) => {
  return (
    <aside className="glass" style={{ 
      width: 'var(--sidebar-width)', 
      height: '100vh', 
      position: 'fixed', 
      left: 0, 
      top: 0, 
      display: 'flex', 
      flexDirection: 'column', 
      borderRight: '1px solid var(--border-color)',
      overflowY: 'auto',
      zIndex: 100
    }}>
      <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
        <h1 style={{ 
          fontSize: '1.25rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem',
          color: 'var(--accent-navy)'
        }}>
          <Hexagon size={24} fill="var(--accent-navy)" />
          Boss-Level AI
        </h1>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          0 to Production Mastery
        </p>
      </div>

      <nav style={{ padding: '1.5rem 1rem' }}>
        {curriculum.map((phase) => (
          <div key={phase.id} style={{ marginBottom: '2rem' }}>
            <h3 style={{ 
              fontSize: '0.85rem', 
              color: 'var(--accent-gold)', 
              marginBottom: '0.75rem', 
              paddingLeft: '0.5rem',
              fontWeight: 600
            }}>
              {phase.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {phase.modules.map((module) => {
                const isActive = selectedModuleId === module.id;
                return (
                  <div key={module.id}>
                    <button
                      onClick={() => onSelectModule(module.id)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 0.5rem',
                        borderRadius: '8px',
                        textAlign: 'left',
                        fontSize: '0.9rem',
                        color: isActive ? 'var(--bg-secondary)' : 'var(--text-primary)',
                        backgroundColor: isActive ? 'var(--accent-navy)' : 'transparent',
                        transition: 'var(--transition-smooth)',
                        cursor: 'pointer'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <BookOpen size={16} opacity={isActive ? 1 : 0.5} />
                        {module.title}
                      </span>
                      {isActive && <ChevronRight size={14} />}
                    </button>
                    
                    {/* Lesson Sub-menu */}
                    {isActive && (module as any).lessons && (
                      <div style={{ marginLeft: '2rem', marginTop: '0.5rem', borderLeft: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
                        {(module as any).lessons.map((lesson: any) => (
                          <button
                            key={lesson.id}
                            onClick={() => onSelectLesson(lesson.id)}
                            style={{
                              padding: '0.5rem 1rem',
                              fontSize: '0.8rem',
                              textAlign: 'left',
                              color: selectedLessonId === lesson.id ? 'var(--accent-gold)' : 'var(--text-secondary)',
                              fontWeight: selectedLessonId === lesson.id ? 600 : 400,
                              transition: 'var(--transition-smooth)'
                            }}
                          >
                            {lesson.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', padding: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
        <div className="glass" style={{ 
          padding: '1rem', 
          borderRadius: '12px', 
          fontSize: '0.8rem', 
          color: 'var(--accent-navy)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Star size={14} fill="var(--accent-gold)" color="var(--accent-gold)" />
          Premium Masterclass
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
