import { Ref, ComputedRef } from '@vue/reactivity';
import { Teleport } from '../utils/sourceMaps';
import type { parseScriptRanges } from '@volar/vue-code-gen/out/parsers/scriptRanges';
import type { parseScriptSetupRanges } from '@volar/vue-code-gen/out/parsers/scriptSetupRanges';
import type { TextRange } from '@volar/vue-code-gen';
import { Embedded, EmbeddedFile, Sfc } from '../vueFile';
export declare function useSfcScriptGen<T extends 'template' | 'script'>(lsType: T, fileName: string, vueFileContent: Ref<string>, script: Ref<Sfc['script']>, scriptSetup: Ref<Sfc['scriptSetup']>, scriptRanges: Ref<ReturnType<typeof parseScriptRanges> | undefined>, scriptSetupRanges: Ref<ReturnType<typeof parseScriptSetupRanges> | undefined>, sfcTemplateCompileResult: Ref<ReturnType<(typeof import('@volar/vue-code-gen'))['compileSFCTemplate']> | undefined>, sfcStyles: ReturnType<(typeof import('./useSfcStyles'))['useSfcStyles']>['files'], isVue2: boolean, getCssVBindRanges: (cssEmbeddeFile: EmbeddedFile) => TextRange[]): {
    lang: ComputedRef<string>;
    file: T extends "script" ? ComputedRef<EmbeddedFile<undefined>> : ComputedRef<EmbeddedFile<undefined> | undefined>;
    fileTs: ComputedRef<EmbeddedFile<unknown> | undefined>;
    embedded: ComputedRef<Embedded | undefined>;
    embeddedTs: ComputedRef<Embedded | undefined>;
    teleport: ComputedRef<Teleport>;
};
