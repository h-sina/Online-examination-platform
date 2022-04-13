"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLineText = exports.getOverlapRange2 = exports.getOverlapRange = exports.getWordRange = exports.isInsideRange = exports.notEmpty = exports.languageIdToSyntax = exports.syntaxToLanguageId = exports.sleep = void 0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.sleep = sleep;
function syntaxToLanguageId(syntax) {
    switch (syntax) {
        case 'js': return 'javascript';
        case 'ts': return 'typescript';
        case 'jsx': return 'javascriptreact';
        case 'tsx': return 'typescriptreact';
        case 'pug': return 'jade';
    }
    return syntax;
}
exports.syntaxToLanguageId = syntaxToLanguageId;
function languageIdToSyntax(languageId) {
    switch (languageId) {
        case 'javascript': return 'js';
        case 'typescript': return 'ts';
        case 'javascriptreact': return 'jsx';
        case 'typescriptreact': return 'tsx';
        case 'jade': return 'pug';
    }
    return languageId;
}
exports.languageIdToSyntax = languageIdToSyntax;
function notEmpty(value) {
    return value !== null && value !== undefined;
}
exports.notEmpty = notEmpty;
function isInsideRange(parent, child) {
    if (child.start.line < parent.start.line)
        return false;
    if (child.end.line > parent.end.line)
        return false;
    if (child.start.line === parent.start.line && child.start.character < parent.start.character)
        return false;
    if (child.end.line === parent.end.line && child.end.character > parent.end.character)
        return false;
    return true;
}
exports.isInsideRange = isInsideRange;
function getWordRange(wordPattern, position, document) {
    const lineStart = {
        line: position.line,
        character: 0,
    };
    const lineEnd = {
        line: position.line + 1,
        character: 0,
    };
    const offset = document.offsetAt(position);
    const lineStartOffset = document.offsetAt(lineStart);
    const lineText = document.getText({ start: lineStart, end: lineEnd });
    for (const match of lineText.matchAll(wordPattern)) {
        if (match.index === undefined)
            continue;
        const matchStart = match.index + lineStartOffset;
        const matchEnd = matchStart + match[0].length;
        if (offset >= matchStart && offset <= matchEnd) {
            return {
                start: document.positionAt(matchStart),
                end: document.positionAt(matchEnd),
            };
        }
    }
    return undefined;
}
exports.getWordRange = getWordRange;
function getOverlapRange(range1, range2) {
    const start = {
        line: Math.max(range1.start.line, range2.start.line),
        character: range1.start.line === range2.start.line ? Math.max(range1.start.character, range2.start.character) : range1.start.line > range2.start.line ? range1.start.character : range2.start.character,
    };
    const end = {
        line: Math.min(range1.end.line, range2.end.line),
        character: range1.end.line === range2.end.line ? Math.min(range1.end.character, range2.end.character) : range1.end.line < range2.end.line ? range1.end.character : range2.end.character,
    };
    if (start.line > end.line || (start.line === end.line && start.character > end.character))
        return undefined;
    return {
        start,
        end,
    };
}
exports.getOverlapRange = getOverlapRange;
function getOverlapRange2(range1, range2) {
    const start = Math.max(range1.start, range2.start);
    const end = Math.min(range1.end, range2.end);
    if (start > end)
        return undefined;
    return {
        start,
        end,
    };
}
exports.getOverlapRange2 = getOverlapRange2;
function getLineText(document, line) {
    const text = document.getText({
        start: { line: line, character: 0 },
        end: { line: line + 1, character: 0 },
    });
    return text.slice(0, -1);
}
exports.getLineText = getLineText;
//# sourceMappingURL=common.js.map