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
exports.CachingSimulator = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const CachingSimulator = () => {
    const [tokens, setTokens] = (0, react_1.useState)(10000);
    const [isCached, setIsCached] = (0, react_1.useState)(true);
    const basePricePerMillion = 3.00; // Example price for Claude 3.5 Sonnet input
    const cachedPricePerMillion = 0.30; // 90% discount example
    const currentPrice = isCached ? cachedPricePerMillion : basePricePerMillion;
    const cost = (tokens / 1000000) * currentPrice;
    const savings = (tokens / 1000000) * (basePricePerMillion - cachedPricePerMillion);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full space-y-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 text-indigo-400", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.CreditCard, { size: 18 }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm font-bold uppercase tracking-widest", children: "\u099F\u09CB\u0995\u09C7\u09A8 \u0987\u0995\u09CB\u09A8\u09AE\u09BF \u0995\u09CD\u09AF\u09BE\u09B2\u0995\u09C1\u09B2\u09C7\u099F\u09B0" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 bg-slate-800 p-1 rounded-lg border border-slate-700", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => setIsCached(false), className: `px-3 py-1.5 rounded-md text-[10px] font-bold uppercase transition-all ${!isCached ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`, children: "Standard" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setIsCached(true), className: `px-3 py-1.5 rounded-md text-[10px] font-bold uppercase transition-all ${isCached ? 'bg-emerald-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`, children: "Cached (Anthropic)" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center", children: [(0, jsx_runtime_1.jsxs)("div", { className: "space-y-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "space-y-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between text-xs font-bold uppercase text-slate-500", children: [(0, jsx_runtime_1.jsx)("span", { children: "Input Tokens (Context)" }), (0, jsx_runtime_1.jsx)("span", { className: "text-white", children: tokens.toLocaleString() })] }), (0, jsx_runtime_1.jsx)("input", { type: "range", min: "1000", max: "200000", step: "1000", value: tokens, onChange: (e) => setTokens(parseInt(e.target.value)), className: "w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between text-[10px] text-slate-600 font-bold", children: [(0, jsx_runtime_1.jsx)("span", { children: "1K" }), (0, jsx_runtime_1.jsx)("span", { children: "200K (Max Context)" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400", children: (0, jsx_runtime_1.jsx)(lucide_react_1.DollarSign, { size: 20 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[10px] text-slate-500 font-bold uppercase", children: "Estimated Cost" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-xl font-black text-white", children: ["$", cost.toFixed(4)] })] })] }), isCached && ((0, jsx_runtime_1.jsxs)("div", { className: "text-right", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[10px] text-emerald-500 font-bold uppercase", children: "You Save" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-lg font-black text-emerald-400", children: ["-$", savings.toFixed(4)] })] }))] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative aspect-square flex items-center justify-center", children: [(0, jsx_runtime_1.jsxs)("svg", { className: "w-full h-full transform -rotate-90", viewBox: "0 0 100 100", children: [(0, jsx_runtime_1.jsx)("circle", { cx: "50", cy: "50", r: "40", fill: "none", stroke: "#1e293b", strokeWidth: "8" }), (0, jsx_runtime_1.jsx)(framer_motion_1.motion.circle, { cx: "50", cy: "50", r: "40", fill: "none", stroke: isCached ? "#10b981" : "#6366f1", strokeWidth: "8", strokeDasharray: "251.2", initial: { strokeDashoffset: 251.2 }, animate: { strokeDashoffset: 251.2 - (251.2 * (cost / ((200000 / 1000000) * basePricePerMillion))) }, transition: { type: "spring", stiffness: 50, damping: 20 } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.TrendingDown, { className: isCached ? "text-emerald-400" : "text-indigo-400", size: 40 }), (0, jsx_runtime_1.jsx)("p", { className: "text-2xl font-black text-white mt-2", children: isCached ? '90%' : '0%' }), (0, jsx_runtime_1.jsx)("p", { className: "text-[10px] text-slate-500 uppercase font-black tracking-widest", children: "Savings" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl flex items-start gap-3", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Zap, { className: "text-emerald-400 shrink-0 mt-1", size: 16 }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm text-slate-400 leading-relaxed", children: [(0, jsx_runtime_1.jsx)("strong", { className: "text-emerald-400", children: "Boss-Level Hint:" }), " \u09AF\u0996\u09A8 \u0986\u09AA\u09A8\u09BF \u09AC\u09DC \u09A1\u09BE\u099F\u09BE\u09AC\u09C7\u09B8 \u09AC\u09BE \u0995\u09CB\u09A1\u09AC\u09C7\u09B8 \u09AC\u09CD\u09AF\u09BE\u0995\u0997\u09CD\u09B0\u09BE\u0989\u09A8\u09CD\u09A1\u09C7 \u0987\u09A8\u09AA\u09C1\u099F \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u09A6\u09C7\u09A8, \u09A4\u0996\u09A8 `cache_control` \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09B2\u09C7 \u09AA\u09CD\u09B0\u09A4\u09BF\u09AC\u09BE\u09B0 \u099F\u09CB\u0995\u09C7\u09A8 \u0996\u09B0\u099A \u09B9\u09AC\u09C7 \u09A8\u09BE\u0964 \u0986\u09AA\u09A8\u09BF \u09EB\u09E6% \u09A5\u09C7\u0995\u09C7 \u09EF\u09E6% \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u0996\u09B0\u099A \u0995\u09AE\u09BE\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7\u09A8!"] })] })] }));
};
exports.CachingSimulator = CachingSimulator;
//# sourceMappingURL=CachingSimulator.js.map