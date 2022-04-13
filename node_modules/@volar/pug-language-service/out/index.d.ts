import type * as html from 'vscode-html-languageservice';
export { PugDocument } from './pugDocument';
export { baseParse } from './baseParse';
export interface LanguageService extends ReturnType<typeof getLanguageService> {
}
export declare function getLanguageService(htmlLs: html.LanguageService): {
    parsePugDocument: (pugCode: string) => {
        pugTextDocument: html.TextDocument;
        htmlTextDocument: html.TextDocument;
        htmlDocument: html.HTMLDocument;
        sourceMap: import("./pugDocument").SourceMap<{
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
    doComplete: (pugDoc: import("./pugDocument").PugDocument, pos: html.Position, documentContext: html.DocumentContext, options?: html.CompletionConfiguration | undefined) => Promise<html.CompletionList | undefined>;
    findDocumentHighlights: (pugDoc: import("./pugDocument").PugDocument, pos: html.Position) => html.DocumentHighlight[] | undefined;
    findDocumentLinks: (pugDoc: import("./pugDocument").PugDocument, docContext: html.DocumentContext) => html.DocumentLink[];
    findDocumentSymbols: (pugDoc: import("./pugDocument").PugDocument) => html.SymbolInformation[];
    doHover: (docDoc: import("./pugDocument").PugDocument, pos: html.Position, options?: html.HoverSettings | undefined) => html.Hover | undefined;
    createScanner: (pugDoc: import("./pugDocument").PugDocument, initialOffset?: number) => html.Scanner | undefined;
    getSelectionRanges: (pugDoc: import("./pugDocument").PugDocument, posArr: html.Position[]) => html.SelectionRange[];
    getFoldingRanges: (pugDoc: import("./pugDocument").PugDocument) => html.FoldingRange[];
};
