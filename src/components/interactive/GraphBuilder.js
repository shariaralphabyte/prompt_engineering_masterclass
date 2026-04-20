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
exports.GraphBuilder = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const nodes = [
    { id: 'start', x: 20, y: 50, label: 'Start', color: '#6366F1' },
    { id: 'agent', x: 50, y: 50, label: 'Agent', color: '#8B5CF6' },
    { id: 'tool', x: 50, y: 20, label: 'Tool Use', color: '#EC4899' },
    { id: 'end', x: 80, y: 50, label: 'End', color: '#10B981' }
];
const edges = [
    { from: 'start', to: 'agent', curved: false },
    { from: 'agent', to: 'tool', curved: true, type: 'action' },
    { from: 'tool', to: 'agent', curved: true, type: 'observation' },
    { from: 'agent', to: 'end', curved: false, type: 'finish' }
];
const GraphBuilder = () => {
    const [activeNode, setActiveNode] = (0, react_1.useState)('start');
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full space-y-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mb-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 text-purple-400", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Share2, { size: 18 }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm font-bold uppercase tracking-widest", children: "LangGraph \u09B8\u09CD\u099F\u09C7\u099F \u09AE\u09C7\u09B6\u09BF\u09A8" })] }), (0, jsx_runtime_1.jsx)("div", { className: "bg-purple-500/10 text-purple-400 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-tighter", children: "Cyclic Workflow Demo" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative bg-slate-800/50 rounded-2xl border border-slate-700/50 aspect-video overflow-hidden", children: [(0, jsx_runtime_1.jsxs)("svg", { className: "w-full h-full", viewBox: "0 0 100 100", children: [edges.map((edge, i) => {
                                const from = nodes.find(n => n.id === edge.from);
                                const to = nodes.find(n => n.id === edge.to);
                                const isCyclic = edge.from === 'tool' || edge.to === 'tool';
                                return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.path, { d: edge.curved
                                        ? `M ${from.x} ${from.y} Q ${from.x + (to.x - from.x) / 2 + 5} ${from.y + (to.y - from.y) / 2 - 10} ${to.x} ${to.y}`
                                        : `M ${from.x} ${from.y} L ${to.x} ${to.y}`, stroke: activeNode === edge.from ? '#8B5CF6' : '#334155', strokeWidth: "0.5", fill: "none", initial: { pathLength: 0 }, animate: { pathLength: 1 }, strokeDasharray: "2,2" }, i));
                            }), nodes.map((node) => ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.g, { onClick: () => setActiveNode(node.id), className: "cursor-pointer", animate: { scale: activeNode === node.id ? 1.1 : 1 }, children: [(0, jsx_runtime_1.jsx)("circle", { cx: node.x, cy: node.y, r: "4", fill: activeNode === node.id ? node.color : '#1e293b', stroke: node.color, strokeWidth: "0.5" }), (0, jsx_runtime_1.jsx)("text", { x: node.x, y: node.y + 8, textAnchor: "middle", fill: activeNode === node.id ? 'white' : '#64748b', fontSize: "3", fontWeight: "bold", className: "pointer-events-none select-none", children: node.label })] }, node.id)))] }), (0, jsx_runtime_1.jsxs)("div", { className: "absolute bottom-6 left-6 right-6 glass p-4 rounded-xl border border-white/5 flex items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400", children: (0, jsx_runtime_1.jsx)(lucide_react_1.RefreshCcw, { size: 16, className: activeNode === 'agent' ? 'animate-spin' : '' }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[10px] text-slate-400 font-black uppercase tracking-widest", children: "Current State" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm font-bold text-white uppercase", children: activeNode })] })] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-[10px] text-slate-500 italic max-w-[200px] text-right", children: [activeNode === 'start' && "সিস্টেম রান করা শুরু হচ্ছে।", activeNode === 'agent' && "এজেন্ট চিন্তা করছে পরবর্তী পদক্ষেপ কী হবে।", activeNode === 'tool' && "এজেন্ট বাইরের কোনো এপিআই (যেমন: গুগল সার্চ) কল করছে।", activeNode === 'end' && "কাজ শেষ! আউটপুট ইউজারের কাছে পাঠানো হয়েছে।"] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-5 bg-purple-500/5 border border-purple-500/20 rounded-2xl flex items-start gap-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-purple-600 p-2 rounded-lg text-white shadow-lg", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Smartphone, { size: 20 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h5", { className: "font-bold text-purple-100 mb-1", children: "\u09AA\u09CD\u09B0\u09CB\u09A1\u09BE\u0995\u09B6\u09A8-\u0997\u09CD\u09B0\u09C7\u09A1 \u098F\u0986\u0987 \u0993\u09DF\u09BE\u09B0\u09CD\u0995\u09AB\u09CD\u09B2\u09CB" }), (0, jsx_runtime_1.jsx)("p", { className: "text-[10px] text-slate-400 leading-relaxed uppercase font-medium", children: "LangGraph \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09C7 \u0986\u09AE\u09B0\u09BE \u098F\u09AE\u09A8 \u09B8\u09BF\u09B8\u09CD\u099F\u09C7\u09AE \u09AC\u09BE\u09A8\u09BE\u09A4\u09C7 \u09AA\u09BE\u09B0\u09BF \u09AF\u09BE \u09AD\u09C1\u09B2 \u0995\u09B0\u09B2\u09C7 \u09A8\u09BF\u099C\u09C7\u0987 \u09A8\u09BF\u099C\u09C7\u0995\u09C7 \u09B8\u0982\u09B6\u09CB\u09A7\u09A8 (Self-Correction) \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7 \u098F\u09AC\u0982 \u09AA\u09CD\u09B0\u09DF\u09CB\u099C\u09A8\u09C0\u09DF \u099F\u09C1\u09B2 \u09AC\u09BE\u09B0\u09AC\u09BE\u09B0 \u0987\u0989\u099C \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u0964" })] })] })] }));
};
exports.GraphBuilder = GraphBuilder;
//# sourceMappingURL=GraphBuilder.js.map