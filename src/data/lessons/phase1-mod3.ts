export const mod3Data = {
  id: "mod-3",
  title: "Module 3: Prompt Caching & Cost Engineering",
  lessons: [
    {
      id: "3.1",
      title: "Lesson 3.1: Anthropic Prompt Caching Deep Dive",
      deepDive: `
### 💰 প্রম্পট ক্যাশিং: প্রোডাকশন AI-এর সবথেকে শক্তিশালী অস্ত্র
আপনি যদি একই বড় ডকুমেন্ট বা সিস্টেম প্রম্পট বারবার এআই-কে পাঠান, তবে প্রতিবার সম্পূর্ণ টোকেন প্রসেসিং চার্জ দেওয়া বোকামি। Anthropic-এর **Prompt Caching** এটি সমাধান করে।

#### ক্যাশিং কিভাবে কাজ করে? — অন্তরালের ম্যাকানিজম
1. **প্রথম কল**: আপনি যখন cache_control সহ একটি প্রম্পট পাঠান, Anthropic সেই অংশের **KV Cache** সার্ভারে সেভ করে রাখে।
2. **পরবর্তী কল**: একই প্রম্পট আবার আসলে KV Cache থেকে সরাসরি লোড হয় — পুরো টোকেন রি-প্রসেসিং বাদ!
3. **ক্যাশ লাইফটাইম**: ক্যাশ ৫ মিনিট পর্যন্ত সক্রিয় থাকে। প্রতি ব্যবহারে এটি রিফ্রেশ হয়।

#### তিন ধরণের টোকেন প্রাইসিং:
*   **Base Input Tokens**: সাধারণ দাম (যেমন Claude Sonnet-এ $3/1M)
*   **Cache Write Tokens**: প্রথমবার ক্যাশে লেখার সময় ২৫% বেশি দাম ($3.75/1M)
*   **Cache Read Tokens**: ক্যাশ হিট করলে ৯০% কম দাম ($0.30/1M)

#### যখন ক্যাশিং সবচেয়ে কার্যকরী:
*   **চ্যাটবট**: যেখানে সিস্টেম প্রম্পট প্রতিটি মেসেজে পাঠানো হয়
*   **RAG Pipeline**: যেখানে বড় ডকুমেন্ট চাঙ্ক বারবার ব্যবহার হয়
*   **Coding Agent**: যেখানে পুরো কোডবেস কনটেক্সট হিসেবে দেওয়া হয়
*   **Multi-turn Conversation**: যেখানে কনভার্সেশন হিস্ট্রি বড় হতে থাকে

#### 🚀 রিয়েল-ওয়ার্ল্ড সাশ্রয় হিসাব:
ধরুন আপনার সিস্টেম প্রম্পট ৪০০০ টোকেন এবং প্রতিদিন ১০,০০০ API কল হয়।
*   **ক্যাশিং ছাড়া**: ৪০০০ × ১০,০০০ = ৪০M tokens × $3/1M = $120/দিন
*   **ক্যাশিং সহ**: ৪০M tokens × $0.30/1M = $12/দিন
*   **মাসিক সাশ্রয়**: ($120 - $12) × ৩০ = **$3,240/মাস!**
      `
    },
    {
      id: "3.2",
      title: "Lesson 3.2: cache_control ইমপ্লিমেন্টেশন",
      deepDive: `
### 🛠️ হাতে-কলমে প্রম্পট ক্যাশিং ইমপ্লিমেন্টেশন

#### ১. বেসিক ক্যাশিং স্ট্রাকচার
Claude API-তে ক্যাশিং ব্যবহার করতে হলে আপনাকে প্রম্পটের নির্দিষ্ট অংশে cache_control ট্যাগ যুক্ত করতে হবে। এটি মডেলকে বলে দেয় কোন অংশটুকু ক্যাশে রাখতে হবে।

\`\`\`json
{
  "model": "claude-3-5-sonnet-20241022",
  "max_tokens": 1024,
  "system": [
    {
      "type": "text",
      "text": "আপনি একজন বাংলা AI টিউটর...",
      "cache_control": {"type": "ephemeral"}
    }
  ],
  "messages": [
    {
      "role": "user",
      "content": "টোকেনাইজেশন কি?"
    }
  ]
}
\`\`\`

#### ২. মাল্টি-টার্ন কনভার্সেশনে ক্যাশিং
প্রতিটি নতুন মেসেজে আগের কনভার্সেশন হিস্ট্রি পাঠাতে হয়। ক্যাশিং ছাড়া এটি প্রতিবার বিশাল খরচ তৈরি করে।

**Boss Strategy**: কনভার্সেশনের শেষ মেসেজে cache_control দিন:
\`\`\`json
{
  "messages": [
    {"role": "user", "content": "প্রথম প্রশ্ন"},
    {"role": "assistant", "content": "প্রথম উত্তর"},
    {"role": "user", "content": "দ্বিতীয় প্রশ্ন", 
     "cache_control": {"type": "ephemeral"}},
    {"role": "assistant", "content": "দ্বিতীয় উত্তর"},
    {"role": "user", "content": "তৃতীয় প্রশ্ন (নতুন)"}
  ]
}
\`\`\`
এতে প্রথম থেকে দ্বিতীয় প্রশ্ন পর্যন্ত ক্যাশ হবে, শুধু তৃতীয় প্রশ্নের জন্য নতুন টোকেন চার্জ হবে।

#### ৩. RAG Pipeline-এ ক্যাশিং
যদি আপনার RAG সিস্টেম থেকে একই ডকুমেন্ট বারবার রিট্রিভ হয়:
\`\`\`json
{
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "[Retrieved Document - 5000 tokens]",
          "cache_control": {"type": "ephemeral"}
        },
        {
          "type": "text", 
          "text": "এই ডকুমেন্ট থেকে সামারি দাও"
        }
      ]
    }
  ]
}
\`\`\`

#### ⚠️ ক্যাশিং সতর্কতা:
*   **Minimum Size**: ন্যূনতম ১,০২৪ টোকেন না হলে ক্যাশ কাজ করবে না।
*   **Exact Match**: ক্যাশ হিট করতে হলে টেক্সট হুবহু একই হতে হবে। একটি স্পেসও আলাদা হলে Miss হবে।
*   **Model Specific**: একই ক্যাশ আলাদা মডেলে কাজ করবে না।
      `
    },
    {
      id: "3.3",
      title: "Lesson 3.3: কস্ট-পারফরম্যান্স এনালাইসিস",
      deepDive: `
### 📊 কস্ট ইঞ্জিনিয়ারিং: প্রোডাকশন AI-এর লাভ ও ক্ষতির হিসাব
একজন এআই আর্কিটেক্টের কাজ শুধু ভালো প্রম্পট লেখা নয় — প্রতিটি API কলের কস্ট জানা এবং অপ্টিমাইজ করাও জরুরি।

#### প্রতিটি মডেলের প্রাইসিং ম্যাপ (2025 Q4):
| মডেল | Input/1M | Output/1M | কনটেক্সট |
|---|---|---|---|
| Claude Haiku | $0.25 | $1.25 | 200K |
| Claude Sonnet | $3 | $15 | 200K |
| Claude Opus | $15 | $75 | 200K |
| GPT-4o mini | $0.15 | $0.60 | 128K |
| GPT-4o | $2.50 | $10 | 128K |
| Gemini Flash | $0.075 | $0.30 | 1M |
| Gemini Pro | $1.25 | $5 | 2M |

#### কস্ট অপ্টিমাইজেশন — ৫টি প্রোডাকশন স্ট্র্যাটেজি:

**১. Model Tiering (মডেল স্তরবিন্যাস)**:
প্রতিটি রিকোয়েস্ট একই মডেলে পাঠাবেন না। একটি Router তৈরি করুন:
*   সহজ কাজ → GPT-4o mini বা Gemini Flash (95% কম খরচ)
*   মাঝারি কাজ → Claude Sonnet বা GPT-4o
*   কঠিন কাজ → Claude Opus বা o3

**২. Token Pruning (অপ্রয়োজনীয় শব্দ বাদ দেওয়া)**:
প্রম্পটে দীর্ঘ বর্ণনা বাদ দিন। "Please be so kind as to help me" → "Help me"। 
*   Input টোকেন ২০-৩০% কমানো সম্ভব কেবল শব্দ সংক্ষেপ করে।

**৩. Max Tokens সীমিত করা**:
ডিফল্ট max_tokens 4096 রাখবেন না। আপনার ১০০ শব্দের উত্তর দরকার হলে max_tokens=300 দিন। অতিরিক্ত আউটপুট = অতিরিক্ত খরচ।

**৪. Batch API ব্যবহার করা**:
Anthropic এবং OpenAI দুজনেই Batch API অফার করে যেখানে কাজ ২৪ ঘণ্টার মধ্যে করলে ৫০% ডিসকাউন্ট পাওয়া যায়। রিয়েল-টাইম না হলে এটি ব্যবহার করুন।

**৫. Response Caching (আপনার সাইডে)**:
একই প্রশ্নের উত্তর বারবার AI-কে জিজ্ঞেস না করে Redis বা Memcached-এ ক্যাশ করে রাখুন।

#### 🚀 Boss-Level কস্ট ফর্মুলা:
**Monthly Cost = (Avg Input Tokens × Input Price + Avg Output Tokens × Output Price) × Daily Calls × 30**

মনে রাখবেন, এআই ইঞ্জিনিয়ারিং মানে কেবল ভালো কোড করা নয়, বরং স্মার্টলি খরচ নিয়ন্ত্রণ করে বিজনেসকে লাভজনক রাখা।
      `
    }
  ],
  bossSecret: "ক্যাশ টিয়ারিং (Cache Tiering)। মাল্টিপল API কল লুপে করার সময় শুধুমাত্র প্রথমবার ফুল প্রাইস দিন, বাকি সময়গুলোতে ক্যাশড প্রাইস এনশিওর করুন। Anthropic-এর ক্যাশিং + Batch API কম্বিনেশন করলে আপনি মূল দামের মাত্র ৫% দিয়ে কাজ চালাতে পারবেন。",
  labData: {
    before: `// Standard API Call بدون ক্যাশ
{
  "model": "claude-3-sonnet",
  "system": "You are a specialized legal assistant. [10,000 words of legal documents...]",
  "messages": [
    {"role": "user", "content": "সামারি দাও।"}
  ]
}

// Cost: $0.05 per request
// Time: 4.2s (Full processing)`,
    after: `// Optimized with Prompt Caching
{
  "model": "claude-3-sonnet",
  "system": [
    {
      "type": "text",
      "text": "You are a specialized legal assistant. [10,000 words of legal documents...]",
      "cache_control": {"type": "ephemeral"}
    }
  ],
  "messages": [
    {"role": "user", "content": "সামারি দাও।"}
  ]
}

// Cost: $0.005 per request (90% Save!)
// Time: 0.8s (Instant Hit)`
  }
};

