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
exports.RAGPipeline = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const steps = [
    { id: 'query', label: 'ইউজার কুয়েরি', icon: lucide_react_1.Search, color: '#6366F1' },
    { id: 'embedding', label: 'এমবেডিং মডেল', icon: lucide_react_1.Layers, color: '#8B5CF6' },
    { id: 'retrieval', label: 'ভেক্টর সার্চ (DB)', icon: lucide_react_1.Database, color: '#EC4899' },
    { id: 'context', label: 'রিলেভেন্ট কন্টেক্সট', icon: lucide_react_1.FileText, color: '#F59E0B' },
    { id: 'llm', label: 'এলএলএম (LLM)', icon: lucide_react_1.Cpu, color: '#10B981' }
];
const RAGPipeline = () => {
    const [activeStep, setActiveStep] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full space-y-12 py-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: steps.map((step, index) => {
                    const Icon = step.icon;
                    const isActive = index <= activeStep;
                    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center gap-3 transition-all duration-500 cursor-pointer group", onClick: () => setActiveStep(index), children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: false, animate: {
                                            scale: isActive ? 1.1 : 1,
                                            backgroundColor: isActive ? step.color : '#1e293b',
                                            boxShadow: isActive ? `0 0 20px ${step.color}40` : 'none'
                                        }, className: "w-16 h-16 rounded-2xl flex items-center justify-center text-white border border-slate-700/50", children: (0, jsx_runtime_1.jsx)(Icon, { size: 24 }) }), (0, jsx_runtime_1.jsx)("p", { className: `text-[10px] font-black uppercase tracking-widest text-center ${isActive ? 'text-white' : 'text-slate-500'}`, children: step.label })] }), index < steps.length - 1 && ((0, jsx_runtime_1.jsxs)("div", { className: "hidden md:block flex-1 h-px bg-slate-800 relative grow", children: [(0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: false, animate: { width: isActive ? '100%' : '0%' }, className: "absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500" }), (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowRight, { className: "absolute -right-2 -top-2 text-slate-700", size: 16 })] }))] }, step.id));
                }) }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 min-h-[120px] flex items-center justify-center relative overflow-hidden group", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute top-0 left-0 w-1 h-full bg-indigo-500" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-slate-300 text-center max-w-lg leading-relaxed italic", children: [activeStep === 0 && "ইউজার একটি প্রশ্ন করে, যেমন: 'কোম্পানির লিভ পলিসি কী?'", activeStep === 1 && "এমবেডিং মডেল প্রশ্নটিকে একটি ম্যাথমেটিক্যাল ভেক্টরে রূপান্তর করে।", activeStep === 2 && "ভেক্টর ডেটাবেস থেকে সবচেয়ে কাছাকাছি রিলেভেন্ট ডকিউমেন্ট খুঁজে বের করা হয়।", activeStep === 3 && "পাওয়া তথ্যগুলো প্রম্পটের সাথে 'কন্টেক্সট' হিসেবে যুক্ত করা হয়।", activeStep === 4 && "সবশেষে LLM এই কন্টেক্সট ব্যবহার করে একটি সঠিক এবং হ্যালুসিনেশন-মুক্ত উত্তর দেয়।"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-xl", children: [(0, jsx_runtime_1.jsx)("h5", { className: "font-bold text-indigo-400 mb-1 text-xs uppercase tracking-widest", children: "Why RAG?" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[10px] text-slate-400 leading-relaxed uppercase", children: "\u09AE\u09A1\u09C7\u09B2\u09C7\u09B0 \u09AD\u09C7\u09A4\u09B0 \u09B8\u09AC \u09A4\u09A5\u09CD\u09AF \u09A5\u09BE\u0995\u09C7 \u09A8\u09BE\u0964 RAG \u098F\u09B0 \u09AE\u09BE\u09A7\u09CD\u09AF\u09AE\u09C7 \u0986\u09AE\u09B0\u09BE \u0986\u09AA\u09A8\u09BE\u09B0 \u09AA\u09CD\u09B0\u09BE\u0987\u09AD\u09C7\u099F \u09A1\u09C7\u099F\u09BE \u09A8\u09BF\u09B0\u09BE\u09AA\u09A6\u09AD\u09BE\u09AC\u09C7 \u098F\u0986\u0987-\u0995\u09C7 \u09B6\u09C7\u0996\u09BE\u09A4\u09C7 \u09AA\u09BE\u09B0\u09BF\u0964" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl", children: [(0, jsx_runtime_1.jsx)("h5", { className: "font-bold text-emerald-400 mb-1 text-xs uppercase tracking-widest", children: "Efficiency" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[10px] text-slate-400 leading-relaxed uppercase", children: "\u09B8\u09AE\u09CD\u09AA\u09C2\u09B0\u09CD\u09A3 \u09A1\u0995\u09BF\u0989\u09AE\u09C7\u09A8\u09CD\u099F \u09AB\u09BF\u09A1 \u09A8\u09BE \u09A6\u09BF\u09DF\u09C7 \u09B6\u09C1\u09A7\u09C1 \u09B0\u09BF\u09B2\u09C7\u09AD\u09C7\u09A8\u09CD\u099F \u0985\u0982\u09B6 \u09A6\u09C7\u0993\u09DF\u09BE\u09DF \u099F\u09CB\u0995\u09C7\u09A8 \u0996\u09B0\u099A \u0985\u09A8\u09C7\u0995 \u0995\u09AE\u09C7 \u09AF\u09BE\u09DF\u0964" })] })] })] }));
};
exports.RAGPipeline = RAGPipeline;
//# sourceMappingURL=RAGPipeline.js.map