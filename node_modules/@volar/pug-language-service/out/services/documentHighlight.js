"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const transforms_1 = require("@volar/transforms");
function register(htmlLs) {
    return (pugDoc, pos) => {
        const htmlRange = pugDoc.sourceMap.getMappedRange(pos, pos, data => !data?.isEmptyTagCompletion)?.[0];
        if (!htmlRange)
            return;
        const htmlResult = htmlLs.findDocumentHighlights(pugDoc.sourceMap.mappedDocument, htmlRange.start, pugDoc.htmlDocument);
        return (0, transforms_1.transformLocations)(htmlResult, htmlRange => pugDoc.sourceMap.getSourceRange(htmlRange.start, htmlRange.end)?.[0]);
    };
}
exports.register = register;
//# sourceMappingURL=documentHighlight.js.map