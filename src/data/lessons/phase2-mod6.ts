export const mod6Data = {
  id: "mod-6",
  title: "Module 6: Prompt Chaining & Modularization",
  lessons: [
    {
      id: "6.1",
      title: "Lesson 6.1: মনোলিথিক প্রম্পট বনাম চেইনড প্রম্পট",
      deepDive: `
### 🔗 প্রম্পট চেইনিং: জটিল কাজকে ছোট করার বিজ্ঞান
একটি বড় প্রম্পটে সব ইনস্ট্রাকশন দেওয়াকে বলা হয় **"Monolithic Prompting"**। এটি সহজ কাজে ঠিক আছে, কিন্তু জটিল কাজে এটি ব্যর্থ হয়। **Prompt Chaining** হলো একটি বড় কাজকে ছোট ছোট ধাপে ভেঙে প্রতিটি ধাপে আলাদা প্রম্পট ব্যবহার করা।

#### মনোলিথিক প্রম্পটের ৫টি সমস্যা:
1. **Instruction Following Degradation**: ১০টি নিয়ম দিলে মডেল ৩-৪টি ভুলে যায়।
2. **Token Waste**: পুরো কনটেক্সট একবারে পাঠাতে হয়।
3. **Debugging Impossible**: কোথায় ভুল হচ্ছে বোঝা যায় না।
4. **No Error Recovery**: একটি ধাপ ভুল হলে পুরো আউটপুট নষ্ট।
5. **Limited Control**: ইন্টারমিডিয়েট স্টেপে মানুষের ইন্টারভেনশন অসম্ভব।

#### চেইনড প্রম্পটের আর্কিটেকচার:
\`\`\`
Step 1: Extract → "এই ইমেইল থেকে ক্যাটেগরি এবং সেন্টিমেন্ট বের করো"
    ↓ (JSON output)
Step 2: Analyze → "এই ক্যাটেগরি অনুযায়ী রেসপন্স স্ট্র্যাটেজি ঠিক করো"
    ↓ (strategy output)
Step 3: Generate → "এই স্ট্র্যাটেজি অনুযায়ী রিপ্লাই ড্রাফট করো"
    ↓ (final email)
Step 4: Review → "এই রিপ্লাইটি পলিসি-কমপ্লায়েন্ট কি না যাচাই করো"
\`\`\`

#### কখন Monolithic, কখন Chained?
| বৈশিষ্ট্য | Monolithic | Chained |
|---|---|---|
| কাজের জটিলতা | সহজ | জটিল |
| ধাপের সংখ্যা | ১-২ | ৩+ |
| Error Tolerance | কম | বেশি |
| ল্যাটেন্সি | কম (১ কল) | বেশি (একাধিক কল) |
| খরচ | কম | বেশি (কিন্তু রিলায়েবল) |
| ডিবাগিং | কঠিন | সহজ |

#### রিয়েল-ওয়ার্ল্ড চেইনিং উদাহরণ — কাস্টমার সাপোর্ট বট:
1. **Intent Classification** (GPT-4o-mini): ইউজার কি ফেরত চায়? অভিযোগ? তথ্য?
2. **Policy Lookup** (Embedding + RAG): কোম্পানির পলিসি থেকে প্রাসঙ্গিক নিয়ম আনা
3. **Response Draft** (Claude Sonnet): উত্তর লেখা
4. **Tone Check** (GPT-4o-mini): টোন ঠিক আছে কি না
5. **Translation** (Gemini Flash): প্রয়োজনে বাংলায় অনুবাদ

এখানে প্রতিটি ধাপে আলাদা মডেল ব্যবহার করা হচ্ছে — এটিই **"Best Model for Each Step"** স্ট্র্যাটেজি।

#### 🚀 Boss-Level Insight:
চেইনিং-এর সবথেকে বড় সুবিধা হলো **"Gate Keeping"**। প্রতিটি ধাপের আউটপুট চেক করে পরবর্তী ধাপে পাঠানো যায়। ভুল আউটপুট পেলে সেই ধাপটি আবার চালানো যায় — এটিকে বলা হয় **"Retry with Feedback"** প্যাটার্ন।
      `
    },
    {
      id: "6.2",
      title: "Lesson 6.2: পাইপলাইন ডিজাইন",
      deepDive: `
### 🏭 পাইপলাইন ডিজাইন: AI সিস্টেমের ব্লুপ্রিন্ট
পাইপলাইন হলো ডাটা প্রসেসিং-এর একটি চেইন যেখানে এক ধাপের আউটপুট পরবর্তী ধাপের ইনপুট হিসেবে কাজ করে। প্রোডাকশন AI সিস্টেম তৈরির ক্ষেত্রে পাইপলাইন ডিজাইন শেখা আবশ্যক।

#### ৪ ধরণের AI পাইপলাইন আর্কিটেকচার:

**১. Linear Pipeline (রৈখিক)**:
\`\`\`
Input → Step A → Step B → Step C → Output
\`\`\`
সবথেকে সহজ। প্রতিটি ধাপ একটির পর একটি চলে। কাস্টমার সাপোর্ট বটে ব্যবহার হয়।

**২. Parallel Pipeline (সমান্তরাল)**:
\`\`\`
         ┌→ Step A (Summary) →┐
Input →  ├→ Step B (Sentiment)→├→ Merge → Output
         └→ Step C (Keywords) →┘
\`\`\`
একই ইনপুটে একাধিক কাজ একসাথে চলে। সময় বাঁচায় — ৩টি কাজ ১টির সময়ে শেষ!

**৩. Conditional Pipeline (শর্তসাপেক্ষ)**:
\`\`\`
                    ┌→ Path A (Refund Process)
Input → Router →   ├→ Path B (Technical Support)
                    └→ Path C (General Inquiry)
\`\`\`
প্রথমে একটি ক্লাসিফায়ার ডিসিশন নেয়, তারপর সেই অনুযায়ী কোন পাথে যাবে ঠিক হয়। এটি **Model Routing**-এর বাস্তব প্রয়োগ।

**৪. Loop Pipeline (চক্রাকার)**:
\`\`\`
Input → Generate → Evaluate →  Pass? → Output
                       ↓ Fail
                   Re-Generate (with feedback)
\`\`\`
আউটপুট কোয়ালিটি চেক হয়। ভালো না হলে ফিডব্যাক সহ আবার জেনারেট হয়। এটি **Self-Correction Loop** বা **Iterative Refinement**।

#### পাইপলাইন ডিজাইনের ৫টি নিয়ম:
1. **প্রতিটি ধাপের ইনপুট/আউটপুট ডিফাইন করুন** — কী ঢুকবে, কী বের হবে, কোন ফরম্যাটে।
2. **Error Handling যুক্ত করুন** — প্রতিটি ধাপে try-catch এবং fallback রাখুন।
3. **Logging চালু করুন** — প্রতিটি ধাপের ইনপুট, আউটপুট, এবং ল্যাটেন্সি ট্র্যাক করুন।
4. **সবথেকে সস্তা মডেল আগে ব্যবহার করুন** — Router হিসেবে সবসময় mini মডেল ব্যবহার করুন।
5. **Human-in-the-Loop গেট রাখুন** — হাই-রিস্ক ডিসিশনে মানুষের অ্যাপ্রুভাল নিন।

#### 🚀 Boss-Level Architecture:
\`\`\`
User Input
  → [GPT-4o-mini: Intent Classification] (Router)
  → [Claude Sonnet: Main Processing] (Worker)  
  → [GPT-4o-mini: Quality Check] (Validator)
  → [Claude Haiku: Final Polish] (Formatter)
  → Output
\`\`\`
এই আর্কিটেকচারে ৪টি মডেল ৪টি আলাদা কাজ করছে — প্রতিটি তার শক্তির জায়গায়। এটিই **"Ensemble Architecture"** — প্রোডাকশন AI-এর গোল্ড স্ট্যান্ডার্ড।
      `
    }
  ],
  bossSecret: "কন্ডিশনাল প্রম্পট চেইন (If-Then-Else logic in AI flows)। প্রথম ধাপে একটি সস্তা মডেল দিয়ে ইনপুট ক্লাসিফাই করুন, তারপর ক্লাসিফিকেশন অনুযায়ী আলাদা আলাদা প্রম্পট এবং মডেল ব্যবহার করুন। এটি খরচ ৭০% কমায় এবং accuracy ৩০% বাড়ায়।"
};
