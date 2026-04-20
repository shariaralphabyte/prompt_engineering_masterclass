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
exports.DecisionTree = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const treeData = {
    start: {
        id: 'start',
        question: "আপনার কাজের মূল লক্ষ্য কী?",
        options: [
            { label: "দ্রুত প্রোটোটাইপ বানানো", nextId: 'vibe' },
            { label: "প্রোডাকশন-গ্রেড এআই অ্যাপ মেকিং", nextId: 'prod' }
        ]
    },
    vibe: {
        id: 'vibe',
        question: "আপনি কি কোডিং-এ খুব দক্ষ?",
        options: [
            { label: "হ্যাঁ, প্রো লেভেল", result: "Vibe Coding with Cursor/Claude Code (Antigravity mode)" },
            { label: "না, বেসিক জানি", result: "Vibe Coding with n8n / Cursor Composer" }
        ]
    },
    prod: {
        id: 'prod',
        question: "আপনার অ্যাপে কি মাল্টি-এজেন্ট কোলাবরেশন দরকার?",
        options: [
            { label: "হ্যাঁ, অনেক এজেন্ট লাগবে", nextId: 'multi' },
            { label: "না, সিঙ্গেল এজেন্ট যথেষ্ট", result: "Production Coding with SPEC.md + Cursor (Agent Mode)" }
        ]
    },
    multi: {
        id: 'multi',
        question: "আপনি কি স্টেট মেশিন এবং লুপ কন্ট্রোল করতে চান?",
        options: [
            { label: "হ্যাঁ, ফুল কন্ট্রোল দরকার", result: "LangGraph (Production-Grade State Machine)" },
            { label: "না, সিম্পল অর্কেস্ট্রেশন হলে হবে", result: "CrewAI or OpenAI Swarm" }
        ]
    }
};
const DecisionTree = () => {
    const [currentNodeId, setCurrentNodeId] = (0, react_1.useState)('start');
    const [history, setHistory] = (0, react_1.useState)([]);
    const node = treeData[currentNodeId];
    const handleOptionClick = (option) => {
        if (option.nextId) {
            setHistory([...history, currentNodeId]);
            setCurrentNodeId(option.nextId);
        }
        else if (option.result) {
            setCurrentNodeId(`result:${option.result}`);
        }
    };
    const reset = () => {
        setCurrentNodeId('start');
        setHistory([]);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full space-y-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mb-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 text-emerald-400", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.HelpCircle, { size: 18 }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm font-bold uppercase tracking-widest", children: "\u09A1\u09BF\u09B8\u09BF\u09B6\u09A8 \u099F\u09CD\u09B0\u09BF \u09B8\u09BF\u09AE\u09C1\u09B2\u09C7\u099F\u09B0" })] }), (0, jsx_runtime_1.jsxs)("button", { onClick: reset, className: "text-[10px] text-slate-500 hover:text-slate-300 flex items-center gap-1 uppercase font-bold tracking-tighter transition-colors", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.RefreshCcw, { size: 12 }), " Reset Tree"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative min-h-[300px] flex items-center justify-center p-8 bg-slate-800/40 rounded-3xl border border-slate-700/50 overflow-hidden", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" }), (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { mode: "wait", children: currentNodeId.startsWith('result:') ? ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 1.05 }, className: "text-center space-y-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto shadow-xl shadow-emerald-500/10", children: (0, jsx_runtime_1.jsx)(lucide_react_1.CheckCircle2, { size: 40 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-xs text-slate-500 font-bold uppercase tracking-widest mb-2", children: "\u0986\u09AA\u09A8\u09BE\u09B0 \u099C\u09A8\u09CD\u09AF \u09B8\u09A0\u09BF\u0995 \u099A\u09DF\u09C7\u09B8:" }), (0, jsx_runtime_1.jsx)("h3", { className: "text-2xl font-black text-white", children: currentNodeId.split(':')[1] })] }), (0, jsx_runtime_1.jsx)("button", { onClick: reset, className: "bg-white text-slate-900 px-8 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all shadow-lg", children: "\u0986\u09AC\u09BE\u09B0 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09C1\u09A8" })] }, "result")) : ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 }, transition: { duration: 0.3 }, className: "w-full max-w-md space-y-8", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold text-slate-100 text-center leading-relaxed", children: node.question }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 gap-4", children: node.options.map((option, i) => ((0, jsx_runtime_1.jsxs)("button", { onClick: () => handleOptionClick(option), className: "group bg-slate-800 hover:bg-emerald-600 border border-slate-700 hover:border-emerald-400 p-5 rounded-2xl flex items-center justify-between transition-all duration-300 text-left shadow-lg", children: [(0, jsx_runtime_1.jsx)("span", { className: "font-bold text-slate-300 group-hover:text-white transition-colors", children: option.label }), (0, jsx_runtime_1.jsx)(lucide_react_1.ArrowRight, { size: 18, className: "text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" })] }, i))) })] }, currentNodeId)) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl text-slate-400 text-xs italic leading-relaxed", children: [(0, jsx_runtime_1.jsx)("strong", { children: "\u09B8\u09A4\u09B0\u09CD\u0995\u09A4\u09BE:" }), " \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F\u09C7\u09B0 \u09B6\u09C1\u09B0\u09C1\u09A4\u09C7\u0987 \u09B8\u09A0\u09BF\u0995 \u09AB\u09CD\u09B0\u09C7\u09AE\u0993\u09DF\u09BE\u09B0\u09CD\u0995 \u098F\u09AC\u0982 \u09AE\u09C7\u09A5\u09A1\u09CB\u09B2\u099C\u09BF \u09AC\u09C7\u099B\u09C7 \u09A8\u09C7\u0993\u09DF\u09BE \u0985\u09B0\u09CD\u09A7\u09C7\u0995 \u09AF\u09C1\u09A6\u09CD\u09A7\u09C7\u09B0 \u09B8\u09AE\u09BE\u09A8\u0964 \u09AD\u09BE\u0987\u09AC \u0995\u09CB\u09A1\u09BF\u0982 \u09A6\u09BF\u09DF\u09C7 \u09B6\u09C1\u09B0\u09C1 \u0995\u09B0\u09B2\u09C7\u0993 \u09AA\u09CD\u09B0\u09CB\u09A1\u09BE\u0995\u09B6\u09A8\u09C7 \u09AF\u09BE\u0993\u09DF\u09BE\u09B0 \u0986\u0997\u09C7 \u0985\u09AC\u09B6\u09CD\u09AF\u0987 SDD (SPEC-Driven Development) \u09AB\u09B2\u09CB \u0995\u09B0\u09BE \u0989\u099A\u09BF\u09A4\u0964"] })] }));
};
exports.DecisionTree = DecisionTree;
//# sourceMappingURL=DecisionTree.js.map