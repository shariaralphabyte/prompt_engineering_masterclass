import React from 'react';
import { ComparisonMatrix } from './ComparisonMatrix';

export const ToolMatrix: React.FC = () => {
  const headers = ["Cursor", "Claude Code", "Copilot", "Windsurf"];
  const rows = [
    { label: "Composer Mode", values: [true, true, false, true] },
    { label: "Multi-file Edit", values: [true, true, true, true] },
    { label: "Architectural Refactor", values: ["High", "Extreme", "Low", "Moderate"] },
    { label: "Offline Support", values: [false, false, false, false] },
    { label: "Local Context", values: ["Embeddings", "Deep Scan", "Basic", "Flow-based"] },
    { label: "Agentic Loop", values: [true, true, false, true] },
  ];

  return (
    <ComparisonMatrix 
      title="AI কোডিং টুলস মাস্টারি - তুলনামূলক বিশ্লেষণ"
      headers={headers}
      rows={rows}
    />
  );
};
