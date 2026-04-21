export const mod12Data = {
  id: "mod-12",
  title: "Module 12: LangGraph — The Industry Standard",
  lessons: [
    {
      id: "12.1",
      title: "Lesson 12.1: স্টেট মেশিন ও সাইক্লিক ওয়ার্কফ্লো",
      deepDive: `
### ⚙️ LangGraph: এজেন্টিক AI-এর শিল্প মানদণ্ড
LangGraph হলো LangChain-এর তৈরি একটি ফ্রেমওয়ার্ক যা AI Agents-কে **গ্রাফ-ভিত্তিক স্টেট মেশিন** হিসেবে ডিজাইন করতে দেয়। সাধারণ চেইনিং-এ ডাটা শুধু সামনে যায় (A→B→C)। কিন্তু LangGraph-এ ডাটা **পেছনেও যেতে পারে** (লুপ), **শর্ত অনুযায়ী ভিন্ন পথে যেতে পারে**, এবং **মাঝখানে থামতে পারে** (Human Approval)।

#### LangGraph-এর ৩টি মূল ধারণা:

**১. State (অবস্থা)**:
পুরো সিস্টেমের বর্তমান তথ্য। একটি Python Dictionary বা TypedDict যেখানে সব ডাটা স্টোর থাকে।
\`\`\`
State = {
  "user_query": "আমার অর্ডারটি কোথায়?",
  "intent": "order_tracking",
  "order_id": "BD-12345",
  "response": None,
  "approved": False
}
\`\`\`

**২. Nodes (নোড)**:
প্রতিটি নোড একটি ফাংশন বা Agent যা State পড়ে, কাজ করে, এবং State আপডেট করে।

**৩. Edges (সংযোগ)**:
নোডগুলোকে সংযুক্ত করে। এগুলো Normal (সরাসরি) বা Conditional (শর্তসাপেক্ষ) হতে পারে।

#### সাইক্লিক ওয়ার্কফ্লো — কেন এটি গেম-চেঞ্জার?
সাধারণ Pipeline: Input → Process → Output (একটি সরলরেখা)
LangGraph: Input → Process → Evaluate → Need Fix? → Re-Process → Evaluate → OK → Output

এই **লুপ ক্ষমতা** LangGraph-কে আলাদা করে। একটি Agent নিজের কাজ নিজে চেক করে ভুল থাকলে আবার করতে পারে — ঠিক মানুষের মতো।

#### রিয়েল-ওয়ার্ল্ড ghragh — কাস্টমার সাপোর্ট:
\`\`\`
[Classify Intent]
    ↓ (conditional)
    ├→ "refund" → [Check Policy] → [Process Refund] → [Notify User]
    ├→ "technical" → [Search KB] → [Generate Solution] → [Verify]
    │                                                      ↓ (fail)
    │                                               [Escalate to Human]
    └→ "general" → [Generate FAQ Response] → [Output]
\`\`\`

#### কেন সবাই LangGraph শিখছে?
*   **State Persistence**: গ্রাফ যেকোনো পয়েন্টে থামিয়ে পরে আবার চালু করা যায়
*   **Streaming**: ইউজারকে রিয়েল-টাইমে প্রতিটি ধাপ দেখানো যায়
*   **Debugging**: প্রতিটি নোডের ইনপুট/আউটপুট লগ হয়
*   **Human-in-the-Loop**: ক্রিটিক্যাল ডিসিশনে মানুষের অ্যাপ্রুভাল নেওয়া যায়

#### 🚀 Boss-Level Insight:
LangGraph = **"Code as Graph"**। আপনি Python-এ কোড লেখেন, কিন্তু সেটি রানটাইমে একটি DAG (Directed Acyclic Graph) বা Cyclic Graph হিসেবে execute হয়। এটি AI Applications-এর জন্য Kubernetes যা Containers-এর জন্য।
      `
    },
    {
      id: "12.2",
      title: "Lesson 12.2: কন্ডিশনাল এজ ও হিউম্যান-ইন-দ্য-লুপ",
      deepDive: `
### 🔀 কন্ডিশনাল এজ: AI-র ডিসিশন মেকিং ক্ষমতা
কন্ডিশনাল এজ মানে হলো গ্রাফে একটি নোড থেকে পরবর্তী কোন নোডে যাবে তা একটি **শর্তের ওপর** নির্ভর করে। এটি if-else লজিকের গ্রাফ ভার্সন।

#### কন্ডিশনাল এজ ইমপ্লিমেন্টেশন:
\`\`\`python
def should_continue(state):
    if state["score"] >= 8:
        return "output"      # কোয়ালিটি ভালো - আউটপুট দাও
    elif state["retries"] >= 3:
        return "escalate"    # ৩ বার চেষ্টা হয়েছে - মানুষকে দাও
    else:
        return "retry"       # আবার চেষ্টা করো

graph.add_conditional_edges(
    "evaluate",
    should_continue,
    {
        "output": "final_output",
        "escalate": "human_review",
        "retry": "re_generate"
    }
)
\`\`\`

#### হিউম্যান-ইন-দ্য-লুপ (HITL): AI + মানুষের সেরা কম্বিনেশন
সব কাজ AI-কে দেওয়া বিপজ্জনক। কিছু ক্রিটিক্যাল ডিসিশনে মানুষের অ্যাপ্রুভাল নেওয়া আবশ্যক।

#### কোথায় HITL লাগবে?
*   **ফিনান্সিয়াল ট্রানজাকশন**: $১০০+ এর রিফান্ড → মানুষের অ্যাপ্রুভাল
*   **মেডিকেল অ্যাডভাইস**: ডায়াগনোসিস সাজেশন → ডাক্তারের রিভিউ
*   **লিগ্যাল ডকুমেন্ট**: চুক্তি ড্রাফট → আইনজীবীর পর্যালোচনা
*   **কন্টেন্ট পাবলিশিং**: ব্র্যান্ড-সেনসিটিভ কন্টেন্ট → মার্কেটিং টিমের ওকে

#### HITL ইমপ্লিমেন্টেশন প্যাটার্ন:
\`\`\`
[AI generates draft]
    ↓
[System sends notification to human]
    ↓
[Human reviews: Approve / Reject / Edit]
    ↓ Approve
[System continues with approved content]
    ↓ Reject
[AI re-generates with human's feedback]
    ↓ Edit
[System continues with human's edited version]
\`\`\`

#### LangGraph-এ HITL:
LangGraph-এ \`interrupt_before\` বা \`interrupt_after\` ব্যবহার করে যেকোনো নোডের আগে বা পরে গ্রাফ থামানো যায়। মানুষ রিভিউ করে \`resume()\` কল করলে গ্রাফ আবার চলা শুরু করে।

#### 🚀 Boss-Level HITL Strategy:
"Trust but Verify" মডেল অনুসরণ করুন:
*   **Low Risk (৯০% কেস)**: AI সম্পূর্ণ অটোনোমাস → কোনো HITL নেই
*   **Medium Risk (৯% কেস)**: AI করে, মানুষ শুধু ফাইনাল অ্যাপ্রুভ দেয়
*   **High Risk (১% কেস)**: AI ড্রাফট করে, মানুষ এডিট করে ফাইনাল করে

এভাবে ৯০% কাজ ফুল স্পিডে চলবে, ক্রিটিক্যাল ১০% তে মানুষের নিরাপত্তা থাকবে।
      `
    }
  ],
  bossSecret: "নন-ডিটারমিনিস্টিক গ্রাফ হ্যান্ডলিং। LangGraph-এ একটি Agent-এর আউটপুট প্রতিবার আলাদা হতে পারে (Non-Deterministic)। এটি হ্যান্ডেল করতে সবসময় Structured Output (JSON Mode) ব্যবহার করুন এবং প্রতিটি কন্ডিশনাল এজে একটি 'default' পাথ রাখুন যা unexpected output-এ fallback হিসেবে কাজ করে।"
};
