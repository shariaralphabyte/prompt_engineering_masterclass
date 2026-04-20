import React from 'react';
interface Row {
    label: string;
    values: (string | boolean)[];
}
interface ComparisonMatrixProps {
    headers: string[];
    rows: Row[];
    title?: string;
}
export declare const ComparisonMatrix: React.FC<ComparisonMatrixProps>;
export {};
//# sourceMappingURL=ComparisonMatrix.d.ts.map