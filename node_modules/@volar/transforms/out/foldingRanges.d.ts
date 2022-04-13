import type * as vscode from 'vscode-languageserver-types';
export declare function transform(ranges: vscode.FoldingRange[], getOtherRange: (range: vscode.Range) => vscode.Range | undefined): vscode.FoldingRange[];
