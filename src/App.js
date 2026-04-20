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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const Sidebar_1 = require("./components/layout/Sidebar");
const Header_1 = require("./components/layout/Header");
const ModuleContent_1 = require("./components/modules/ModuleContent");
const DashboardHero_1 = require("./components/layout/DashboardHero");
const curriculum_1 = require("./data/curriculum");
function App() {
    const [selectedModuleId, setSelectedModuleId] = (0, react_1.useState)(null);
    const [isSidebarOpen, setIsSidebarOpen] = (0, react_1.useState)(false);
    const selectedModuleData = (0, react_1.useMemo)(() => {
        if (!selectedModuleId)
            return null;
        for (const phase of curriculum_1.curriculum) {
            const found = phase.modules.find(m => m.id === selectedModuleId);
            if (found)
                return { module: found, color: phase.color };
        }
        return null;
    }, [selectedModuleId]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex bg-[#FAFAF8] min-h-screen font-inter", children: [(0, jsx_runtime_1.jsx)(Sidebar_1.Sidebar, { selectedModuleId: selectedModuleId, onSelectModule: (id) => {
                    setSelectedModuleId(id);
                    setIsSidebarOpen(false);
                } }), (0, jsx_runtime_1.jsxs)("main", { className: "flex-1 lg:ml-80 transition-all duration-300", children: [(0, jsx_runtime_1.jsx)(Header_1.Header, { title: selectedModuleData?.module.title || 'Course Dashboard', onMenuToggle: () => setIsSidebarOpen(!isSidebarOpen), onHomeClick: () => setSelectedModuleId(null) }), (0, jsx_runtime_1.jsx)("div", { className: "container py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: !selectedModuleId ? ((0, jsx_runtime_1.jsx)(DashboardHero_1.DashboardHero, {})) : selectedModuleData ? ((0, jsx_runtime_1.jsx)(ModuleContent_1.ModuleContent, { module: selectedModuleData.module, phaseColor: selectedModuleData.color })) : ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center h-[60vh] text-slate-400 space-y-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-4xl", children: "\uD83D\uDD0D" }), (0, jsx_runtime_1.jsx)("p", { className: "font-medium italic", children: "Module not found..." })] })) })] }), isSidebarOpen && ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] lg:hidden", onClick: () => setIsSidebarOpen(false), children: (0, jsx_runtime_1.jsx)("div", { className: "w-80 h-full bg-white shadow-2xl animate-fade-in", onClick: e => e.stopPropagation(), children: (0, jsx_runtime_1.jsx)(Sidebar_1.Sidebar, { selectedModuleId: selectedModuleId, onSelectModule: (id) => {
                            setSelectedModuleId(id);
                            setIsSidebarOpen(false);
                        } }) }) }))] }));
}
exports.default = App;
//# sourceMappingURL=App.js.map