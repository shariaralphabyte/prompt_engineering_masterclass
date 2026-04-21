import React, { useState } from 'react';
import { Calculator, BarChart3, Info } from 'lucide-react';

const TokenViz: React.FC = () => {
  const [text, setText] = useState('');
  
  // Approximate calculations (1 token ~= 4 chars for English, often more for Bengali)
  const tokenCount = Math.ceil(text.length / 4);
  const costPerMillion = 3.00; // Average for Opus-level models
  const estimatedCost = (tokenCount / 1000000) * costPerMillion;

  return (
    <div className="premium-card" style={{ padding: '2rem', marginTop: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', color: 'var(--accent-navy)' }}>
        <Calculator size={20} color="var(--accent-gold)" />
        <h4 style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Token & Cost Visualization
        </h4>
      </div>

      <textarea
        placeholder="Type to see token breakdown..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: '100%',
          height: '120px',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid var(--border-color)',
          fontSize: '1rem',
          fontFamily: 'var(--font-inte)',
          marginBottom: '1.5rem',
          outline: 'none',
          resize: 'none'
        }}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>ESTIMATED TOKENS</div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-navy)' }}>{tokenCount}</div>
        </div>

        <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', textAlign: 'center' }}>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>ESTIMATED COST (US)</div>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-gold)' }}>${estimatedCost.toFixed(5)}</div>
        </div>
      </div>

      <div style={{ 
        marginTop: '1.5rem', 
        padding: '1rem', 
        backgroundColor: 'var(--accent-gold-light)', 
        borderRadius: '8px',
        display: 'flex',
        gap: '0.75rem',
        fontSize: '0.85rem',
        color: 'var(--accent-navy)',
        lineHeight: '1.4'
      }}>
        <Info size={18} style={{ flexShrink: 0 }} />
        <p>
          <strong>Boss-Level Logic:</strong> Calculations are based on a 4-character per token average. 
          Bengali characters typically consume more tokens per word than English.
        </p>
      </div>
    </div>
  );
};

export default TokenViz;
