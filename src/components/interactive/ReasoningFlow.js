"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReasoningFlow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const reasoningSteps = [
    {
        id: 1,
        type: 'query',
        text: "প্রশ্ন: প্রফেশনাল ইমেইল লেখার জন্য ৩টি টিপস কী কী?",
        icon: lucide_react_1.HelpCircle
    },
    {
        id: 2,
        type: 'reasoning',
        text: "ধাপ ১: ইউজারের উদ্দেশ্য বুঝতে হবে (প্রফেশনাল টোন)।",
        icon: lucide_react_1.Brain
    },
    {
        id: 3,
        type: 'reasoning',
        text: "ধাপ ২: কি কি পয়েন্ট জরুরি তা ফিল্টার করা (সাবজেক্ট লাইন, সম্ভাষণ, কল-টু-অ্যাকশন)।",
        icon: lucide_react_1.Brain
    },
    {
        id: 4,
        type: 'answer',
        text: "উত্তর: ১. ক্লিয়ার সাবজেক্ট ২. মার্জিত সম্ভাষণ ৩. স্পষ্ট সিগনেচার।",
        icon: lucide_react_1.CheckCircle2
    }
];
const ReasoningFlow = () => {
    const [activeStep, setActiveStep] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full space-y-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mb-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Brain, { size: 20 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold", children: "\u09B0\u09BF\u099C\u09A8\u09BF\u0982 \u0987\u099E\u09CD\u099C\u09BF\u09A8\u09BF\u09AF\u09BC\u09BE\u09B0\u09BF\u0982" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-slate-400 uppercase tracking-widest", children: "Chain of Thought (CoT)" })] })] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setActiveStep((prev) => (prev + 1) % (reasoningSteps.length + 1)), className: "bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 transition-all flex items-center gap-2", children: activeStep >= reasoningSteps.length ? 'রিসেট করুন' : 'পরবর্তী ধাপ' })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative space-y-6", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: reasoningSteps.slice(0, activeStep).map((step, index) => {
                            const Icon = step.icon;
                            return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 }, className: `p-5 rounded-2xl border flex gap-4 items-start ${step.type === 'query' ? 'bg-slate-800/80 border-slate-700' :
                                    step.type === 'reasoning' ? 'bg-indigo-500/5 border-indigo-500/20 italic' :
                                        'bg-emerald-500/5 border-emerald-500/20 font-bold'}`, children: [(0, jsx_runtime_1.jsx)("div", { className: `p-2 rounded-lg ${step.type === 'query' ? 'bg-slate-700 text-slate-300' :
                                            step.type === 'reasoning' ? 'bg-indigo-500/10 text-indigo-400' :
                                                'bg-emerald-500/10 text-emerald-400'}`, children: (0, jsx_runtime_1.jsx)(Icon, { size: 18 }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex-1", children: (0, jsx_runtime_1.jsx)("p", { className: `text-sm ${step.type === 'query' ? 'text-slate-300' :
                                                step.type === 'reasoning' ? 'text-indigo-300' :
                                                    'text-emerald-300'}`, children: step.text }) })] }, step.id));
                        }) }), activeStep === 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "h-48 border-2 border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center text-slate-600 text-center p-8", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.AlertCircle, { size: 32, className: "mb-3 opacity-20" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm font-medium", children: "\u09A8\u09BF\u099A\u09C7\u09B0 '\u09AA\u09B0\u09AC\u09B0\u09CD\u09A4\u09C0 \u09A7\u09BE\u09AA' \u09AC\u09BE\u099F\u09A8\u09C7 \u0995\u09CD\u09B2\u09BF\u0995 \u0995\u09B0\u09C7 \u09A6\u09C7\u0996\u09C1\u09A8 \u098F\u0986\u0987 \u0995\u09BF\u09AD\u09BE\u09AC\u09C7 \u09A7\u09BE\u09AA\u09C7 \u09A7\u09BE\u09AA\u09C7 \u099A\u09BF\u09A8\u09CD\u09A4\u09BE \u0995\u09B0\u09C7\u0964" })] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-5 bg-orange-500/5 border border-orange-500/20 rounded-2xl", children: [(0, jsx_runtime_1.jsxs)("h5", { className: "font-bold text-orange-400 mb-2 flex items-center gap-2 text-sm", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Brain, { size: 16 }), " Boss-Level Tech: Chain of Thought"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-slate-400 leading-relaxed font-medium", children: "\u099C\u099F\u09BF\u09B2 \u0995\u09CB\u09A8\u09CB \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u0995\u09B0\u09B2\u09C7 \u098F\u0986\u0987-\u0995\u09C7 \u09AC\u09B2\u09C1\u09A8 \"\u09A7\u09BE\u09AA\u09C7 \u09A7\u09BE\u09AA\u09C7 \u099A\u09BF\u09A8\u09CD\u09A4\u09BE \u0995\u09B0\u09CB\" (Let's think step by step)\u0964 \u098F\u09A4\u09C7 \u098F\u0986\u0987 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u0989\u09A4\u09CD\u09A4\u09B0\u09C7 \u09A8\u09BE \u0997\u09BF\u09DF\u09C7 \u09B2\u099C\u09BF\u0995\u09CD\u09AF\u09BE\u09B2 \u09B8\u09BF\u0995\u09C1\u09DF\u09C7\u09A8\u09CD\u09B8 \u09AE\u09C7\u0987\u09A8\u099F\u09C7\u0987\u09A8 \u0995\u09B0\u09C7, \u09AF\u09BE \u09AD\u09C1\u09B2 \u0989\u09A4\u09CD\u09A4\u09B0 \u09A6\u09C7\u0993\u09DF\u09BE\u09B0 \u09B8\u09AE\u09CD\u09AD\u09BE\u09AC\u09A8\u09BE \u09AC\u09CD\u09AF\u09BE\u09AA\u0995\u09AD\u09BE\u09AC\u09C7 \u0995\u09AE\u09BF\u09DF\u09C7 \u09A6\u09C7\u09DF\u0964" })] })] }));
};
exports.ReasoningFlow = ReasoningFlow;
//# sourceMappingURL=ReasoningFlow.js.map