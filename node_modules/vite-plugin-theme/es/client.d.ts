export declare const globalField = "__VITE_THEME__";
export declare const styleTagId = "__VITE_PLUGIN_THEME__";
export declare const darkStyleTagId = "__VITE_PLUGIN_DARK_THEME__";
export declare const linkID = "__VITE_PLUGIN_THEME-ANTD_DARK_THEME_LINK__";
export interface Options {
    colorVariables: string[];
    wrapperCssSelector?: string;
    resolveSelector?: (selector: string) => string;
    fileName?: string;
    inline?: boolean;
    injectTo?: InjectTo;
}
export interface GlobalConfig {
    replaceStyleVariables: ({ colorVariables }: {
        colorVariables: string[];
    }) => void;
    colorVariables: string[];
    defaultOptions: Options;
    appended?: boolean;
    styleIdMap?: Map<string, string>;
    styleRenderQueueMap?: Map<string, string>;
}
export declare type InjectTo = 'head' | 'body' | 'body-prepend';
declare global {
    interface Window {
        [globalField]: GlobalConfig;
    }
}
export declare let darkCssIsReady: boolean;
export declare function addCssToQueue(id: string, styleString: string): void;
export declare function replaceStyleVariables({ colorVariables, customCssHandler, }: {
    colorVariables: string[];
    customCssHandler?: (css: string) => string;
}): Promise<void>;
export declare function loadDarkThemeCss(): Promise<void>;
export declare function replaceCssColors(css: string, colors: string[], customCssHandler?: (css: string) => string): Promise<string>;
export declare function setGlobalOptions<T extends keyof GlobalConfig = any>(key: T, value: GlobalConfig[T]): void;
export declare function getGlobalOptions<T extends keyof GlobalConfig = any>(key: T): GlobalConfig[T];
export declare function getStyleDom(id: string): HTMLElement;
export declare function appendCssToDom(styleDom: HTMLElement, cssText: string, appendTo?: InjectTo): Promise<void>;
