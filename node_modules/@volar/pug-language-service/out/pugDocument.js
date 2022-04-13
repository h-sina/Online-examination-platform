"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceMap = exports.register = void 0;
const source_map_1 = require("@volar/source-map");
const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
const baseParse_1 = require("./baseParse");
function register(htmlLs) {
    return (pugCode) => {
        const parsed = (0, baseParse_1.baseParse)(pugCode);
        const htmlTextDocument = vscode_languageserver_textdocument_1.TextDocument.create('foo.html', 'html', 0, parsed.htmlCode);
        const sourceMap = new SourceMap(parsed.pugTextDocument, htmlTextDocument, parsed.sourceMap.mappings);
        const htmlDocument = htmlLs.parseHTMLDocument(htmlTextDocument);
        return {
            pugTextDocument: parsed.pugTextDocument,
            htmlTextDocument,
            htmlDocument,
            sourceMap,
            error: parsed.error,
            ast: parsed.ast,
        };
    };
}
exports.register = register;
// TODO: reuse from vueDocuments.ts
class SourceMap extends source_map_1.SourceMapBase {
    constructor(sourceDocument, mappedDocument, _mappings) {
        super(_mappings);
        this.sourceDocument = sourceDocument;
        this.mappedDocument = mappedDocument;
        this._mappings = _mappings;
    }
    getSourceRange(start, end, filter) {
        for (const mapped of this.getRanges(start, end ?? start, false, filter)) {
            return mapped;
        }
    }
    getMappedRange(start, end, filter) {
        for (const mapped of this.getRanges(start, end ?? start, true, filter)) {
            return mapped;
        }
    }
    getSourceRanges(start, end, filter) {
        return this.getRanges(start, end ?? start, false, filter);
    }
    getMappedRanges(start, end, filter) {
        return this.getRanges(start, end ?? start, true, filter);
    }
    *getRanges(start, end, sourceToTarget, filter) {
        const startIsNumber = typeof start === 'number';
        const endIsNumber = typeof end === 'number';
        const toDoc = sourceToTarget ? this.mappedDocument : this.sourceDocument;
        const fromDoc = sourceToTarget ? this.sourceDocument : this.mappedDocument;
        const startOffset = startIsNumber ? start : fromDoc.offsetAt(start);
        const endOffset = endIsNumber ? end : fromDoc.offsetAt(end);
        for (const mapped of super.getRanges(startOffset, endOffset, sourceToTarget, filter)) {
            yield getMapped(mapped);
        }
        function getMapped(mapped) {
            if (startIsNumber) {
                return mapped;
            }
            return [{
                    start: toDoc.positionAt(mapped[0].start),
                    end: toDoc.positionAt(mapped[0].end),
                }, mapped[1]];
        }
    }
}
exports.SourceMap = SourceMap;
//# sourceMappingURL=pugDocument.js.map