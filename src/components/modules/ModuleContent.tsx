import React from 'react';
import { Module } from '../../data/curriculum';
import { Play, FileText, CheckCircle2 } from 'lucide-react';

interface ModuleContentProps {
  module: Module;
  phaseColor: string;
}

import { TokenizerDiagram } from '../interactive/TokenizerDiagram';
import { ModelComparison } from '../interactive/ModelComparison';
import { CachingSimulator } from '../interactive/CachingSimulator';
import { PromptCompare } from '../interactive/PromptCompare';
import { SystemPromptBuilder } from '../interactive/SystemPromptBuilder';
import { ReasoningFlow } from '../interactive/ReasoningFlow';
import { RAGPipeline } from '../interactive/RAGPipeline';
import { GraphBuilder } from '../interactive/GraphBuilder';
import { ProjectTimeline } from '../interactive/ProjectTimeline';
import { ComparisonMatrix } from '../interactive/ComparisonMatrix';
import { DecisionTree } from '../interactive/DecisionTree';
import { ToolMatrix } from '../interactive/ToolMatrix';
import { JsonValidator } from '../interactive/JsonValidator';
import { ArchitectureDiagram } from '../interactive/ArchitectureDiagram';
import { PipelineDiagram } from '../interactive/PipelineDiagram';
import { MultimodalDemo } from '../interactive/MultimodalDemo';
import { CheatsheetGrid } from '../interactive/CheatsheetGrid';
import { EvalDashboard } from '../interactive/EvalDashboard';

const InteractiveComponents: Record<string, React.FC> = {
  TokenizerDiagram: TokenizerDiagram,
  ModelComparison: ModelComparison,
  CachingSimulator: CachingSimulator,
  PromptCompare: PromptCompare,
  SystemPromptBuilder: SystemPromptBuilder,
  ReasoningFlow: ReasoningFlow,
  RAGPipeline: RAGPipeline,
  GraphBuilder: GraphBuilder,
  ProjectTimeline: ProjectTimeline,
  ComparisonMatrix: ComparisonMatrix,
  DecisionTree: DecisionTree,
  ToolMatrix: ToolMatrix,
  JsonValidator: JsonValidator,
  ArchitectureDiagram: ArchitectureDiagram,
  PipelineDiagram: PipelineDiagram,
  MultimodalDemo: MultimodalDemo,
  CheatsheetGrid: CheatsheetGrid,
  EvalDashboard: EvalDashboard,
};

export const ModuleContent: React.FC<ModuleContentProps> = ({ module, phaseColor }) => {
  const ActiveComponent = module.interactiveComponent ? InteractiveComponents[module.interactiveComponent] : null;

  return (
    <div className="animate-fade-in pb-20">
      {/* Banner */}
      <div 
        className="h-48 w-full rounded-2xl mb-8 flex flex-col justify-end p-8 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${phaseColor} 0%, #1e293b 100%)` }}
      >
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <FileText size={160} />
        </div>
        <div className="relative z-10">
          <span className="text-white/70 text-sm font-medium uppercase tracking-widest mb-2 block">
            Currently Learning
          </span>
          <h2 className="text-3xl font-bold text-white mb-2">
            {module.title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Text Content */}
        <div className="lg:col-span-2 space-y-8">
          <section className="glass p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: phaseColor }}></span>
              মডিউল ওভারভিউ
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
              {module.description}
            </p>
            
            <div className="prose prose-slate max-w-none">
              <div 
                className="content-area whitespace-pre-line text-slate-700 font-medium" 
                dangerouslySetInnerHTML={{ __html: module.content }} 
              />
            </div>
          </section>

          {/* Interactive Placeholder or Component */}
          {module.interactiveComponent && (
            <section className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl shadow-slate-200/50">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-slate-900">
                    <Play fill="currentColor" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">ইন্টারেক্টিভ সিমুলেটর</h3>
                    <p className="text-xs text-slate-400 uppercase tracking-widest">{module.interactiveComponent}</p>
                  </div>
                </div>
                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] uppercase font-black px-3 py-1 rounded-full border border-emerald-500/20">
                  Active Demo
                </span>
              </div>
              
              <div className="p-2">
                {ActiveComponent ? (
                  <ActiveComponent />
                ) : (
                  <div className="aspect-video bg-slate-800/50 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:bg-slate-800 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 shadow-lg shadow-amber-400/20 group-hover:scale-110 transition-transform">
                      <Play fill="currentColor" size={24} />
                    </div>
                    <p className="text-slate-400 font-medium italic">Component "{module.interactiveComponent}" is under construction...</p>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>


        {/* Sidebar Widgets */}
        <div className="space-y-6">
          <div className="glass p-6 rounded-2xl border border-slate-100">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {['Reading Materials', 'Code Snippets', 'Practice Tasks'].map(item => (
                <li key={item} className="flex items-center justify-between group cursor-pointer">
                  <span className="text-sm text-slate-600 group-hover:text-amber-600 transition-colors">{item}</span>
                  <CheckCircle2 size={16} className="text-slate-200 group-hover:text-amber-500" />
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
               <Rocket size={120} />
            </div>
            <h4 className="font-bold mb-2">Boss-Level Tip</h4>
            <p className="text-xs text-indigo-100 leading-relaxed">
              সবচেয়ে ভালো শিখবেন যখন আপনি প্রম্পটগুলো নিজে Claude বা GPT তে ট্রাই করবেন। শুধু থিওরি পড়বেন না!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Rocket: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.35.5-2.09l-1.41-1.41c-.74-.29-1.38-.21-2.09.5Z"/><path d="m19 8-8.82 8.82a2 2 0 0 0-.59 1.41V20h1.77c.53 0 1.04-.21 1.41-.59L21.6 15c.54-.54.33-1.4-.41-1.63l-2.19-.7z"/><path d="m3 3 10.3 10.3"/><path d="M16 11V7l-4-4H8L4 8v4l4 4"/>
  </svg>
);
