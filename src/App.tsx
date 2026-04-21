import React, { useState, useEffect } from 'react';
import curriculumData from './data/curriculum.json';
import Sidebar from './components/Sidebar';
import ModuleView from './components/ModuleView';
import './index.css';

interface Lesson {
  id: string;
  title: string;
  content: string;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  bossSecret?: string;
}

interface Phase {
  id: string;
  title: string;
  description: string;
  modules: Module[];
}

const App: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('mod-1');
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [activePhase, setActivePhase] = useState<Phase | null>(null);

  useEffect(() => {
    // Reset lesson selection when module changes
    setSelectedLessonId(null);
    
    for (const phase of curriculumData.curriculum) {
      const module = phase.modules.find((m) => m.id === selectedModuleId);
      if (module) {
        setActiveModule(module);
        setActivePhase(phase);
        break;
      }
    }
  }, [selectedModuleId]);

  return (
    <div className="main-container" style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar 
        curriculum={curriculumData.curriculum} 
        selectedModuleId={selectedModuleId}
        selectedLessonId={selectedLessonId}
        onSelectModule={setSelectedModuleId}
        onSelectLesson={setSelectedLessonId}
      />
      <main style={{ 
        flex: 1, 
        marginLeft: 'var(--sidebar-width)', 
        padding: '2rem',
        maxWidth: '1000px',
        margin: '0 auto' 
      }}>
        {activeModule && activePhase && (
          <ModuleView 
            module={activeModule} 
            phaseTitle={activePhase.title}
            selectedLessonId={selectedLessonId}
            onSelectLesson={setSelectedLessonId}
          />
        )}
      </main>
    </div>
  );
};

export default App;
