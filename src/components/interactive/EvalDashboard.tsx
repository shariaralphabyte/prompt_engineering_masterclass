import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart3, Target, ShieldCheck, AlertCircle } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  change: string;
  icon: any;
  color: string;
}

interface EvalDashboardProps {
  metrics?: Metric[];
  chartData?: number[];
  title?: string;
  insight?: string;
}

const defaultMetrics: Metric[] = [
  { label: 'Accuracy', value: '94.2%', change: '+2.1%', icon: Target, color: '#10B981' },
  { label: 'Latency', value: '1.2s', change: '-100ms', icon: Activity, color: '#F59E0B' },
  { label: 'Safety', value: '99.9%', change: 'Stable', icon: ShieldCheck, color: '#6366F1' },
  { label: 'Hallucination', value: '0.4%', change: '-0.2%', icon: AlertCircle, color: '#EF4444' },
];

const defaultChart = [40, 70, 45, 90, 65, 80, 95, 60, 85, 75, 92, 88];

const EvalDashboard: React.FC<EvalDashboardProps> = ({ 
  metrics = defaultMetrics, 
  chartData = defaultChart,
  title = "Model Performance Over Time",
  insight = "<span class=\"text-emerald-400 font-bold\">LLM-as-Judge</span> ইভালুয়েশন কমপ্লিট হয়েছে। ১২টি টেস্ট পাসের রেট ১০০%।"
}) => {
  return (
    <div className="w-full space-y-8 py-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/50"
          >
            <div className="flex items-center gap-2 mb-2">
               <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white p-1" style={{ backgroundColor: m.color }}>
                  <m.icon size={16} />
               </div>
               <span className="text-[10px] font-black uppercase text-slate-500">{m.label}</span>
            </div>
            <div className="flex items-baseline gap-2">
               <span className="text-xl font-black text-white">{m.value}</span>
               <span className={`text-[9px] font-bold ${m.change.startsWith('+') || m.change === 'Stable' ? 'text-emerald-400' : 'text-amber-400'}`}>
                 {m.change}
               </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-800/50 border border-slate-700/50 rounded-3xl p-6 min-h-[250px] relative overflow-hidden">
        <div className="flex items-center justify-between mb-8">
           <h5 className="text-sm font-bold text-slate-300 flex items-center gap-2">
              <BarChart3 size={16} className="text-indigo-400" />
              {title}
           </h5>
           <div className="flex gap-2">
             <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
             <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Live Monitoring</span>
           </div>
        </div>
        
        <div className="flex items-end justify-between gap-1 h-32 px-4">
           {chartData.map((h, i) => (
             <motion.div 
               key={i}
               initial={{ height: 0 }}
               animate={{ height: `${h}%` }}
               transition={{ delay: i * 0.05, type: 'spring', stiffness: 100 }}
               className="w-full bg-gradient-to-t from-indigo-600/20 to-indigo-500 rounded-t-sm"
             />
           ))}
        </div>
        
        <div className="mt-8 p-4 border-t border-slate-700/50 flex items-center justify-between">
           <div className="text-xs text-slate-400 font-medium" dangerouslySetInnerHTML={{ __html: insight }} />
           <button className="text-[10px] bg-white/5 hover:bg-white/10 text-slate-300 px-3 py-1 rounded-lg border border-slate-700 transition-colors">
              VIEW FULL TRACE
           </button>
        </div>
      </div>
    </div>
  );
};

export default EvalDashboard;
