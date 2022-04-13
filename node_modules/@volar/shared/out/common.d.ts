import type * as vscode from 'vscode-languageserver-types';
import type { TextDocument } from 'vscode-languageserver-textdocument';
export declare function sleep(ms: number): Promise<unknown>;
export declare function syntaxToLanguageId(syntax: string): string;
export declare function languageIdToSyntax(languageId: string): string;
export declare function notEmpty<T>(value: T | null | undefined): value is T;
export declare function isInsideRange(parent: vscode.Range, child: vscode.Range): boolean;
export declare function getWordRange(wordPattern: RegExp, position: vscode.Position, document: TextDocument): vscode.Range | undefined;
export declare function getOverlapRange(range1: vscode.Range, range2: vscode.Range): vscode.Range | undefined;
export declare function getOverlapRange2(range1: {
    start: number;
    end: number;
}, range2: {
    start: number;
    end: number;
}): {
    start: number;
    end: number;
} | undefined;
export declare function getLineText(document: TextDocument, line: number): string;
