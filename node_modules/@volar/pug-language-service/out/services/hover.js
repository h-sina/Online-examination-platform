"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const transforms_1 = require("@volar/transforms");
function register(htmlLs) {
    return (docDoc, pos, options) => {
        const htmlRange = docDoc.sourceMap.getMappedRange(pos, pos, data => !data?.isEmptyTagCompletion)?.[0];
        if (!htmlRange)
            return;
        const htmlResult = htmlLs.doHover(docDoc.sourceMap.mappedDocument, htmlRange.start, docDoc.htmlDocument, options);
        if (!htmlResult)
            return;
        return (0, transforms_1.transformHover)(htmlResult, htmlRange => docDoc.sourceMap.getSourceRange(htmlRange.start, htmlRange.end)?.[0]);
    };
}
exports.register = register;
//# sourceMappingURL=hover.js.map