interface JSONFlattenOptions {
    key?: string;
    index?: number;
    showComma: boolean;
    length: number;
    type: 'content' | 'objectStart' | 'objectEnd' | 'objectCollapsed' | 'arrayStart' | 'arrayEnd' | 'arrayCollapsed';
}
export declare type JSONDataType = string | number | boolean | unknown[] | Record<string, unknown> | null;
export interface JSONFlattenReturnType extends JSONFlattenOptions {
    content: string;
    level: number;
    path: string;
}
export declare function emitError(message: string): void;
export declare function getDataType(value: unknown): string;
export declare function jsonFlatten(data: JSONDataType, path?: string, level?: number, options?: JSONFlattenOptions): JSONFlattenReturnType[];
export {};
