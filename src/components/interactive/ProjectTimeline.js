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
exports.ProjectTimeline = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const timelineSteps = [
    { id: 1, title: 'Idea & PRD', icon: lucide_react_1.Lightbulb, color: '#F59E0B', desc: 'আইডিয়া থেকে প্রোডাক্ট রিকোয়ারমেন্ট ডকুমেন্ট (PRD) তৈরি।' },
    { id: 2, title: 'SPEC.md', icon: lucide_react_1.FileText, color: '#3B82F6', desc: 'টেকনিক্যাল আর্কিটেকচার এবং স্পেসিফিকেশন ডকুমেন্টেশন।' },
    { id: 3, title: 'AI Coding', icon: lucide_react_1.Code, color: '#8B5CF6', desc: 'Cursor বা Claude Code ব্যবহার করে দ্রুত কোড জেনারেশন।' },
    { id: 4, title: 'QA & Eval', icon: lucide_react_1.Search, color: '#EC4899', desc: 'LLM-as-Judge দিয়ে কোড এবং আউটপুট কোয়ালিটি টেস্ট।' },
    { id: 5, title: 'CI/CD', icon: lucide_react_1.ShieldCheck, color: '#10B981', desc: 'অটোমেটেড পাইপলাইন এবং সিকিউরিটি গার্ডরেইল সেটআপ।' },
    { id: 6, title: 'Deployment', icon: lucide_react_1.Rocket, color: '#6366F1', desc: 'SaaS টি লাইভ করা এবং মনিটরিং টুলস সেটআপ।' }
];
const ProjectTimeline = () => {
    const [hoveredStep, setHoveredStep] = (0, react_1.useState)(null);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full space-y-10 py-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden md:block" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-2 md:grid-cols-6 gap-6 relative z-10", children: timelineSteps.map((step, index) => {
                            const Icon = step.icon;
                            const isHovered = hoveredStep === step.id;
                            return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { onMouseEnter: () => setHoveredStep(step.id), onMouseLeave: () => setHoveredStep(null), className: "flex flex-col items-center gap-4 cursor-pointer", animate: { y: isHovered ? -10 : 0 }, children: [(0, jsx_runtime_1.jsx)("div", { className: "w-14 h-14 rounded-full flex items-center justify-center text-white transition-all shadow-xl", style: {
                                            backgroundColor: isHovered ? step.color : '#1e293b',
                                            boxShadow: isHovered ? `0 10px 30px ${step.color}40` : 'none',
                                            border: `2px solid ${isHovered ? 'white' : 'transparent'}`
                                        }, children: (0, jsx_runtime_1.jsx)(Icon, { size: 24 }) }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsxs)("p", { className: `text-[10px] font-black uppercase tracking-widest ${isHovered ? 'text-white' : 'text-slate-500'}`, children: ["Step ", step.id] }), (0, jsx_runtime_1.jsx)("h4", { className: `text-xs font-bold mt-1 ${isHovered ? 'text-white' : 'text-slate-400'}`, children: step.title })] })] }, step.id));
                        }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 min-h-[140px] flex items-center justify-center relative shadow-2xl overflow-hidden", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 opacity-5 pointer-events-none", style: {
                            backgroundImage: `radial-gradient(circle at 50% 50%, ${hoveredStep ? timelineSteps.find(s => s.id === hoveredStep).color : '#6366F1'} 0%, transparent 70%)`
                        } }), (0, jsx_runtime_1.jsx)("div", { className: "text-center space-y-3 relative z-10", children: hoveredStep ? ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, children: [(0, jsx_runtime_1.jsx)("h5", { className: "text-xl font-bold mb-2", style: { color: timelineSteps.find(s => s.id === hoveredStep).color }, children: timelineSteps.find(s => s.id === hoveredStep).title }), (0, jsx_runtime_1.jsx)("p", { className: "text-slate-300 max-w-lg mx-auto font-medium leading-relaxed", children: timelineSteps.find(s => s.id === hoveredStep).desc })] })) : ((0, jsx_runtime_1.jsx)("p", { className: "text-slate-500 italic font-medium", children: "\u0995\u09CB\u09A8\u09CB \u09B8\u09CD\u099F\u09C7\u09AA\u09C7\u09B0 \u0993\u09AA\u09B0 \u09AE\u09BE\u0989\u09B8 \u09A8\u09BF\u09DF\u09C7 \u09AF\u09BE\u09A8 \u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4 \u099C\u09BE\u09A8\u09A4\u09C7..." })) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-5 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl flex items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Rocket, { size: 20 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[10px] text-indigo-400 font-black uppercase tracking-widest leading-none", children: "Ready for Launch?" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm font-bold text-slate-200 mt-1", children: "\u098F\u0987 \u09EC\u099F\u09BF \u09A7\u09BE\u09AA \u09AB\u09B2\u09CB \u0995\u09B0\u09B2\u09C7 \u0986\u09AA\u09A8\u09BE\u09B0 SaaS \u09B9\u09AC\u09C7 \u099F\u09C7\u0995\u09A8\u09BF\u0995\u09CD\u09AF\u09BE\u09B2\u09BF \u09B8\u09BE\u0989\u09A8\u09CD\u09A1 \u098F\u09AC\u0982 \u09B8\u09BF\u0995\u09BF\u0989\u09B0\u0964" })] })] }), (0, jsx_runtime_1.jsx)("button", { className: "hidden lg:block bg-white text-slate-900 px-6 py-2 rounded-xl text-xs font-black uppercase hover:bg-slate-100 transition-colors", children: "Download Checklist" })] })] }));
};
exports.ProjectTimeline = ProjectTimeline;
//# sourceMappingURL=ProjectTimeline.js.map