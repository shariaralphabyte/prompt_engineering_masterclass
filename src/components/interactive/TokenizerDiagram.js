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
exports.TokenizerDiagram = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const TokenizerDiagram = () => {
    const [text, setText] = (0, react_1.useState)("এলএলএম (LLM) শিখুন সহজভাবে।");
    const [tokens, setTokens] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        // Basic pseudo-tokenization for demonstration
        const words = text.split(/(\s+)/);
        const tokenized = words.map(word => {
            if (word.length > 4 && Math.random() > 0.5) {
                return [word.slice(0, 3), word.slice(3)];
            }
            return word;
        }).flat();
        setTokens(tokenized.filter(t => t !== ""));
    }, [text]);
    const colors = [
        '#6366F1', '#F59E0B', '#10B981', '#EF4444',
        '#8B5CF6', '#EC4899', '#06B6D4', '#F97316'
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "space-y-6 w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mb-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 text-indigo-400", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Hash, { size: 18 }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm font-bold uppercase tracking-widest", children: "\u099F\u09CB\u0995\u09C7\u09A8 \u09AA\u09CD\u09B0\u09CB\u09B8\u09C7\u09B8\u09BF\u0982 \u09B8\u09BF\u09AE\u09C1\u09B2\u09C7\u099F\u09B0" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 rounded-full font-bold flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Info, { size: 12 }), "LLM-\u098F\u09B0 \u099C\u09A8\u09CD\u09AF \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09B6\u09AC\u09CD\u09A6 \u09B8\u0982\u0996\u09CD\u09AF\u09BE\u09DF \u09B0\u09C2\u09AA\u09BE\u09A8\u09CD\u09A4\u09B0\u09BF\u09A4 \u09B9\u09DF"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-xs text-slate-400 font-bold uppercase", children: "Enter Text to Tokenize" }), (0, jsx_runtime_1.jsx)("textarea", { value: text, onChange: (e) => setText(e.target.value), className: "w-full bg-slate-800/80 border border-slate-700 rounded-xl p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none min-h-[100px]", placeholder: "\u098F\u0996\u09BE\u09A8\u09C7 \u0995\u09BF\u099B\u09C1 \u09B2\u09BF\u0996\u09C1\u09A8..." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center text-xs text-slate-400 font-bold uppercase", children: [(0, jsx_runtime_1.jsx)("span", { children: "Visual Output" }), (0, jsx_runtime_1.jsxs)("span", { className: "text-indigo-400", children: [tokens.length, " Tokens Generated"] })] }), (0, jsx_runtime_1.jsx)("div", { className: "bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 min-h-[120px] flex flex-wrap gap-2", children: (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { mode: "popLayout", children: tokens.map((token, index) => ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.8, opacity: 0 }, transition: { type: "spring", stiffness: 300, damping: 20 }, className: "px-3 py-1.5 rounded-md text-sm font-mono font-medium shadow-sm border border-white/5", style: {
                                    backgroundColor: colors[index % colors.length] + '20',
                                    color: colors[index % colors.length]
                                }, children: token === " " ? "␣" : token }, `${token}-${index}`))) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "bg-slate-800/40 p-4 rounded-xl border border-slate-700/50", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[10px] text-slate-500 font-bold mb-1 uppercase", children: "Approx Tokens" }), (0, jsx_runtime_1.jsx)("p", { className: "text-2xl font-black text-white", children: tokens.length })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-slate-800/40 p-4 rounded-xl border border-slate-700/50", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-[10px] text-slate-500 font-bold mb-1 uppercase", children: "Characters" }), (0, jsx_runtime_1.jsx)("p", { className: "text-2xl font-black text-white", children: text.length })] })] })] }));
};
exports.TokenizerDiagram = TokenizerDiagram;
//# sourceMappingURL=TokenizerDiagram.js.map