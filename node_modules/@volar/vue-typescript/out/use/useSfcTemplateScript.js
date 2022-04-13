"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSfcTemplateScript = void 0;
const code_gen_1 = require("@volar/code-gen");
const templateGen = require("@volar/vue-code-gen/out/generators/template");
const reactivity_1 = require("@vue/reactivity");
const sourceMaps_1 = require("../utils/sourceMaps");
const string_1 = require("../utils/string");
const SourceMaps = require("@volar/source-map");
const path = require("path");
function useSfcTemplateScript(fileName, template, scriptSetup, scriptSetupRanges, styles, templateScriptData, styleFiles, styleEmbeddeds, templateData, sfcTemplateCompileResult, sfcStyles, scriptLang, compilerOptions, baseCssModuleType, getCssVBindRanges, getCssClasses) {
    const baseFileName = path.basename(fileName);
    const cssModuleClasses = (0, reactivity_1.computed)(() => styleFiles.value.reduce((obj, style) => {
        if (style.data.module) {
            const classes = getCssClasses(style);
            obj[style.data.module] = { [style.fileName]: classes };
        }
        return obj;
    }, {}));
    const cssScopedClasses = (0, reactivity_1.computed)(() => {
        const obj = {};
        for (const style of styleFiles.value) {
            if (style.data.scoped || compilerOptions.experimentalResolveNonScopedCssClasses) {
                const classes = getCssClasses(style);
                obj[style.fileName] = classes;
            }
        }
        return obj;
    });
    const templateCodeGens = (0, reactivity_1.computed)(() => {
        if (!templateData.value)
            return;
        if (!sfcTemplateCompileResult.value?.ast)
            return;
        return templateGen.generate(templateData.value.lang, sfcTemplateCompileResult.value.ast, compilerOptions.experimentalCompatMode === 2, Object.values(cssScopedClasses.value).map(map => Object.keys(map)).flat(), templateData.value.htmlToTemplate, !!scriptSetup.value, {
            getEmitCompletion: string_1.SearchTexts.EmitCompletion,
            getPropsCompletion: string_1.SearchTexts.PropsCompletion,
        });
    });
    const data = (0, reactivity_1.computed)(() => {
        const codeGen = new code_gen_1.CodeGen();
        codeGen.addText(`import * as __VLS_types from './__VLS_types';\n`);
        codeGen.addText(`import { __VLS_options, __VLS_name, __VLS_component } from './${baseFileName}';\n`);
        writeImportTypes();
        codeGen.addText(`declare var __VLS_ctxRaw: InstanceType<typeof __VLS_component>;\n`);
        codeGen.addText(`declare var __VLS_ctx: __VLS_types.ExtractRawComponents<typeof __VLS_ctxRaw>;\n`);
        codeGen.addText(`declare var __VLS_vmUnwrap: typeof __VLS_options & { components: { } };\n`);
        /* Components */
        codeGen.addText('/* Components */\n');
        codeGen.addText('declare var __VLS_wrapComponentsRaw: NonNullable<typeof __VLS_component extends { components: infer C } ? C : {}> & __VLS_types.GlobalComponents & typeof __VLS_vmUnwrap.components & __VLS_types.PickComponents<typeof __VLS_ctxRaw>;\n'); // has __VLS_options
        codeGen.addText('declare var __VLS_ownComponent: __VLS_types.SelfComponent<typeof __VLS_name, typeof __VLS_component & { __VLS_raw: typeof __VLS_component, __VLS_options: typeof __VLS_options, __VLS_slots: typeof __VLS_slots }>;\n');
        codeGen.addText('declare var __VLS_wrapComponents: typeof __VLS_wrapComponentsRaw & Omit<typeof __VLS_ownComponent, keyof typeof __VLS_wrapComponentsRaw>;\n');
        codeGen.addText('declare var __VLS_rawComponents: __VLS_types.ConvertInvalidComponents<__VLS_types.ExtractRawComponents<typeof __VLS_wrapComponents>> & JSX.IntrinsicElements;\n'); // sort by priority
        /* CSS Module */
        codeGen.addText('/* CSS Module */\n');
        const cssModuleMappingsArr = [];
        for (const moduleName in cssModuleClasses.value) {
            const moduleClasses = cssModuleClasses.value[moduleName];
            codeGen.addText(`declare var ${moduleName}: ${baseCssModuleType} & {\n`);
            cssModuleMappingsArr.push(writeCssClassProperties(moduleClasses, true, 'string', false));
            codeGen.addText('};\n');
        }
        /* Style Scoped */
        codeGen.addText('/* Style Scoped */\n');
        codeGen.addText('type __VLS_StyleScopedClasses = {\n');
        const cssScopedMappings = writeCssClassProperties(cssScopedClasses.value, true, 'boolean', true);
        codeGen.addText('};\n');
        codeGen.addText('declare var __VLS_styleScopedClasses: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];\n');
        /* Props */
        codeGen.addText(`/* Props */\n`);
        const ctxMappings = writeProps();
        codeGen.addText(`/* CSS variable injection */\n`);
        writeCssVars();
        if (templateCodeGens.value) {
            (0, code_gen_1.mergeCodeGen)(codeGen, templateCodeGens.value.codeGen);
        }
        codeGen.addText(`export default __VLS_slots;\n`);
        return {
            codeGen,
            cssModuleMappingsArr,
            cssScopedMappings,
            ctxMappings,
        };
        function writeImportTypes() {
            const bindingsArr = [];
            if (scriptSetupRanges.value && scriptSetup.value) {
                bindingsArr.push({
                    typeBindings: scriptSetupRanges.value.typeBindings,
                    content: scriptSetup.value.content,
                });
            }
            // if (scriptRanges.value && script.value) {
            // 	bindingsArr.push({
            // 		typeBindings: scriptRanges.value.typeBindings,
            // 		content: script.value.content,
            // 	});
            // }
            codeGen.addText('import {\n');
            for (const bindings of bindingsArr) {
                for (const typeBinding of bindings.typeBindings) {
                    const text = bindings.content.substring(typeBinding.start, typeBinding.end);
                    codeGen.addText(`__VLS_types_${text} as ${text},\n`);
                }
            }
            codeGen.addText(`} from './${baseFileName}.__VLS_script';\n`);
        }
        function writeCssClassProperties(data, patchRename, propertyType, optional) {
            const mappings = new Map();
            for (const uri in data) {
                const classes = data[uri];
                if (!mappings.has(uri)) {
                    mappings.set(uri, []);
                }
                for (const className in classes) {
                    const ranges = classes[className];
                    mappings.get(uri).push({
                        tsRange: {
                            start: codeGen.getText().length + 1,
                            end: codeGen.getText().length + 1 + className.length,
                        },
                        cssRanges: ranges,
                        mode: SourceMaps.Mode.Offset,
                        patchRename,
                    });
                    mappings.get(uri).push({
                        tsRange: {
                            start: codeGen.getText().length,
                            end: codeGen.getText().length + className.length + 2,
                        },
                        cssRanges: ranges,
                        mode: SourceMaps.Mode.Totally,
                        patchRename,
                    });
                    codeGen.addText(`'${className}'${optional ? '?' : ''}: ${propertyType},\n`);
                }
            }
            return mappings;
        }
        function writeProps() {
            const propsSet = new Set(templateScriptData.props);
            const mappings = [];
            for (const propName of templateScriptData.context) {
                codeGen.addText(`declare let `);
                const templateSideRange = codeGen.addText(propName);
                codeGen.addText(`: typeof __VLS_ctx.`);
                const scriptSideRange = codeGen.addText(propName);
                codeGen.addText(`;`);
                mappings.push({
                    data: {
                        isAdditionalReference: false,
                        toSource: {
                            capabilities: {
                                definitions: true,
                                references: true,
                                rename: true,
                            },
                        },
                        toTarget: {
                            capabilities: {
                                definitions: true,
                                references: true,
                                rename: true,
                            },
                        },
                    },
                    mode: SourceMaps.Mode.Offset,
                    sourceRange: scriptSideRange,
                    mappedRange: templateSideRange,
                });
                if (propsSet.has(propName)) {
                    codeGen.addText(` __VLS_options.props.`);
                    const scriptSideRange2 = codeGen.addText(propName);
                    codeGen.addText(`;`);
                    mappings.push({
                        data: {
                            isAdditionalReference: true,
                            toSource: {
                                capabilities: {
                                    definitions: true,
                                    references: true,
                                    rename: true,
                                },
                            },
                            toTarget: {
                                capabilities: {
                                    definitions: true,
                                    references: true,
                                    rename: true,
                                },
                            },
                        },
                        mode: SourceMaps.Mode.Offset,
                        sourceRange: scriptSideRange2,
                        mappedRange: templateSideRange,
                    });
                }
                codeGen.addText(`\n`);
            }
            return mappings;
        }
        function writeCssVars() {
            for (let i = 0; i < sfcStyles.value.length; i++) {
                const style = sfcStyles.value[i];
                const binds = getCssVBindRanges(style);
                for (const cssBind of binds) {
                    const bindText = style.content.substring(cssBind.start, cssBind.end);
                    codeGen.addCode(bindText, cssBind, SourceMaps.Mode.Offset, {
                        vueTag: 'style',
                        vueTagIndex: i,
                        capabilities: {
                            basic: true,
                            references: true,
                            definitions: true,
                            diagnostic: true,
                            rename: true,
                            completion: true,
                            semanticTokens: true,
                        },
                    });
                    codeGen.addText(';\n');
                }
            }
        }
    });
    const embedded = (0, reactivity_1.computed)(() => {
        if (file.value) {
            const sourceMap = new SourceMaps.SourceMapBase(data.value.codeGen.getMappings(parseMappingSourceRange));
            for (const [fileName, mappings] of [
                ...data.value.cssModuleMappingsArr.flatMap(m => [...m]),
                ...data.value.cssScopedMappings,
            ]) {
                const cssSourceMap = styleEmbeddeds.value.find(embedded => embedded.file.fileName === fileName)?.sourceMap;
                if (!cssSourceMap)
                    continue;
                for (const mapped of mappings) {
                    const tsRange = mapped.tsRange;
                    for (const cssRange of mapped.cssRanges) {
                        const vueRange = cssSourceMap.getSourceRange(cssRange.start, cssRange.end)?.[0];
                        if (!vueRange)
                            continue;
                        sourceMap.mappings.push({
                            data: {
                                vueTag: 'style',
                                capabilities: {
                                    references: true,
                                    rename: true,
                                    referencesCodeLens: mapped.mode === SourceMaps.Mode.Totally, // has 2 modes
                                },
                                normalizeNewName: mapped.patchRename ? beforeCssRename : undefined,
                                applyNewName: mapped.patchRename ? doCssRename : undefined,
                            },
                            mode: mapped.mode,
                            sourceRange: vueRange,
                            mappedRange: tsRange,
                        });
                    }
                }
            }
            return {
                file: file.value,
                sourceMap,
            };
        }
    });
    const formatEmbedded = (0, reactivity_1.computed)(() => {
        if (templateCodeGens.value && formatFile.value) {
            const sourceMap = new sourceMaps_1.EmbeddedFileSourceMap(templateCodeGens.value.formatCodeGen.getMappings(parseMappingSourceRange));
            return {
                file: formatFile.value,
                sourceMap,
            };
        }
    });
    const inlineCssFile = (0, reactivity_1.computed)(() => {
        if (templateCodeGens.value) {
            const file = {
                lsType: 'nonTs',
                fileName: fileName + '.template.css',
                lang: 'css',
                content: templateCodeGens.value.cssCodeGen.getText(),
                capabilities: {
                    diagnostics: false,
                    foldingRanges: false,
                    formatting: false,
                    codeActions: false,
                    documentSymbol: false,
                },
                data: undefined,
                // data: {
                // 	module: false,
                // 	scoped: false,
                // },
            };
            return file;
        }
    });
    const inlineCssEmbedded = (0, reactivity_1.computed)(() => {
        if (templateCodeGens.value && inlineCssFile.value) {
            const sourceMap = new sourceMaps_1.EmbeddedFileSourceMap(templateCodeGens.value.cssCodeGen.getMappings(parseMappingSourceRange));
            return {
                file: inlineCssFile.value,
                sourceMap,
            };
        }
    });
    const file = (0, reactivity_1.ref)();
    const formatFile = (0, reactivity_1.ref)();
    const teleport = (0, reactivity_1.ref)();
    return {
        templateCodeGens,
        embedded,
        file,
        formatFile,
        formatEmbedded,
        teleport,
        inlineCssFile,
        inlineCssEmbedded,
        update, // TODO: cheapComputed
    };
    function parseMappingSourceRange(data, range) {
        if (data?.vueTag === 'style' && data?.vueTagIndex !== undefined) {
            return {
                start: styles.value[data.vueTagIndex].startTagEnd + range.start,
                end: styles.value[data.vueTagIndex].startTagEnd + range.end,
            };
        }
        const templateOffset = template.value?.startTagEnd ?? 0;
        return {
            start: templateOffset + range.start,
            end: templateOffset + range.end,
        };
    }
    function update() {
        const newLang = scriptLang.value === 'js' ? 'jsx' : scriptLang.value === 'ts' ? 'tsx' : scriptLang.value;
        if (data.value?.codeGen.getText() !== file.value?.content || (file.value && file.value.lang !== newLang)) {
            if (data.value) {
                file.value = {
                    lsType: 'template',
                    fileName: fileName + '.__VLS_template.' + newLang,
                    lang: newLang,
                    content: data.value.codeGen.getText(),
                    capabilities: {
                        diagnostics: true,
                        foldingRanges: false,
                        formatting: false,
                        documentSymbol: false,
                        codeActions: false,
                    },
                    data: undefined,
                };
                formatFile.value = templateCodeGens.value ? {
                    lsType: 'nonTs',
                    fileName: fileName + '.__VLS_template.format.' + newLang,
                    lang: newLang,
                    content: templateCodeGens.value.formatCodeGen.getText(),
                    capabilities: {
                        diagnostics: false,
                        foldingRanges: false,
                        formatting: true,
                        documentSymbol: true,
                        codeActions: false,
                    },
                    data: undefined,
                } : undefined;
                const sourceMap = new sourceMaps_1.Teleport();
                for (const mapped of data.value.ctxMappings) {
                    sourceMap.mappings.push(mapped);
                }
                teleport.value = sourceMap;
            }
            else {
                file.value = undefined;
                teleport.value = undefined;
                formatFile.value = undefined;
            }
        }
    }
}
exports.useSfcTemplateScript = useSfcTemplateScript;
function beforeCssRename(newName) {
    return newName.startsWith('.') ? newName.slice(1) : newName;
}
function doCssRename(oldName, newName) {
    return '.' + newName;
}
//# sourceMappingURL=useSfcTemplateScript.js.map