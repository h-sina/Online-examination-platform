"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
function transform(ranges, getOtherRange) {
    const result = [];
    for (const range of ranges) {
        const vueRange = getOtherRange({
            start: { line: range.startLine, character: range.startCharacter ?? 0 },
            end: { line: range.endLine, character: range.endCharacter ?? 0 },
        });
        if (vueRange) {
            range.startLine = vueRange.start.line;
            range.endLine = vueRange.end.line;
            if (range.startCharacter !== undefined)
                range.startCharacter = vueRange.start.character;
            if (range.endCharacter !== undefined)
                range.endCharacter = vueRange.end.character;
            result.push(range);
        }
    }
    return result;
}
exports.transform = transform;
//# sourceMappingURL=foldingRanges.js.map