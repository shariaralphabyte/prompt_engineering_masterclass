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
exports.JsonValidator = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const JsonValidator = () => {
    const [json, setJson] = (0, react_1.useState)('{\n  "name": "Expert AI Agent",\n  "version": 1,\n  "capabilities": ["Reasoning", "Tool Use"]\n}');
    const validate = () => {
        try {
            JSON.parse(json);
            return { valid: true, error: null };
        }
        catch (e) {
            return { valid: false, error: e.message };
        }
    };
    const { valid, error } = validate();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full space-y-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 text-indigo-400", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Braces, { size: 18 }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm font-bold uppercase tracking-widest", children: "\u09B2\u09BE\u0987\u09AD JSON \u09B8\u09CD\u0995\u09BF\u09AE\u09BE \u09AD\u09CD\u09AF\u09BE\u09B2\u09BF\u09A1\u09C7\u099F\u09B0" })] }), (0, jsx_runtime_1.jsxs)("div", { className: `flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase transition-all ${valid ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`, children: [valid ? (0, jsx_runtime_1.jsx)(lucide_react_1.CheckCircle, { size: 12 }) : (0, jsx_runtime_1.jsx)(lucide_react_1.AlertTriangle, { size: 12 }), valid ? 'Valid JSON' : 'Syntax Error'] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "space-y-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between text-[10px] font-black uppercase text-slate-500 px-1", children: [(0, jsx_runtime_1.jsx)("span", { children: "Editor (Input)" }), (0, jsx_runtime_1.jsx)(lucide_react_1.Code2, { size: 12 })] }), (0, jsx_runtime_1.jsx)("textarea", { value: json, onChange: (e) => setJson(e.target.value), className: "w-full h-64 bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-emerald-400 font-mono text-sm focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none shadow-inner", spellCheck: false })] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between text-[10px] font-black uppercase text-slate-500 px-1", children: [(0, jsx_runtime_1.jsx)("span", { children: "Validation Result" }), (0, jsx_runtime_1.jsx)("span", { children: "Strict Mode" })] }), (0, jsx_runtime_1.jsx)("div", { className: "h-64 bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col justify-center items-center text-center", children: valid ? ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, className: "space-y-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto", children: (0, jsx_runtime_1.jsx)(lucide_react_1.CheckCircle, { size: 32 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h5", { className: "text-lg font-bold text-white mb-1", children: "\u09AA\u09BE\u09B0\u09CD\u09B8\u09BF\u0982 \u09B8\u09AB\u09B2!" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-slate-400 max-w-[200px] mx-auto leading-relaxed", children: "\u09AE\u09A1\u09C7\u09B2\u099F\u09BF \u09B8\u09A0\u09BF\u0995\u09AD\u09BE\u09AC\u09C7 \u09B8\u09CD\u099F\u09CD\u09B0\u09BE\u0995\u099A\u09BE\u09B0\u09A1 \u0986\u0989\u099F\u09AA\u09C1\u099F \u099C\u09C7\u09A8\u09BE\u09B0\u09C7\u099F \u0995\u09B0\u09C7\u099B\u09C7\u0964" })] })] })) : ((0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, { initial: { x: 10, opacity: 0 }, animate: { x: 0, opacity: 1 }, className: "space-y-4 text-red-400", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.AlertTriangle, { size: 48, className: "mx-auto opacity-50" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h5", { className: "text-lg font-bold mb-1 uppercase tracking-tighter", children: "Parsing Failed" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs font-mono text-red-400/70 p-3 bg-red-500/5 rounded-lg border border-red-500/10 mb-4 whitespace-normal break-all", children: error }), (0, jsx_runtime_1.jsx)("p", { className: "text-[10px] text-slate-500 uppercase font-black", children: "AI will retry output based on this error" })] })] })) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-xl text-slate-400 text-xs leading-relaxed", children: [(0, jsx_runtime_1.jsx)("strong", { className: "text-indigo-400", children: "Boss Tip:" }), " \u0986\u09AA\u09A8\u09BF \u09AF\u0996\u09A8 `Strict: true` \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09AC\u09C7\u09A8 (OpenAI) \u0985\u09A5\u09AC\u09BE Pydantic \u09B8\u09CD\u0995\u09BF\u09AE\u09BE \u09A6\u09C7\u09AC\u09C7\u09A8, \u09A4\u0996\u09A8 \u09AE\u09A1\u09C7\u09B2\u099F\u09BF \u0997\u09CD\u09AF\u09BE\u09B0\u09BE\u09A8\u09CD\u099F\u09BF \u09A6\u09C7\u09DF \u09AF\u09C7 \u0986\u0989\u099F\u09AA\u09C1\u099F \u098F\u0987 \u09AB\u09B0\u09AE\u09CD\u09AF\u09BE\u099F\u09C7\u0987 \u09B9\u09AC\u09C7\u0964 \u09AF\u09A6\u09BF \u0995\u0996\u09A8\u09CB \u09AD\u09C1\u09B2 \u09B9\u09DF (\u09B9\u09CD\u09AF\u09BE\u09B2\u09C1\u09B8\u09BF\u09A8\u09C7\u09B6\u09A8), \u09A4\u09AC\u09C7 \u098F\u0987 \u098F\u09B0\u09B0 \u099F\u09BE\u0987 \u098F\u0986\u0987-\u0995\u09C7 \u09AB\u09BF\u09A1\u09AC\u09CD\u09AF\u09BE\u0995 \u09B9\u09BF\u09B8\u09C7\u09AC\u09C7 \u09A6\u09BF\u09B2\u09C7 \u09B8\u09C7 \u09A8\u09BF\u099C\u09C7\u0987 \u09A8\u09BF\u099C\u09C7\u0995\u09C7 \u09B8\u0982\u09B6\u09CB\u09A7\u09A8 \u0995\u09B0\u09C7 \u09B8\u09A0\u09BF\u0995 JSON \u09A6\u09BF\u09AC\u09C7\u0964"] })] }));
};
exports.JsonValidator = JsonValidator;
//# sourceMappingURL=JsonValidator.js.map