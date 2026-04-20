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
exports.SystemPromptBuilder = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const framer_motion_1 = require("framer-motion");
const lucide_react_1 = require("lucide-react");
const SystemPromptBuilder = () => {
    const [role, setRole] = (0, react_1.useState)("Expert Python Developer");
    const [context, setContext] = (0, react_1.useState)("Helping a beginner build a web scraper.");
    const [task, setTask] = (0, react_1.useState)("Write a script using BeautifulSoup to extract titles.");
    const [constraints, setConstraints] = (0, react_1.useState)("Do not use external libraries besides requests/bs4.");
    const [format, setFormat] = (0, react_1.useState)("JSON format with 'title' and 'url' keys.");
    const fullPrompt = `<role>\n${role}\n</role>\n\n<context>\n${context}\n</context>\n\n<task>\n${task}\n</task>\n\n<constraints>\n${constraints}\n</constraints>\n\n<output_format>\n${format}\n</output_format>`;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full space-y-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsx)("h4", { className: "text-xs font-black uppercase text-slate-500 tracking-widest mb-4", children: "Prompt Architecture" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar", children: [(0, jsx_runtime_1.jsx)(BuilderInput, { icon: lucide_react_1.UserCircle, label: "Role", value: role, onChange: setRole, placeholder: "e.g. Senior Architect" }), (0, jsx_runtime_1.jsx)(BuilderInput, { icon: lucide_react_1.Target, label: "Context", value: context, onChange: setContext, placeholder: "What is the background?" }), (0, jsx_runtime_1.jsx)(BuilderInput, { icon: lucide_react_1.FileCode, label: "Task", value: task, onChange: setTask, placeholder: "What should AI do?" }), (0, jsx_runtime_1.jsx)(BuilderInput, { icon: lucide_react_1.ShieldAlert, label: "Constraints", value: constraints, onChange: setConstraints, placeholder: "What should AI NOT do?" }), (0, jsx_runtime_1.jsx)(BuilderInput, { icon: lucide_react_1.CheckCircle2, label: "Format", value: format, onChange: setFormat, placeholder: "How should it answer?" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)("h4", { className: "text-xs font-black uppercase text-slate-500 tracking-widest", children: "Final System Prompt" }), (0, jsx_runtime_1.jsxs)("button", { onClick: () => navigator.clipboard.writeText(fullPrompt), className: "text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1 rounded-md flex items-center gap-1 transition-all", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Copy, { size: 12 }), " COPY XML"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-slate-800/80 p-6 rounded-2xl border border-indigo-500/20 font-mono text-sm leading-relaxed text-indigo-300 h-full max-h-[400px] overflow-y-auto", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-indigo-400", children: "<role>" }), (0, jsx_runtime_1.jsx)("div", { className: "text-slate-200 ml-4 my-1 uppercase font-bold", children: role }), (0, jsx_runtime_1.jsx)("div", { className: "text-indigo-400", children: "</role>" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { className: "text-indigo-400", children: "<context>" }), (0, jsx_runtime_1.jsx)("div", { className: "text-slate-200 ml-4 my-1", children: context }), (0, jsx_runtime_1.jsx)("div", { className: "text-indigo-400", children: "</context>" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { className: "text-indigo-400", children: "<task>" }), (0, jsx_runtime_1.jsx)("div", { className: "text-slate-200 ml-4 my-1", children: task }), (0, jsx_runtime_1.jsx)("div", { className: "text-indigo-400", children: "</task>" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { className: "text-indigo-400", children: "<constraints>" }), (0, jsx_runtime_1.jsxs)("div", { className: "text-slate-200 ml-4 my-1 font-bold text-red-400", children: ["!! ", constraints] }), (0, jsx_runtime_1.jsx)("div", { className: "text-indigo-400", children: "</constraints>" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("div", { className: "text-indigo-400", children: "<output_format>" }), (0, jsx_runtime_1.jsx)("div", { className: "text-emerald-400 ml-4 my-1", children: format }), (0, jsx_runtime_1.jsx)("div", { className: "text-indigo-400", children: "</output_format>" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "glass p-4 rounded-xl border border-indigo-100 flex items-start gap-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg text-white", children: (0, jsx_runtime_1.jsx)(lucide_react_1.ShieldAlert, {}) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h5", { className: "font-bold text-indigo-900 mb-1", children: "\u0995\u09C7\u09A8 XML \u099F\u09CD\u09AF\u09BE\u0997 \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09AC\u09C7\u09A8?" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-indigo-700/80 leading-relaxed font-medium", children: "Anthropic \u098F\u09B0 \u09B0\u09BF\u09B8\u09BE\u09B0\u09CD\u099A \u0985\u09A8\u09C1\u09AF\u09BE\u09DF\u09C0, \u09AC\u09DC \u09AA\u09CD\u09B0\u09AE\u09CD\u09AA\u099F\u09C7 \u09A1\u09BE\u099F\u09BE \u098F\u09AC\u0982 \u0987\u09A8\u09B8\u09CD\u099F\u09CD\u09B0\u09BE\u0995\u09B6\u09A8 \u0986\u09B2\u09BE\u09A6\u09BE \u0995\u09B0\u09A4\u09C7 XML \u099F\u09CD\u09AF\u09BE\u0997 \u09B8\u09AC\u099A\u09C7\u09DF\u09C7 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0\u09C0\u0964 \u098F\u09A4\u09C7 \u098F\u0986\u0987 \u0995\u09A8\u09AB\u09BF\u0989\u099C\u09A1 \u09B9\u09DF \u09A8\u09BE \u098F\u09AC\u0982 \u09B8\u09A0\u09BF\u0995 \u0985\u0982\u09B6 \u09AB\u09B2\u09CB \u0995\u09B0\u09C7\u0964" })] })] })] }));
};
exports.SystemPromptBuilder = SystemPromptBuilder;
const BuilderInput = ({ icon: Icon, label, value, onChange, placeholder }) => ((0, jsx_runtime_1.jsxs)("div", { className: "space-y-1", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-[10px] font-black uppercase text-slate-600 ml-1 flex items-center gap-1", children: [(0, jsx_runtime_1.jsx)(Icon, { size: 12 }), " ", label] }), (0, jsx_runtime_1.jsx)("textarea", { value: value, onChange: (e) => onChange(e.target.value), className: "w-full bg-white/5 border border-slate-700/50 rounded-xl px-4 py-3 text-white text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none h-20", placeholder: placeholder })] }));
//# sourceMappingURL=SystemPromptBuilder.js.map