"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolMatrix = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const ComparisonMatrix_1 = require("./ComparisonMatrix");
const ToolMatrix = () => {
    const headers = ["Cursor", "Claude Code", "Copilot", "Windsurf"];
    const rows = [
        { label: "Composer Mode", values: [true, true, false, true] },
        { label: "Multi-file Edit", values: [true, true, true, true] },
        { label: "Architectural Refactor", values: ["High", "Extreme", "Low", "Moderate"] },
        { label: "Offline Support", values: [false, false, false, false] },
        { label: "Local Context", values: ["Embeddings", "Deep Scan", "Basic", "Flow-based"] },
        { label: "Agentic Loop", values: [true, true, false, true] },
    ];
    return ((0, jsx_runtime_1.jsx)(ComparisonMatrix_1.ComparisonMatrix, { title: "AI \u0995\u09CB\u09A1\u09BF\u0982 \u099F\u09C1\u09B2\u09B8 \u09AE\u09BE\u09B8\u09CD\u099F\u09BE\u09B0\u09BF - \u09A4\u09C1\u09B2\u09A8\u09BE\u09AE\u09C2\u09B2\u0995 \u09AC\u09BF\u09B6\u09CD\u09B2\u09C7\u09B7\u09A3", headers: headers, rows: rows }));
};
exports.ToolMatrix = ToolMatrix;
//# sourceMappingURL=ToolMatrix.js.map