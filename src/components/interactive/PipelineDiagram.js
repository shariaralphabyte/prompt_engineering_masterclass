"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipelineDiagram = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const pipelineSteps = [
    { id: 'extract', label: 'Extract', icon: lucide_react_1.Database, color: '#6366F1' },
    { id: 'classify', label: 'Classify', icon: lucide_react_1.Share2, color: '#8B5CF6' },
    { id: 'summarize', label: 'Summarize', icon: lucide_react_1.FileText, color: '#EC4899' },
    { id: 'draft', label: 'Draft', icon: lucide_react_1.Send, color: '#10B981' }
];
const PipelineDiagram = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full space-y-12 py-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row items-center justify-between gap-6 relative", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden md:block z-0" }), pipelineSteps.map((step, i) => {
                        const Icon = step.icon;
                        return ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { delay: i * 0.1 }, className: "relative z-10 flex flex-col items-center gap-4 group", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-20 h-20 rounded-3xl flex items-center justify-center text-white transition-all duration-500 shadow-2xl border-4 border-slate-900 group-hover:scale-110", style: { backgroundColor: step.color }, children: (0, jsx_runtime_1.jsx)(Icon, { size: 32 }) }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors", children: ["Phase 0", i + 1] }), (0, jsx_runtime_1.jsx)("h4", { className: "text-sm font-bold text-slate-300", children: step.label })] }), i < pipelineSteps.length - 1 && ((0, jsx_runtime_1.jsx)("div", { className: "md:hidden w-1 h-8 bg-slate-800" }))] }, step.id));
                    })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-indigo-500/5 border border-indigo-500/20 rounded-3xl p-8 flex flex-col items-center text-center space-y-4", children: [(0, jsx_runtime_1.jsx)("h5", { className: "text-lg font-bold text-indigo-400 uppercase tracking-widest", children: "\u0995\u09BF\u09AD\u09BE\u09AC\u09C7 \u099A\u09C7\u0987\u09A8\u09BF\u0982 \u0995\u09BE\u099C \u0995\u09B0\u09C7?" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-wrap justify-center gap-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "bg-slate-800 px-3 py-1 rounded text-xs text-slate-400 font-mono", children: "Input Data" }), (0, jsx_runtime_1.jsx)("span", { className: "text-indigo-400", children: "\u2192" }), (0, jsx_runtime_1.jsx)("span", { className: "bg-indigo-500/20 px-3 py-1 rounded text-xs text-indigo-300 font-mono", children: "Process A" }), (0, jsx_runtime_1.jsx)("span", { className: "text-indigo-400", children: "\u2192" }), (0, jsx_runtime_1.jsx)("span", { className: "bg-purple-500/20 px-3 py-1 rounded text-xs text-purple-300 font-mono", children: "Process B" }), (0, jsx_runtime_1.jsx)("span", { className: "text-indigo-400", children: "\u2192" }), (0, jsx_runtime_1.jsx)("span", { className: "bg-emerald-500/20 px-3 py-1 rounded text-xs text-emerald-300 font-mono", children: "Final Output" })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-slate-400 max-w-lg leading-relaxed", children: "\u098F\u0995\u099F\u09BF \u09AC\u09A1\u09BC \u0995\u09BE\u099C\u0995\u09C7 \u09B8\u09B0\u09BE\u09B8\u09B0\u09BF \u098F\u0986\u0987-\u0995\u09C7 \u09A8\u09BE \u09A6\u09BF\u09DF\u09C7 \u099B\u09CB\u099F \u099B\u09CB\u099F \u09A7\u09BE\u09AA\u09C7 \u09AD\u09BE\u0997 \u0995\u09B0\u09B2\u09C7 \u098F\u0995\u09C1\u09B0\u09C7\u09B8\u09BF \u09AC\u09B9\u09C1\u0997\u09C1\u09A3 \u09AC\u09C7\u09DC\u09C7 \u09AF\u09BE\u09DF\u0964 \u098F\u0987 \u09AA\u09A6\u09CD\u09A7\u09A4\u09BF\u0995\u09C7\u0987 \u09AC\u09B2\u09BE \u09B9\u09DF **\u099A\u09C7\u0987\u09A8\u09BF\u0982 \u098F\u09AC\u0982 \u09A1\u09BF\u0995\u09AE\u09CD\u09AA\u09CB\u099C\u09BF\u09B6\u09A8**\u0964" })] })] }));
};
exports.PipelineDiagram = PipelineDiagram;
//# sourceMappingURL=PipelineDiagram.js.map