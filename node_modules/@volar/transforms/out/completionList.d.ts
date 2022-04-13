import type * as vscode from 'vscode-languageserver-types';
export declare function transform<T extends vscode.CompletionList>(completionList: T, getOtherRange: (range: vscode.Range) => vscode.Range | undefined): T;
