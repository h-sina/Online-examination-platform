"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCssVars = void 0;
// https://github.com/vuejs/core/blob/main/packages/compiler-sfc/src/cssVars.ts#L47-L61
function* parseCssVars(styleContent) {
    const reg = /\bv-bind\(\s*(?:'([^']+)'|"([^"]+)"|([^'"][^)]*))\s*\)/g;
    const matchs = styleContent.matchAll(reg);
    for (const match of matchs) {
        if (match.index !== undefined) {
            const matchText = match[1] ?? match[2] ?? match[3];
            if (matchText !== undefined) {
                const offset = match.index + styleContent.slice(match.index).indexOf(matchText);
                yield { start: offset, end: offset + matchText.length };
            }
        }
    }
}
exports.parseCssVars = parseCssVars;
//# sourceMappingURL=parseCssVars.js.map