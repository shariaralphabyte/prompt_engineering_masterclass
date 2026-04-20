import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Search, Cpu, FileText, ArrowRight, Layers } from 'lucide-react';

const steps = [
  { id: 'query', label: 'ইউজার কুয়েরি', icon: Search, color: '#6366F1' },
  { id: 'embedding', label: 'এমবেডিং মডেল', icon: Layers, color: '#8B5CF6' },
  { id: 'retrieval', label: 'ভেক্টর সার্চ (DB)', icon: Database, color: '#EC4899' },
  { id: 'context', label: 'রিলেভেন্ট কন্টেক্সট', icon: FileText, color: '#F59E0B' },
  { id: 'llm', label: 'এলএলএম (LLM)', icon: Cpu, color: '#10B981' }
];

export const RAGPipeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full space-y-12 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
         {steps.map((step, index) => {
           const Icon = step.icon;
           const isActive = index <= activeStep;
           return (
             <React.Fragment key={step.id}>
                <div 
                  className="flex flex-col items-center gap-3 transition-all duration-500 cursor-pointer group"
                  onClick={() => setActiveStep(index)}
                >
                  <motion.div 
                    initial={false}
                    animate={{ 
                      scale: isActive ? 1.1 : 1,
                      backgroundColor: isActive ? step.color : '#1e293b',
                      boxShadow: isActive ? `0 0 20px ${step.color}40` : 'none'
                    }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white border border-slate-700/50"
                  >
                    <Icon size={24} />
                  </motion.div>
                  <p className={`text-[10px] font-black uppercase tracking-widest text-center ${isActive ? 'text-white' : 'text-slate-500'}`}>
                    {step.label}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-slate-800 relative grow">
                    <motion.div 
                      initial={false}
                      animate={{ width: isActive ? '100%' : '0%' }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    />
                    <ArrowRight className="absolute -right-2 -top-2 text-slate-700" size={16} />
                  </div>
                )}
             </React.Fragment>
           );
         })}
      </div>

      <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 min-h-[120px] flex items-center justify-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
        <p className="text-slate-300 text-center max-w-lg leading-relaxed italic">
          {activeStep === 0 && "ইউজার একটি প্রশ্ন করে, যেমন: 'কোম্পানির লিভ পলিসি কী?'"}
          {activeStep === 1 && "এমবেডিং মডেল প্রশ্নটিকে একটি ম্যাথমেটিক্যাল ভেক্টরে রূপান্তর করে।"}
          {activeStep === 2 && "ভেক্টর ডেটাবেস থেকে সবচেয়ে কাছাকাছি রিলেভেন্ট ডকিউমেন্ট খুঁজে বের করা হয়।"}
          {activeStep === 3 && "পাওয়া তথ্যগুলো প্রম্পটের সাথে 'কন্টেক্সট' হিসেবে যুক্ত করা হয়।"}
          {activeStep === 4 && "সবশেষে LLM এই কন্টেক্সট ব্যবহার করে একটি সঠিক এবং হ্যালুসিনেশন-মুক্ত উত্তর দেয়।"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-xl">
           <h5 className="font-bold text-indigo-400 mb-1 text-xs uppercase tracking-widest">Why RAG?</h5>
           <p className="text-[10px] text-slate-400 leading-relaxed uppercase">মডেলের ভেতর সব তথ্য থাকে না। RAG এর মাধ্যমে আমরা আপনার প্রাইভেট ডেটা নিরাপদভাবে এআই-কে শেখাতে পারি।</p>
        </div>
        <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
           <h5 className="font-bold text-emerald-400 mb-1 text-xs uppercase tracking-widest">Efficiency</h5>
           <p className="text-[10px] text-slate-400 leading-relaxed uppercase">সম্পূর্ণ ডকিউমেন্ট ফিড না দিয়ে শুধু রিলেভেন্ট অংশ দেওয়ায় টোকেন খরচ অনেক কমে যায়।</p>
        </div>
      </div>
    </div>
  );
};
