export declare function getWorkspaceTypescriptPath(tsdk: string, workspaceFolderFsPaths: string[]): string | undefined;
export declare function getWorkspaceTypescriptLocalizedPath(tsdk: string, lang: string, workspaceFolderFsPaths: string[]): string | undefined;
export declare function findTypescriptModulePathInLib(lib: string): string | undefined;
export declare function findTypescriptLocalizedPathInLib(lib: string, lang: string): string | undefined;
export declare function getVscodeTypescriptPath(appRoot: string): string;
export declare function getVscodeTypescriptLocalizedPath(appRoot: string, lang: string): string | undefined;
export declare function getTypeScriptVersion(serverPath: string): string | undefined;
