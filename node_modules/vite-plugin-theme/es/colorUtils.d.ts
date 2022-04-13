import tinycolor from 'tinycolor2';
export declare function mixLighten(colorStr: string, weight: number): string;
export declare function mixDarken(colorStr: string, weight: number): string;
export declare function mix(color1: string, color2: string, weight: number, alpha1?: number, alpha2?: number): string;
export declare function toNum3(colorStr: string): number[];
export declare function dropPrefix(colorStr: string): string;
export declare function pad2(num: number): string;
export { tinycolor };
