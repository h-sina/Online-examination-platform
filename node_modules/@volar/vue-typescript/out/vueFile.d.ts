import { TextRange } from '@volar/vue-code-gen';
import { EmbeddedFileSourceMap } from '@volar/vue-typescript';
import { ITemplateScriptData, VueCompilerOptions } from './types';
import { VueLanguagePlugin } from './typescriptRuntime';
import { Teleport } from './utils/sourceMaps';
import type * as _0 from 'typescript/lib/tsserverlibrary';
export interface VueFile extends ReturnType<typeof createVueFile> {
}
export interface EmbeddedStructure {
    self: Embedded | undefined;
    embeddeds: EmbeddedStructure[];
    inheritParentIndent?: boolean;
}
export interface Embedded {
    file: EmbeddedFile;
    sourceMap: EmbeddedFileSourceMap;
}
export interface SfcBlock {
    start: number;
    end: number;
    startTagEnd: number;
    endTagStart: number;
    lang: string;
    content: string;
}
export interface Sfc {
    template: SfcBlock | null;
    script: (SfcBlock & {
        src: string | undefined;
    }) | null;
    scriptSetup: SfcBlock | null;
    styles: (SfcBlock & {
        module: string | undefined;
        scoped: boolean;
    })[];
    customBlocks: (SfcBlock & {
        type: string;
    })[];
}
export interface EmbeddedFile<T = unknown> {
    fileName: string;
    lang: string;
    content: string;
    lsType: 'template' | 'script' | 'nonTs';
    capabilities: {
        diagnostics: boolean;
        foldingRanges: boolean;
        formatting: boolean;
        documentSymbol: boolean;
        codeActions: boolean;
    };
    data: T;
}
export declare function createVueFile(fileName: string, _content: string, _version: string, plugins: VueLanguagePlugin[], compilerOptions: VueCompilerOptions, ts: typeof import('typescript/lib/tsserverlibrary'), baseCssModuleType: string, getCssClasses: (cssEmbeddeFile: EmbeddedFile) => Record<string, TextRange[]>): {
    fileName: string;
    getContent: () => string;
    getSfcTemplateLanguageCompiled: () => {
        lang: string;
        htmlText: string;
        htmlToTemplate: (start: number, end: number) => {
            start: number;
            end: number;
        } | undefined;
    } | undefined;
    getSfcVueTemplateCompiled: () => {
        errors: import("@volar/vue-code-gen").CompilerError[];
        warnings: import("@volar/vue-code-gen").CompilerError[];
        ast: import("@volar/vue-code-gen").RootNode | undefined;
    } | undefined;
    getVersion: () => string;
    getTemplateTagNames: () => Record<string, {
        rawComponent: string;
        slotsComponent: string;
        baseProps: string;
        emit: string;
        slots: string;
        events: Record<string, string>;
        offsets: number[];
    }> | undefined;
    getTemplateAttrNames: () => Set<string> | undefined;
    update: (newContent: string, newVersion: string) => {
        scriptContentUpdated: boolean;
        scriptUpdated: boolean;
        templateScriptUpdated: boolean;
    };
    updateTemplateScript: (templateTsLs: ts.LanguageService, tempalteTsHost: ts.LanguageServiceHost) => boolean;
    getScriptTsFile: () => EmbeddedFile<undefined>;
    getEmbeddedTemplate: () => Embedded | undefined;
    getTemplateScriptData: () => ITemplateScriptData;
    getDescriptor: () => Sfc;
    getScriptAst: () => _0.SourceFile | undefined;
    getScriptSetupAst: () => _0.SourceFile | undefined;
    getTemplateFormattingScript: () => Embedded | undefined;
    getSfcRefSugarRanges: () => {
        refs: {
            flag: TextRange;
            leftBindings: TextRange[];
            rightFn: TextRange;
        }[];
        raws: {
            fullRange: TextRange;
            argsRange: TextRange;
        }[];
    } | undefined;
    getEmbeddeds: () => EmbeddedStructure[];
    getAllEmbeddeds: () => Embedded[];
    getLastUpdated: () => {
        template: boolean;
        script: boolean;
        scriptSetup: boolean;
    };
    getScriptSetupRanges: () => {
        importSectionEndOffset: number;
        notOnTopTypeExports: TextRange[];
        bindings: TextRange[];
        typeBindings: TextRange[];
        withDefaultsArg: TextRange | undefined;
        propsRuntimeArg: TextRange | undefined;
        propsTypeArg: TextRange | undefined;
        emitsRuntimeArg: TextRange | undefined;
        emitsTypeArg: TextRange | undefined;
        emitsTypeNums: number;
        exposeRuntimeArg: TextRange | undefined;
    } | undefined;
    getSfcTemplateDocument: () => EmbeddedFile<unknown> | undefined;
    refs: {
        content: import("@vue/reactivity").Ref<string>;
        allEmbeddeds: import("@vue/reactivity").ComputedRef<Embedded[]>;
        teleports: import("@vue/reactivity").ComputedRef<{
            file: EmbeddedFile;
            teleport: Teleport;
        }[]>;
        sfcTemplateScript: {
            templateCodeGens: import("@vue/reactivity").ComputedRef<{
                codeGen: import("@volar/code-gen").CodeGen<import("@volar/vue-code-gen").EmbeddedFileMappingData>;
                formatCodeGen: import("@volar/code-gen").CodeGen<import("@volar/vue-code-gen").EmbeddedFileMappingData>;
                cssCodeGen: import("@volar/code-gen").CodeGen<import("@volar/vue-code-gen").EmbeddedFileMappingData>;
                tagNames: Record<string, {
                    rawComponent: string;
                    slotsComponent: string;
                    baseProps: string;
                    emit: string;
                    slots: string;
                    events: Record<string, string>;
                    offsets: number[];
                }>;
                attrNames: Set<string>;
            } | undefined>;
            embedded: import("@vue/reactivity").ComputedRef<Embedded | undefined>;
            file: import("@vue/reactivity").Ref<EmbeddedFile<unknown> | undefined>;
            formatFile: import("@vue/reactivity").Ref<EmbeddedFile<unknown> | undefined>;
            formatEmbedded: import("@vue/reactivity").ComputedRef<Embedded | undefined>;
            teleport: import("@vue/reactivity").Ref<Teleport | undefined>;
            inlineCssFile: import("@vue/reactivity").ComputedRef<EmbeddedFile<unknown> | undefined>;
            inlineCssEmbedded: import("@vue/reactivity").ComputedRef<Embedded | undefined>;
            update: () => void;
        };
        sfcEntryForTemplateLs: {
            file: import("@vue/reactivity").ComputedRef<EmbeddedFile<unknown>>;
            embedded: import("@vue/reactivity").ComputedRef<Embedded | undefined>;
        };
        sfcScriptForScriptLs: {
            lang: import("@vue/reactivity").ComputedRef<string>;
            file: import("@vue/reactivity").ComputedRef<EmbeddedFile<undefined>>;
            fileTs: import("@vue/reactivity").ComputedRef<EmbeddedFile<unknown> | undefined>;
            embedded: import("@vue/reactivity").ComputedRef<Embedded | undefined>;
            embeddedTs: import("@vue/reactivity").ComputedRef<Embedded | undefined>;
            teleport: import("@vue/reactivity").ComputedRef<Teleport>;
        };
        templateScriptData: ITemplateScriptData;
    };
};
