import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, ShieldCheck, Zap, ArrowRight, Play } from 'lucide-react';

export const DashboardHero: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-16 px-8 rounded-[40px] bg-slate-900 text-white min-h-[600px] flex items-center shadow-2xl">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit backdrop-blur-sm"
          >
             <Zap size={14} className="text-amber-400" />
             <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">New: LangGraph & CrewAI Mastered</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter"
          >
            ধাপে ধাপে হয়ে উঠুন <br/>
            <span className="bg-gradient-to-r from-amber-400 to-indigo-400 bg-clip-text text-transparent">
              Boss-Level 
            </span> <br/>
            এআই ইঞ্জিনিয়ার
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 font-medium max-w-lg leading-relaxed b-8"
          >
            আইডিয়া জেনারেশন থেকে শুরু করে প্রোডাকশন-গ্রেড এআই অটোমেশন পর্যন্ত সবকিছু শিখুন বাংলায়। এটি শুধু কোর্স নয়, আপনার প্রোফেশনাল ক্যারিয়ারের আল্টিমেট আপগ্রেড।
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black uppercase text-sm flex items-center gap-2 hover:bg-slate-200 transition-all shadow-xl shadow-white/10">
               লার্নিং শুরু করুন <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-black uppercase text-sm flex items-center gap-2 hover:bg-white/10 transition-all">
               <Play size={18} /> প্রোম ভিডিও
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <HeroStat icon={Brain} label="27+ Modules" sub="Deep Dive" color="bg-indigo-500" />
           <HeroStat icon={Rocket} label="Prod Grading" sub="Deployment" color="bg-emerald-500" />
           <HeroStat icon={ShieldCheck} label="Security" sub="Prompt Injection" color="bg-red-500" />
           <HeroStat icon={Zap} label="Agents" sub="CrewAI/LangGraph" color="bg-amber-500" />
        </div>
      </div>
    </div>
  );
};

const HeroStat: React.FC<{ icon: any, label: string, sub: string, color: string }> = ({ icon: Icon, label, sub, color }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md"
  >
    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center text-white mb-4 shadow-lg shadow-black/20`}>
       <Icon size={20} />
    </div>
    <h4 className="text-xl font-bold mb-1">{label}</h4>
    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{sub}</p>
  </motion.div>
);
