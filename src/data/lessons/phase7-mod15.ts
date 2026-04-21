export const mod15Data = {
  id: "mod-15",
  title: "Module 15: Observability & Tracing (LangSmith)",
  lessons: [
    {
      id: "15.1",
      title: "Lesson 15.1: ট্রেসিং ও ডিবাগিং প্রোডাকশন এআই",
      deepDive: `
### 🔍 Observability: প্রোডাকশন AI-এর ভেতরে কী ঘটছে?
আপনার AI চ্যাটবট ১০০ জন ইউজার ব্যবহার করছে। হঠাৎ একজন বলল "বট ভুল উত্তর দিচ্ছে"। আপনি কিভাবে জানবেন কেন ভুল হলো? কোন ধাপে ভুল হলো? কোন ডাটা পেয়ে ভুল করলো? এই সব প্রশ্নের উত্তর দেয় **Observability**।

#### Observability-র ৩ স্তম্ভ:

**১. Tracing (ট্রেসিং)**:
প্রতিটি AI কলের ভেতরে ঠিক কী কী ঘটেছে তার সম্পূর্ণ রেকর্ড:
*   কোন প্রম্পট পাঠানো হয়েছে
*   কোন মডেল ব্যবহার হয়েছে
*   কত টোকেন খরচ হয়েছে
*   কত সময় লেগেছে
*   কী আউটপুট এসেছে
*   RAG থেকে কোন ডকুমেন্ট রিট্রিভ হয়েছে

**২. Logging (লগিং)**:
Error, Warning, এবং Info লেভেলে সিস্টেমের কার্যকলাপ রেকর্ড করা:
\`\`\`
[INFO] User query received: "আমার অর্ডার কোথায়?"
[INFO] Intent classified: order_tracking (confidence: 0.95)
[INFO] RAG retrieved 3 documents
[WARNING] Document relevance score low: 0.45
[ERROR] LLM returned empty response, retrying...
[INFO] Retry successful, response generated in 2.3s
\`\`\`

**৩. Metrics (মেট্রিক্স)**:
সংখ্যাভিত্তিক পরিমাপ:
*   Average Latency: ২.৫ সেকেন্ড
*   Success Rate: ৯৫%
*   Hallucination Rate: ৩%
*   Average Cost per Query: $0.002
*   Daily Active Users: ৫০০

#### LangSmith — ইন্ডাস্ট্রি স্ট্যান্ডার্ড ট্রেসিং টুল:
LangChain-এর তৈরি LangSmith একটি ড্যাশবোর্ড যেখানে আপনি:
*   প্রতিটি AI কলের ভেতরের প্রতিটি ধাপ দেখতে পারেন (Waterfall View)
*   ব্যর্থ কলগুলো ফিল্টার করতে পারেন
*   প্রম্পট ভার্সন A/B তুলনা করতে পারেন
*   অটোমেটেড Evals চালাতে পারেন

#### প্রডাকশন ডিবাগিং-এর ৫টি ধাপ:
1. **Identify**: কোন ইউজার, কোন সময়ে সমস্যা হয়েছে
2. **Trace**: সেই কলের পুরো ট্রেস দেখুন
3. **Isolate**: কোন নির্দিষ্ট ধাপে ভুল হয়েছে
4. **Reproduce**: একই ইনপুট দিয়ে আবার চালান
5. **Fix**: প্রম্পট বা লজিক ঠিক করে Eval চালান

#### 🚀 Boss-Level Monitoring Setup:
**Alert System** সেটআপ করুন:
*   Latency > ৫ সেকেন্ড → Slack Alert
*   Error Rate > ৫% → PagerDuty Alert
*   Daily Cost > $৫০ → Email Alert
*   Hallucination Rate > ১০% → Automatic Rollback

এটি আপনার AI সিস্টেমকে "Set and forget" থেকে "Actively monitored" এ উন্নীত করে।
      `
    },
    {
      id: "15.2",
      title: "Lesson 15.2: কস্ট ও ল্যাটেন্সি ট্র্যাকিং",
      deepDive: `
### 💰 কস্ট ট্র্যাকিং: AI বিলে চমকে যাওয়া বন্ধ করুন
প্রোডাকশনে AI চালানোর পরে সবথেকে কমন সমস্যা হলো **"Bill Shock"** — মাসের শেষে API বিল দেখে চমকে যাওয়া। এটি প্রতিরোধ করতে প্রো-অ্যাক্টিভ কস্ট ট্র্যাকিং আবশ্যক।

#### কস্ট ট্র্যাকিং ড্যাশবোর্ড ডিজাইন:

**১. Real-time Cost Counter**:
প্রতিটি API কলের সাথে সাথে খরচ ক্যালকুলেট করুন:
\`\`\`
cost = (input_tokens * input_price + output_tokens * output_price)
daily_total += cost
\`\`\`

**২. Per-Feature Breakdown**:
| ফিচার | Daily Cost | % of Total |
|---|---|---|
| Customer Support Bot | $12.50 | ৪৫% |
| Content Generator | $8.30 | ৩০% |
| Code Assistant | $5.20 | ১৯% |
| Analytics | $1.50 | ৬% |

এটি দেখায় কোন ফিচার সবথেকে বেশি খরচ করছে — সেখানে অপ্টিমাইজ করুন।

**৩. Per-User Cost Analysis**:
কিছু ইউজার অনেক বেশি টোকেন ব্যবহার করে (Heavy Users)। তাদের আইডেন্টিফাই করে Rate Limiting বা Usage Cap লাগান।

#### ল্যাটেন্সি অপ্টিমাইজেশন — P50, P95, P99:
*   **P50**: ৫০% কল এই সময়ের মধ্যে শেষ হয় (Median — সাধারণ পারফরম্যান্স)
*   **P95**: ৯৫% কল এই সময়ের মধ্যে শেষ হয় (বেশিরভাগ ইউজারের অভিজ্ঞতা)
*   **P99**: ৯৯% কল এই সময়ের মধ্যে শেষ হয় (Worst case — এটি মনিটর করুন!)

#### ল্যাটেন্সি কমানোর ৬টি টেকনিক:
1. **Streaming**: ইউজারকে টোকেন বাই টোকেন দেখান — perceive করা সময় কমে
2. **Caching**: একই প্রশ্নের ক্যাশড উত্তর দিন (Redis ব্যবহার করুন)
3. **Smaller Models**: সহজ কাজে ছোট মডেল — GPT-4o-mini 3x দ্রুত
4. **Parallel Calls**: একাধিক API কল একসাথে পাঠান
5. **Prompt Shortening**: অপ্রয়োজনীয় টোকেন বাদ দিন
6. **Edge Deployment**: ইউজারের কাছাকাছি সার্ভার থেকে সার্ভ করুন

#### 🚀 Boss-Level Cost Control Framework:
\`\`\`
Budget System:
├── Monthly Budget: $500
├── Daily Budget: $17 (auto-calculated)
├── Alert at: 80% ($400)
├── Hard Stop at: 100% ($500)
└── Overflow: Switch to cheaper model (Gemini Flash)
\`\`\`
এই সিস্টেমে বাজেট শেষ হলে AI বন্ধ না হয়ে সস্তা মডেলে সুইচ করে — ইউজার কখনো বুঝবে না, কিন্তু আপনার বিল কন্ট্রোলে থাকবে।
      `
    }
  ],
  bossSecret: "ইউজার ফিডব্যাকের মাধ্যমে Evals ইমপ্রুভ করা। প্রতিটি AI রেসপন্সের পাশে 👍/👎 বাটন রাখুন। ইউজার 👎 দিলে সেই query-response জোড়াটি আপনার Golden Dataset-এ Negative Example হিসেবে যোগ করুন। ৩ মাস পরে আপনার কাছে একটি মারাত্মক Eval Dataset থাকবে যা শুধু আপনার কোম্পানির জন্য কাস্টমাইজড।"
};
