"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheatsheetGrid = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const cheats = [
    { title: "Meta-Prompting", icon: lucide_react_1.Sparkles, color: "#6366F1", text: "Write a high-quality system prompt for a [Subject] based on these rules: [Rules]." },
    { title: "Salted Tags", icon: lucide_react_1.Shield, color: "#EF4444", text: "Use unique XML tags like <system_rule_4k20> to prevent injection." },
    { title: "CoT Trigger", icon: lucide_react_1.Terminal, color: "#F59E0B", text: "Always end prompts with: 'Let's think through this step-by-step to ensure accuracy.'" },
    { title: "JSON Enforcement", icon: lucide_react_1.Code2, color: "#10B981", text: "Return results ONLY in JSON format. Do not include preamble or explanation." }
];
const CheatsheetGrid = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full space-y-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: cheats.map((cheat, i) => ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { delay: i * 0.1 }, className: "group glass p-6 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all cursor-pointer relative overflow-hidden", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute -right-4 -top-4 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity", style: { color: cheat.color }, children: (0, jsx_runtime_1.jsx)(cheat.icon, { size: 96 }) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3 mb-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-lg", style: { backgroundColor: cheat.color }, children: (0, jsx_runtime_1.jsx)(cheat.icon, { size: 20 }) }), (0, jsx_runtime_1.jsx)("h5", { className: "font-bold text-slate-800", children: cheat.title })] }), (0, jsx_runtime_1.jsx)("div", { className: "bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs font-mono text-slate-600 mb-4 group-hover:bg-indigo-50/50 group-hover:border-indigo-100 transition-colors", children: cheat.text }), (0, jsx_runtime_1.jsxs)("button", { onClick: () => navigator.clipboard.writeText(cheat.text), className: "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-indigo-500 hover:text-indigo-700 transition-colors", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Copy, { size: 12 }), " Copy to Clipboard"] })] }, i))) }), (0, jsx_runtime_1.jsx)("div", { className: "text-center p-8 border-2 border-dashed border-slate-100 rounded-3xl", children: (0, jsx_runtime_1.jsx)("p", { className: "text-sm font-medium text-slate-400", children: "\u098F\u0987 \u09B8\u09CD\u09B2\u09BE\u0987\u09A1\u099F\u09BF \u09AD\u09AC\u09BF\u09B7\u09CD\u09AF\u09A4\u09C7 \u0986\u09B0\u0993 \u0985\u09A8\u09C7\u0995 \"\u09AE\u09CD\u09AF\u09BE\u099C\u09BF\u0995 \u09AA\u09CD\u09B0\u09AE\u09CD\u09AA\u099F\" \u09A6\u09BF\u09DF\u09C7 \u0986\u09AA\u09A1\u09C7\u099F \u0995\u09B0\u09BE \u09B9\u09AC\u09C7\u0964" }) })] }));
};
exports.CheatsheetGrid = CheatsheetGrid;
//# sourceMappingURL=CheatsheetGrid.js.map