"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVueFiles = void 0;
const reactivity_1 = require("@vue/reactivity");
const path = require("path");
const localTypes = require("./utils/localTypes");
const untrack_1 = require("./utils/untrack");
function createVueFiles() {
    const vueFiles = (0, reactivity_1.shallowReactive)({});
    const all = (0, reactivity_1.computed)(() => Object.values(vueFiles));
    const fileNames = (0, reactivity_1.computed)(() => all.value.map(sourceFile => sourceFile.fileName));
    const embeddedDocumentsMap = (0, reactivity_1.computed)(() => {
        const map = new WeakMap();
        for (const sourceFile of all.value) {
            for (const embedded of sourceFile.refs.allEmbeddeds.value) {
                map.set(embedded.file, sourceFile);
            }
        }
        return map;
    });
    const sourceMapsByFileNameAndLsType = (0, reactivity_1.computed)(() => {
        const maps = {
            nonTs: new Map(),
            script: new Map(),
            template: new Map(),
        };
        for (const sourceFile of all.value) {
            for (const embedded of sourceFile.refs.allEmbeddeds.value) {
                maps[embedded.file.lsType].set(embedded.file.fileName.toLowerCase(), { vueFile: sourceFile, embedded });
            }
        }
        return maps;
    });
    const teleports = {
        template: (0, reactivity_1.computed)(() => {
            const map = new Map();
            for (const key in vueFiles) {
                const sourceFile = vueFiles[key];
                for (const { file, teleport } of sourceFile.refs.teleports.value) {
                    map.set(file.fileName.toLowerCase(), teleport);
                }
            }
            return map;
        }),
        script: (0, reactivity_1.computed)(() => {
            const map = new Map();
            for (const key in vueFiles) {
                const sourceFile = vueFiles[key];
                const embeddedFile = sourceFile.refs.sfcScriptForScriptLs.file.value;
                const sourceMap = sourceFile.refs.sfcScriptForScriptLs.teleport.value;
                map.set(embeddedFile.fileName.toLowerCase(), sourceMap);
            }
            return map;
        }),
    };
    const dirs = (0, reactivity_1.computed)(() => [...new Set(fileNames.value.map(path.dirname))]);
    return {
        get: (0, untrack_1.untrack)((fileName) => vueFiles[fileName.toLocaleLowerCase()]),
        delete: (0, untrack_1.untrack)((fileName) => delete vueFiles[fileName.toLocaleLowerCase()]),
        has: (0, untrack_1.untrack)((fileName) => !!vueFiles[fileName.toLocaleLowerCase()]),
        set: (0, untrack_1.untrack)((fileName, vueFile) => vueFiles[fileName.toLocaleLowerCase()] = vueFile),
        getFileNames: (0, untrack_1.untrack)(() => fileNames.value),
        getDirs: (0, untrack_1.untrack)(() => dirs.value),
        getAll: (0, untrack_1.untrack)(() => all.value),
        getTeleport: (0, untrack_1.untrack)((lsType, fileName) => teleports[lsType].value.get(fileName.toLowerCase())),
        getEmbeddeds: (0, untrack_1.untrack)(function* (lsType) {
            for (const sourceMap of sourceMapsByFileNameAndLsType.value[lsType]) {
                yield sourceMap[1];
            }
        }),
        fromEmbeddedLocation: (0, untrack_1.untrack)(function* (lsType, fileName, start, end, filter, sourceMapFilter) {
            if (fileName.endsWith(`/${localTypes.typesFileName}`))
                return;
            if (end === undefined)
                end = start;
            const mapped = sourceMapsByFileNameAndLsType.value[lsType].get(fileName.toLowerCase());
            if (mapped) {
                if (sourceMapFilter && !sourceMapFilter(mapped.embedded.sourceMap))
                    return;
                for (const vueRange of mapped.embedded.sourceMap.getSourceRanges(start, end, filter)) {
                    yield {
                        fileName: mapped.vueFile.fileName,
                        range: vueRange[0],
                        mapped: mapped,
                        data: vueRange[1],
                    };
                }
            }
            else {
                yield {
                    fileName,
                    range: {
                        start,
                        end,
                    },
                };
            }
        }),
        fromEmbeddedFile: (0, untrack_1.untrack)(function (file) {
            return embeddedDocumentsMap.value.get(file);
        }),
        fromEmbeddedFileName: (0, untrack_1.untrack)(function (lsType, fileName) {
            return sourceMapsByFileNameAndLsType.value[lsType].get(fileName.toLowerCase());
        }),
    };
}
exports.createVueFiles = createVueFiles;
//# sourceMappingURL=vueFiles.js.map