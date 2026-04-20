"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const curriculum_1 = require("../../data/curriculum");
const lucide_react_1 = require("lucide-react");
const TokenizerDiagram_1 = require("../interactive/TokenizerDiagram");
const ModelComparison_1 = require("../interactive/ModelComparison");
const CachingSimulator_1 = require("../interactive/CachingSimulator");
const PromptCompare_1 = require("../interactive/PromptCompare");
const SystemPromptBuilder_1 = require("../interactive/SystemPromptBuilder");
const ReasoningFlow_1 = require("../interactive/ReasoningFlow");
const RAGPipeline_1 = require("../interactive/RAGPipeline");
const GraphBuilder_1 = require("../interactive/GraphBuilder");
const ProjectTimeline_1 = require("../interactive/ProjectTimeline");
const ComparisonMatrix_1 = require("../interactive/ComparisonMatrix");
const DecisionTree_1 = require("../interactive/DecisionTree");
const ToolMatrix_1 = require("../interactive/ToolMatrix");
const JsonValidator_1 = require("../interactive/JsonValidator");
const ArchitectureDiagram_1 = require("../interactive/ArchitectureDiagram");
const PipelineDiagram_1 = require("../interactive/PipelineDiagram");
const MultimodalDemo_1 = require("../interactive/MultimodalDemo");
const CheatsheetGrid_1 = require("../interactive/CheatsheetGrid");
const EvalDashboard_1 = require("../interactive/EvalDashboard");
const InteractiveComponents = {
    TokenizerDiagram: TokenizerDiagram_1.TokenizerDiagram,
    ModelComparison: ModelComparison_1.ModelComparison,
    CachingSimulator: CachingSimulator_1.CachingSimulator,
    PromptCompare: PromptCompare_1.PromptCompare,
    SystemPromptBuilder: SystemPromptBuilder_1.SystemPromptBuilder,
    ReasoningFlow: ReasoningFlow_1.ReasoningFlow,
    RAGPipeline: RAGPipeline_1.RAGPipeline,
    GraphBuilder: GraphBuilder_1.GraphBuilder,
    ProjectTimeline: ProjectTimeline_1.ProjectTimeline,
    ComparisonMatrix: ComparisonMatrix_1.ComparisonMatrix,
    DecisionTree: DecisionTree_1.DecisionTree,
    ToolMatrix: ToolMatrix_1.ToolMatrix,
    JsonValidator: JsonValidator_1.JsonValidator,
    ArchitectureDiagram: ArchitectureDiagram_1.ArchitectureDiagram,
    PipelineDiagram: PipelineDiagram_1.PipelineDiagram,
    MultimodalDemo: MultimodalDemo_1.MultimodalDemo,
    CheatsheetGrid: CheatsheetGrid_1.CheatsheetGrid,
    EvalDashboard: EvalDashboard_1.EvalDashboard,
};
const ModuleContent = ({ module, phaseColor }) => {
    const ActiveComponent = module.interactiveComponent ? InteractiveComponents[module.interactiveComponent] : null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "animate-fade-in pb-20", children: [(0, jsx_runtime_1.jsxs)("div", { className: "h-48 w-full rounded-2xl mb-8 flex flex-col justify-end p-8 relative overflow-hidden", style: { background: `linear-gradient(135deg, ${phaseColor} 0%, #1e293b 100%)` }, children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute top-0 right-0 p-8 opacity-10", children: (0, jsx_runtime_1.jsx)(lucide_react_1.FileText, { size: 160 }) }), (0, jsx_runtime_1.jsxs)("div", { className: "relative z-10", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-white/70 text-sm font-medium uppercase tracking-widest mb-2 block", children: "Currently Learning" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold text-white mb-2", children: module.title })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-2 space-y-8", children: [(0, jsx_runtime_1.jsxs)("section", { className: "glass p-8 rounded-2xl shadow-sm border border-slate-100", children: [(0, jsx_runtime_1.jsxs)("h3", { className: "text-xl font-bold mb-4 flex items-center gap-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "w-1.5 h-6 rounded-full", style: { backgroundColor: phaseColor } }), "\u09AE\u09A1\u09BF\u0989\u09B2 \u0993\u09AD\u09BE\u09B0\u09AD\u09BF\u0989"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-slate-600 leading-relaxed mb-6 font-medium", children: module.description }), (0, jsx_runtime_1.jsx)("div", { className: "prose prose-slate max-w-none", children: (0, jsx_runtime_1.jsx)("div", { className: "content-area whitespace-pre-line text-slate-700 font-medium", dangerouslySetInnerHTML: { __html: module.content } }) })] }), module.interactiveComponent && ((0, jsx_runtime_1.jsxs)("section", { className: "bg-slate-900 rounded-2xl p-8 text-white shadow-2xl shadow-slate-200/50", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mb-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-slate-900", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Play, { fill: "currentColor", size: 20 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold", children: "\u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09C7\u0995\u09CD\u099F\u09BF\u09AD \u09B8\u09BF\u09AE\u09C1\u09B2\u09C7\u099F\u09B0" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-slate-400 uppercase tracking-widest", children: module.interactiveComponent })] })] }), (0, jsx_runtime_1.jsx)("span", { className: "bg-emerald-500/10 text-emerald-400 text-[10px] uppercase font-black px-3 py-1 rounded-full border border-emerald-500/20", children: "Active Demo" })] }), (0, jsx_runtime_1.jsx)("div", { className: "p-2", children: ActiveComponent ? ((0, jsx_runtime_1.jsx)(ActiveComponent, {})) : ((0, jsx_runtime_1.jsxs)("div", { className: "aspect-video bg-slate-800/50 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:bg-slate-800 transition-colors", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 shadow-lg shadow-amber-400/20 group-hover:scale-110 transition-transform", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Play, { fill: "currentColor", size: 24 }) }), (0, jsx_runtime_1.jsxs)("p", { className: "text-slate-400 font-medium italic", children: ["Component \"", module.interactiveComponent, "\" is under construction..."] })] })) })] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "glass p-6 rounded-2xl border border-slate-100", children: [(0, jsx_runtime_1.jsx)("h4", { className: "text-sm font-bold uppercase tracking-wider text-slate-400 mb-4", children: "Resources" }), (0, jsx_runtime_1.jsx)("ul", { className: "space-y-3", children: ['Reading Materials', 'Code Snippets', 'Practice Tasks'].map(item => ((0, jsx_runtime_1.jsxs)("li", { className: "flex items-center justify-between group cursor-pointer", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-sm text-slate-600 group-hover:text-amber-600 transition-colors", children: item }), (0, jsx_runtime_1.jsx)(lucide_react_1.CheckCircle2, { size: 16, className: "text-slate-200 group-hover:text-amber-500" })] }, item))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-indigo-600 rounded-2xl p-6 text-white relative overflow-hidden group", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700", children: (0, jsx_runtime_1.jsx)(Rocket, { size: 120 }) }), (0, jsx_runtime_1.jsx)("h4", { className: "font-bold mb-2", children: "Boss-Level Tip" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-indigo-100 leading-relaxed", children: "\u09B8\u09AC\u099A\u09C7\u09AF\u09BC\u09C7 \u09AD\u09BE\u09B2\u09CB \u09B6\u09BF\u0996\u09AC\u09C7\u09A8 \u09AF\u0996\u09A8 \u0986\u09AA\u09A8\u09BF \u09AA\u09CD\u09B0\u09AE\u09CD\u09AA\u099F\u0997\u09C1\u09B2\u09CB \u09A8\u09BF\u099C\u09C7 Claude \u09AC\u09BE GPT \u09A4\u09C7 \u099F\u09CD\u09B0\u09BE\u0987 \u0995\u09B0\u09AC\u09C7\u09A8\u0964 \u09B6\u09C1\u09A7\u09C1 \u09A5\u09BF\u0993\u09B0\u09BF \u09AA\u09A1\u09BC\u09AC\u09C7\u09A8 \u09A8\u09BE!" })] })] })] })] }));
};
exports.ModuleContent = ModuleContent;
const Rocket = ({ size = 20 }) => ((0, jsx_runtime_1.jsxs)("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71.79-1.35.5-2.09l-1.41-1.41c-.74-.29-1.38-.21-2.09.5Z" }), (0, jsx_runtime_1.jsx)("path", { d: "m19 8-8.82 8.82a2 2 0 0 0-.59 1.41V20h1.77c.53 0 1.04-.21 1.41-.59L21.6 15c.54-.54.33-1.4-.41-1.63l-2.19-.7z" }), (0, jsx_runtime_1.jsx)("path", { d: "m3 3 10.3 10.3" }), (0, jsx_runtime_1.jsx)("path", { d: "M16 11V7l-4-4H8L4 8v4l4 4" })] }));
//# sourceMappingURL=ModuleContent.js.map