"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSfcScriptGen = void 0;
const reactivity_1 = require("@vue/reactivity");
const sourceMaps_1 = require("../utils/sourceMaps");
const script_1 = require("@volar/vue-code-gen/out/generators/script");
const templateGen = require("@volar/vue-code-gen/out/generators/template_scriptSetup");
const localTypes_1 = require("../utils/localTypes");
function useSfcScriptGen(lsType, fileName, vueFileContent, script, scriptSetup, scriptRanges, scriptSetupRanges, sfcTemplateCompileResult, sfcStyles, isVue2, getCssVBindRanges) {
    const htmlGen = (0, reactivity_1.computed)(() => {
        if (sfcTemplateCompileResult.value?.ast) {
            return templateGen.generate(sfcTemplateCompileResult.value.ast);
        }
    });
    const codeGen = (0, reactivity_1.computed)(() => (0, script_1.generate)(lsType, fileName, script.value ?? undefined, scriptSetup.value ?? undefined, scriptRanges.value, scriptSetupRanges.value, () => htmlGen.value, () => {
        const bindTexts = [];
        for (const style of sfcStyles.value) {
            const binds = getCssVBindRanges(style);
            for (const cssBind of binds) {
                const bindText = style.content.substring(cssBind.start, cssBind.end);
                bindTexts.push(bindText);
            }
        }
        return bindTexts;
    }, (0, localTypes_1.getVueLibraryName)(isVue2)));
    const lang = (0, reactivity_1.computed)(() => {
        return !script.value && !scriptSetup.value ? 'ts'
            : scriptSetup.value && scriptSetup.value.lang !== 'js' ? scriptSetup.value.lang
                : script.value && script.value.lang !== 'js' ? script.value.lang
                    : 'js';
    });
    const file = (0, reactivity_1.computed)(() => {
        if (lsType === 'script') {
            const file = {
                lsType,
                fileName: fileName + '.' + lang.value,
                lang: lang.value,
                content: codeGen.value.codeGen.getText(),
                capabilities: {
                    diagnostics: !script.value?.src,
                    foldingRanges: false,
                    formatting: false,
                    documentSymbol: false,
                    codeActions: !script.value?.src,
                },
                data: undefined,
            };
            return file;
        }
        else if (script.value || scriptSetup.value) {
            const file = {
                lsType,
                fileName: fileName + '.__VLS_script.' + lang.value,
                lang: lang.value,
                content: codeGen.value.codeGen.getText(),
                capabilities: {
                    diagnostics: !script.value?.src && lsType === 'script',
                    foldingRanges: false,
                    formatting: false,
                    documentSymbol: false,
                    codeActions: !script.value?.src && lsType === 'script',
                },
                data: undefined,
            };
            return file;
        }
    });
    const fileTs = (0, reactivity_1.computed)(() => {
        if (lsType === 'template' && file.value && ['js', 'jsx'].includes(lang.value)) {
            const tsLang = lang.value === 'jsx' ? 'tsx' : 'ts';
            const _file = {
                lsType,
                fileName: fileName + '.__VLS_script_ts.' + tsLang,
                lang: tsLang,
                content: file.value.content,
                capabilities: {
                    diagnostics: false,
                    foldingRanges: false,
                    formatting: false,
                    documentSymbol: false,
                    codeActions: false,
                },
                data: undefined,
            };
            return _file;
        }
    });
    const embedded = (0, reactivity_1.computed)(() => {
        if (file.value) {
            return {
                sourceMap: new sourceMaps_1.EmbeddedFileSourceMap(codeGen.value.codeGen.getMappings(parseMappingSourceRange)),
                file: file.value,
            };
        }
    });
    const embeddedTs = (0, reactivity_1.computed)(() => {
        if (embedded.value && fileTs.value) {
            return {
                file: fileTs.value,
                sourceMap: new sourceMaps_1.EmbeddedFileSourceMap(embedded.value.sourceMap.mappings.map(mapping => ({
                    ...mapping,
                    data: {
                        ...mapping.data,
                        capabilities: {}
                    },
                }))),
            };
        }
    });
    const teleport = (0, reactivity_1.computed)(() => {
        const teleport = new sourceMaps_1.Teleport();
        for (const mapping of codeGen.value.teleports) {
            teleport.mappings.push(mapping);
        }
        return teleport;
    });
    return {
        lang,
        file: file,
        fileTs,
        embedded,
        embeddedTs,
        teleport,
    };
    // TODO
    function parseMappingSourceRange(data, sourceRange) {
        if (data.vueTag === 'scriptSrc' && script.value?.src) {
            const vueStart = vueFileContent.value.substring(0, script.value.startTagEnd).lastIndexOf(script.value.src);
            const vueEnd = vueStart + script.value.src.length;
            return {
                start: vueStart - 1,
                end: vueEnd + 1,
            };
        }
        else if (data.vueTag === 'script' && script.value) {
            return {
                start: script.value.startTagEnd + sourceRange.start,
                end: script.value.startTagEnd + sourceRange.end,
            };
        }
        else if (data.vueTag === 'scriptSetup' && scriptSetup.value) {
            return {
                start: scriptSetup.value.startTagEnd + sourceRange.start,
                end: scriptSetup.value.startTagEnd + sourceRange.end,
            };
        }
        else {
            return sourceRange;
        }
    }
}
exports.useSfcScriptGen = useSfcScriptGen;
//# sourceMappingURL=useSfcScriptGen.js.map