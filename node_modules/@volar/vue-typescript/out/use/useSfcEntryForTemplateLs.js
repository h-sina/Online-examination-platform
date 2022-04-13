"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSfcEntryForTemplateLs = void 0;
const reactivity_1 = require("@vue/reactivity");
const sourceMaps_1 = require("../utils/sourceMaps");
const SourceMaps = require("@volar/source-map");
const path = require("path");
const string_1 = require("../utils/string");
const localTypes_1 = require("../utils/localTypes");
function useSfcEntryForTemplateLs(fileName, script, scriptSetup, template, hasTsDoc, isVue2) {
    const file = (0, reactivity_1.computed)(() => {
        const baseFileName = path.basename(fileName);
        const tsScriptFileName = hasTsDoc.value ? '__VLS_script_ts' : '__VLS_script';
        let content = '';
        content += '// @ts-nocheck\n';
        content += `import * as __VLS_types from './__VLS_types';\n`;
        if (script.value || scriptSetup.value) {
            content += `import { __VLS_options as __VLS_options_ts } from './${baseFileName}.${tsScriptFileName}';\n`;
            content += `import { __VLS_options, __VLS_name } from './${baseFileName}.__VLS_script';\n`;
            content += `export { __VLS_options, __VLS_name } from './${baseFileName}.__VLS_script';\n`;
            content += `export * from './${baseFileName}.__VLS_script';\n`;
            content += `import __VLS_component_ts from './${baseFileName}.${tsScriptFileName}';\n`;
            content += `import __VLS_component from './${baseFileName}.__VLS_script';\n`;
            content += `export { default as __VLS_component } from './${baseFileName}.__VLS_script';\n`;
        }
        else {
            content += `export var __VLS_name = undefined;\n`;
            content += `export var __VLS_options = {};\n`;
            content += `export var __VLS_component = (await import('${(0, localTypes_1.getVueLibraryName)(isVue2)}')).defineComponent({});\n`;
            content += `var __VLS_options_ts = {};\n`;
            content += `var __VLS_component_ts = (await import('${(0, localTypes_1.getVueLibraryName)(isVue2)}')).defineComponent({});\n`;
        }
        content += `declare var __VLS_ctx: __VLS_types.ComponentContext<typeof __VLS_component_ts>;\n`;
        content += `declare var __VLS_ComponentsWrap: typeof __VLS_options & { components: { } };\n`;
        content += `declare var __VLS_Components: NonNullable<typeof __VLS_component extends { components: infer C } ? C : {}> & typeof __VLS_ComponentsWrap.components & __VLS_types.GlobalComponents & __VLS_types.PickComponents<typeof __VLS_ctx> & __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component>;\n`;
        content += `__VLS_ctx.${string_1.SearchTexts.Context};\n`;
        content += `__VLS_Components.${string_1.SearchTexts.Components};\n`;
        content += `({} as __VLS_types.OptionsSetupReturns<typeof __VLS_options_ts>).${string_1.SearchTexts.SetupReturns};\n`;
        content += `({} as __VLS_types.OptionsProps<typeof __VLS_options_ts>).${string_1.SearchTexts.Props};\n`;
        content += `({} as __VLS_types.GlobalAttrs).${string_1.SearchTexts.GlobalAttrs};`;
        content += `\n`;
        content += `export default {} as typeof __VLS_component & {\n`;
        content += `__VLS_raw: typeof __VLS_component\n`;
        content += `__VLS_options: typeof __VLS_options,\n`;
        content += template.value ? `__VLS_slots: typeof import ('./${baseFileName}.__VLS_template').default,\n` : `// no template\n`;
        content += `};\n`;
        const file = {
            fileName: fileName + '.ts',
            lang: 'ts',
            content,
            lsType: 'template',
            capabilities: {
                diagnostics: false,
                foldingRanges: false,
                formatting: false,
                documentSymbol: false,
                codeActions: false,
            },
            data: undefined,
        };
        return file;
    });
    const embedded = (0, reactivity_1.computed)(() => {
        const sourceMap = new sourceMaps_1.EmbeddedFileSourceMap();
        sourceMap.mappings.push({
            data: {
                vueTag: 'sfc',
                capabilities: {},
            },
            mode: SourceMaps.Mode.Expand,
            sourceRange: {
                start: 0,
                end: 0,
            },
            mappedRange: {
                start: 0,
                end: file.value.content.length,
            },
        });
        return {
            file: file.value,
            sourceMap,
        };
    });
    return {
        file,
        embedded,
    };
}
exports.useSfcEntryForTemplateLs = useSfcEntryForTemplateLs;
//# sourceMappingURL=useSfcEntryForTemplateLs.js.map