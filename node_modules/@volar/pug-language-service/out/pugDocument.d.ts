import { SourceMapBase, Mapping } from '@volar/source-map';
import { TextDocument } from 'vscode-languageserver-textdocument';
import type * as html from 'vscode-html-languageservice';
import * as vscode from 'vscode-languageserver-types';
export interface PugDocument extends ReturnType<ReturnType<typeof register>> {
}
export declare function register(htmlLs: html.LanguageService): (pugCode: string) => {
    pugTextDocument: TextDocument;
    htmlTextDocument: TextDocument;
    htmlDocument: html.HTMLDocument;
    sourceMap: SourceMap<{
        isEmptyTagCompletion: boolean;
    } | undefined>;
    error: {
        code: string;
        msg: string;
        line: number;
        column: number;
        filename: string;
    } | undefined;
    ast: import("./baseParse").Node | undefined;
};
export declare class SourceMap<Data = undefined> extends SourceMapBase<Data> {
    sourceDocument: TextDocument;
    mappedDocument: TextDocument;
    _mappings?: Mapping<Data>[] | undefined;
    constructor(sourceDocument: TextDocument, mappedDocument: TextDocument, _mappings?: Mapping<Data>[] | undefined);
    getSourceRange<T extends number | vscode.Position>(start: T, end?: T, filter?: (data: Data) => boolean): [{
        start: T;
        end: T;
    }, Data] | undefined;
    getMappedRange<T extends number | vscode.Position>(start: T, end?: T, filter?: (data: Data) => boolean): [{
        start: T;
        end: T;
    }, Data] | undefined;
    getSourceRanges<T extends number | vscode.Position>(start: T, end?: T, filter?: (data: Data) => boolean): Generator<[{
        start: T;
        end: T;
    }, Data], void, unknown>;
    getMappedRanges<T extends number | vscode.Position>(start: T, end?: T, filter?: (data: Data) => boolean): Generator<[{
        start: T;
        end: T;
    }, Data], void, unknown>;
    protected getRanges<T extends number | vscode.Position>(start: T, end: T, sourceToTarget: boolean, filter?: (data: Data) => boolean): Generator<[{
        start: T;
        end: T;
    }, Data], void, unknown>;
}
