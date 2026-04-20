import React from 'react';
import { Menu, Search, Bell, User, Zap } from 'lucide-react';

interface HeaderProps {
  onMenuToggle: () => void;
  onHomeClick: () => void;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ onMenuToggle, onHomeClick, title }) => {
  return (
    <header className="sticky top-0 z-40 w-full glass border-b px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuToggle}
          className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Menu size={20} />
        </button>
        <button 
          onClick={onHomeClick}
          className="hidden sm:flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all">
             <Zap size={16} fill="white" />
          </div>
          <span className="text-sm font-black uppercase tracking-tighter text-slate-900">Boss Level AI</span>
        </button>
        <div className="h-4 w-px bg-slate-200 hidden sm:block mx-2" />
        <h1 className="text-lg font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-md">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="hidden sm:flex items-center bg-slate-100 px-3 py-1.5 rounded-full border border-transparent focus-within:border-slate-200 transition-all">
          <Search size={16} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Search modules..." 
            className="bg-transparent border-none outline-none text-sm ml-2 w-32 lg:w-48"
          />
        </div>
        
        <button className="p-2 text-slate-500 hover:text-slate-800 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white cursor-pointer shadow-sm">
          <User size={16} />
        </div>
      </div>
    </header>
  );
};
