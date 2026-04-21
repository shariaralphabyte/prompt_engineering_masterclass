import React from 'react';
import { BookOpen, ChevronRight, Hexagon, Star, Target, Layers } from 'lucide-react';

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
      <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid var(--border-color)', background: 'white' }}>
        <h1 style={{ 
          fontSize: '1.25rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem',
          color: 'var(--text-primary)',
          fontWeight: 800
        }}>
          <Hexagon size={28} fill="var(--accent-blue)" color="var(--accent-blue)" />
          Boss Level AI
        </h1>
        <p style={{ 
          fontSize: '0.7rem', 
          color: 'var(--text-secondary)', 
          marginTop: '0.5rem', 
          letterSpacing: '0.1em', 
          textTransform: 'uppercase',
          fontWeight: 700 
        }}>
          Architecture Masterclass
        </p>
      </div>

      <nav style={{ padding: '1rem' }}>
        {curriculum.map((phase, phaseIndex) => (
          <div key={phase.id} style={{ 
            marginBottom: '2rem', 
            background: 'rgba(241, 245, 249, 0.4)', 
            borderRadius: '16px', 
            border: '1px solid var(--border-color)',
            overflow: 'hidden'
          }}>
            <div style={{ 
              padding: '1rem', 
              background: 'white', 
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <Layers size={16} color="var(--accent-blue)" />
              <h3 style={{ 
                fontSize: '0.8rem', 
                color: 'var(--text-primary)', 
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {phase.title}
              </h3>
            </div>
            
            <div style={{ padding: '0.5rem' }}>
              {phase.modules.map((module) => {
                const isModuleActive = selectedModuleId === module.id;
                return (
                  <div key={module.id} style={{ marginBottom: '0.25rem' }}>
                    <button
                      onClick={() => onSelectModule(module.id)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 0.75rem',
                        borderRadius: '10px',
                        textAlign: 'left',
                        fontSize: '0.85rem',
                        fontWeight: isModuleActive ? 700 : 500,
                        color: isModuleActive ? 'var(--active-text)' : 'var(--text-primary)',
                        backgroundColor: isModuleActive ? 'var(--active-bg)' : 'transparent',
                        transition: 'var(--transition-smooth)',
                        cursor: 'pointer',
                        border: 'none'
                      }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <BookOpen size={16} opacity={isModuleActive ? 1 : 0.5} />
                        {module.title}
                      </span>
                      <ChevronRight 
                        size={14} 
                        style={{ 
                          transform: isModuleActive ? 'rotate(90deg)' : 'none',
                          transition: 'transform 0.3s ease'
                        }} 
                      />
                    </button>
                    
                    {/* Nested Lessons (Sub-Modules) */}
                    {isModuleActive && (module as any).lessons && (
                      <div style={{ 
                        marginLeft: '1.25rem', 
                        marginTop: '0.25rem', 
                        paddingLeft: '0.75rem',
                        borderLeft: '2px solid var(--border-color)',
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '0.1rem' 
                      }}>
                        {(module as any).lessons.map((lesson: any) => {
                          const isLessonActive = selectedLessonId === lesson.id;
                          return (
                            <button
                              key={lesson.id}
                              onClick={() => {
                                onSelectLesson(lesson.id);
                              }}
                              style={{
                                padding: '0.5rem 0.5rem',
                                fontSize: '0.78rem',
                                textAlign: 'left',
                                color: isLessonActive ? 'var(--accent-blue)' : 'var(--text-secondary)',
                                fontWeight: isLessonActive ? 700 : 500,
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'var(--transition-smooth)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                              }}
                            >
                              <div style={{ 
                                width: '4px', 
                                height: '4px', 
                                borderRadius: '50%', 
                                background: isLessonActive ? 'var(--accent-blue)' : 'var(--border-color)' 
                              }} />
                              {lesson.title}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div style={{ marginTop: 'auto', padding: '1.5rem', borderTop: '1px solid var(--border-color)', bg: 'white' }}>
        <div style={{ 
          padding: '1rem', 
          borderRadius: '12px', 
          fontSize: '0.8rem', 
          color: 'var(--text-primary)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          background: 'var(--active-bg)',
          fontWeight: 700
        }}>
          <Star size={16} fill="var(--accent-gold)" color="var(--accent-gold)" />
          Boss Level Certified
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
