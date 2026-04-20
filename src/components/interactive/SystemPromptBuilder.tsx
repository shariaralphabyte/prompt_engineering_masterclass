import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCircle, Target, ShieldAlert, FileCode, CheckCircle2, Copy } from 'lucide-react';

export const SystemPromptBuilder: React.FC = () => {
  const [role, setRole] = useState("Expert Python Developer");
  const [context, setContext] = useState("Helping a beginner build a web scraper.");
  const [task, setTask] = useState("Write a script using BeautifulSoup to extract titles.");
  const [constraints, setConstraints] = useState("Do not use external libraries besides requests/bs4.");
  const [format, setFormat] = useState("JSON format with 'title' and 'url' keys.");

  const fullPrompt = `<role>\n${role}\n</role>\n\n<context>\n${context}\n</context>\n\n<task>\n${task}\n</task>\n\n<constraints>\n${constraints}\n</constraints>\n\n<output_format>\n${format}\n</output_format>`;

  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Side */}
        <div className="space-y-4">
          <h4 className="text-xs font-black uppercase text-slate-500 tracking-widest mb-4">Prompt Architecture</h4>
          
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            <BuilderInput icon={UserCircle} label="Role" value={role} onChange={setRole} placeholder="e.g. Senior Architect" />
            <BuilderInput icon={Target} label="Context" value={context} onChange={setContext} placeholder="What is the background?" />
            <BuilderInput icon={FileCode} label="Task" value={task} onChange={setTask} placeholder="What should AI do?" />
            <BuilderInput icon={ShieldAlert} label="Constraints" value={constraints} onChange={setConstraints} placeholder="What should AI NOT do?" />
            <BuilderInput icon={CheckCircle2} label="Format" value={format} onChange={setFormat} placeholder="How should it answer?" />
          </div>
        </div>

        {/* Output Side */}
        <div className="space-y-4">
           <div className="flex items-center justify-between">
              <h4 className="text-xs font-black uppercase text-slate-500 tracking-widest">Final System Prompt</h4>
              <button 
                onClick={() => navigator.clipboard.writeText(fullPrompt)}
                className="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded-md flex items-center gap-1 transition-all"
              >
                <Copy size={12} /> COPY XML
              </button>
           </div>
           
           <div className="bg-slate-800/80 p-6 rounded-2xl border border-indigo-500/20 font-mono text-sm leading-relaxed text-indigo-300 h-full max-h-[400px] overflow-y-auto">
             <div className="text-indigo-400">&lt;role&gt;</div>
             <div className="text-slate-200 ml-4 my-1 uppercase font-bold">{role}</div>
             <div className="text-indigo-400">&lt;/role&gt;</div>
             
             <br/>
             <div className="text-indigo-400">&lt;context&gt;</div>
             <div className="text-slate-200 ml-4 my-1">{context}</div>
             <div className="text-indigo-400">&lt;/context&gt;</div>
             
             <br/>
             <div className="text-indigo-400">&lt;task&gt;</div>
             <div className="text-slate-200 ml-4 my-1">{task}</div>
             <div className="text-indigo-400">&lt;/task&gt;</div>
             
             <br/>
             <div className="text-indigo-400">&lt;constraints&gt;</div>
             <div className="text-slate-200 ml-4 my-1 font-bold text-red-400">!! {constraints}</div>
             <div className="text-indigo-400">&lt;/constraints&gt;</div>
             
             <br/>
             <div className="text-indigo-400">&lt;output_format&gt;</div>
             <div className="text-emerald-400 ml-4 my-1">{format}</div>
             <div className="text-indigo-400">&lt;/output_format&gt;</div>
           </div>
        </div>
      </div>

      <div className="glass p-4 rounded-xl border border-indigo-100 flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg text-white">
           <ShieldAlert />
        </div>
        <div>
           <h5 className="font-bold text-indigo-900 mb-1">কেন XML ট্যাগ ব্যবহার করবেন?</h5>
           <p className="text-xs text-indigo-700/80 leading-relaxed font-medium">
             Anthropic এর রিসার্চ অনুযায়ী, বড় প্রম্পটে ডাটা এবং ইনস্ট্রাকশন আলাদা করতে XML ট্যাগ সবচেয়ে কার্যকরী। এতে এআই কনফিউজড হয় না এবং সঠিক অংশ ফলো করে।
           </p>
        </div>
      </div>
    </div>
  );
};

interface BuilderInputProps {
  icon: React.FC<any>;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}

const BuilderInput: React.FC<BuilderInputProps> = ({ icon: Icon, label, value, onChange, placeholder }) => (
  <div className="space-y-1">
    <label className="text-[10px] font-black uppercase text-slate-600 ml-1 flex items-center gap-1">
      <Icon size={12} /> {label}
    </label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white/5 border border-slate-700/50 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none h-20"
      placeholder={placeholder}
    />
  </div>
);
