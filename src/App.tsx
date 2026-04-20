import React, { useState, useMemo } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { ModuleContent } from './components/modules/ModuleContent';
import { DashboardHero } from './components/layout/DashboardHero';
import { curriculum } from './data/curriculum';

export function App() {
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const selectedModuleData = useMemo(() => {
    if (!selectedModuleId) return null;
    for (const phase of curriculum) {
      const found = phase.modules.find(m => m.id === selectedModuleId);
      if (found) return { module: found, color: phase.color };
    }
    return null;
  }, [selectedModuleId]);

  return (
    <div className="flex bg-[#FAFAF8] min-h-screen font-inter">
      {/* Sidebar - Desktop */}
      <Sidebar
        selectedModuleId={selectedModuleId || ''}
        onSelectModule={(id) => {
          setSelectedModuleId(id);
          setIsSidebarOpen(false);
        }}
      />

      {/* Main Area */}
      <main className="flex-1 lg:ml-80 transition-all duration-300">
        <Header
          title={selectedModuleData?.module.title || 'Course Dashboard'}
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          onHomeClick={() => setSelectedModuleId(null)}
        />

        <div className="container py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {!selectedModuleId ? (
            <DashboardHero />
          ) : selectedModuleData ? (
            <ModuleContent
              module={selectedModuleData.module}
              phaseColor={selectedModuleData.color}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400 space-y-4">
               <div className="text-4xl">🔍</div>
               <p className="font-medium italic">Module not found...</p>
            </div>
          )}
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className="w-80 h-full bg-white shadow-2xl animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
             <Sidebar
                selectedModuleId={selectedModuleId || ''}
                onSelectModule={(id) => {
                  setSelectedModuleId(id);
                  setIsSidebarOpen(false);
                }}
              />
          </div>
        </div>
      )}
    </div>
  );
}
