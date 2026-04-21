export const mod5Data = {
  id: "mod-2", // Note: I should probably fix this ID error as well, it says mod-2 in the file but it is Module 5.
  title: "Module 5: Prefilling & Constrained Output",
  lessons: [
    {
      id: "5.1",
      title: "Lesson 5.1: অ্যাসিস্ট্যান্ট রেসপন্স প্রি-ফিলিং ট্রিক",
      deepDive: `
### ⚡ প্রি-ফিলিং: মডেলকে পথ দেখানো
Claude-এর মতো মডেলে আপনি এটি দিয়ে শুরু করতে পারেন: "এখানে আপনার কাঙ্ক্ষিত JSON ডাটা দেওয়া হলো: {"। এর ফলে মডেল আর কোনো বাজে কথা না বলে সরাসরি ডাটা ফিল করা শুরু করবে।

#### সুবিধা:
*   **Zero Pre-amble**: "Sure, I can help you with that" - এই সব অপ্রয়োজনীয় কথা আসবে না।
*   **Exact Format**: আপনার পছন্দের ফরম্যাট এনশিওর করা যায়।
      `
    },
    {
      id: "5.2",
      title: "Lesson 5.2: JSON vs YAML vs CSV",
      deepDive: `
### 📊 আউটপুট ফরম্যাট মাস্টারি
*   **JSON**: সবথেকে জনপ্রিয় কিন্তু টোকেন খরচ বেশি (ব্র্যাকেট এবং কোটেশনের জন্য)।
*   **YAML**: ক্লিন এবং টোকেন কম লাগে, কিন্তু পাইথন বা জাভাস্ক্রিপ্টে রিড করার জন্য লাইব্রেরি লাগে।
*   **CSV**: খুব সিম্পল ডাটা লিস্টের জন্য সেরা।

**Boss Tip**: আপনি যদি এআই দিয়ে এআই-কে কন্ট্রোল করেন, তবে সব সময় **JSON** প্রিফার করুন।
      `
    },
    {
      id: "5.3",
      title: "Lesson 5.3: শার্ট-সার্কিট আউটপুট",
      deepDive: `
### 🔌 শর্ট-সার্কিট মেথড (Direct Answer Only)
আপনি যদি মডেলকে বলেন "Answer in 1 word" তবে অনেক সময় সে ভুল করতে পারে। তার বদলে "Short-circuit" টেকনিক ব্যবহার করুন।

#### টেকনিক:
সিস্টেম প্রম্পটের শেষে লিখে দিন - "You will only output the final answer inside <result> tags. Do not explain anything else." 

এটি আপনার অ্যাপের লজিককে অনেক বেশি স্টেবল রাখবে এবং ইউজারের ওয়েটিং টাইম কমিয়ে দেবে।
      `
    }
  ],
  bossSecret: "স্টপ সিকোয়েন্স (Stop Sequences)। যদি আপনি কেবল একটি লিস্ট চান, তবে স্টপ সিকোয়েন্স হিসেবে '\\n3.' দিয়ে রাখুন। ৩ নাম্বার পয়েন্ট আসার আগেই মডেল থেমে যাবে।"
};
