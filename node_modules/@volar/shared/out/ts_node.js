"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeScriptVersion = exports.getVscodeTypescriptLocalizedPath = exports.getVscodeTypescriptPath = exports.findTypescriptLocalizedPathInLib = exports.findTypescriptModulePathInLib = exports.getWorkspaceTypescriptLocalizedPath = exports.getWorkspaceTypescriptPath = void 0;
const fs = require("fs");
const path = require("upath");
function getWorkspaceTypescriptPath(tsdk, workspaceFolderFsPaths) {
    if (path.isAbsolute(tsdk)) {
        const tsPath = findTypescriptModulePathInLib(tsdk);
        if (tsPath) {
            return tsPath;
        }
    }
    else {
        for (const folder of workspaceFolderFsPaths) {
            const tsPath = findTypescriptModulePathInLib(path.join(folder, tsdk));
            if (tsPath) {
                return tsPath;
            }
        }
    }
}
exports.getWorkspaceTypescriptPath = getWorkspaceTypescriptPath;
function getWorkspaceTypescriptLocalizedPath(tsdk, lang, workspaceFolderFsPaths) {
    if (path.isAbsolute(tsdk)) {
        const tsPath = findTypescriptLocalizedPathInLib(tsdk, lang);
        if (tsPath) {
            return tsPath;
        }
    }
    else {
        for (const folder of workspaceFolderFsPaths) {
            const tsPath = findTypescriptLocalizedPathInLib(path.join(folder, tsdk), lang);
            if (tsPath) {
                return tsPath;
            }
        }
    }
}
exports.getWorkspaceTypescriptLocalizedPath = getWorkspaceTypescriptLocalizedPath;
function findTypescriptModulePathInLib(lib) {
    const tsserverlibrary = path.join(lib, 'tsserverlibrary.js');
    const typescript = path.join(lib, 'typescript.js');
    const tsserver = path.join(lib, 'tsserver.js');
    if (fs.existsSync(tsserverlibrary)) {
        return tsserverlibrary;
    }
    if (fs.existsSync(typescript)) {
        return typescript;
    }
    if (fs.existsSync(tsserver)) {
        return tsserver;
    }
}
exports.findTypescriptModulePathInLib = findTypescriptModulePathInLib;
function findTypescriptLocalizedPathInLib(lib, lang) {
    const localized = path.join(lib, lang, 'diagnosticMessages.generated.json');
    if (fs.existsSync(localized)) {
        return localized;
    }
}
exports.findTypescriptLocalizedPathInLib = findTypescriptLocalizedPathInLib;
function getVscodeTypescriptPath(appRoot) {
    return path.join(appRoot, 'extensions', 'node_modules', 'typescript', 'lib', 'typescript.js');
}
exports.getVscodeTypescriptPath = getVscodeTypescriptPath;
function getVscodeTypescriptLocalizedPath(appRoot, lang) {
    const tsPath = path.join(appRoot, 'extensions', 'node_modules', 'typescript', 'lib', lang, 'diagnosticMessages.generated.json');
    if (fs.existsSync(tsPath)) {
        return tsPath;
    }
}
exports.getVscodeTypescriptLocalizedPath = getVscodeTypescriptLocalizedPath;
function getTypeScriptVersion(serverPath) {
    if (!fs.existsSync(serverPath)) {
        return undefined;
    }
    const p = serverPath.split(path.sep);
    if (p.length <= 2) {
        return undefined;
    }
    const p2 = p.slice(0, -2);
    const modulePath = p2.join(path.sep);
    let fileName = path.join(modulePath, 'package.json');
    if (!fs.existsSync(fileName)) {
        // Special case for ts dev versions
        if (path.basename(modulePath) === 'built') {
            fileName = path.join(modulePath, '..', 'package.json');
        }
    }
    if (!fs.existsSync(fileName)) {
        return undefined;
    }
    const contents = fs.readFileSync(fileName).toString();
    let desc = null;
    try {
        desc = JSON.parse(contents);
    }
    catch (err) {
        return undefined;
    }
    if (!desc || !desc.version) {
        return undefined;
    }
    return desc.version;
}
exports.getTypeScriptVersion = getTypeScriptVersion;
//# sourceMappingURL=ts_node.js.map