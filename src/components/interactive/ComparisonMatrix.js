"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparisonMatrix = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const ComparisonMatrix = ({ headers, rows, title }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full space-y-4", children: [title && ((0, jsx_runtime_1.jsxs)("h4", { className: "text-sm font-black uppercase text-slate-500 tracking-widest mb-4 flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.ShieldAlert, { size: 14, className: "text-amber-500" }), title] })), (0, jsx_runtime_1.jsx)("div", { className: "overflow-x-auto rounded-2xl border border-slate-700/50 bg-slate-800/40", children: (0, jsx_runtime_1.jsxs)("table", { className: "w-full text-left border-collapse", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { className: "border-b border-slate-700/50 bg-slate-800/60", children: [(0, jsx_runtime_1.jsx)("th", { className: "px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-400", children: "Features" }), headers.map((header, i) => ((0, jsx_runtime_1.jsx)("th", { className: "px-6 py-4 text-[10px] font-black uppercase tracking-widest text-indigo-400 text-center", children: header }, i)))] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: rows.map((row, i) => ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.tr, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: i * 0.05 }, className: "border-b border-slate-700/30 hover:bg-white/5 transition-colors", children: [(0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4 text-sm font-bold text-slate-300", children: row.label }), row.values.map((val, j) => ((0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4 text-center", children: typeof val === 'boolean' ? (val ? (0, jsx_runtime_1.jsx)(lucide_react_1.Check, { className: "mx-auto text-emerald-400", size: 18 }) : (0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "mx-auto text-slate-600", size: 18 })) : ((0, jsx_runtime_1.jsx)("span", { className: "text-xs font-medium text-slate-400", children: val })) }, j)))] }, i))) })] }) })] }));
};
exports.ComparisonMatrix = ComparisonMatrix;
//# sourceMappingURL=ComparisonMatrix.js.map