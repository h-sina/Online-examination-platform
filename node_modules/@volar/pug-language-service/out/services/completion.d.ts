import type * as html from 'vscode-html-languageservice';
import type { PugDocument } from '../pugDocument';
export declare function register(htmlLs: html.LanguageService): (pugDoc: PugDocument, pos: html.Position, documentContext: html.DocumentContext, options?: html.CompletionConfiguration | undefined) => Promise<html.CompletionList | undefined>;
