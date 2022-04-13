import type * as vscode from 'vscode-languageserver-types';
export declare function transform<T extends vscode.SelectionRange>(location: T, getOtherRange: (range: vscode.Range) => vscode.Range | undefined): T | undefined;
