import type * as vscode from 'vscode-languageserver-types';
export declare function transform<T extends vscode.SymbolInformation>(locations: T[], getOtherLocation: (location: vscode.Location) => vscode.Location | undefined): T[];
