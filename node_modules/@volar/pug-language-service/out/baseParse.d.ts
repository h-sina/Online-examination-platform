import * as SourceMap from '@volar/source-map';
import { TextDocument } from 'vscode-languageserver-textdocument';
export declare function baseParse(pugCode: string): {
    htmlCode: string;
    pugTextDocument: TextDocument;
    sourceMap: SourceMap.SourceMapBase<{
        isEmptyTagCompletion: boolean;
    } | undefined>;
    error: {
        code: string;
        msg: string;
        line: number;
        column: number;
        filename: string;
    } | undefined;
    ast: Node | undefined;
};
export declare type Node = BlockNode | TagNode | TextNode | CommentNode | BlockCommentNode;
export interface BlockNode {
    type: 'Block';
    nodes: Node[];
    line: number;
}
export interface TagNode {
    type: 'Tag';
    name: string;
    selfClosing: boolean;
    block: BlockNode;
    attrs: {
        name: string;
        val: string | true;
        line: number;
        column: number;
        mustEscape: boolean;
    }[];
    attributeBlocks: {}[];
    isInline: boolean;
    line: number;
    column: number;
}
export interface TextNode {
    type: 'Text';
    val: string;
    line: number;
    column: number;
}
export interface CommentNode {
    type: 'Comment';
    val: string;
    buffer: boolean;
    line: number;
    column: number;
}
export interface BlockCommentNode {
    type: 'BlockComment';
    block: BlockNode;
    val: string;
    buffer: boolean;
    line: number;
    column: number;
}
