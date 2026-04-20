export interface Module {
  id: string;
  title: string;
  description: string;
  content: string;
  visuals?: string;
  interactiveComponent?: string;
}

export interface Phase {
  id: number;
  title: string;
  englishTitle: string;
  color: string;
  modules: Module[];
}

export const curriculum: Phase[] = [
  {
    id: 1,
    title: "ফেজ ১: ফাউন্ডেশন — এআই কীভাবে 'চিন্তা' করে",
    englishTitle: "Foundation",
    color: "var(--phase-1)",
    modules: [
      {
        id: "m1",
        title: "মডিউল ১: এলএলএম কীভাবে কাজ করে — ভেতর থেকে বোঝা",
        description: "টোকেনাইজেশন, Temperature, Top-K, Top-P এবং কনটেক্সট উইন্ডো সম্পর্কে গভীর জ্ঞান।",
        content: `
- **টোকেনাইজেশন**: শব্দ কীভাবে সংখ্যায় পরিণত হয়
- **Temperature, Top-K, Top-P**: আউটপুটের "র্যান্ডমনেস" কন্ট্রোল
- **কনটেক্সট উইন্ডো**: ১২৮K vs ১M টোকেন — কী পার্থক্য?
- **টোকেন এনালাইসিস**: কেন বাংলা টোকেনাইজেশনে বেশি খরচ হয় এবং কীভাবে তা অপ্টিমাইজ করবেন।
`,
        interactiveComponent: "TokenizerDiagram"
      },
      {
        id: "m2",
        title: "মডিউল ২: মডেল সিলেকশন — কোন কাজে কোন মডেল?",
        description: "Claude, GPT, Gemini এবং Local LLMs এর মধ্যে তুলনামূলক বিশ্লেষণ।",
        content: `
- **Claude Opus 4.7 vs GPT-4o vs Gemini 3 Pro vs o3/o1** — তুলনামূলক বিশ্লেষণ
- **Reasoning Models (o1/o3) vs Conversational Models (GPT-4o)** — কখন কোনটি ব্যবহার করবেন
- **Local LLMs**: Ollama, LM Studio — প্রাইভেসি এবং কস্ট সেভিং
- **মডেল ইভোলিউশন**: কেন আমরা এখন রিজনিনিং মডেলের যুগে প্রবেশ করছি।
`,
        interactiveComponent: "ModelComparison"
      },
      {
        id: "m3",
        title: "মডিউল ৩: টোকেন ইকোনমি — কম খরচে বেশি আউটপুট",
        description: "প্রাইসিং কনসেপ্ট, কস্ট অপটিমাইজেশন এবং Anthropic Prompt Caching টেকনিক।",
        content: `
- **প্রতিটি মডেলের প্রাইসিং কনসেপ্ট**: ইনপুট vs আউটপুট টোকেন প্রাইসিং
- **کস্ট অপটিমাইজেশন ট্রিকস**: ব্যাচিং, ক্যাশিং এবং মডেল রাউটিং
- **Anthropic Prompt Caching**: ৫০-৯০% কস্ট সেভ করার প্রো-টেকনিক
  - \`cache_control\` প্যারামিটার ইমপ্লিমেন্টেশন
  - Static vs Dynamic content সাজানোর কৌশল
  - TTL (Time-to-Live) ম্যানেজমেন্ট
`,
        interactiveComponent: "CachingSimulator"
      }
    ]
  },
  {
    id: 2,
    title: "ফেজ ২: প্রো-লেভেল প্রম্পট ইঞ্জিনিয়ারিং",
    englishTitle: "Advanced Prompting",
    color: "var(--phase-2)",
    modules: [
      {
        id: "m4",
        title: "মডিউল ৪: প্রম্পটিং এর ভিত্তি — Zero-Shot থেকে Few-Shot",
        description: "উদাহরণ দিয়ে মডেলকে গাইড করার প্রো হ্যাকস।",
        content: `
- **Zero-Shot Prompting**: উদাহরণ ছাড়াই সঠিক আউটপুট পাওয়ার কৌশল
- **One-Shot এবং Few-Shot**: উদাহরণ দিয়ে মডেলকে গাইড করা
- **প্রো হ্যাক**: কখন কয়টি উদাহরণ দিতে হবে — ম্যাজিক নম্বর এবং এক্সাম্পল সিলেকশন
`,
        interactiveComponent: "PromptCompare"
      },
      {
        id: "m5",
        title: "মডিউল ৫: Structured Prompting — XML, Markdown, এবং ডেলিমিটার",
        description: "Anthropic, OpenAI এবং Gemini এর জন্য আলাদা প্রম্পটিং স্ট্র্যাটেজি।",
        content: `
- **Anthropic XML Strategy**: \`<task>\`, \`<context>\`, \`<examples>\`, \`<output>\` ট্যাগ ব্যবহার
- **OpenAI Markdown/JSON Strategy**: হেডিং, সেকশন ডিভাইডার এবং স্ট্রাকচারড রিপ্রেজেন্টেশন
- **Gemini System Instructions**: পার্সোনা এবং গ্রাউন্ডিং কন্ট্রোল
- **নেস্টেড ট্যাগ**: ডকুমেন্ট ইনডেক্সিং টেকনিক
`,
        interactiveComponent: "TabbedCodeViewer"
      },
      {
        id: "m6",
        title: "মডিউল ৬: সিস্টেম প্রম্পট আর্কিটেকচার — এআই-এর 'DNA' ডিজাইন",
        description: "Durable Prompt Pattern এবং কনস্ট্রেইন্ট ইঞ্জিনিয়ারিং।",
        content: `
- **সিস্টেম প্রম্পট vs ইউজার প্রম্পট**: গভীর পার্থক্য এবং ব্যবহারের নিয়ম
- **The Durable Prompt Pattern**: ROLE → CONTEXT → TASK → CONSTRAINTS → FORMAT → ACCEPTANCE
- **পার্সোনা ডিজাইন**: সিনিয়র ডেভেলপার, রিসার্চ অ্যানালিস্ট বা মার্কেটিং এক্সপার্ট পার্সোনা
- **কনস্ট্রেইন্ট ইঞ্জিনিয়ারিং**: কী করবে + কী করবে না (Positive vs Negative constraints)
`,
        interactiveComponent: "SystemPromptBuilder"
      },
      {
        id: "m7",
        title: "মডিউল ৭: রিজনিং ইঞ্জিনিয়ারিং — এআই-কে 'চিন্তা' করতে শেখানো",
        description: "Chain-of-Thought, Tree-of-Thought এবং Claude Extended Thinking।",
        content: `
- **Chain-of-Thought (CoT)**: "ধাপে ধাপে চিন্তা করো" পদ্ধতি
- **Tree-of-Thought (ToT)**: মাল্টিপল রিজনিং পাথ এক্সপ্লোর করা
- **Self-Consistency**: একই প্রশ্নে একাধিক উত্তর জেনারেট করে সেরাটি বেছে নেওয়া
- **Claude Extended Thinking**: \`<thinking>\` ব্লক এবং \`budget_tokens\` কনফিগারেশন
- **OpenAI o1/o3 Reasoning**: কেন CoT প্রম্পটিং এড়িয়ে চলতে হবে
`,
        interactiveComponent: "ReasoningFlow"
      },
      {
        id: "m8",
        title: "মডিউল ৮: আউটপুট ইঞ্জিনিয়ারিং — Structured Outputs",
        description: "JSON Mode, Pydantic মডেল এবং Prefilling টেকনিক।",
        content: `
- **JSON Mode**: এবং Strict Schema Enforcement (OpenAI/Anthropic)
- **Pydantic মডেল**: ডেটা ভ্যালিডেশন এবং টাইপ সেফটি
- **Prefilling টেকনিক**: অ্যাসিস্ট্যান্ট রেসপন্স আগে থেকেই লিখে ফরম্যাট কন্ট্রোল করা
- **মাল্টি-ফরম্যাট আউটপুট**: JSON, CSV, Markdown এবং কোড
`,
        interactiveComponent: "JsonValidator"
      },
      {
        id: "m9",
        title: "মডিউল ৯: প্রম্পট চেইনিং এবং ডিকম্পোজিশন",
        description: "বড় কাজকে ছোট ধাপে ভাগ করা এবং পাইপলাইন ডিজাইন।",
        content: `
- **চেইনিং কনসেপ্ট**: একটা বড় কাজকে ছোট ছোট ধাপে ভাগ করা
- **পাইপলাইন ডিজাইন**: Extract → Classify → Summarize → Draft পাইপলাইন
- **গেটকিপার প্যাটার্ন**: পরবর্তী ধাপে যাওয়ার আগে ভ্যালিডেশন নিশ্চিত করা
`,
        interactiveComponent: "PipelineDiagram"
      }
    ]
  },
  {
    id: 3,
    title: "ফেজ ৩: এআই কোডিং এজেন্ট — ভাইব কোডিং থেকে স্পেক-ড্রিভেন ডেভেলপমেন্ট",
    englishTitle: "Coding Agents",
    color: "var(--phase-3)",
    modules: [
      {
        id: "m10",
        title: "মডিউল ১০: এআই কোডিং টুলস মাস্টারি",
        description: "Cursor, Claude Code, GitHub Copilot এবং Windsurf এর তুলনা।",
        content: `
- **Cursor**: কম্পোজার মোড, মাল্টি-ফাইল এডিট, ইনলাইন জেনারেশন
- **Claude Code (Antigravity)**: আর্কিটেকচারাল রিফ্যাক্টরিং, ডিপ কোড রিজনিং
- **GitHub Copilot**: ইনলাইন কমপ্লিশন, রিপিটিটিভ টাস্ক স্পিড-আপ
- **Windsurf**: এক্সপেরিমেন্টাল ওয়ার্কফ্লো এবং ব্যালান্সড অ্যাপ্রোচ
`,
        interactiveComponent: "ToolMatrix"
      },
      {
        id: "m11",
        title: "মডিউল ১১: CLAUDE.md, AGENTS.md, SPEC.md — রিপোজিটরি কনটেক্সট ম্যানেজমেন্ট",
        description: "Specification-Driven Development (SDD) এবং কনটেক্সট গাইডেন্স।",
        content: `
- **Specification-Driven Development (SDD)**: SPEC.md কে "Single Source of Truth" হিসেবে ব্যবহার
- **CLAUDE.md / AGENTS.md**: প্রজেক্ট সামারি, টেক স্ট্যাক, কনভেনশন এবং বিহেভিয়ারাল রুলস
- **Progressive Disclosure**: এজেন্টকে "breadcrumbs" দিয়ে গাইড করা
`,
        interactiveComponent: "ArchitectureDiagram"
      },
      {
        id: "m12",
        title: "মডিউল ১২: Vibe Coding vs Production Coding",
        description: "ড্রুত প্রোটোটাইপ বনাম আর্কিটেকচারাল কোডিং।",
        content: `
- **ভাইব কোডিং**: দ্রুত প্রোটোটাইপ, PoC, হ্যাকাথন (Speed over structure)
- **প্রোডাকশন কোডিং**: কোড রিভিউ, অটোমেটেড টেস্ট, আর্কিটেকচারাল ইন্টিগ্রিটি
- **/plan → /review → /implement** ওয়ার্কফ্লো মাস্টারি
`,
        interactiveComponent: "DecisionTree"
      }
    ]
  },
  {
    id: 4,
    title: "ফেজ ৪: মাল্টি-এজেন্ট সিস্টেম ও RAG — প্রো-লেভেল আর্কিটেকচার",
    englishTitle: "Multi-Agent & RAG",
    color: "var(--phase-4)",
    modules: [
      {
        id: "m13",
        title: "মডিউল ১৩: এজেন্টিক ডিজাইন প্যাটার্নস — কগনিটিভ আর্কিটেকচার",
        description: "ReAct, Reflection, Planning এবং Routing প্যাটার্ন।",
        content: `
- **ReAct Pattern**: Reason → Act → Observe → Repeat সাইকেল
- **Reflection Pattern**: এজেন্ট নিজের কাজ নিজেই রিভিউ এবং রিফাইন করা
- **Planning Pattern**: সাব-টাস্ক জেনারেট করে সিস্টেমেটিক্যালি সমাধান
- **Routing Pattern**: ইনপুট টাইপ অনুযায়ী সঠিক এজেন্টে রিকোয়েস্ট পাঠানো
`,
        interactiveComponent: "ArchitectureDiagram"
      },
      {
        id: "m14",
        title: "মডিউল ১৪: মেমরি ও কনটেক্সট ইঞ্জিনিয়ারিং",
        description: "Short-Term vs Long-Term মেমরি এবং ভেক্টর ডিবি।",
        content: `
- **Short-Term Memory**: ওয়ার্কিং মেমরি এবং রিকার্সিভ সামারাইজেশন
- **Long-Term Memory**: Vector DB (Pinecone, Weaviate), Graph DB (Neo4j)
- **Context Management**: "Attention Budget" এবং ফেডিং মেমরি স্ট্র্যাটেজি
`,
        interactiveComponent: "ArchitectureDiagram"
      },
      {
        id: "m15",
        title: "মডিউল ১৫: RAG (Retrieval-Augmented Generation) — গভীর ব্যাখ্যা",
        description: "Chunking, Embedding, Hybrid Search এবং GraphRAG।",
        content: `
- **Chunking Strategies**: Fixed-size vs Semantic vs Hierarchical chunking
- **Embedding Models**: text-embedding-3-large, Cohere, Voyage
- **Hybrid Search**: Vector Search + BM25 কীওয়ার্ড সার্চ কম্বিনেশন
- **Reranking**: Cross-Encoder দিয়ে রেজাল্ট রিফাইন করা
- **GraphRAG**: নলেজ গ্রাফ এবং ভেক্টর সার্চের পাওয়ারফুল কম্বিনেশন
`,
        interactiveComponent: "RAGPipeline"
      },
      {
        id: "m16",
        title: "মডিউল ১৬: টুল ইউজ ও ফাংশন কলিং (Function Calling)",
        description: "এআই কীভাবে এপিআই এবং কোড ইন্টারপ্রিটার ব্যবহার করে।",
        content: `
- **ফাংশন কলিং কনসেপ্ট**: এআই → API → রেসপন্স → এআই চেইন
- **Tool Use Strategy**: OpenAI vs Anthropic vs Gemini ইমপ্লিমেন্টেশন
- **Code Interpreter**: এআই নিজেই কোড লিখে রান করার টেকনিক
- **MCP (Model Context Protocol)**: ইউনিভার্সাল টুল কানেকশন
`,
        interactiveComponent: "ArchitectureDiagram"
      },
      {
        id: "m17",
        title: "মডিউল ১৭: LangGraph — প্রোডাকশন-গ্রেড এআই ওয়ার্কফ্লো",
        description: "স্টেট মেশিন, সাইক্লিক্যাল ওয়ার্কফ্লো এবং পারসিস্টেন্স।",
        content: `
- **গ্রাফ-বেজড স্টেট মেশিন**: নোড, এজ এবং কন্ডিশনাল ব্রাঞ্চিং লজিক
- **সাইক্লিক্যাল ওয়ার্কফ্লো**: এজেন্ট লুপ এবং অটোমেটেড রিট্রাই লজিক
- **পারসিস্টেন্স**: চেকপয়েন্টিং এবং টাইম-ট্রাভেলিং ডিবাগিং
`,
        interactiveComponent: "GraphBuilder"
      },
      {
        id: "m18",
        title: "মডিউল ১৮: CrewAI — মাল্টি-এজেন্ট কোলাবরেশন",
        description: "রোল-বেজড এজেন্ট এবং সিকোয়েন্সিয়াল এক্সিকিউশন।",
        content: `
- **রোল-বেজড এজেন্ট**: Researcher, Writer, Editor এবং QA এজেন্ট ডিজাইন
- **টাস্ক ডেলিগেশন**: সিকোয়েন্সিয়াল এবং প্যারালেল এক্সিকিউশন ম্যানেজমেন্ট
- **কাস্টম টুল ইন্টিগ্রেশন**: নিজের টুলস এজেন্টের সাথে কানেক্ট করা
`,
        interactiveComponent: "ArchitectureDiagram"
      },
      {
         id: "m19",
         title: "মডিউল ১৯: OpenAI Swarm — লাইটওয়েট অর্কেস্ট্রেশন",
         description: "এজেন্ট হ্যান্ডঅফ প্যাটার্ন এবং ডাইনামিক রাউটিং।",
         content: `
 - **এজেন্ট হ্যান্ডঅফ**: এক এজেন্ট থেকে অন্য এজেন্টে টাস্ক ট্রান্সফার
 - **ডাইনামিক রাউটিং**: কনটেক্সট ভেরিয়েবল অনুযায়ী এজেন্টের বিহেভিয়ার চেঞ্জ
 - **ডিসিশন গাইড**: কখন Swarm vs কখন LangGraph vs কখন CrewAI ব্যবহার করবেন
 `,
         interactiveComponent: "DecisionTree"
       }
    ]
  },
  {
    id: 5,
    title: "ফেজ ৫: প্রোডাকশন পাইপলাইন — টেস্টিং, সিকিউরিটি, ডিপ্লয়মেন্ট",
    englishTitle: "Production",
    color: "var(--phase-5)",
    modules: [
      {
        id: "m20",
        title: "মডিউল ২০: DSPy — প্রম্পট 'প্রোগ্রামিং'",
        description: "ডিক্লারেটিভ প্রম্পট অপটিমাইজেশন এবং অটো-টিউনিং।",
        content: `
- **DSPy কী**: ডিক্লারেটিভ এআই প্রোগ্রামিং কনসেপ্ট
- **Signatures এবং Modules**: প্রম্পটের বদলে ফাংশনাল কোড স্ট্রাকচার
- **Automated Prompt Tuning**: মেট্রিক্স বেজড অটো-অপটিমাইজেশন টেকনিক
`,
        interactiveComponent: "ArchitectureDiagram"
      },
      {
        id: "m21",
        title: "মডিউল ২১: Evaluation-as-Code — এআই আউটপুট কোয়ালিটি টেস্টিং",
        description: "Golden Dataset, LLM-as-a-Judge এবং CI/CD ইন্টিগ্রেশন।",
        content: `
- **Golden Dataset**: রিয়েল ইউজার কুয়েরি এবং গ্রাউন্ড ট্রুথ দিয়ে ডেটাসেট তৈরি
- **ইভ্যালুয়েশন মেট্রিক্স**: Precision, Recall এবং Hallucination Rate ক্যালকুলেশন
- **LLM-as-a-Judge**: একটি এআই দিয়ে অন্য এআই-এর আউটপুট গ্রেড করা
`,
        interactiveComponent: "EvalDashboard"
      },
      {
        id: "m22",
        title: "মডিউল ২২: Observability — LangSmith দিয়ে এআই ডিবাগিং",
        description: "ট্রেসিং, লেটেন্সি মনিটরিং এবং কস্ট ট্র্যাকিং।",
        content: `
- **ট্রেসিং মাস্টারি**: ইনপুট → রিজনিং → টুল কল → আউটপুট ট্রেস করা
- **লেটেন্সি মনিটরিং**: P50/P99 ড্যাশবোর্ড এবং পারফরম্যান্স টিউনিং
- **কস্ট ট্র্যাকিং**: প্রতিটি রিকোয়েস্টে কত টোকেন এবং খরচ হচ্ছে তা মনিটর করা
`
      },
      {
        id: "m23",
        title: "মডিউল ২৩: এআই সিকিউরিটি — প্রম্পট ইনজেকশন ও গার্ডরেইলস",
        description: "জেলব্রেক ডিফেন্স, প্রিন্সিপল অফ লিস্ট প্রিভিলেজ এবং রেড টিমিং।",
        content: `
- **প্রম্পট ইনজেকশন**: "Ignore all previous instructions" অ্যাটাক থেকে সুরক্ষা
- **ডিফেন্স লেয়ারস**: স্যানিটাইজেশন, Salted Tags এবং LlamaGuard ব্যবহার
- **রেড টিমিং**: নিজের সিস্টেম নিজে হ্যাক করে দুর্বলতা খুঁজে বের করা
`,
        interactiveComponent: "ArchitectureDiagram"
      }
    ]
  },
  {
    id: 6,
    title: "ফেজ ৬: রিয়েল-ওয়ার্ল্ড Boss-Level প্রজেক্টস — Scratch to Production",
    englishTitle: "Final Projects",
    color: "var(--phase-6)",
    modules: [
      {
        id: "m24",
        title: "মডিউল ২৪: No-Code AI অটোমেশন — n8n, Make, Zapier",
        description: "অটোমেটেড কন্টেন্ট ক্রিয়েশন এবং কম্পিটিটর মনিটরিং।",
        content: `
- **n8n**: Advanced AI Agents এবং RAG ওয়ার্কফ্লো সেটআপ
- **Make/Zapier**: ভিজ্যুয়াল ক্যানভাস এবং কমপ্লেক্স ব্রাঞ্চিং লজিক
- **রিয়েল ইউজ কেস**: অটোমেটেড কন্টেন্ট ক্রিয়েশন এবং CRM ডেটা এনরিচমেন্ট
`,
        interactiveComponent: "PipelineDiagram"
      },
      {
        id: "m25",
        title: "মডিউল ২৫: Multimodal AI — ইমেজ, ভিডিও, অডিও প্রম্পটিং",
        description: "Vision API এবং ভিডিও অ্যানালাইসিস টেকনিক।",
        content: `
- **Gemini Multimodal**: ইমেজ + টেক্সট কম্বাইন্ড প্রম্পটিং স্ট্র্যাটেজি
- **ভিডিও অ্যানালাইসিস**: টাইমস্ট্যাম্প-বেজড ভিডিও কুয়েরি
- **Vision API**: ডকিউমেন্ট এবং চার্ট এক্সট্রাকশন টেকনিক
`,
        interactiveComponent: "MultimodalDemo"
      },
      {
        id: "m26",
        title: "মডিউল ২৬: Boss-Level প্রজেক্ট — সম্পূর্ণ প্রোডাকশন ওয়াকথ্রু",
        description: "আইডিয়া থেকে ডিপ্লয়মেন্ট পর্যন্ত এন্ড-টু-এন্ড প্রজেক্ট।",
        content: `
- **ধাপ ১**: আইডিয়া থেকে PRD জেনারেশন (Claude/GPT দিয়ে)
- **ধাপ ২**: টেকনিক্যাল স্পেক থেকে SPEC.md তৈরি
- **ধাপ ৩**: কোড জেনারেশন (Cursor/Claude Code ব্যবহার করে)
- **ধাপ ৪**: অটোমেটেড টেস্টিং এবং CI/CD পাইপলাইন সেটআপ
`,
        interactiveComponent: "ProjectTimeline"
      },
      {
        id: "m27",
        title: "মডিউল ২৭: Boss-Level Tricks & Hidden Gems",
        description: "Meta-Prompting, Model Routing এবং ব্যাচ প্রসেসিং।",
        content: `
- **Meta-Prompting**: একটি LLM দিয়ে অন্য LLM-এর জন্য প্রম্পট লেখানো
- **Model Routing**: সহজ কাজে সস্তা মডেল এবং কঠিন কাজে শক্তিশালী মডেল রাউটিং
- **Prompt Library**: নিজের এআই "ম্যাজিক বুক" বা লাইব্রেরি তৈরি করা
- **Batch Processing**: হাজার হাজার ডকিউমেন্ট একসাথে প্রসেস করার কৌশল
`,
        interactiveComponent: "CheatsheetGrid"
      }
    ]
  }
];
