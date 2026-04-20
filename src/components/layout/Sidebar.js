"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const curriculum_1 = require("../../data/curriculum");
const lucide_react_1 = require("lucide-react");
const phaseIcons = {
    1: lucide_react_1.Cpu,
    2: lucide_react_1.BookOpen,
    3: lucide_react_1.Terminal,
    4: lucide_react_1.Layers,
    5: lucide_react_1.ShieldCheck,
    6: lucide_react_1.Rocket
};
const Sidebar = ({ onSelectModule, selectedModuleId }) => {
    return ((0, jsx_runtime_1.jsx)("aside", { className: "fixed left-0 top-0 h-screen w-80 glass border-r z-50 overflow-y-auto hidden lg:block", children: (0, jsx_runtime_1.jsxs)("div", { className: "p-8", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold mb-2 bg-gradient-to-r from-amber-600 to-indigo-600 bg-clip-text text-transparent", children: "AI MASTERY" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-slate-500 font-medium tracking-widest uppercase mb-8", children: "Boss-Level Course" }), (0, jsx_runtime_1.jsx)("nav", { children: curriculum_1.curriculum.map((phase) => {
                        const Icon = phaseIcons[phase.id];
                        return ((0, jsx_runtime_1.jsxs)("div", { className: "mb-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3 mb-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-8 h-8 rounded-lg flex items-center justify-center", style: { backgroundColor: phase.color + '15', color: phase.color }, children: (0, jsx_runtime_1.jsx)(Icon, { size: 18 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-sm font-bold leading-tight", style: { color: phase.color }, children: phase.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-[10px] uppercase tracking-tighter opacity-70 font-semibold", children: phase.englishTitle })] })] }), (0, jsx_runtime_1.jsx)("ul", { className: "space-y-1 ml-4 border-l border-slate-100", children: phase.modules.map((module) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("button", { onClick: () => onSelectModule(module.id), className: `w-full text-left px-4 py-2 text-sm transition-all flex items-center justify-between group rounded-r-md ${selectedModuleId === module.id
                                                ? 'bg-gradient-to-r from-slate-50 to-transparent border-l-2 border-slate-800 text-slate-900 font-semibold'
                                                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`, children: [(0, jsx_runtime_1.jsx)("span", { className: "truncate", children: module.title.split(': ')[1] }), (0, jsx_runtime_1.jsx)(lucide_react_1.ChevronRight, { size: 14, className: `transition-transform ${selectedModuleId === module.id ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}` })] }) }, module.id))) })] }, phase.id));
                    }) })] }) }));
};
exports.Sidebar = Sidebar;
//# sourceMappingURL=Sidebar.js.map