export interface Module {
    id: string;
    title: string;
    description: string;
    content: string;
    visuals?: string;
    interactiveComponent?: string;
}
export interface Phase {
    id: number;
    title: string;
    englishTitle: string;
    color: string;
    modules: Module[];
}
export declare const curriculum: Phase[];
//# sourceMappingURL=curriculum.d.ts.map