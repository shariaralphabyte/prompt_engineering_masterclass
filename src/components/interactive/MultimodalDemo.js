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
exports.MultimodalDemo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const mediaTypes = [
    { id: 'image', icon: lucide_react_1.Image, label: 'Image', color: '#6366F1', desc: 'ভিশন এপিআই দিয়ে ডকুমেন্ট বা চার্ট এনালাইসিস।' },
    { id: 'video', icon: lucide_react_1.Video, label: 'Video', color: '#EC4899', desc: 'ভিডিও থেকে টাইমস্ট্যাম্প অনুযায়ী তথ্য খুঁজে বের করা।' },
    { id: 'audio', icon: lucide_react_1.Mic, label: 'Audio', color: '#F59E0B', desc: 'ট্রান্সক্রিপশন এবং অটোমেটেড সামারি জেনারেশন।' }
];
const MultimodalDemo = () => {
    const [activeType, setActiveType] = (0, react_1.useState)('image');
    const activeData = mediaTypes.find(t => t.id === activeType);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full space-y-8", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-between", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 text-indigo-400", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Sparkles, { size: 18 }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm font-bold uppercase tracking-widest", children: "\u09AE\u09BE\u09B2\u09CD\u099F\u09BF\u09AE\u09CB\u09A1\u09BE\u09B2 \u0987\u09A8\u09AA\u09C1\u099F \u09A1\u09C7\u09AE\u09CB" })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: mediaTypes.map((type) => ((0, jsx_runtime_1.jsxs)("button", { onClick: () => setActiveType(type.id), className: `p-6 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-3 ${activeType === type.id
                        ? 'bg-slate-800 border-indigo-500 shadow-xl shadow-indigo-500/10'
                        : 'bg-slate-900/50 border-slate-700 hover:border-slate-500 opacity-60'}`, children: [(0, jsx_runtime_1.jsx)("div", { className: "w-12 h-12 rounded-xl flex items-center justify-center text-white", style: { backgroundColor: type.color }, children: (0, jsx_runtime_1.jsx)(type.icon, { size: 24 }) }), (0, jsx_runtime_1.jsx)("span", { className: `text-xs font-black uppercase tracking-widest ${activeType === type.id ? 'text-white' : 'text-slate-500'}`, children: type.label })] }, type.id))) }), (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { mode: "wait", children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, className: "bg-slate-800/80 rounded-3xl border border-slate-700 p-8 flex flex-col md:flex-row items-center gap-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full md:w-1/3 aspect-square rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center relative overflow-hidden group", children: [(0, jsx_runtime_1.jsx)(activeData.icon, { size: 64, className: "text-slate-700 group-hover:text-indigo-500/50 transition-colors" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-4 left-4 right-4 text-center", children: (0, jsx_runtime_1.jsx)("span", { className: "text-[10px] font-black uppercase text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded", children: "Simulation" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 space-y-4", children: [(0, jsx_runtime_1.jsxs)("h4", { className: "text-2xl font-black text-white leading-tight uppercase font-mono", children: ["Multimodal ", activeType, " Processing"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-slate-400 font-medium", children: activeData.desc }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.FileSearch, { size: 20, className: "text-emerald-400" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[10px] text-slate-500 font-black uppercase", children: "Example Output" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm font-medium text-slate-200 italic", children: "\"The document shows a 25% growth in Q3 profits...\"" })] })] })] })] }, activeType) }), (0, jsx_runtime_1.jsx)("div", { className: "p-4 bg-slate-800 border border-slate-700 rounded-xl text-slate-500 text-[10px] font-black uppercase tracking-tighter text-center", children: "Gemini 1.5 Pro & GPT-4o are native multimodal models" })] }));
};
exports.MultimodalDemo = MultimodalDemo;
//# sourceMappingURL=MultimodalDemo.js.map