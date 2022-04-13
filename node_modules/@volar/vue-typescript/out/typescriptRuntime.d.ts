import type { TextRange } from '@volar/vue-code-gen';
import type * as ts from 'typescript/lib/tsserverlibrary';
import { LanguageServiceHost, VueCompilerOptions } from './types';
import { EmbeddedFile } from './vueFile';
export interface VueLanguagePlugin {
    compileTemplate?(tmplate: string, lang: string): {
        html: string;
        mapping(htmlStart: number, htmlEnd: number): {
            start: number;
            end: number;
        } | undefined;
    } | undefined;
}
export declare type TypeScriptRuntime = ReturnType<typeof createTypeScriptRuntime>;
export declare function createTypeScriptRuntime(options: {
    typescript: typeof import('typescript/lib/tsserverlibrary');
    vueCompilerOptions: VueCompilerOptions;
    baseCssModuleType: string;
    getCssClasses: (cssEmbeddeFile: EmbeddedFile) => Record<string, TextRange[]>;
    vueLsHost: LanguageServiceHost;
    isTsPlugin?: boolean;
    isVueTsc?: boolean;
}): {
    vueLsHost: LanguageServiceHost;
    vueFiles: {
        get: (fileName: string) => import("./vueFile").VueFile;
        delete: (fileName: string) => boolean;
        has: (fileName: string) => boolean;
        set: (fileName: string, vueFile: import("./vueFile").VueFile) => import("./vueFile").VueFile;
        getFileNames: () => string[];
        getDirs: () => string[];
        getAll: () => import("./vueFile").VueFile[];
        getTeleport: (lsType: "template" | "script", fileName: string) => import(".").Teleport | undefined;
        getEmbeddeds: (lsType: "template" | "script" | "nonTs") => Generator<{
            vueFile: import("./vueFile").VueFile;
            embedded: import("./vueFile").Embedded;
        } | {
            vueFile: import("./vueFile").VueFile;
            embedded: import("./vueFile").Embedded;
        } | {
            vueFile: import("./vueFile").VueFile;
            embedded: import("./vueFile").Embedded;
        }, void, unknown>;
        fromEmbeddedLocation: (lsType: "template" | "script" | "nonTs", fileName: string, start: number, end?: number | undefined, filter?: ((data: import("@volar/vue-code-gen").EmbeddedFileMappingData) => boolean) | undefined, sourceMapFilter?: ((sourceMap: import(".").EmbeddedFileSourceMap) => boolean) | undefined) => Generator<{
            fileName: string;
            range: {
                start: number;
                end: number;
            };
            mapped: {
                vueFile: import("./vueFile").VueFile;
                embedded: import("./vueFile").Embedded;
            };
            data: import("@volar/vue-code-gen").EmbeddedFileMappingData;
        } | {
            fileName: string;
            range: {
                start: number;
                end: number;
            };
            mapped?: undefined;
            data?: undefined;
        }, void, unknown>;
        fromEmbeddedFile: (file: EmbeddedFile<unknown>) => import("./vueFile").VueFile | undefined;
        fromEmbeddedFileName: (lsType: "template" | "script" | "nonTs", fileName: string) => {
            vueFile: import("./vueFile").VueFile;
            embedded: import("./vueFile").Embedded;
        } | undefined;
    };
    getTsLs: (lsType: 'template' | 'script') => ts.LanguageService;
    getTsLsHost: (lsType: 'template' | 'script') => ts.LanguageServiceHost;
    update: (shouldUpdateTemplateScript: boolean) => void;
    getScriptContentVersion: () => number;
    dispose: () => void;
    onInitProgress(cb: (p: number) => void): void;
    getLocalTypesFiles: (lsType: 'script' | 'template') => {
        fileNames: string[];
        code: string;
    };
};
