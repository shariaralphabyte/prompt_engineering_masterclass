export const mod10Data = {
  id: "mod-10",
  title: "Module 10: Agentic IDE Mastery (Cursor & Claude Code)",
  lessons: [
    {
      id: "10.1",
      title: "Lesson 10.1: Cursor Mastery & .cursorrules",
      deepDive: `
### 🖱️ Cursor: এআই-পাওয়ার্ড IDE মাস্টারি
Cursor হলো VS Code-এর ওপর তৈরি একটি AI-নেটিভ IDE যা কোডিং স্পিড ৫-১০x বাড়িয়ে দেয়। কিন্তু বেশিরভাগ ইউজার এর ১০% ক্ষমতা ব্যবহার করে। এই লেসনে আপনি Cursor-এর ফুল পাওয়ার আনলক করবেন।

#### Cursor-এর ৫টি সুপারপাওয়ার:

**১. Tab Completion (Ghost Text)**:
আপনি কোড লেখার সময় Cursor পরবর্তী লাইন প্রেডিক্ট করে ধূসর টেক্সটে দেখায়। Tab চাপলে অ্যাক্সেপ্ট হয়।
*   **প্রো টিপ**: ভালো কমেন্ট লিখুন — Cursor কমেন্ট পড়ে next line প্রেডিক্ট করে।

**২. Cmd+K (Inline Edit)**:
যেকোনো কোড সিলেক্ট করে Cmd+K চাপুন এবং ন্যাচারাল ল্যাঙ্গুয়েজে বলুন কী চেঞ্জ চান। যেমন: "এই ফাংশটিতে error handling যোগ করো"।

**৩. Cmd+L (Chat with Codebase)**:
সাইডবারে চ্যাট ওপেন করে আপনার পুরো কোডবেস সম্পর্কে প্রশ্ন করুন। "@file" দিয়ে নির্দিষ্ট ফাইল রেফারেন্স করুন।

**৪. Composer (Multi-File Editing)**:
একাধিক ফাইল একসাথে এডিট করতে পারে। "একটি নতুন API endpoint তৈরি করো routes, controller, এবং model সহ" — Cursor তিনটি ফাইল একসাথে তৈরি করবে।

**৫. @Docs (External References)**:
\`@docs\` দিয়ে অফিসিয়াল ডকুমেন্টেশন রেফারেন্স করতে পারেন। Cursor সেই ডকুমেন্টেশন পড়ে কোড জেনারেট করে।

#### .cursorrules — আপনার কোডিং সংবিধান:
প্রজেক্ট রুটে \`.cursorrules\` ফাইল তৈরি করুন। এটি Cursor-কে বলে দেয় কিভাবে কোড লিখতে হবে:
\`\`\`
# Project Rules
- Always use TypeScript with strict mode
- Use functional components with hooks
- All functions must have JSDoc comments
- Error handling is mandatory (try-catch)
- Use Prisma ORM for database queries
- Follow REST API naming conventions
- Bengali comments for business logic
- English comments for technical logic
\`\`\`

#### 🚀 Boss-Level .cursorrules টেমপ্লেট:
\`\`\`
# Architecture
- This is a Next.js 15 app with App Router
- Use Server Components by default
- Client Components only when necessary

# Code Style
- Max function length: 30 lines
- Max file length: 200 lines
- Use early returns over nested if-else

# Security
- Never hardcode API keys
- Always validate user input with Zod
- Use parameterized queries only

# Testing
- Write tests for every new function
- Use Vitest for unit tests
- Target 80% code coverage
\`\`\`
      `
    },
    {
      id: "10.2",
      title: "Lesson 10.2: Claude Code (CLI) ও অটোনোমাস এজেন্ট",
      deepDive: `
### 🤖 Claude Code: টার্মিনাল থেকে পুরো অ্যাপ ডেভেলপমেন্ট
Claude Code হলো Anthropic-এর CLI-based AI কোডিং এজেন্ট। এটি Cursor-এর চেয়ে আলাদা — এখানে AI সরাসরি আপনার ফাইল সিস্টেমে অ্যাক্সেস পায়, কমান্ড চালায়, গিট অপারেশন করে, এবং স্বায়ত্তশাসিতভাবে (Autonomously) পুরো ফিচার ডেভেলপ করতে পারে।

#### Claude Code vs Cursor — পার্থক্য:
| বৈশিষ্ট্য | Cursor | Claude Code |
|---|---|---|
| ইন্টারফেস | GUI (VS Code) | Terminal (CLI) |
| ফাইল অ্যাক্সেস | IDE-এর মধ্যে | সরাসরি ফাইল সিস্টেম |
| কমান্ড এক্সিকিউশন | সীমিত | সম্পূর্ণ (npm, git, etc.) |
| অটোনমি | মানুষ > AI | AI > মানুষ (অ্যাপ্রুভাল সহ) |
| সেরা ব্যবহার | দৈনন্দিন কোডিং | বড় ফিচার ডেভেলপমেন্ট |

#### Claude Code-এর ৪টি অটোনোমাস ক্ষমতা:

**১. Read & Understand Codebase**:
Claude Code আপনার পুরো প্রজেক্ট পড়তে পারে — ফাইল স্ট্রাকচার, ডিপেন্ডেন্সি, কনফিগারেশন সব বোঝে।

**২. Write & Edit Files**:
নতুন ফাইল তৈরি, বিদ্যমান ফাইল এডিট, এবং একাধিক ফাইলে একসাথে পরিবর্তন করতে পারে।

**৩. Run Commands**:
\`npm install\`, \`npm run test\`, \`git commit\` — টার্মিনাল কমান্ড চালাতে পারে। টেস্ট ব্যর্থ হলে নিজে থেকে ফিক্স করে আবার চালায়!

**৪. Git Operations**:
ব্রাঞ্চ তৈরি, কমিট, এবং PR ডিসক্রিপশন লেখা — সব অটোমেটিক।

#### CLAUDE.md — Claude Code-এর ব্রেন:
প্রজেক্ট রুটে \`CLAUDE.md\` ফাইল তৈরি করুন। এটি Claude Code-কে প্রজেক্ট-স্পেসিফিক নির্দেশনা দেয়:
\`\`\`
# CLAUDE.md

## Project Context
This is an e-commerce platform built with Next.js.
The database is PostgreSQL with Prisma ORM.

## Build Commands
- Dev: npm run dev
- Test: npm run test
- Build: npm run build

## Code Conventions
- Use 'bn' locale for all Bengali text
- Error messages must be bilingual
- All API routes need authentication middleware

## Do NOT
- Never delete migration files
- Never modify .env directly
- Never push to main branch directly
\`\`\`

#### 🚀 Boss-Level Autonomous Workflow:
\`\`\`
You: "Add user authentication with Google OAuth. 
      Follow the SPEC.md and CLAUDE.md rules."

Claude Code:
1. Reads SPEC.md and CLAUDE.md
2. Installs next-auth package
3. Creates auth configuration
4. Adds Google provider
5. Creates login/signup pages
6. Adds middleware for protected routes
7. Writes unit tests
8. Runs tests (all pass ✅)
9. Commits: "feat: add Google OAuth authentication"
\`\`\`
আপনি ৫ সেকেন্ডে কমান্ড দিলেন, Claude Code ১৫ মিনিটে পুরো ফিচার ডেভেলপ করে দিল।
      `
    }
  ],
  bossSecret: "এজেন্টিক লুপ সেটআপ। Claude Code-এ 'Write code → Run tests → Fix failures → Repeat until all pass' এই লুপটি সেটআপ করুন। এটি আপনার হস্তক্ষেপ ছাড়াই বাগ-ফ্রি কোড ডেলিভার করবে। Linter + Formatter + Test Runner = AI-এর জন্য পারফেক্ট ফিডব্যাক লুপ।"
};
