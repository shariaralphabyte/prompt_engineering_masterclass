import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, FileText, Code, ShieldCheck, Rocket, Search } from 'lucide-react';

interface TimelineStep {
  id: number;
  title: string;
  icon: any;
  color: string;
  desc: string;
}

interface ProjectTimelineProps {
  steps?: TimelineStep[];
}

const defaultSteps: TimelineStep[] = [
  { id: 1, title: 'Idea & PRD', icon: Lightbulb, color: '#F59E0B', desc: 'আইডিয়া থেকে প্রোডাক্ট রিকোয়ারমেন্ট ডকুমেন্ট (PRD) তৈরি।' },
  { id: 2, title: 'SPEC.md', icon: FileText, color: '#3B82F6', desc: 'টেকনিক্যাল আর্কিটেকচার এবং স্পেসিফিকেশন ডকুমেন্টেশন।' },
  { id: 3, title: 'AI Coding', icon: Code, color: '#8B5CF6', desc: 'Cursor বা Claude Code ব্যবহার করে দ্রুত কোড জেনারেশন।' },
  { id: 4, title: 'QA & Eval', icon: Search, color: '#EC4899', desc: 'LLM-as-Judge দিয়ে কোড এবং আউটপুট কোয়ালিটি টেস্ট।' },
  { id: 5, title: 'CI/CD', icon: ShieldCheck, color: '#10B981', desc: 'অটোমেটেড পাইপলাইন এবং সিকিউরিটি গার্ডরেইল সেটআপ।' },
  { id: 6, title: 'Deployment', icon: Rocket, color: '#6366F1', desc: 'SaaS টি লাইভ করা এবং মনিটরিং টুলস সেটআপ।' }
];

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ 
  steps = defaultSteps 
}) => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const activeStep = steps.find(s => s.id === hoveredStep);

  return (
    <div className="w-full space-y-10 py-6">
      <div className="relative">
        {/* Connector Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden md:block" />
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isHovered = hoveredStep === step.id;
            
            return (
              <motion.div
                key={step.id}
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                className="flex flex-col items-center gap-4 cursor-pointer"
                animate={{ y: isHovered ? -10 : 0 }}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-all shadow-xl"
                  style={{ 
                    backgroundColor: isHovered ? step.color : '#1e293b',
                    boxShadow: isHovered ? `0 10px 30px ${step.color}40` : 'none',
                    border: `2px solid ${isHovered ? 'white' : 'transparent'}`
                  }}
                >
                  <Icon size={24} />
                </div>
                <div className="text-center">
                   <p className={`text-[10px] font-black uppercase tracking-widest ${isHovered ? 'text-white' : 'text-slate-500'}`}>
                      Step {step.id}
                   </p>
                   <h4 className={`text-xs font-bold mt-1 ${isHovered ? 'text-white' : 'text-slate-400'}`}>
                      {step.title}
                   </h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 min-h-[140px] flex items-center justify-center relative shadow-2xl overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ 
            backgroundImage: `radial-gradient(circle at 50% 50%, ${activeStep ? activeStep.color : '#6366F1'} 0%, transparent 70%)` 
          }} 
        />
        <div className="text-center space-y-3 relative z-10">
          {activeStep ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h5 className="text-xl font-bold mb-2" style={{ color: activeStep.color }}>
                {activeStep.title}
              </h5>
              <p className="text-slate-300 max-w-lg mx-auto font-medium leading-relaxed">
                {activeStep.desc}
              </p>
            </motion.div>
          ) : (
            <p className="text-slate-500 italic font-medium">কোনো স্টেপের ওপর মাউস নিয়ে যান বিস্তারিত জানতে...</p>
          )}
        </div>
      </div>

      <div className="p-5 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
               <Rocket size={20} />
            </div>
            <div>
               <p className="text-[10px] text-indigo-400 font-black uppercase tracking-widest leading-none">Ready for Launch?</p>
               <p className="text-sm font-bold text-slate-200 mt-1">প্রজেক্ট লাইফসাইকেলের প্রতিটি ধাপেই এআই টুলস ব্যবহার করে আপনার প্রোডাক্টিভিটি ১০ গুণ পর্যন্ত বাড়ানো সম্ভব।</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
