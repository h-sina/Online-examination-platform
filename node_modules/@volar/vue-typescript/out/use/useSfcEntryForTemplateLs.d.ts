import { Ref } from '@vue/reactivity';
import { Embedded, EmbeddedFile, Sfc } from '../vueFile';
export declare function useSfcEntryForTemplateLs(fileName: string, script: Ref<Sfc['script']>, scriptSetup: Ref<Sfc['scriptSetup']>, template: Ref<Sfc['template']>, hasTsDoc: Ref<boolean>, isVue2: boolean): {
    file: import("@vue/reactivity").ComputedRef<EmbeddedFile<unknown>>;
    embedded: import("@vue/reactivity").ComputedRef<Embedded | undefined>;
};
