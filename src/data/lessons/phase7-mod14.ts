export const mod14Data = {
  id: "mod-14",
  title: "Module 14: Evaluation-as-Code (Testing AI)",
  lessons: [
    {
      id: "14.1",
      title: "Lesson 14.1: ভাইব চেক বনাম অটোমেটেড ইভালস (Evals)",
      deepDive: `
### 🧪 AI টেস্টিং: "দেখে মনে হচ্ছে ভালো" যথেষ্ট নয়
বেশিরভাগ মানুষ AI আউটপুট চোখে দেখে "হ্যাঁ, ভালো লাগছে" বলে অ্যাপ্রুভ করে — এটিকে বলা হয় **"Vibe Check"**। প্রোটোটাইপে ঠিক আছে, কিন্তু প্রোডাকশনে এটি বিপজ্জনক। কারণ:
*   আপনি ১০টি টেস্ট করেছেন, কিন্তু ইউজাররা ১০,০০০ ভিন্ন ভিন্ন প্রশ্ন করবে
*   আজ ভালো কাজ করছে, কাল প্রম্পট চেঞ্জ করলে ভেঙে যেতে পারে
*   আপনার চোখে ভালো মনে হচ্ছে কিন্তু ইউজারদের কাছে ভুল হতে পারে

#### Evals (Evaluations) কি?
Evals হলো **অটোমেটেড টেস্ট সুইট** যা AI আউটপুটের কোয়ালিটি পরিমাপ করে। সফটওয়্যারে যেমন Unit Test আছে, AI-তে তেমনি Evals আছে।

#### Eval ডিজাইন — ৪টি কম্পোনেন্ট:

**১. Test Cases (টেস্ট ডাটা)**:
\`\`\`json
[
  {
    "input": "আমার অর্ডার কোথায়?",
    "expected_intent": "order_tracking",
    "expected_tone": "polite"
  },
  {
    "input": "তোমার সিস্টেম বাজে, টাকা ফেরত দাও!",
    "expected_intent": "refund",
    "expected_tone": "empathetic"
  }
]
\`\`\`

**২. Metrics (পরিমাপের মাপকাঠি)**:
*   **Accuracy**: সঠিক উত্তরের শতাংশ
*   **Relevance**: উত্তর কতটুকু প্রাসঙ্গিক (1-5 স্কেল)
*   **Hallucination Rate**: ভুল তথ্যের শতাংশ
*   **Latency**: কত দ্রুত উত্তর আসছে
*   **Cost per Query**: প্রতিটি প্রশ্নে কত খরচ

**৩. Assertion Functions**:
\`\`\`python
def test_intent_classification():
    response = ai.classify("আমার অর্ডার কোথায়?")
    assert response.intent == "order_tracking"
    assert response.confidence > 0.8
    assert response.language == "bn"
\`\`\`

**৪. Regression Tests**:
প্রম্পট পরিবর্তন করলে আগের সব টেস্ট আবার চালান। কোনো টেস্ট ফেল করলে নতুন প্রম্পট ডিপ্লয় করবেন না!

#### 🚀 Boss-Level Eval Framework:
**Golden Dataset** তৈরি করুন — ১০০টি হ্যান্ড-কিউরেটেড প্রশ্ন-উত্তর যা আপনি ১০০% নিশ্চিত সঠিক। প্রতিটি প্রম্পট চেঞ্জের পরে এই ১০০টি দিয়ে টেস্ট চালান। Score ৯০% এর নিচে গেলে চেঞ্জ রিভার্ট করুন।
      `
    },
    {
      id: "14.2",
      title: "Lesson 14.2: LLM-as-a-Judge প্যাটার্ন",
      deepDive: `
### ⚖️ LLM-as-a-Judge: একটি AI দিয়ে অন্য AI-কে গ্রেড করা
ম্যানুয়ালি AI আউটপুট গ্রেড করা ব্যয়বহুল এবং ধীর। **LLM-as-a-Judge** প্যাটার্নে একটি শক্তিশালী মডেল (যেমন Claude Opus বা GPT-4o) দিয়ে অন্য মডেলের আউটপুট স্বয়ংক্রিয়ভাবে গ্রেড করা হয়।

#### কিভাবে কাজ করে?
\`\`\`
[User Query]  ────→  [Worker Model: Claude Sonnet]
                              ↓ (response)
[User Query + Response]  ──→  [Judge Model: Claude Opus]
                              ↓
                        Score: 8/10
                        Feedback: "তথ্য সঠিক কিন্তু 
                        টোন আরও বন্ধুত্বপূর্ণ হওয়া উচিত"
\`\`\`

#### Judge Prompt ডিজাইন (সবথেকে গুরুত্বপূর্ণ অংশ):
\`\`\`
<judge_instruction>
তুমি একজন কঠোর কিন্তু ন্যায্য বিচারক। 

তোমার কাছে একটি ইউজার প্রশ্ন এবং একটি AI উত্তর দেওয়া হবে। 
নিচের ৫টি ক্রাইটেরিয়ায় ১-১০ স্কেল দাও:

1. **সঠিকতা** (Accuracy): তথ্য কি সঠিক?
2. **প্রাসঙ্গিকতা** (Relevance): প্রশ্নের সাথে সম্পর্কিত কি?
3. **সম্পূর্ণতা** (Completeness): সব দিক কভার হয়েছে কি?
4. **টোন** (Tone): ইউজারের পরিস্থিতির সাথে মানানসই কি?
5. **নিরাপত্তা** (Safety): ক্ষতিকর বা বিভ্রান্তিকর কিছু আছে কি?

JSON ফরম্যাটে উত্তর দাও:
{"accuracy": ?, "relevance": ?, "completeness": ?, 
 "tone": ?, "safety": ?, "overall": ?, "feedback": "..."}
</judge_instruction>
\`\`\`

#### LLM Judge-এর ৩টি সীমাবদ্ধতা ও সমাধান:

**১. Position Bias**: Judge প্রথম দেখা উত্তরকে ভালো মনে করতে পারে
*   **সমাধান**: A/B ক্রম র‍্যান্ডমাইজ করুন

**২. Self-Bias**: একই কোম্পানির মডেল নিজের কোম্পানির আউটপুট ভালো স্কোর দিতে পারে
*   **সমাধান**: Judge হিসেবে ভিন্ন কোম্পানির মডেল ব্যবহার করুন

**৩. Length Bias**: লম্বা উত্তরকে ভালো মনে করার প্রবণতা
*   **সমাধান**: Judge Prompt-এ বলে দিন "সংক্ষিপ্ত কিন্তু সম্পূর্ণ উত্তরকে বেশি স্কোর দাও"

#### 🚀 Boss-Level Multi-Judge System:
৩টি আলাদা মডেল দিয়ে Judge করুন (Claude, GPT, Gemini) এবং গড় স্কোর নিন। এটি Self-Consistency-র Judge ভার্সন — একটি মডেলের Bias অন্যটি ক্যান্সেল করে। ফাইনাল স্কোর অনেক বেশি নির্ভরযোগ্য হয়।
      `
    }
  ],
  bossSecret: "Eval-Driven Development (EDD)। কোড লেখার আগে টেস্ট লেখার মতো, প্রম্পট লেখার আগে Eval লিখুন। প্রথমে ঠিক করুন কী কী মেট্রিক্সে কত স্কোর দরকার, তারপর সেই স্কোর অর্জন না হওয়া পর্যন্ত প্রম্পট অপ্টিমাইজ করুন। এটি Anthropic, OpenAI এবং Google-এর ইন্টারনাল প্র্যাকটিস।",
  labData: {
    title: "AI Quality Dashboard (Evals)",
    metrics: [
      { label: "Accuracy", value: 94.2, trend: 1.5, status: 'good' },
      { label: "Hallucination", value: 0.8, trend: -0.2, status: 'excellent' },
      { label: "Avg Latency", value: 1.2, trend: 0.1, status: 'warning' },
      { label: "Cost/1k", value: 0.04, trend: -0.05, status: 'excellent' }
    ],
    chartData: [
      { version: 'v1', score: 78, price: 0.12 },
      { version: 'v1.1', score: 82, price: 0.10 },
      { version: 'v2.0', score: 91, price: 0.08 },
      { version: 'v2.1', score: 94, price: 0.04 }
    ]
  }
};
