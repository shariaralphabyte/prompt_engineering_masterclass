import React from 'react';
import { curriculum } from '../../data/curriculum';
import { LucideIcon, ChevronRight, BookOpen, Layers, Terminal, Cpu, ShieldCheck, Rocket } from 'lucide-react';

interface SidebarProps {
  onSelectModule: (moduleId: string) => void;
  selectedModuleId: string;
}

const phaseIcons: Record<number, LucideIcon> = {
  1: Cpu,
  2: BookOpen,
  3: Terminal,
  4: Layers,
  5: ShieldCheck,
  6: Rocket
};

export const Sidebar: React.FC<SidebarProps> = ({ onSelectModule, selectedModuleId }) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-80 glass border-r z-50 overflow-y-auto hidden lg:block">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-indigo-600 bg-clip-text text-transparent">
          AI MASTERY
        </h2>
        <p className="text-xs text-slate-500 font-medium tracking-widest uppercase mb-8">
          Boss-Level Course
        </p>

        <nav>
          {curriculum.map((phase) => {
            const Icon = phaseIcons[phase.id];
            return (
              <div key={phase.id} className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: phase.color + '15', color: phase.color }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold leading-tight" style={{ color: phase.color }}>
                      {phase.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-tighter opacity-70 font-semibold">
                      {phase.englishTitle}
                    </p>
                  </div>
                </div>

                <ul className="space-y-1 ml-4 border-l border-slate-100">
                  {phase.modules.map((module) => (
                    <li key={module.id}>
                      <button
                        onClick={() => onSelectModule(module.id)}
                        className={`w-full text-left px-4 py-2 text-sm transition-all flex items-center justify-between group rounded-r-md ${
                          selectedModuleId === module.id
                            ? 'bg-gradient-to-r from-slate-50 to-transparent border-l-2 border-slate-800 text-slate-900 font-semibold'
                            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <span className="truncate">{module.title.split(': ')[1]}</span>
                        <ChevronRight 
                          size={14} 
                          className={`transition-transform ${selectedModuleId === module.id ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} 
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};
