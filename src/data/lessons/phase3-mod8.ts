export const mod8Data = {
  id: "mod-8",
  title: "Module 8: Reflection & Self-Critique Patterns",
  lessons: [
    {
      id: "8.1",
      title: "Lesson 8.1: ওয়ান-শট রিফ্লেকশন",
      deepDive: `
### 🪞 ওয়ান-শট রিফ্লেকশন: এআই-কে নিজের ভুল ধরতে শেখানো
মানুষ যেমন লেখার পর আবার পড়ে ভুল ঠিক করে, এআই-কেও একই কাজ করানো সম্ভব। ওয়ান-শট রিফ্লেকশন হলো সবথেকে সহজ এবং কার্যকর সেলফ-কারেকশন টেকনিক।

#### ম্যাকানিজম — কিভাবে কাজ করে?
দুই-ধাপে কাজ করে:
1. **Generation Phase**: মডেল প্রথমে তার সেরাটা দিয়ে উত্তর তৈরি করে।
2. **Reflection Phase**: একই মডেলকে বলা হয় "তোমার উত্তরটি আবার পড়ো এবং ভুল খুঁজে বের করো। ভুল থাকলে সংশোধন করো।"

#### রিফ্লেকশন প্রম্পট টেমপ্লেট:
\`\`\`
<initial_response>
[মডেলের প্রথম উত্তর এখানে]
</initial_response>

<reflection_instruction>
উপরের আউটপুটটি সমালোচনামূলকভাবে পর্যালোচনা করো।
নিচের বিষয়গুলো চেক করো:
1. তথ্যগত ভুল আছে কি?
2. লজিক্যাল ত্রুটি আছে কি?
3. কিছু মিসিং আছে কি?
4. আরও ভালো উপায়ে লেখা সম্ভব কি?

যদি কোনো সমস্যা পাও, সংশোধিত ভার্সন দাও।
যদি সব ঠিক থাকে, "No changes needed" লেখো।
</reflection_instruction>
\`\`\`

#### কেন ওয়ান-শট রিফ্লেকশন কাজ করে?
LLM-এর Generation এবং Evaluation দুটি আলাদা "cognitive mode"। Generation-এর সময় মডেল ক্রিয়েটিভলি টোকেন জেনারেট করে — ভুল হতে পারে। কিন্তু Evaluation-এর সময় সে পুরো কনটেক্সট দেখে যাচাই করতে পারে — এটি অনেক বেশি নির্ভুল।

#### পারফরম্যান্স ইমপ্রুভমেন্ট:
*   **Code Generation**: ওয়ান-শট রিফ্লেকশন যোগ করলে বাগ ৩০-৪০% কমে।
*   **Math Problems**: ক্যালকুলেশন ভুল ২৫% কম হয়।
*   **Writing Quality**: গ্রামার এবং ফ্যাক্ট ভুল ৫০% কমে।

#### 🚀 Boss-Level Tip:
রিফ্লেকশন করার সময় **ভিন্ন temperature** ব্যবহার করুন। Generation-এ temp=0.7 এবং Reflection-এ temp=0.2। এতে Generation-এ ক্রিয়েটিভিটি থাকবে এবং Reflection-এ সিরিয়াস যাচাই হবে।
      `
    },
    {
      id: "8.2",
      title: "Lesson 8.2: ক্রিটিক-এজেন্ট প্যাটার্ন",
      deepDive: `
### 🧑‍⚖️ ক্রিটিক-এজেন্ট: একটি AI অন্য AI-কে গ্রেড করে
ওয়ান-শট রিফ্লেকশনে একই মডেল নিজের কাজ চেক করে — যা "Self-Bias" তৈরি করতে পারে (মানুষও নিজের ভুল কম ধরে!)। ক্রিটিক-এজেন্ট প্যাটার্নে **একটি আলাদা AI** দিয়ে অন্যটির কাজ রিভিউ করানো হয়।

#### আর্কিটেকচার:
\`\`\`
User Query
    ↓
[Generator Agent] (Claude Sonnet - temp 0.7)
    → Draft Response
    ↓
[Critic Agent] (GPT-4o - temp 0.2)
    → Feedback: "Point 3 is factually incorrect. 
       The population of Bangladesh is 170M, not 180M."
    ↓
[Generator Agent Again] (Claude Sonnet - temp 0.3)
    → Revised Response (incorporating feedback)
    ↓
Final Output
\`\`\`

#### কেন আলাদা মডেল ব্যবহার করবেন?
*   **ভিন্ন Training Data**: আলাদা মডেলের আলাদা জ্ঞানভাণ্ডার থাকে — এক মডেলের blind spot অন্য মডেল ধরতে পারে।
*   **ভিন্ন Bias**: Claude এবং GPT-এর আলাদা bias আছে — একে অন্যকে ব্যালান্স করে।
*   **Cost Optimization**: Generator হিসেবে দামী মডেল (Opus), Critic হিসেবে সস্তা মডেল (mini)।

#### ক্রিটিক প্রম্পট ডিজাইন:
\`\`\`
<critic_system>
তুমি একজন কঠোর সমালোচক। তোমার কাজ হলো নিচের 
আউটপুটে ভুল এবং দুর্বলতা খুঁজে বের করা:
- তথ্যগত ভুল (Factual Errors)
- লজিক্যাল ফাঁক (Logical Gaps)  
- মিসিং তথ্য (Missing Information)
- টোনাল সমস্যা (Tone Issues)

তুমি অবশ্যই কমপক্ষে ২টি সমস্যা খুঁজে বের করবে।
যদি কোনো সমস্যা না থাকে, তবে উন্নতির পরামর্শ দাও।
</critic_system>
\`\`\`

#### 🚀 Boss-Level Insight:
"কমপক্ষে ২টি সমস্যা খুঁজে বের করবে" — এই নির্দেশটি গুরুত্বপূর্ণ। এটি মডেলকে "সারফেস-লেভেল OK" না বলে গভীরে যেতে বাধ্য করে। এটিকে বলা হয় **"Forced Critique"** টেকনিক।
      `
    },
    {
      id: "8.3",
      title: "Lesson 8.3: ইটারেটিভ রিফাইনমেন্ট লুপ",
      deepDive: `
### 🔄 ইটারেটিভ রিফাইনমেন্ট: যতক্ষণ পারফেক্ট না হয় ততক্ষণ চলবে
ওয়ান-শট রিফ্লেকশন একবার চেক করে। ক্রিটিক-এজেন্ট দুইবার। কিন্তু ইটারেটিভ রিফাইনমেন্ট **একটি লুপ** চালায় যতক্ষণ না আউটপুট একটি নির্দিষ্ট কোয়ালিটি থ্রেশহোল্ড পাস করে।

#### লুপ আর্কিটেকচার:
\`\`\`
Start → Generate Draft
           ↓
        Evaluate (Score: 0-10)
           ↓
        Score >= 8? ──Yes──→ Output ✅
           ↓ No
        Generate Feedback
           ↓
        Re-Generate (with feedback)
           ↓
        Back to Evaluate
        (Max 3 iterations)
\`\`\`

#### কোড ইমপ্লিমেন্টেশন (Pseudocode):
\`\`\`
max_iterations = 3
score_threshold = 8

draft = generate(prompt)

for i in range(max_iterations):
    score, feedback = evaluate(draft)
    
    if score >= score_threshold:
        return draft  # Quality achieved!
    
    # Re-generate with specific feedback
    draft = generate(prompt + feedback)

return draft  # Best effort after max iterations
\`\`\`

#### Exit Conditions — কখন লুপ থামাবেন:
1. **Quality Threshold**: স্কোর ৮/১০ পেলে থামুন
2. **Max Iterations**: সর্বোচ্চ ৩ বার (Infinite loop প্রিভেনশন)
3. **Diminishing Returns**: দুই iteration-এ স্কোর না বাড়লে থামুন
4. **Cost Limit**: নির্দিষ্ট টোকেন বাজেট শেষ হলে থামুন

#### রিয়েল-ওয়ার্ল্ড ব্যবহার:
*   **কোড জেনারেশন**: কোড লেখা → টেস্ট চালানো → ব্যর্থ হলে ফিডব্যাক সহ আবার → পাস হওয়া পর্যন্ত
*   **কন্টেন্ট রাইটিং**: ড্রাফট → SEO স্কোর চেক → কম হলে অপ্টিমাইজ → টার্গেট পাওয়া পর্যন্ত
*   **ডাটা এক্সট্রাকশন**: এক্সট্রাক্ট → ভ্যালিডেশন → ভুল হলে আবার → সব ফিল্ড সঠিক পাওয়া পর্যন্ত

#### 🚀 Boss-Level Optimization:
**প্রথম iteration-এ দামী মডেল, পরবর্তীতে সস্তা মডেল ব্যবহার করুন।** কারণ প্রথম ড্রাফটটি সবথেকে গুরুত্বপূর্ণ। পরবর্তী iteration-গুলোতে শুধু ছোটখাটো ফিক্স করতে হয় — যা সস্তা মডেলেই সম্ভব। এটি কস্ট ৫০% কমিয়ে একই কোয়ালিটি দেয়।
      `
    }
  ],
  bossSecret: "নেতিবাচক রিফ্লেকশন (Reverse Reflection) ব্যবহার করুন। মডেলকে বলুন 'তোমার উত্তরে কমপক্ষে ৩টি ভুল আছে — সেগুলো খুঁজে ঠিক করো।' এমনকি ভুল না থাকলেও মডেল আরও গভীরে গিয়ে চেক করবে এবং প্রায়ই সত্যিকারের ইমপ্রুভমেন্ট খুঁজে পাবে। এটি Anthropic-এর ইন্টারনাল টিমের প্র্যাকটিস।",
  labData: {
    title: "Reflection Strategy Selector",
    banner: "রিফ্লেকশন লুপ যত লম্বা হবে, কোয়ালিটি তত বাড়বে কিন্তু খরচও বাড়বে। সঠিক ব্যালেন্স খুঁজে পাওয়াই হলো ইঞ্জিনিয়ারিং সাফল্য।",
    data: {
      start: {
        id: 'start',
        question: "আপনার কাজের জন্য নির্ভুলতা (Accuracy) কতটা জরুরি?",
        options: [
          { label: "জীবন-মরণ সমস্যা (মেডিকেল/কোড)", nextId: 'critical' },
          { label: "মোটামুটি ঠিক থাকলেই চলবে", result: "One-Shot Reflection (Simple & Fast)" }
        ]
      },
      critical: {
        id: 'critical',
        question: "আপনার টোকেন বাজেট কেমন?",
        options: [
          { label: "আনলিমিটেড বাজেট", result: "Iterative Refinement Loop (3+ iterations)" },
          { label: "সীমিত বাজেট", nextId: 'budget' }
        ]
      },
      budget: {
        id: 'budget',
        question: "আপনি কি একাধিক মডেল ব্যবহার করতে পারবেন?",
        options: [
          { label: "হ্যাঁ, Claude + GPT মিক্সড", result: "Critic-Agent Pattern (Cross-Model Review)" },
          { label: "না, একটি মডেলই যথেষ্ট", result: "Self-Critique with Forced Error Check" }
        ]
      }
    }
  }
};
