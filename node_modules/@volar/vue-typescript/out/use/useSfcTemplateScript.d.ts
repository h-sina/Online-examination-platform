import { CodeGen } from '@volar/code-gen';
import type { parseScriptSetupRanges } from '@volar/vue-code-gen/out/parsers/scriptSetupRanges';
import { Ref } from '@vue/reactivity';
import { ITemplateScriptData, VueCompilerOptions } from '../types';
import { Teleport } from '../utils/sourceMaps';
import type { TextRange } from '@volar/vue-code-gen';
import { Embedded, EmbeddedFile, Sfc } from '../vueFile';
import { useSfcStyles } from './useSfcStyles';
import { EmbeddedFileMappingData } from '@volar/vue-code-gen';
export declare function useSfcTemplateScript(fileName: string, template: Ref<Sfc['template']>, scriptSetup: Ref<Sfc['scriptSetup']>, scriptSetupRanges: Ref<ReturnType<typeof parseScriptSetupRanges> | undefined>, styles: Ref<Sfc['styles']>, templateScriptData: ITemplateScriptData, styleFiles: ReturnType<typeof useSfcStyles>['files'], styleEmbeddeds: ReturnType<typeof useSfcStyles>['embeddeds'], templateData: Ref<{
    lang: string;
    htmlToTemplate: (start: number, end: number) => {
        start: number;
        end: number;
    } | undefined;
} | undefined>, sfcTemplateCompileResult: Ref<ReturnType<(typeof import('@volar/vue-code-gen'))['compileSFCTemplate']> | undefined>, sfcStyles: ReturnType<(typeof import('./useSfcStyles'))['useSfcStyles']>['files'], scriptLang: Ref<string>, compilerOptions: VueCompilerOptions, baseCssModuleType: string, getCssVBindRanges: (cssEmbeddeFile: EmbeddedFile) => TextRange[], getCssClasses: (cssEmbeddeFile: EmbeddedFile) => Record<string, TextRange[]>): {
    templateCodeGens: import("@vue/reactivity").ComputedRef<{
        codeGen: CodeGen<EmbeddedFileMappingData>;
        formatCodeGen: CodeGen<EmbeddedFileMappingData>;
        cssCodeGen: CodeGen<EmbeddedFileMappingData>;
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
    file: Ref<EmbeddedFile<unknown> | undefined>;
    formatFile: Ref<EmbeddedFile<unknown> | undefined>;
    formatEmbedded: import("@vue/reactivity").ComputedRef<Embedded | undefined>;
    teleport: Ref<Teleport | undefined>;
    inlineCssFile: import("@vue/reactivity").ComputedRef<EmbeddedFile<unknown> | undefined>;
    inlineCssEmbedded: import("@vue/reactivity").ComputedRef<Embedded | undefined>;
    update: () => void;
};
