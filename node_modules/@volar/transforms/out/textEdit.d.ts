import * as vscode from 'vscode-languageserver-types';
export declare function transform<T extends vscode.TextEdit | vscode.InsertReplaceEdit>(textEdit: T, getOtherRange: (range: vscode.Range) => vscode.Range | undefined): T | undefined;
