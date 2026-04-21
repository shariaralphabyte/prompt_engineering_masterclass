import React, { useState } from 'react';
import { Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface EfficiencyLabProps {
  before: string;
  after: string;
  labels: { before: string; after: string };
}

const EfficiencyLab: React.FC<EfficiencyLabProps> = ({ before, after, labels }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="premium-card" style={{ padding: '2rem', marginTop: '2rem', backgroundColor: '#F9F9FB' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-navy)' }}>
        <Zap size={20} fill="var(--accent-gold)" color="var(--accent-gold)" />
        <h4 style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Efficiency Lab: Optimization Comparison
        </h4>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '1rem', alignItems: 'center' }}>
        {/* Before */}
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          border: '1px solid var(--border-color)',
          opacity: showAfter ? 0.4 : 1,
          transition: 'var(--transition-smooth)'
        }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: 700 }}>BRFORE OPTIMIZATION</div>
          <pre style={{ 
            whiteSpace: 'pre-wrap', 
            fontSize: '0.85rem', 
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)' 
          }}>
            {before}
          </pre>
        </div>

        <div style={{ color: 'var(--border-color)' }}>
          <ArrowRight size={24} />
        </div>

        {/* After */}
        <div style={{ 
          padding: '1.5rem', 
          backgroundColor: 'white', 
          borderRadius: '12px', 
          border: showAfter ? '2px solid var(--accent-gold)' : '1px solid var(--border-color)',
          boxShadow: showAfter ? '0 10px 25px rgba(212, 175, 55, 0.1)' : 'none',
          transition: 'var(--transition-smooth)'
        }}>
          <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', marginBottom: '0.5rem', fontWeight: 700 }}>PRO OPTIMIZED</div>
          <pre style={{ 
            whiteSpace: 'pre-wrap', 
            fontSize: '0.85rem', 
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)' 
          }}>
            {showAfter ? after : 'Click "Optimize" to reveal boss-level technique...'}
          </pre>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
        <button 
          onClick={() => setShowAfter(!showAfter)}
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: showAfter ? 'var(--accent-navy)' : 'var(--accent-gold)',
            color: 'white',
            borderRadius: '100px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          {showAfter ? 'Reset View' : 'Run Optimization'}
          {showAfter && <CheckCircle2 size={16} />}
        </button>
      </div>
    </div>
  );
};

export default EfficiencyLab;
