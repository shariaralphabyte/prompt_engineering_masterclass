export const mod11Data = {
  id: "mod-11",
  title: "Module 11: Multi-Agent Architectures",
  lessons: [
    {
      id: "11.1",
      title: "Lesson 11.1: Hierarchical vs Decentralized Swarms",
      deepDive: `
### 🐝 মাল্টি-এজেন্ট সোয়ার্ম: যখন একটি AI যথেষ্ট নয়
একটি একক LLM সব কাজ করতে পারে না — ঠিক যেমন একজন মানুষ সব কাজ একা করতে পারে না। মাল্টি-এজেন্ট সিস্টেমে **একাধিক বিশেষজ্ঞ AI একটি টিমের মতো** একসাথে কাজ করে, প্রতিটি নিজের বিশেষত্বের জায়গায়।

#### ২ ধরণের সোয়ার্ম আর্কিটেকচার:

**১. Hierarchical (Boss-Worker)**:
\`\`\`
           [Supervisor Agent]
          /        |        \\
   [Research]  [Coding]  [Writing]
    Agent       Agent      Agent
\`\`\`
*   একটি **Supervisor Agent** সব ডিসিশন নেয় এবং কাজ বন্টন করে
*   Worker Agents শুধু তাদের নির্দিষ্ট টাস্ক করে এবং রিপোর্ট করে
*   Supervisor ফাইনাল আউটপুট তৈরি করে

**কখন ব্যবহার করবেন?**
*   যখন কাজের ক্রম (sequence) গুরুত্বপূর্ণ
*   যখন কোয়ালিটি কন্ট্রোল দরকার
*   যখন ডিসিশন মেকিং কেন্দ্রীভূত হওয়া উচিত

**২. Decentralized (Peer-to-Peer)**:
\`\`\`
   [Agent A] ←→ [Agent B]
       ↕              ↕
   [Agent C] ←→ [Agent D]
\`\`\`
*   কোনো Boss নেই — প্রতিটি Agent নিজে ডিসিশন নেয়
*   Agents একে অন্যের সাথে সরাসরি কমিউনিকেট করে
*   একটি Agent ব্যর্থ হলে বাকিরা চালিয়ে যেতে পারে

**কখন ব্যবহার করবেন?**
*   যখন Fault Tolerance দরকার (একটি ব্যর্থ হলে সিস্টেম থামবে না)
*   যখন প্রতিটি Agent স্বাধীনভাবে কাজ করতে পারে
*   যখন Bottleneck এড়াতে হয়

#### রিয়েল-ওয়ার্ল্ড উদাহরণ — AI Content Studio:
\`\`\`
Supervisor: "ব্লকচেইন সম্পর্কে একটি ভিডিও স্ক্রিপ্ট তৈরি করো"

1. [Research Agent] → গুগল থেকে লেটেস্ট তথ্য সংগ্রহ
2. [Script Agent] → তথ্য নিয়ে স্ক্রিপ্ট লেখা
3. [SEO Agent] → কীওয়ার্ড অপ্টিমাইজেশন
4. [Review Agent] → ফ্যাক্ট-চেক এবং গ্রামার
5. [Supervisor] → সব একত্রিত করে ফাইনাল আউটপুট
\`\`\`

#### প্রোডাকশন-গ্রেড এজেন্ট ডিজাইন নিয়ম:
1. **Single Responsibility**: প্রতিটি Agent-এর একটি নির্দিষ্ট কাজ থাকবে
2. **Clear Interface**: Agent-দের মধ্যে ডাটা শেয়ারিং-এর ফরম্যাট ফিক্সড (JSON)
3. **Timeout**: প্রতিটি Agent-এর জন্য সময়সীমা ঠিক করুন
4. **Fallback**: কোনো Agent ব্যর্থ হলে বিকল্প প্ল্যান রাখুন

#### 🚀 Boss-Level Architecture — "Mixture of Agents":
প্রতিটি এজেন্টের জন্য **আলাদা মডেল** ব্যবহার করুন:
*   Supervisor: Claude Opus (সবথেকে বুদ্ধিমান)
*   Research: Gemini Pro (বড় কনটেক্সট + Search)
*   Coding: Claude Sonnet (কোডিং চ্যাম্পিয়ন)
*   Quick Tasks: GPT-4o-mini (দ্রুত ও সস্তা)
      `
    },
    {
      id: "11.2",
      title: "Lesson 11.2: এআই হ্যান্ডঅফ মেকানিজম",
      deepDive: `
### 🤝 হ্যান্ডঅফ: এক এজেন্ট থেকে অন্য এজেন্টে কাজ পাস করা
মাল্টি-এজেন্ট সিস্টেমের সবথেকে ক্রিটিক্যাল এবং ভুল-প্রবণ অংশ হলো **Handoff** — যখন একটি Agent তার কাজ শেষ করে পরবর্তী Agent-কে ডাটা এবং কন্ট্রোল পাস করে।

#### হ্যান্ডঅফ-এর ৩টি কম্পোনেন্ট:
1. **Context Transfer**: পূর্ববর্তী Agent-এর কাজের সামারি
2. **Data Payload**: পরবর্তী Agent-এর জন্য প্রয়োজনীয় ডাটা (JSON)
3. **Task Instruction**: পরবর্তী Agent-কে ঠিক কী করতে হবে

#### হ্যান্ডঅফ মেসেজ ফরম্যাট:
\`\`\`json
{
  "from_agent": "research_agent",
  "to_agent": "writing_agent",
  "context": "ইউজার ব্লকচেইন সম্পর্কে জানতে চেয়েছে",
  "data": {
    "key_facts": ["...", "...", "..."],
    "sources": ["url1", "url2"],
    "tone": "educational"
  },
  "instruction": "উপরের তথ্য ব্যবহার করে ১৫০০ শব্দের ব্লগ লেখো",
  "constraints": {
    "max_tokens": 2000,
    "language": "Bengali",
    "format": "markdown"
  }
}
\`\`\`

#### ৪ ধরণের হ্যান্ডঅফ প্যাটার্ন:

**১. Sequential Handoff (ক্রমানুসারে)**:
A → B → C → D → Output

**২. Conditional Handoff (শর্তসাপেক্ষ)**:
A → যদি "technical" → B1, যদি "creative" → B2

**৩. Broadcast Handoff (সম্প্রচার)**:
A → B, C, D একসাথে (Parallel processing)

**৪. Callback Handoff (ফেরত পাঠানো)**:
A → B → B আবার A-কে জিজ্ঞেস করে → B চূড়ান্ত আউটপুট

#### হ্যান্ডঅফ ব্যর্থতা প্রতিরোধ:
*   **Schema Validation**: প্রতিটি হ্যান্ডঅফে JSON Schema দিয়ে ভ্যালিডেট করুন
*   **Retry Logic**: ব্যর্থ হলে ৩ বার চেষ্টা করুন
*   **Fallback Agent**: মূল Agent ব্যর্থ হলে বিকল্প Agent চালু হবে
*   **Logging**: প্রতিটি হ্যান্ডঅফের ডাটা লগ করুন (ডিবাগিং-এর জন্য)

#### 🚀 Boss-Level Handoff Principle:
"Never pass raw LLM output to the next agent." সবসময় মাঝখানে একটি **Structured Extraction Layer** রাখুন যা LLM-এর ফ্রি-টেক্সট আউটপুট থেকে নির্দিষ্ট ডাটা JSON-এ এক্সট্রাক্ট করে। এতে পরবর্তী Agent কখনোই গারবেজ ইনপুট পাবে না।
      `
    }
  ],
  bossSecret: "OpenAI Swarm vs LangGraph। ছোট প্রজেক্টে OpenAI-এর Swarm ফ্রেমওয়ার্ক ব্যবহার করুন — ১০ লাইনে মাল্টি-এজেন্ট সেটআপ সম্ভব। বড় প্রজেক্টে LangGraph ব্যবহার করুন — এটি State Management এবং Persistence সাপোর্ট করে যা প্রোডাকশনে আবশ্যক।",
  labData: {
    title: "Autonomous Agent Swarm Simulation",
    agents: [
      { id: 'supervisor', name: 'BOSS: Orchestrator', icon: 'ShieldCheck', color: '#1E293B', pos: { x: 50, y: 15 } },
      { id: 'researcher', name: 'Data Specialist', icon: 'Search', color: '#B45309', pos: { x: 20, y: 60 } },
      { id: 'coder', name: 'Python Architect', icon: 'Cpu', color: '#B45309', pos: { x: 50, y: 80 } },
      { id: 'writer', name: 'Bengali Content', icon: 'PenTool', color: '#B45309', pos: { x: 80, y: 60 } },
    ],
    statusSteps: [
      "সুপারভাইজার হাই-লেভেল রিকোয়ারমেন্ট এনালাইসিস করে প্ল্যান তৈরি করছে।",
      "রিসার্চ এজেন্ট লেটেস্ট মার্কেট ট্রেন্ড এবং কোড ডকস সংগ্রহ করছে।",
      "কোডিং এজেন্ট অপ্টিমাইজড ব্যাকএন্ড লজিক জেনারেট করছে।",
      "রাইটিং এজেন্ট সব টেকনিক্যাল ডাটা সহজ বাংলায় ব্লগে রূপান্তর করছে।",
      "সুপারভাইজার ফাইনাল কিউএ (QA) শেষে আউটপুট রেডি করে ফেলেছে।"
    ]
  }
};
