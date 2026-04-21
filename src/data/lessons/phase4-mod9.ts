export const mod9Data = {
  id: "mod-9",
  title: "Module 9: Vibe Coding vs Spec-Driven Development",
  lessons: [
    {
      id: "9.1",
      title: "Lesson 9.1: হোয়াট ইজ ভাইব কোডিং? (Vibe Coding)",
      deepDive: `
### 🎵 ভাইব কোডিং: "শুধু বলো, এআই করে দেবে"
Andrej Karpathy (Tesla/OpenAI-এর প্রাক্তন AI চিফ) "Vibe Coding" শব্দটি তৈরি করেন। এটি হলো এমন এক ধরণের প্রোগ্রামিং যেখানে আপনি চ্যাটে আইডিয়া লেখেন, এআই কোড তৈরি করে, আপনি Accept চাপেন — কোড না পড়ে, না বুঝে।

#### ভাইব কোডিং-এর ৫টি বিপদ:

**১. "It Works But I Don't Know How" সিন্ড্রোম**:
এআই হয়তো কাজ করছে এমন কোড দিল, কিন্তু আপনি জানেন না কেন কাজ করছে। ফলে বাগ ফিক্স, স্কেলিং, এবং সিকিউরিটি অডিট অসম্ভব হয়ে পড়ে।

**২. Technical Debt Explosion**:
এআই প্রতিটি প্রম্পটে নতুন ফাইল, নতুন লাইব্রেরি, নতুন প্যাটার্ন ব্যবহার করতে পারে। ১ সপ্তাহ পর কোডবেস একটি জগাখিচুড়ি হয়ে যায়।

**৩. Context Window Degradation**:
প্রজেক্ট বড় হলে এআই কখনো পুরো কোডবেস একসাথে দেখতে পারে না। ফলে নতুন কোড আগের কোডের সাথে কনফ্লিক্ট করে — যাকে বলা হয় "Codebase Amnesia"।

**৪. Security Vulnerabilities**:
Vibe coding-এ সিকিউরিটি চেক হয় না। SQL Injection, XSS, Hardcoded Secrets — এগুলো ভাইব কোডেড প্রজেক্টে অত্যন্ত কমন।

**৫. Scaling Nightmare**:
100 ইউজার পর্যন্ত ভাইব কোড কাজ করতে পারে। 10,000 ইউজারে ক্র্যাশ করবে — কারণ পারফরম্যান্স অপ্টিমাইজেশন কখনো হয়নি।

#### তাহলে কি ভাইব কোডিং সম্পূর্ণ বাজে?
**না!** প্রোটোটাইপিং, MVP, হ্যাকাথন, এবং পার্সোনাল প্রজেক্টে ভাইব কোডিং অসাধারণ দ্রুত। সমস্যা হয় যখন এটি **প্রোডাকশনে** চলে যায়।

#### 🚀 Boss-Level Rule:
"ভাইব কোড দিয়ে শুরু করো, কিন্তু প্রোডাকশনে যাওয়ার আগে SPEC.md লেখো।" — এটি সবথেকে প্র্যাকটিক্যাল অ্যাপ্রোচ। দ্রুততা এবং গুণমান দুটোই পাওয়া যায়।
      `
    },
    {
      id: "9.2",
      title: "Lesson 9.2: স্পেক-ড্রিভেন ডেভেলপমেন্ট (SDD)",
      deepDive: `
### 📐 SDD: এআই-র জন্য ব্লুপ্রিন্ট ডিজাইন
Spec-Driven Development (SDD) হলো ভাইব কোডিং-এর বিপরীত দর্শন। এখানে **আগে সম্পূর্ণ ব্লুপ্রিন্ট (SPEC.md) লেখা হয়**, তারপর এআই সেই ব্লুপ্রিন্ট অনুসরণ করে কোড তৈরি করে। এটি সামরিক বাহিনীর "Mission Briefing" এর মতো — সৈনিক (AI) মিশনে যাওয়ার আগে সম্পূর্ণ প্ল্যান পায়।

#### SPEC.md-এর অ্যানাটমি (গঠন):
\`\`\`
# Project: AI Customer Support Bot

## 1. Goal
একটি বাংলা ভাষায় কাস্টমার সাপোর্ট চ্যাটবট তৈরি
করতে হবে যা FAQ থেকে উত্তর দেবে।

## 2. Tech Stack
- Frontend: Next.js 15 + TypeScript
- Backend: Node.js + Express
- Database: PostgreSQL + Prisma ORM
- AI: Claude Sonnet API
- Deployment: Vercel

## 3. Architecture
[Diagram বা বর্ণনা]

## 4. API Endpoints
- POST /api/chat - ইউজারের মেসেজ প্রসেস
- GET /api/history - চ্যাট হিস্ট্রি
- POST /api/feedback - ইউজার ফিডব্যাক

## 5. Data Models
User: {id, name, email, created_at}
Chat: {id, user_id, message, response, timestamp}

## 6. Security Requirements
- Rate limiting: 10 req/min per user
- Input sanitization: XSS prevention
- API key rotation: Monthly

## 7. Testing Strategy
- Unit tests: 80% coverage
- Integration tests: All API endpoints
- E2E tests: Critical user flows
\`\`\`

#### SDD-তে এআই-কে কিভাবে ব্যবহার করবেন:

**Phase 1: Spec Writing (মানুষ + AI)**
আপনি হাইলেভেল রিকোয়ারমেন্ট লেখেন, AI সেটিকে ডিটেইলড SPEC.md-তে পরিণত করে। আপনি রিভিউ করে অ্যাপ্রুভ করেন।

**Phase 2: Implementation (AI)**
AI SPEC.md অনুযায়ী কোড তৈরি করে। প্রতিটি ফাইলকে Spec-এর সাথে ম্যাচ করে যাচাই করতে পারেন।

**Phase 3: Testing (AI + মানুষ)**
AI টেস্ট লেখে এবং চালায়। ব্যর্থ টেস্ট ফিক্স করে। মানুষ ফাইনাল QA করে।

#### SDD vs Vibe Coding — রেজাল্ট তুলনা:
| মেট্রিক | Vibe Coding | SDD |
|---|---|---|
| MVP Speed | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Code Quality | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Bug Count | ❌ অনেক বেশি | ✅ অনেক কম |
| Scalability | ❌ দুর্বল | ✅ শক্তিশালী |
| Maintenance | ❌ কঠিন | ✅ সহজ |
| Team Collaboration | ❌ অসম্ভব | ✅ চমৎকার |

#### 🚀 Boss-Level SDD Workflow:
1. **Vision Doc লিখুন** (৫ মিনিট): "আমি কী তৈরি করতে চাই"
2. **AI-কে SPEC.md তৈরি করতে বলুন** (১০ মিনিট)
3. **SPEC রিভিউ ও অ্যাপ্রুভ করুন** (১৫ মিনিট)
4. **AI-কে SPEC অনুযায়ী কোড করতে বলুন** (অটোম্যাটিক)
5. **AI-কে টেস্ট লিখে রান করতে বলুন** (অটোম্যাটিক)
6. **আপনি শুধু ফাইনাল রিভিউ করুন** (১০ মিনিট)

এই পুরো প্রসেসে আপনি মাত্র ৪০ মিনিট কাজ করলেন, বাকি সব AI করেছে — কিন্তু কোয়ালিটি প্রোফেশনাল লেভেলের!
      `
    }
  ],
  bossSecret: "SPEC.md + .cursorrules + CLAUDE.md — এই তিনটি ফাইল মিলে একটি 'AI Development Kit' তৈরি হয়। SPEC.md বলে কী তৈরি করতে হবে, .cursorrules বলে কিভাবে কোড করতে হবে (কোডিং স্ট্যান্ডার্ড), এবং CLAUDE.md বলে কোন নিয়মগুলো কখনো ভাঙা যাবে না। এটি আপনার AI কোডিং এজেন্টকে একজন সিনিয়র ডেভেলপারে পরিণত করে।"
};
