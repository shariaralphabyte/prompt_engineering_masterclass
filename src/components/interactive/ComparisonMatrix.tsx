import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldAlert } from 'lucide-react';

interface Row {
  label: string;
  values: (string | boolean)[];
}

interface ComparisonMatrixProps {
  headers: string[];
  rows: Row[];
  title?: string;
}

const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({ headers, rows, title }) => {
  return (
    <div className="w-full space-y-4">
      {title && (
        <h4 className="text-sm font-black uppercase text-slate-500 tracking-widest mb-4 flex items-center gap-2">
          <ShieldAlert size={14} className="text-amber-500" />
          {title}
        </h4>
      )}
      
      <div className="overflow-x-auto rounded-2xl border border-slate-700/50 bg-slate-800/40">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-700/50 bg-slate-800/60">
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Features</th>
              {headers.map((header, i) => (
                <th key={i} className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-indigo-400 text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-slate-700/30 hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-bold text-slate-300">{row.label}</td>
                {row.values.map((val, j) => (
                  <td key={j} className="px-6 py-4 text-center">
                    {typeof val === 'boolean' ? (
                      val ? <Check className="mx-auto text-emerald-400" size={18} /> : <X className="mx-auto text-slate-600" size={18} />
                    ) : (
                      <span className="text-xs font-medium text-slate-400">{val}</span>
                    )}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonMatrix;
