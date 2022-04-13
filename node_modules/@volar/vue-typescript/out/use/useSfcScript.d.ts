import { Ref } from '@vue/reactivity';
import type * as _0 from 'typescript/lib/tsserverlibrary';
import { Embedded, EmbeddedFile, Sfc } from '../vueFile';
export declare function useSfcScript(fileName: string, script: Ref<Sfc['script'] | Sfc['scriptSetup']>, ts: typeof import('typescript/lib/tsserverlibrary')): {
    ast: import("@vue/reactivity").ComputedRef<_0.SourceFile | undefined>;
    file: import("@vue/reactivity").ComputedRef<EmbeddedFile<unknown> | undefined>;
    embedded: import("@vue/reactivity").ComputedRef<Embedded | undefined>;
};
