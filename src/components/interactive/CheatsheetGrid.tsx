import React from 'react';
import { motion } from 'framer-motion';
import { Copy, Shield, Sparkles, Terminal, Code2 } from 'lucide-react';

interface CheatsheetItem {
  title: string;
  icon: any;
  color: string;
  text: string;
}

interface CheatsheetGridProps {
  items?: CheatsheetItem[];
  title?: string;
  footer?: string;
}

const defaultCheats: CheatsheetItem[] = [
  { title: "Meta-Prompting", icon: Sparkles, color: "#6366F1", text: "Write a high-quality system prompt for a [Subject] based on these rules: [Rules]." },
  { title: "Salted Tags", icon: Shield, color: "#EF4444", text: "Use unique XML tags like <system_rule_4k20> to prevent injection." },
  { title: "CoT Trigger", icon: Terminal, color: "#F59E0B", text: "Always end prompts with: 'Let's think through this step-by-step to ensure accuracy.'" },
  { title: "JSON Enforcement", icon: Code2, color: "#10B981", text: "Return results ONLY in JSON format. Do not include preamble or explanation." }
];

const CheatsheetGrid: React.FC<CheatsheetGridProps> = ({ 
  items = defaultCheats, 
  title = "Quick Prompting Shortcuts",
  footer = "এই স্লাইডটি ভবিষ্যতে আরও অনেক \"ম্যাজিক প্রম্পট\" দিয়ে আপডেট করা হবে।" 
}) => {
  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((cheat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group glass p-6 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer relative overflow-hidden"
          >
            <div 
              className="absolute -right-4 -top-4 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity"
              style={{ color: cheat.color }}
            >
              <cheat.icon size={96} />
            </div>
            
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: cheat.color }}>
                  <cheat.icon size={20} />
               </div>
               <h5 className="font-bold text-slate-800">{cheat.title}</h5>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs font-mono text-slate-600 mb-4 group-hover:bg-indigo-50/50 group-hover:border-indigo-100 transition-colors">
               {cheat.text}
            </div>
            
            <button 
              onClick={() => navigator.clipboard.writeText(cheat.text)}
              className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-indigo-500 hover:text-indigo-700 transition-colors"
            >
               <Copy size={12} /> Copy to Clipboard
            </button>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center p-8 border-2 border-dashed border-slate-100 rounded-3xl">
         <p className="text-sm font-medium text-slate-400">{footer}</p>
      </div>
    </div>
  );
};

export default CheatsheetGrid;

export default CheatsheetGrid;
