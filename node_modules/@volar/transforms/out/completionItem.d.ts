import type * as vscode from 'vscode-languageserver-types';
export declare function transform<T extends vscode.CompletionItem>(item: T, getOtherRange: (range: vscode.Range) => vscode.Range | undefined): T;
