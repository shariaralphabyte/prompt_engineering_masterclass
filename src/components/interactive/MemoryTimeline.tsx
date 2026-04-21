import React, { useState, useEffect } from 'react';
import { Search, Database, Cpu, MessageSquare, ArrowDown, CheckCircle2 } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  desc: string;
  icon: any;
}

interface MemoryTimelineProps {
  steps?: Step[];
  bossSecret?: string;
  title?: string;
}

const MemoryTimeline: React.FC<MemoryTimelineProps> = ({
  steps: initialSteps,
  bossSecret = "RAG (Retrieval-Augmented Generation) ব্যবহারের ফলে মডেল হ্যালুসিনেশন করে না। কারণ সে উত্তর দেওয়ার আগে আপনার ভেক্টর ডাটাবেস থেকে তথ্য নিয়ে আসে।",
  title = "RAG Sequence Visualizer: The Memory Loop"
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const defaultSteps: Step[] = [
    { id: 'query', title: 'User Query', desc: 'মডেল প্রোম্পটটি এনালাইজ করছে।', icon: MessageSquare },
    { id: 'search', title: 'Vector Search', desc: 'ডাটাবেস থেকে রিলেভেন্ট তথ্য খোঁজা হচ্ছে।', icon: Search },
    { id: 'context', title: 'Context Injection', desc: 'পাওয়ানো তথ্য প্রম্পটে যুক্ত করা হচ্ছে।', icon: Database },
    { id: 'reason', title: 'Reasoning', desc: 'মডেল নতুন তথ্য দিয়ে উত্তর তৈরি করছে।', icon: Cpu },
    { id: 'output', title: 'Final Output', desc: 'সঠিক এবং গ্রাউন্ডেড উত্তর জেনারেট হয়েছে।', icon: CheckCircle2 },
  ];

  const steps = initialSteps || defaultSteps;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="premium-card" style={{ padding: '3rem', marginTop: '2rem', background: 'linear-gradient(180deg, #FAFAFB 0%, #FFFFFF 100%)' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)', letterSpacing: '0.1em' }}>
          RAG Sequence Visualizer: The Memory Loop
        </h4>
      </div>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {/* Connector Line */}
        <div style={{ 
          position: 'absolute', 
          left: '23px', 
          top: '20px', 
          bottom: '20px', 
          width: '2px', 
          backgroundColor: 'var(--border-color)',
          zIndex: 0
        }} />

        {steps.map((step, index) => {
          const isActive = activeStep === index;
          const isCompleted = activeStep > index;

          return (
            <div key={step.id} style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              alignItems: 'flex-start',
              zIndex: 1,
              transition: 'var(--transition-smooth)',
              opacity: isActive || isCompleted ? 1 : 0.4,
              transform: isActive ? 'translateX(10px)' : 'translateX(0)'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '50%', 
                backgroundColor: isActive ? 'var(--accent-navy)' : isCompleted ? '#4CAF50' : 'white',
                border: `2px solid ${isActive ? 'var(--accent-navy)' : isCompleted ? '#4CAF50' : 'var(--border-color)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isActive || isCompleted ? 'white' : 'var(--text-secondary)',
                boxShadow: isActive ? '0 0 20px rgba(0,29,74,0.2)' : 'none',
                transition: 'var(--transition-smooth)'
              }}>
                <step.icon size={20} />
              </div>

              <div style={{ 
                flex: 1, 
                padding: '1rem 1.5rem', 
                background: isActive ? 'white' : 'transparent',
                borderRadius: '12px',
                border: isActive ? '1px solid var(--border-color)' : '1px solid transparent',
                boxShadow: isActive ? '0 10px 25px rgba(0,0,0,0.05)' : 'none'
              }}>
                <h5 style={{ 
                  fontSize: '1rem', 
                  color: isActive ? 'var(--accent-navy)' : 'var(--text-primary)', 
                  fontWeight: 700,
                  marginBottom: '0.25rem' 
                }}>
                  {step.title}
                </h5>
                <p style={{ 
                  fontSize: '0.85rem', 
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-bengali)' 
                }}>
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ 
        marginTop: '3rem', 
        padding: '1.5rem', 
        backgroundColor: 'var(--accent-gold-light)', 
        borderRadius: '12px',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
        <div style={{ padding: '10px', background: 'white', borderRadius: '8px' }}>
          <Database size={24} color="var(--accent-gold)" />
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--accent-navy)', lineHeight: 1.5 }}>
          <strong>Boss-Level Secret:</strong> RAG (Retrieval-Augmented Generation) ব্যবহারের ফলে মডেল হ্যালুসিনেশন করে না। কারণ সে উত্তর দেওয়ার আগে আপনার ভেক্টর ডাটাবেস থেকে তথ্য নিয়ে আসে।
        </div>
      </div>
    </div>
  );
};

export default MemoryTimeline;
