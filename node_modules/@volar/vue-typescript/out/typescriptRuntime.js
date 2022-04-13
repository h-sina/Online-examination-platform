"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypeScriptRuntime = void 0;
const path = require("path");
const html_1 = require("./plugins/html");
const pug_1 = require("./plugins/pug");
const localTypes = require("./utils/localTypes");
const ts_1 = require("./utils/ts");
const vueFile_1 = require("./vueFile");
const vueFiles_1 = require("./vueFiles");
function createTypeScriptRuntime(options) {
    const { typescript: ts } = options;
    const isVue2 = options.vueLsHost.getVueCompilationSettings?.().experimentalCompatMode === 2;
    let vueProjectVersion;
    let scriptContentVersion = 0; // only update by `<script>` / `<script setup>` / *.ts content
    let scriptProjectVersion = 0; // update by script LS virtual files / *.ts
    let templateProjectVersion = 0;
    let lastScriptProjectVersionWhenTemplateProjectVersionUpdate = -1;
    const vueFiles = (0, vueFiles_1.createVueFiles)();
    const templateScriptUpdateFileNames = new Set();
    const initProgressCallback = [];
    const plugins = [
        (0, html_1.default)(),
        (0, pug_1.default)(),
    ];
    const templateTsHost = options.vueCompilerOptions.experimentalDisableTemplateSupport ? undefined : createTsLsHost('template');
    const scriptTsHost = createTsLsHost('script');
    const templateTsLsRaw = templateTsHost ? ts.createLanguageService(templateTsHost) : undefined;
    const scriptTsLsRaw = ts.createLanguageService(scriptTsHost);
    if (templateTsHost && templateTsLsRaw) {
        (0, ts_1.injectCacheLogicToLanguageServiceHost)(ts, templateTsHost, templateTsLsRaw);
    }
    (0, ts_1.injectCacheLogicToLanguageServiceHost)(ts, scriptTsHost, scriptTsLsRaw);
    const localTypesScript = ts.ScriptSnapshot.fromString(localTypes.getTypesCode(isVue2));
    return {
        vueLsHost: options.vueLsHost,
        vueFiles,
        getTsLs: (lsType) => lsType === 'template' ? templateTsLsRaw : scriptTsLsRaw,
        getTsLsHost: (lsType) => lsType === 'template' ? templateTsHost : scriptTsHost,
        update,
        getScriptContentVersion: () => scriptContentVersion,
        dispose: () => {
            scriptTsLsRaw.dispose();
            templateTsLsRaw?.dispose();
        },
        onInitProgress(cb) {
            initProgressCallback.push(cb);
        },
        getLocalTypesFiles: (lsType) => {
            const fileNames = getLocalTypesFiles(lsType);
            const code = localTypes.getTypesCode(isVue2);
            return {
                fileNames,
                code,
            };
        },
    };
    function getLocalTypesFiles(lsType) {
        if (lsType === 'script')
            return [];
        return vueFiles.getDirs().map(dir => path.join(dir, localTypes.typesFileName));
    }
    function update(shouldUpdateTemplateScript) {
        const newVueProjectVersion = options.vueLsHost.getVueProjectVersion?.();
        if (newVueProjectVersion === undefined || newVueProjectVersion !== vueProjectVersion) {
            vueProjectVersion = newVueProjectVersion;
            const nowFileNames = new Set([...options.vueLsHost.getScriptFileNames()].filter(file => file.endsWith('.vue')));
            const fileNamesToRemove = [];
            const fileNamesToCreate = [];
            const fileNamesToUpdate = [];
            for (const vueFile of vueFiles.getAll()) {
                if (!nowFileNames.has(vueFile.fileName) && !options.vueLsHost.fileExists?.(vueFile.fileName)) {
                    // delete
                    fileNamesToRemove.push(vueFile.fileName);
                }
                else {
                    // update
                    const newVersion = options.vueLsHost.getScriptVersion(vueFile.fileName);
                    if (vueFile.getVersion() !== newVersion) {
                        fileNamesToUpdate.push(vueFile.fileName);
                    }
                }
            }
            for (const nowFileName of nowFileNames) {
                if (!vueFiles.get(nowFileName)) {
                    // add
                    fileNamesToCreate.push(nowFileName);
                }
            }
            // if (tsFileChanged) {
            // 	scriptContentVersion++;
            // 	scriptProjectVersion++;
            // 	templateProjectVersion++;
            // 	// TODO: template global properties can't update by .d.ts definition
            // 	// wait for https://github.com/johnsoncodehk/volar/issues/455
            // 	// updates.length = 0;
            // 	// for (const fileName of oldFiles) {
            // 	// 	if (newFiles.has(fileName)) {
            // 	// 		if (fileName.endsWith('.vue')) {
            // 	// 			updates.push(fileName);
            // 	// 		}
            // 	// 	}
            // 	// }
            // }
            const finalUpdateFileNames = fileNamesToCreate.concat(fileNamesToUpdate);
            if (fileNamesToRemove.length) {
                unsetSourceFiles(fileNamesToRemove);
            }
            if (finalUpdateFileNames.length) {
                updateSourceFiles(finalUpdateFileNames, shouldUpdateTemplateScript);
            }
        }
        else if (shouldUpdateTemplateScript && templateScriptUpdateFileNames.size) {
            updateSourceFiles([], shouldUpdateTemplateScript);
        }
    }
    function createTsLsHost(lsType) {
        const scriptSnapshots = new Map();
        const fileVersions = new WeakMap();
        const _tsHost = {
            fileExists: options.vueLsHost.fileExists
                ? fileName => {
                    // .vue.js -> .vue
                    // .vue.ts -> .vue
                    // .vue.d.ts (never)
                    const fileNameTrim = fileName.substring(0, fileName.lastIndexOf('.'));
                    if (fileNameTrim.endsWith('.vue')) {
                        const vueFile = vueFiles.get(fileNameTrim);
                        if (!vueFile) {
                            const fileExists = !!options.vueLsHost.fileExists?.(fileNameTrim);
                            if (fileExists) {
                                updateSourceFiles([fileNameTrim], false); // create virtual files
                            }
                        }
                        return !!vueFiles.fromEmbeddedFileName(lsType, fileName);
                    }
                    else {
                        return !!options.vueLsHost.fileExists?.(fileName);
                    }
                }
                : undefined,
            getProjectVersion: () => {
                return options.vueLsHost.getProjectVersion?.() + '-' + (lsType === 'template' ? templateProjectVersion : scriptProjectVersion).toString();
            },
            getScriptFileNames,
            getScriptVersion,
            getScriptSnapshot,
            readDirectory: (_path, extensions, exclude, include, depth) => {
                const result = options.vueLsHost.readDirectory?.(_path, extensions, exclude, include, depth) ?? [];
                for (const vuePath of vueFiles.getFileNames()) {
                    const vuePath2 = path.join(_path, path.basename(vuePath));
                    if (path.relative(_path.toLowerCase(), vuePath.toLowerCase()).startsWith('..')) {
                        continue;
                    }
                    if (!depth && vuePath.toLowerCase() === vuePath2.toLowerCase()) {
                        result.push(vuePath2);
                    }
                    else if (depth) {
                        result.push(vuePath2); // TODO: depth num
                    }
                }
                return result;
            },
            getScriptKind(fileName) {
                switch (path.extname(fileName)) {
                    case '.vue': return ts.ScriptKind.TSX; // can't use External, Unknown
                    case '.js': return ts.ScriptKind.JS;
                    case '.jsx': return ts.ScriptKind.JSX;
                    case '.ts': return ts.ScriptKind.TS;
                    case '.tsx': return ts.ScriptKind.TSX;
                    case '.json': return ts.ScriptKind.JSON;
                    default: return ts.ScriptKind.Unknown;
                }
            },
        };
        if (lsType === 'template') {
            _tsHost.getCompilationSettings = () => ({
                ...options.vueLsHost.getCompilationSettings(),
                jsx: ts.JsxEmit.Preserve,
            });
        }
        const tsHost = new Proxy(_tsHost, {
            get: (target, property) => {
                return target[property] || options.vueLsHost[property];
            },
        });
        return tsHost;
        function getScriptFileNames() {
            const tsFileNames = getLocalTypesFiles(lsType);
            for (const mapped of vueFiles.getEmbeddeds(lsType)) {
                tsFileNames.push(mapped.embedded.file.fileName); // virtual .ts
            }
            for (const fileName of options.vueLsHost.getScriptFileNames()) {
                if (options.isTsPlugin) {
                    tsFileNames.push(fileName); // .vue + .ts
                }
                else if (!fileName.endsWith('.vue')) {
                    tsFileNames.push(fileName); // .ts
                }
            }
            return tsFileNames;
        }
        function getScriptVersion(fileName) {
            const basename = path.basename(fileName);
            if (basename === localTypes.typesFileName) {
                return '';
            }
            let mapped = vueFiles.fromEmbeddedFileName(lsType, fileName);
            if (mapped) {
                if (fileVersions.has(mapped.embedded.file)) {
                    return fileVersions.get(mapped.embedded.file);
                }
                else {
                    let version = ts.sys.createHash?.(mapped.embedded.file.content) ?? mapped.embedded.file.content;
                    if (options.isVueTsc) {
                        // fix https://github.com/johnsoncodehk/volar/issues/1082
                        version = mapped.vueFile.getVersion() + ':' + version;
                    }
                    fileVersions.set(mapped.embedded.file, version);
                    return version;
                }
            }
            return options.vueLsHost.getScriptVersion(fileName);
        }
        function getScriptSnapshot(fileName) {
            const version = getScriptVersion(fileName);
            const cache = scriptSnapshots.get(fileName.toLowerCase());
            if (cache && cache[0] === version) {
                return cache[1];
            }
            const basename = path.basename(fileName);
            if (basename === localTypes.typesFileName) {
                return localTypesScript;
            }
            const mapped = vueFiles.fromEmbeddedFileName(lsType, fileName);
            if (mapped) {
                const text = mapped.embedded.file.content;
                const snapshot = ts.ScriptSnapshot.fromString(text);
                scriptSnapshots.set(fileName.toLowerCase(), [version, snapshot]);
                return snapshot;
            }
            let tsScript = options.vueLsHost.getScriptSnapshot(fileName);
            if (tsScript) {
                if (lsType === 'template' && basename === 'runtime-dom.d.ts') {
                    // allow arbitrary attributes
                    let tsScriptText = tsScript.getText(0, tsScript.getLength());
                    tsScriptText = tsScriptText.replace('type ReservedProps = {', 'type ReservedProps = { [name: string]: any');
                    tsScript = ts.ScriptSnapshot.fromString(tsScriptText);
                }
                scriptSnapshots.set(fileName.toLowerCase(), [version, tsScript]);
                return tsScript;
            }
        }
    }
    function updateSourceFiles(fileNames, shouldUpdateTemplateScript) {
        let vueScriptContentsUpdate = false;
        let vueScriptsUpdated = false;
        let templateScriptUpdated = false;
        if (shouldUpdateTemplateScript) {
            for (const cb of initProgressCallback) {
                cb(0);
            }
        }
        for (const fileName of fileNames) {
            const sourceFile = vueFiles.get(fileName);
            const scriptSnapshot = options.vueLsHost.getScriptSnapshot(fileName);
            if (!scriptSnapshot) {
                continue;
            }
            const scriptText = scriptSnapshot.getText(0, scriptSnapshot.getLength());
            const scriptVersion = options.vueLsHost.getScriptVersion(fileName);
            if (!sourceFile) {
                vueFiles.set(fileName, (0, vueFile_1.createVueFile)(fileName, scriptText, scriptVersion, plugins, options.vueCompilerOptions, options.typescript, options.baseCssModuleType, options.getCssClasses));
                vueScriptContentsUpdate = true;
                vueScriptsUpdated = true;
            }
            else {
                const updates = sourceFile.update(scriptText, scriptVersion);
                if (updates.scriptContentUpdated) {
                    vueScriptContentsUpdate = true;
                }
                if (updates.scriptUpdated) {
                    vueScriptsUpdated = true;
                }
                if (updates.templateScriptUpdated) {
                    templateScriptUpdated = true;
                }
            }
            templateScriptUpdateFileNames.add(fileName);
        }
        if (vueScriptContentsUpdate) {
            scriptContentVersion++;
        }
        if (vueScriptsUpdated) {
            scriptProjectVersion++;
            templateProjectVersion++;
        }
        if (shouldUpdateTemplateScript && lastScriptProjectVersionWhenTemplateProjectVersionUpdate !== scriptContentVersion) {
            lastScriptProjectVersionWhenTemplateProjectVersionUpdate = scriptContentVersion;
            let currentNums = 0;
            for (const fileName of templateScriptUpdateFileNames) {
                if (templateTsLsRaw && templateTsHost && vueFiles.get(fileName)?.updateTemplateScript(templateTsLsRaw, templateTsHost)) {
                    templateScriptUpdated = true;
                }
                currentNums++;
                for (const cb of initProgressCallback) {
                    cb(currentNums / templateScriptUpdateFileNames.size);
                }
            }
            templateScriptUpdateFileNames.clear();
            for (const cb of initProgressCallback) {
                cb(1);
            }
            initProgressCallback.length = 0;
        }
        if (templateScriptUpdated) {
            templateProjectVersion++;
        }
    }
    function unsetSourceFiles(uris) {
        let updated = false;
        for (const uri of uris) {
            if (vueFiles.delete(uri)) {
                updated = true;
            }
        }
        if (updated) {
            scriptContentVersion++;
            scriptProjectVersion++;
            templateProjectVersion++;
        }
    }
}
exports.createTypeScriptRuntime = createTypeScriptRuntime;
//# sourceMappingURL=typescriptRuntime.js.map