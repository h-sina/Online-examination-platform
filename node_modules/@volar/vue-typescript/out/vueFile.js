"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVueFile = void 0;
const vue_code_gen_1 = require("@volar/vue-code-gen");
const refSugarRanges_1 = require("@volar/vue-code-gen/out/parsers/refSugarRanges");
const scriptRanges_1 = require("@volar/vue-code-gen/out/parsers/scriptRanges");
const scriptSetupRanges_1 = require("@volar/vue-code-gen/out/parsers/scriptSetupRanges");
const compiler_sfc_1 = require("@vue/compiler-sfc");
const reactivity_1 = require("@vue/reactivity");
const useSfcCustomBlocks_1 = require("./use/useSfcCustomBlocks");
const useSfcEntryForTemplateLs_1 = require("./use/useSfcEntryForTemplateLs");
const useSfcScript_1 = require("./use/useSfcScript");
const useSfcScriptGen_1 = require("./use/useSfcScriptGen");
const useSfcStyles_1 = require("./use/useSfcStyles");
const useSfcTemplate_1 = require("./use/useSfcTemplate");
const useSfcTemplateScript_1 = require("./use/useSfcTemplateScript");
const string_1 = require("./utils/string");
const untrack_1 = require("./utils/untrack");
const parseCssVars_1 = require("./utils/parseCssVars");
;
function createVueFile(fileName, _content, _version, plugins, compilerOptions, ts, baseCssModuleType, getCssClasses) {
    // refs
    const content = (0, reactivity_1.ref)('');
    const version = (0, reactivity_1.ref)('');
    const sfc = (0, reactivity_1.reactive)({
        template: null,
        script: null,
        scriptSetup: null,
        styles: [],
        customBlocks: [],
    }) /* avoid Sfc unwrap in .d.ts by reactive */;
    const lastUpdated = {
        template: false,
        script: false,
        scriptSetup: false,
    };
    const templateScriptData = (0, reactivity_1.shallowReactive)({
        projectVersion: undefined,
        context: [],
        contextItems: [],
        components: [],
        componentItems: [],
        props: [],
        setupReturns: [],
    });
    const cssVars = new WeakMap();
    // computeds
    const parsedSfc = (0, reactivity_1.computed)(() => (0, compiler_sfc_1.parse)(content.value, { sourceMap: false, ignoreEmpty: false }));
    // use
    const sfcStyles = (0, useSfcStyles_1.useSfcStyles)(fileName, (0, reactivity_1.computed)(() => sfc.styles));
    const sfcCustomBlocks = (0, useSfcCustomBlocks_1.useSfcCustomBlocks)(fileName, (0, reactivity_1.computed)(() => sfc.customBlocks));
    const sfcTemplate = (0, useSfcTemplate_1.useSfcTemplate)(fileName, (0, reactivity_1.computed)(() => sfc.template));
    const sfcTemplateCompiled = (0, reactivity_1.computed)(() => {
        if (sfc.template) {
            for (const plugin of plugins) {
                const compiledHtml = plugin.compileTemplate?.(sfc.template.content, sfc.template.lang ?? 'html');
                if (compiledHtml) {
                    return {
                        lang: sfc.template.lang ?? 'html',
                        htmlText: compiledHtml.html,
                        htmlToTemplate: compiledHtml.mapping,
                    };
                }
                ;
            }
        }
    });
    const sfcTemplateCompileResult = (0, reactivity_1.computed)(() => {
        if (sfcTemplateCompiled.value) {
            return (0, vue_code_gen_1.compileSFCTemplate)(sfcTemplateCompiled.value.htmlText, compilerOptions.experimentalTemplateCompilerOptions, compilerOptions.experimentalCompatMode ?? 3);
        }
    });
    const sfcScript = (0, useSfcScript_1.useSfcScript)(fileName, (0, reactivity_1.computed)(() => sfc.script), ts);
    const sfcScriptSetup = (0, useSfcScript_1.useSfcScript)(fileName, (0, reactivity_1.computed)(() => sfc.scriptSetup), ts);
    const scriptRanges = (0, reactivity_1.computed)(() => sfcScript.ast.value
        ? (0, scriptRanges_1.parseScriptRanges)(ts, sfcScript.ast.value, !!sfc.scriptSetup, false, false)
        : undefined);
    const scriptSetupRanges = (0, reactivity_1.computed)(() => sfcScriptSetup.ast.value
        ? (0, scriptSetupRanges_1.parseScriptSetupRanges)(ts, sfcScriptSetup.ast.value)
        : undefined);
    const sfcScriptForTemplateLs = (0, useSfcScriptGen_1.useSfcScriptGen)('template', fileName, content, (0, reactivity_1.computed)(() => sfc.script), (0, reactivity_1.computed)(() => sfc.scriptSetup), (0, reactivity_1.computed)(() => scriptRanges.value), (0, reactivity_1.computed)(() => scriptSetupRanges.value), sfcTemplateCompileResult, (0, reactivity_1.computed)(() => sfcStyles.files.value), compilerOptions.experimentalCompatMode === 2, getCssVBindRanges);
    const sfcScriptForScriptLs = (0, useSfcScriptGen_1.useSfcScriptGen)('script', fileName, content, (0, reactivity_1.computed)(() => sfc.script), (0, reactivity_1.computed)(() => sfc.scriptSetup), (0, reactivity_1.computed)(() => scriptRanges.value), (0, reactivity_1.computed)(() => scriptSetupRanges.value), sfcTemplateCompileResult, (0, reactivity_1.computed)(() => sfcStyles.files.value), compilerOptions.experimentalCompatMode === 2, getCssVBindRanges);
    const sfcEntryForTemplateLs = (0, useSfcEntryForTemplateLs_1.useSfcEntryForTemplateLs)(fileName, (0, reactivity_1.computed)(() => sfc.script), (0, reactivity_1.computed)(() => sfc.scriptSetup), (0, reactivity_1.computed)(() => sfc.template), (0, reactivity_1.computed)(() => !!sfcScriptForTemplateLs.fileTs.value), compilerOptions.experimentalCompatMode === 2);
    const sfcTemplateScript = (0, useSfcTemplateScript_1.useSfcTemplateScript)(fileName, (0, reactivity_1.computed)(() => sfc.template), (0, reactivity_1.computed)(() => sfc.scriptSetup), (0, reactivity_1.computed)(() => scriptSetupRanges.value), (0, reactivity_1.computed)(() => sfc.styles), templateScriptData, sfcStyles.files, sfcStyles.embeddeds, sfcTemplateCompiled, sfcTemplateCompileResult, sfcStyles.files, sfcScriptForScriptLs.lang, compilerOptions, baseCssModuleType, getCssVBindRanges, getCssClasses);
    const sfcRefSugarRanges = (0, reactivity_1.computed)(() => (sfcScriptSetup.ast.value ? {
        refs: (0, refSugarRanges_1.parseRefSugarDeclarationRanges)(ts, sfcScriptSetup.ast.value, ['$ref', '$computed', '$shallowRef', '$fromRefs']),
        raws: (0, refSugarRanges_1.parseRefSugarCallRanges)(ts, sfcScriptSetup.ast.value, ['$raw', '$fromRefs']),
    } : undefined));
    // getters
    const teleports = (0, reactivity_1.computed)(() => {
        const _all = [];
        if (sfcTemplateScript.file.value && sfcTemplateScript.teleport.value) {
            _all.push({
                file: sfcTemplateScript.file.value,
                teleport: sfcTemplateScript.teleport.value,
            });
        }
        if (sfcScriptForTemplateLs.file.value && sfcScriptForTemplateLs.teleport.value) {
            _all.push({
                file: sfcScriptForTemplateLs.file.value,
                teleport: sfcScriptForTemplateLs.teleport.value,
            });
        }
        return _all;
    });
    const embeddeds = (0, reactivity_1.computed)(() => {
        const embeddeds = [];
        // template
        embeddeds.push({
            self: sfcTemplate.embedded.value,
            embeddeds: [
                {
                    self: sfcTemplateScript.embedded.value,
                    inheritParentIndent: true,
                    embeddeds: [],
                },
                {
                    self: sfcTemplateScript.formatEmbedded.value,
                    inheritParentIndent: true,
                    embeddeds: [],
                },
                {
                    self: sfcTemplateScript.inlineCssEmbedded.value,
                    inheritParentIndent: true,
                    embeddeds: [],
                },
            ],
        });
        // scripts - format
        embeddeds.push({
            self: sfcScript.embedded.value,
            embeddeds: [],
        });
        embeddeds.push({
            self: sfcScriptSetup.embedded.value,
            embeddeds: [],
        });
        // scripts - script ls
        embeddeds.push({
            self: sfcScriptForScriptLs.embedded.value,
            embeddeds: [],
        });
        // scripts - template ls
        embeddeds.push({
            self: sfcEntryForTemplateLs.embedded.value,
            embeddeds: [],
        });
        embeddeds.push({
            self: sfcScriptForTemplateLs.embedded.value,
            embeddeds: [],
        });
        embeddeds.push({
            self: sfcScriptForTemplateLs.embeddedTs.value,
            embeddeds: [],
        });
        // styles
        for (const style of sfcStyles.embeddeds.value) {
            embeddeds.push({
                self: style,
                embeddeds: [],
            });
        }
        // customBlocks
        for (const customBlock of sfcCustomBlocks.embeddeds.value) {
            embeddeds.push({
                self: customBlock,
                embeddeds: [],
            });
        }
        return embeddeds;
    });
    const allEmbeddeds = (0, reactivity_1.computed)(() => {
        const all = [];
        visitEmbedded(embeddeds.value, embedded => all.push(embedded));
        return all;
        function visitEmbedded(embeddeds, cb) {
            for (const embedded of embeddeds) {
                visitEmbedded(embedded.embeddeds, cb);
                if (embedded.self) {
                    cb(embedded.self);
                }
            }
        }
    });
    update(_content, _version);
    return {
        fileName,
        getContent: (0, untrack_1.untrack)(() => content.value),
        getSfcTemplateLanguageCompiled: (0, untrack_1.untrack)(() => sfcTemplateCompiled.value),
        getSfcVueTemplateCompiled: (0, untrack_1.untrack)(() => sfcTemplateCompileResult.value),
        getVersion: (0, untrack_1.untrack)(() => version.value),
        getTemplateTagNames: (0, untrack_1.untrack)(() => sfcTemplateScript.templateCodeGens.value?.tagNames),
        getTemplateAttrNames: (0, untrack_1.untrack)(() => sfcTemplateScript.templateCodeGens.value?.attrNames),
        update: (0, untrack_1.untrack)(update),
        updateTemplateScript: (0, untrack_1.untrack)(updateTemplateScript),
        getScriptTsFile: (0, untrack_1.untrack)(() => sfcScriptForScriptLs.file.value),
        getEmbeddedTemplate: (0, untrack_1.untrack)(() => sfcTemplate.embedded.value),
        getTemplateScriptData: (0, untrack_1.untrack)(() => templateScriptData),
        getDescriptor: (0, untrack_1.untrack)(() => (0, reactivity_1.unref)(sfc)),
        getScriptAst: (0, untrack_1.untrack)(() => sfcScript.ast.value),
        getScriptSetupAst: (0, untrack_1.untrack)(() => sfcScriptSetup.ast.value),
        getTemplateFormattingScript: (0, untrack_1.untrack)(() => sfcTemplateScript.formatEmbedded.value),
        getSfcRefSugarRanges: (0, untrack_1.untrack)(() => sfcRefSugarRanges.value),
        getEmbeddeds: (0, untrack_1.untrack)(() => embeddeds.value),
        getAllEmbeddeds: (0, untrack_1.untrack)(() => allEmbeddeds.value),
        getLastUpdated: (0, untrack_1.untrack)(() => (0, reactivity_1.unref)(lastUpdated)),
        getScriptSetupRanges: (0, untrack_1.untrack)(() => scriptSetupRanges.value),
        getSfcTemplateDocument: (0, untrack_1.untrack)(() => sfcTemplate.file.value),
        refs: {
            content,
            allEmbeddeds,
            teleports,
            sfcTemplateScript,
            sfcEntryForTemplateLs,
            sfcScriptForScriptLs,
            templateScriptData,
        },
    };
    function update(newContent, newVersion) {
        const scriptLang_1 = sfcScriptForScriptLs.file.value.lang;
        const scriptText_1 = sfcScriptForScriptLs.file.value.content;
        const templateScriptContent = sfcTemplateScript.file.value?.content;
        content.value = newContent;
        version.value = newVersion;
        updateTemplate(parsedSfc.value.descriptor.template);
        updateScript(parsedSfc.value.descriptor.script);
        updateScriptSetup(parsedSfc.value.descriptor.scriptSetup);
        updateStyles(parsedSfc.value.descriptor.styles);
        updateCustomBlocks(parsedSfc.value.descriptor.customBlocks);
        sfcTemplateScript.update(); // TODO
        const scriptLang_2 = sfcScriptForScriptLs.file.value.lang;
        const scriptText_2 = sfcScriptForScriptLs.file.value.content;
        const templateScriptContent_2 = sfcTemplateScript.file.value?.content;
        return {
            scriptContentUpdated: lastUpdated.script || lastUpdated.scriptSetup,
            scriptUpdated: scriptLang_1 !== scriptLang_2 || scriptText_1 !== scriptText_2,
            templateScriptUpdated: templateScriptContent !== templateScriptContent_2,
        };
        function updateTemplate(block) {
            const newData = block ? {
                start: newContent.substring(0, block.loc.start.offset).lastIndexOf('<'),
                end: block.loc.end.offset + newContent.substring(block.loc.end.offset).indexOf('>') + 1,
                startTagEnd: block.loc.start.offset,
                endTagStart: block.loc.end.offset,
                content: block.content,
                lang: block.lang ?? 'html',
            } : null;
            lastUpdated.template = sfc.template?.lang !== newData?.lang
                || sfc.template?.content !== newData?.content;
            if (sfc.template && newData) {
                updateBlock(sfc.template, newData);
            }
            else {
                sfc.template = newData;
            }
        }
        function updateScript(block) {
            const newData = block ? {
                start: newContent.substring(0, block.loc.start.offset).lastIndexOf('<'),
                end: block.loc.end.offset + newContent.substring(block.loc.end.offset).indexOf('>') + 1,
                startTagEnd: block.loc.start.offset,
                endTagStart: block.loc.end.offset,
                content: block.content,
                lang: getValidScriptSyntax(block.lang ?? 'js'),
                src: block.src,
            } : null;
            lastUpdated.script = sfc.script?.lang !== newData?.lang
                || sfc.script?.content !== newData?.content;
            if (sfc.script && newData) {
                updateBlock(sfc.script, newData);
            }
            else {
                sfc.script = newData;
            }
        }
        function updateScriptSetup(block) {
            const newData = block ? {
                start: newContent.substring(0, block.loc.start.offset).lastIndexOf('<'),
                end: block.loc.end.offset + newContent.substring(block.loc.end.offset).indexOf('>') + 1,
                startTagEnd: block.loc.start.offset,
                endTagStart: block.loc.end.offset,
                content: block.content,
                lang: getValidScriptSyntax(block.lang ?? 'js'),
            } : null;
            lastUpdated.scriptSetup = sfc.scriptSetup?.lang !== newData?.lang
                || sfc.scriptSetup?.content !== newData?.content;
            if (sfc.scriptSetup && newData) {
                updateBlock(sfc.scriptSetup, newData);
            }
            else {
                sfc.scriptSetup = newData;
            }
        }
        function updateStyles(blocks) {
            for (let i = 0; i < blocks.length; i++) {
                const block = blocks[i];
                const newData = {
                    start: newContent.substring(0, block.loc.start.offset).lastIndexOf('<'),
                    end: block.loc.end.offset + newContent.substring(block.loc.end.offset).indexOf('>') + 1,
                    startTagEnd: block.loc.start.offset,
                    endTagStart: block.loc.end.offset,
                    content: block.content,
                    lang: block.lang ?? 'css',
                    module: typeof block.module === 'string' ? block.module : block.module ? '$style' : undefined,
                    scoped: !!block.scoped,
                };
                if (sfc.styles.length > i) {
                    updateBlock(sfc.styles[i], newData);
                }
                else {
                    sfc.styles.push(newData);
                }
            }
            while (sfc.styles.length > blocks.length) {
                sfc.styles.pop();
            }
        }
        function updateCustomBlocks(blocks) {
            for (let i = 0; i < blocks.length; i++) {
                const block = blocks[i];
                const newData = {
                    start: newContent.substring(0, block.loc.start.offset).lastIndexOf('<'),
                    end: block.loc.end.offset + newContent.substring(block.loc.end.offset).indexOf('>') + 1,
                    startTagEnd: block.loc.start.offset,
                    endTagStart: block.loc.end.offset,
                    content: block.content,
                    lang: block.lang ?? 'txt',
                    type: block.type,
                };
                if (sfc.customBlocks.length > i) {
                    updateBlock(sfc.customBlocks[i], newData);
                }
                else {
                    sfc.customBlocks.push(newData);
                }
            }
            while (sfc.customBlocks.length > blocks.length) {
                sfc.customBlocks.pop();
            }
        }
        function updateBlock(oldBlock, newBlock) {
            for (let key in newBlock) {
                oldBlock[key] = newBlock[key];
            }
        }
    }
    function updateTemplateScript(templateTsLs, tempalteTsHost) {
        const newVersion = tempalteTsHost.getProjectVersion?.();
        if (templateScriptData.projectVersion === newVersion) {
            return false;
        }
        templateScriptData.projectVersion = newVersion;
        const options = {
            includeCompletionsWithInsertText: true, // if missing, { 'aaa-bbb': any, ccc: any } type only has result ['ccc']
        };
        const file = sfcEntryForTemplateLs.file.value;
        const context = file.content.indexOf(string_1.SearchTexts.Context) >= 0 ? templateTsLs.getCompletionsAtPosition(file.fileName, file.content.indexOf(string_1.SearchTexts.Context), options)?.entries ?? [] : [];
        let components = file.content.indexOf(string_1.SearchTexts.Components) >= 0 ? templateTsLs.getCompletionsAtPosition(file.fileName, file.content.indexOf(string_1.SearchTexts.Components), options)?.entries ?? [] : [];
        const props = file.content.indexOf(string_1.SearchTexts.Props) >= 0 ? templateTsLs.getCompletionsAtPosition(file.fileName, file.content.indexOf(string_1.SearchTexts.Props), options)?.entries ?? [] : [];
        const setupReturns = file.content.indexOf(string_1.SearchTexts.SetupReturns) >= 0 ? templateTsLs.getCompletionsAtPosition(file.fileName, file.content.indexOf(string_1.SearchTexts.SetupReturns), options)?.entries ?? [] : [];
        components = components.filter(entry => {
            return entry.name.indexOf('$') === -1 && !entry.name.startsWith('_');
        });
        const contextNames = context.map(entry => entry.name);
        const componentNames = components.map(entry => entry.name);
        const propNames = props.map(entry => entry.name);
        const setupReturnNames = setupReturns.map(entry => entry.name);
        let dirty = false;
        if (!eqSet(new Set(contextNames), new Set(templateScriptData.context))) {
            templateScriptData.context = contextNames;
            templateScriptData.contextItems = context;
            dirty = true;
        }
        if (!eqSet(new Set(componentNames), new Set(templateScriptData.components))) {
            templateScriptData.components = componentNames;
            templateScriptData.componentItems = components;
            dirty = true;
        }
        if (!eqSet(new Set(propNames), new Set(templateScriptData.props))) {
            templateScriptData.props = propNames;
            dirty = true;
        }
        if (!eqSet(new Set(setupReturnNames), new Set(templateScriptData.setupReturns))) {
            templateScriptData.setupReturns = setupReturnNames;
            dirty = true;
        }
        if (dirty) {
            sfcTemplateScript.update(); // TODO
        }
        return dirty;
    }
    function getCssVBindRanges(embeddedFile) {
        let binds = cssVars.get(embeddedFile);
        if (!binds) {
            binds = [...(0, parseCssVars_1.parseCssVars)(embeddedFile.content)];
            cssVars.set(embeddedFile, binds);
        }
        return binds;
    }
}
exports.createVueFile = createVueFile;
function eqSet(as, bs) {
    if (as.size !== bs.size)
        return false;
    for (const a of as)
        if (!bs.has(a))
            return false;
    return true;
}
const validScriptSyntaxs = ['js', 'jsx', 'ts', 'tsx'];
function getValidScriptSyntax(syntax) {
    if (validScriptSyntaxs.includes(syntax)) {
        return syntax;
    }
    return 'js';
}
//# sourceMappingURL=vueFile.js.map