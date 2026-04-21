export const mod17Data = {
  id: "mod-17",
  title: "Module 17: Multi-Modal Agentic Automation (n8n)",
  lessons: [
    {
      id: "17.1",
      title: "Lesson 17.1: n8n ও মেক (Make) এর সাথে এআই ইন্টিগ্রেশন",
      deepDive: `
### 🤖 No-Code AI Automation: কোড ছাড়াই এআই পাওয়ার
**n8n** এবং **Make (Zapier-এর বিকল্প)** হলো Workflow Automation টুল যা ভিজ্যুয়াল ড্র্যাগ-এন্ড-ড্রপ ইন্টারফেসে AI-কে বিভিন্ন সার্ভিসের সাথে কানেক্ট করে। ইমেইল আসলে AI পড়বে, সামারি করবে, Slack-এ পাঠাবে, ডাটাবেসে সেভ করবে — সব অটোমেটিক!

#### n8n vs Make — কোনটি বেছে নেবেন?
| বৈশিষ্ট্য | n8n | Make |
|---|---|---|
| হোস্টিং | Self-hosted (ফ্রি!) | Cloud only (পেইড) |
| প্রাইসিং | ওপেন সোর্স | $9/মাস থেকে |
| AI Nodes | Claude, GPT, Gemini, Ollama | GPT, Claude |
| কমপ্লেক্সিটি | মাঝারি-কঠিন | সহজ |
| কাস্টমাইজেশন | সম্পূর্ণ (কোড নোড আছে) | সীমিত |
| সেরা ব্যবহার | ডেভেলপার, এজেন্সি | নন-টেকনিক্যাল ইউজার |

#### n8n-এ AI Workflow — ৫টি রিয়েল-ওয়ার্ল্ড উদাহরণ:

**১. ইমেইল অটো-রেসপন্ডার**:
\`\`\`
Gmail Trigger → AI Classify Intent → 
  If "support" → AI Generate Reply → Send Draft
  If "sales" → Forward to Sales Team
  If "spam" → Delete
\`\`\`

**২. কন্টেন্ট পাইপলাইন**:
\`\`\`
RSS Feed → AI Summarize → AI Translate to Bengali → 
WordPress Post → Twitter/LinkedIn Share
\`\`\`

**৩. কাস্টমার ফিডব্যাক এনালাইসিস**:
\`\`\`
Google Forms Submission → AI Sentiment Analysis → 
  If Negative → Slack Alert + Priority Email
  If Positive → Add to Testimonials DB
\`\`\`

**৪. ডকুমেন্ট প্রসেসিং**:
\`\`\`
Google Drive Upload → Extract Text (OCR) → 
AI Categorize → AI Extract Key Data → 
Update Airtable/Notion Database
\`\`\`

**৫. মিটিং অ্যাসিস্ট্যান্ট**:
\`\`\`
Zoom Recording → Whisper Transcription → 
AI Meeting Summary → AI Action Items → 
Send to All Participants via Email
\`\`\`

#### n8n + AI Agent Node:
n8n-এর নতুন **AI Agent** নোড একটি সম্পূর্ণ ReAct Agent! এটি:
*   টুল ব্যবহার করতে পারে (Calculator, Wikipedia, Custom API)
*   মেমরি রাখতে পারে (চ্যাট হিস্ট্রি)
*   ডিসিশন নিতে পারে (কোন টুল কখন ব্যবহার করবে)

#### 🚀 Boss-Level Automation Stack:
\`\`\`
Trigger Layer:     n8n (Webhook, Schedule, Event)
AI Layer:          Claude API (Main Processing)
Storage Layer:     Supabase / Airtable
Notification:      Slack / Email / WhatsApp
Monitoring:        LangSmith (AI Tracing)
\`\`\`
এই Stack দিয়ে আপনি যেকোনো বিজনেস প্রসেস অটোমেট করতে পারবেন — **কোডিং ছাড়াই!**
      `
    },
    {
      id: "17.2",
      title: "Lesson 17.2: মাল্টি-মোডাল এজেন্ট ও ভিশন কন্ট্রোল",
      deepDive: `
### 👁️ মাল্টি-মোডাল এজেন্ট: যখন AI দেখতে এবং শুনতে পারে
২০২৫ সালের সবথেকে বড় ব্রেকথ্রু হলো **Multi-Modal Agents** — AI যা টেক্সট ছাড়াও ছবি দেখে, কথা শোনে, ভিডিও বোঝে, এবং সেই অনুযায়ী স্ক্রিনে অ্যাকশন নেয়।

#### মাল্টি-মোডাল ক্ষমতা:

**১. Vision (দৃষ্টি)**:
*   স্ক্রিনশট দেখে UI বোঝা
*   ডকুমেন্ট থেকে ডাটা এক্সট্রাক্ট করা (OCR-এর চেয়ে অনেক বেশি accurate)
*   প্রোডাক্ট ইমেজ থেকে ডিসক্রিপশন তৈরি
*   হোয়াইটবোর্ড ফটো থেকে ডিজিটাল ডায়াগ্রাম

**২. Audio (শ্রবণ)**:
*   মিটিং ট্রান্সক্রিপশন (Whisper API)
*   ভয়েস কমান্ড বুঝে অ্যাকশন নেওয়া
*   কাস্টমার কলের সেন্টিমেন্ট এনালাইসিস
*   পডকাস্ট থেকে সামারি তৈরি

**৩. Video (ভিডিও)**:
*   Gemini 2.5 Pro দিয়ে ঘণ্টার পর ঘণ্টা ভিডিও এনালাইজ
*   সিকিউরিটি ক্যামেরা ফুটেজ মনিটরিং
*   ট্রেইনিং ভিডিও থেকে স্টেপ-বাই-স্টেপ গাইড তৈরি

#### Computer Use / Vision Control — AI নিজে কম্পিউটার চালায়!
Anthropic-এর **Computer Use** এবং OpenAI-এর **Operator** মডেলগুলো একটি সত্যিকারের কম্পিউটার স্ক্রিন দেখে মাউস ক্লিক এবং কীবোর্ড টাইপ করতে পারে। এটি RPA (Robotic Process Automation) এর AI ভার্সন।

#### Computer Use ওয়ার্কফ্লো:
\`\`\`
User: "আমার জন্য LinkedIn-এ গিয়ে 'AI Engineer' 
       পজিশনে ৫টি জব ফাইন্ড করো"

AI Agent:
1. [Screenshot] → Browser ওপেন করো
2. [Click] → LinkedIn.com এ যাও
3. [Type] → Search bar-এ "AI Engineer" লেখো
4. [Click] → Search বাটন চাপো
5. [Screenshot] → রেজাল্ট পেজ পড়ো
6. [Extract] → টপ ৫ জবের তথ্য সংগ্রহ
7. [Output] → JSON ফরম্যাটে ইউজারকে দাও
\`\`\`

#### সতর্কতা — Computer Use এর ঝুঁকি:
*   ❌ ক্রেডিট কার্ড নম্বর বা পাসওয়ার্ড AI-কে দেবেন না
*   ❌ AI-কে অ্যাডমিন অ্যাক্সেস দেবেন না
*   ❌ ফিনান্সিয়াল ট্রানজাকশন AI-কে করতে দেবেন না (HITL আবশ্যক)
*   ✅ Sandbox এনভায়রনমেন্টে টেস্ট করুন
*   ✅ প্রতিটি অ্যাকশনের আগে হিউম্যান অ্যাপ্রুভাল নিন

#### 🚀 Boss-Level Multi-Modal Architecture:
\`\`\`
[Voice Input] → Whisper (Speech-to-Text)
     ↓
[Text Processing] → Claude Opus (Understanding)
     ↓
[Vision Analysis] → GPT-4o (Image Understanding)
     ↓
[Action Planning] → LangGraph (Decision Making)
     ↓
[Execution] → n8n Workflow / Computer Use
     ↓
[Output] → Text + Image + Audio Response
\`\`\`

এই আর্কিটেকচারে AI একজন **সত্যিকারের Digital Employee** হিসেবে কাজ করে — দেখে, শোনে, বোঝে, এবং কাজ করে!
      `
    }
  ],
  bossSecret: "AI Automation Service Business। আপনি যা শিখলেন তা দিয়ে একটি বিজনেস শুরু করতে পারেন: কোম্পানিগুলোর জন্য AI Automation সেটআপ করা। একটি n8n + Claude সেটআপ করে দিলে মাসে $500-$2000 চার্জ করতে পারেন। ৫টি ক্লায়েন্ট = $2500-$10,000/মাস রিকারিং আয়। এটি ২০২৫-এর সবথেকে লাভজনক ফ্রিল্যান্সিং স্কিল।",
  labData: {
    title: "Multimodal Agent Intelligence",
    mediaTypes: [
      { id: 'vision', label: 'Vision Control', icon: 'Eye', color: '#6366F1' },
      { id: 'audio', label: 'Voice Reasoning', icon: 'Mic', color: '#8B5CF6' },
      { id: 'video', label: 'Video Context', icon: 'Video', color: '#EC4899' },
      { id: 'computer', label: 'Computer Use', icon: 'Monitor', color: '#10B981' }
    ]
  }
};
