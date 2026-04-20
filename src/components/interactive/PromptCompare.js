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
exports.PromptCompare = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const examples = [
    {
        title: "Zero-Shot (সাধারণ)",
        type: "bad",
        description: "কোন উদাহরণ ছাড়া প্রম্পট। রেজাল্ট অনেক সময় ভুল হয় বা ফরম্যাট ঠিক থাকে না।",
        content: "একটি বিড়ালের ছবি বর্ণনা করো।",
        result: "বিড়াল খুব সুন্দর প্রাণী। এদের চারটা পা আছে।",
        tokens: 12
    },
    {
        title: "Few-Shot (বস লেভেল)",
        type: "good",
        description: "২-৩টি উদাহরণ যোগ করলে মডেল আপনার স্টাইল বুঝতে পারে।",
        content: `নিচের উদাহরণ অনুসরণ করে বর্ণনা করো:
[উদাহরণ ১] কুকুর: প্রভুভক্ত প্রাণী, যা বাড়ি পাহারা দেয়।
[উদাহরণ ২] বিড়াল: ...`,
        result: "বিড়াল: স্বাধীনচেতা প্রাণী, যা ইঁদুর শিকার করতে পছন্দ করে এবং মানুষের সাথে থাকতে ভালবাসে।",
        tokens: 45
    }
];
const PromptCompare = () => {
    const [activeTab, setActiveTab] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full space-y-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex bg-slate-800 p-1 rounded-xl border border-slate-700 w-fit", children: examples.map((ex, i) => ((0, jsx_runtime_1.jsxs)("button", { onClick: () => setActiveTab(i), className: `px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${activeTab === i
                        ? 'bg-indigo-500 text-white shadow-lg'
                        : 'text-slate-500 hover:text-slate-300'}`, children: [ex.type === 'good' ? (0, jsx_runtime_1.jsx)(lucide_react_1.Sparkles, { size: 14 }) : (0, jsx_runtime_1.jsx)(lucide_react_1.XCircle, { size: 14 }), ex.title] }, ex.title))) }), (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { mode: "wait", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { x: 20, opacity: 0 }, animate: { x: 0, opacity: 1 }, exit: { x: -20, opacity: 0 }, transition: { duration: 0.3 }, className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsx)("h4", { className: "text-xs font-black uppercase text-slate-500 tracking-widest", children: "Prompt Input" }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-slate-800/80 p-5 rounded-2xl border border-slate-700 min-h-[150px] relative", children: [(0, jsx_runtime_1.jsx)("pre", { className: "text-sm text-slate-300 font-mono whitespace-pre-wrap", children: examples[activeTab].content }), (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-4 right-4 flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase", children: (0, jsx_runtime_1.jsxs)("span", { children: [examples[activeTab].tokens, " Tokens"] }) })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-slate-400 italic", children: examples[activeTab].description })] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("h4", { className: "text-xs font-black uppercase text-slate-500 tracking-widest flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ArrowRight, { size: 14 }), " AI Output"] }), (0, jsx_runtime_1.jsx)("div", { className: `p-5 rounded-2xl border min-h-[150px] flex items-center justify-center text-center ${examples[activeTab].type === 'good'
                                        ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400'
                                        : 'bg-slate-800/50 border-slate-700 text-slate-500'}`, children: (0, jsx_runtime_1.jsxs)("div", { children: [examples[activeTab].type === 'good' && (0, jsx_runtime_1.jsx)(lucide_react_1.CheckCircle, { className: "mx-auto mb-3" }), (0, jsx_runtime_1.jsx)("p", { className: "font-medium", children: examples[activeTab].result })] }) })] })] }, activeTab) }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-indigo-600/10 p-5 rounded-2xl border border-indigo-600/20 text-slate-400 text-sm", children: [(0, jsx_runtime_1.jsx)("strong", { className: "text-indigo-400", children: "Boss Pro Tip:" }), " \u09AF\u0996\u09A8 \u0986\u09AA\u09A8\u09BE\u09B0 \u0986\u0989\u099F\u09AA\u09C1\u099F\u09C7 \u09A8\u09BF\u09B0\u09CD\u09A6\u09BF\u09B7\u09CD\u099F \u0995\u09CB\u09A8\u09CB \u099F\u09CB\u09A8 \u09AC\u09BE \u09AB\u09B0\u09AE\u09CD\u09AF\u09BE\u099F \u09A6\u09B0\u0995\u09BE\u09B0 \u09B9\u09AC\u09C7, \u09A4\u0996\u09A8 Zero-shot \u098F \u09B8\u09AE\u09DF \u09A8\u09B7\u09CD\u099F \u09A8\u09BE \u0995\u09B0\u09C7 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u09E8-\u09E9\u099F\u09BF \u0989\u09A6\u09BE\u09B9\u09B0\u09A3 (Few-shot) \u09A6\u09BF\u09A8\u0964 \u098F\u09A4\u09C7 \u09AE\u09A1\u09C7\u09B2\u09C7\u09B0 \u098F\u0995\u09C1\u09B0\u09C7\u09B8\u09BF \u09E8\u09E6-\u09E9\u09E6% \u09AC\u09BE\u09DC\u09C7!"] })] }));
};
exports.PromptCompare = PromptCompare;
//# sourceMappingURL=PromptCompare.js.map