import React from 'react';
interface Node {
    id: string;
    label: string;
    icon?: any;
    color: string;
}
interface Link {
    from: string;
    to: string;
    label?: string;
}
interface ArchitectureDiagramProps {
    nodes: Node[];
    links: Link[];
    title?: string;
    description?: string;
}
export declare const ArchitectureDiagram: React.FC<ArchitectureDiagramProps>;
export {};
//# sourceMappingURL=ArchitectureDiagram.d.ts.map