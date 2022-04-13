"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pug = require("@volar/pug-language-service");
function default_1() {
    return {
        compileTemplate(template, lang) {
            if (lang === 'pug') {
                const pugDoc = pug.baseParse(template);
                if (pugDoc) {
                    return {
                        html: pugDoc.htmlCode,
                        mapping: (htmlStart, htmlEnd) => {
                            const pugRange = pugDoc.sourceMap.getSourceRange(htmlStart, htmlEnd, data => !data?.isEmptyTagCompletion)?.[0];
                            if (pugRange) {
                                return pugRange;
                            }
                            else {
                                const pugStart = pugDoc.sourceMap.getSourceRange(htmlStart, htmlStart, data => !data?.isEmptyTagCompletion)?.[0]?.start;
                                const pugEnd = pugDoc.sourceMap.getSourceRange(htmlEnd, htmlEnd, data => !data?.isEmptyTagCompletion)?.[0]?.end;
                                if (pugStart !== undefined && pugEnd !== undefined) {
                                    return { start: pugStart, end: pugEnd };
                                }
                            }
                        },
                    };
                }
            }
        }
    };
}
exports.default = default_1;
//# sourceMappingURL=pug.js.map