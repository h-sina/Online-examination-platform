import type * as vscode from 'vscode-languageserver-types';
export declare function transform<T extends vscode.SelectionRange>(locations: T[], getOtherRange: (range: vscode.Range) => vscode.Range | undefined): T[];
