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
      borderRight: '1.5px solid var(--border-color)',
      overflowY: 'auto',
      zIndex: 100,
      background: 'white'
    }}>
      <div style={{ padding: '2.5rem 1.5rem', borderBottom: '1px solid var(--border-color)' }}>
        <h1 style={{ 
          fontSize: '1.35rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem',
          color: 'var(--text-primary)',
          fontWeight: 800,
          letterSpacing: '-0.02em'
        }}>
          <Hexagon size={26} fill="var(--accent-blue)" color="var(--accent-blue)" />
          Boss Level AI
        </h1>
        <p style={{ 
          fontSize: '0.7rem', 
          color: 'var(--text-secondary)', 
          marginTop: '0.5rem', 
          letterSpacing: '0.12em', 
          textTransform: 'uppercase',
          fontWeight: 700 
        }}>
          Masterclass Platform
        </p>
      </div>

      <nav style={{ padding: '2rem 0.75rem' }}>
        {curriculum.map((phase) => (
          <div key={phase.id} style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ 
              fontSize: '0.75rem', 
              color: 'var(--text-secondary)', 
              marginBottom: '1rem', 
              paddingLeft: '1rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {phase.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {phase.modules.map((module) => {
                const isActive = selectedModuleId === module.id;
                return (
                  <div key={module.id} style={{ position: 'relative' }}>
                    {isActive && (
                      <div style={{ 
                        position: 'absolute', 
                        left: '-0.75rem', 
                        top: '15%', 
                        height: '70%', 
                        width: '4px', 
                        background: 'var(--accent-blue)', 
                        borderRadius: '0 4px 4px 0',
                        boxShadow: '0 0 10px rgba(37, 99, 235, 0.4)'
                      }} />
                    )}
                    <button
                      onClick={() => onSelectModule(module.id)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.85rem 1rem',
                        borderRadius: '10px',
                        textAlign: 'left',
                        fontSize: '0.92rem',
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? 'var(--active-text)' : 'var(--text-primary)',
                        backgroundColor: isActive ? 'var(--active-bg)' : 'transparent',
                        transition: 'var(--transition-smooth)',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <BookOpen size={18} opacity={isActive ? 1 : 0.4} />
                        {module.title}
                      </span>
                      {isActive && <ChevronRight size={16} />}
                    </button>
                    
                    {/* Lesson Sub-menu */}
                    {isActive && (module as any).lessons && (
                      <div style={{ 
                        marginLeft: '2.5rem', 
                        marginTop: '0.5rem', 
                        borderLeft: '1.5px solid var(--border-color)', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '0.2rem' 
                      }}>
                        {(module as any).lessons.map((lesson: any) => (
                          <button
                            key={lesson.id}
                            onClick={() => onSelectLesson(lesson.id)}
                            style={{
                              padding: '0.6rem 1.25rem',
                              fontSize: '0.82rem',
                              textAlign: 'left',
                              color: selectedLessonId === lesson.id ? 'var(--accent-blue)' : 'var(--text-secondary)',
                              fontWeight: selectedLessonId === lesson.id ? 700 : 500,
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
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
        <div style={{ 
          padding: '1.25rem', 
          borderRadius: '14px', 
          fontSize: '0.82rem', 
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          background: 'var(--bg-primary)',
          fontWeight: 600,
          border: '1px solid var(--border-color)'
        }}>
          <div style={{ 
            width: '32px', 
            height: '32px', 
            borderRadius: '8px', 
            background: 'var(--accent-gold-light)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <Star size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
          </div>
          Premium System
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
