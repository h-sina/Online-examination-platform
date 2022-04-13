"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
function register(htmlLs) {
    return (pugDoc, initialOffset = 0) => {
        let htmlRange = pugDoc.sourceMap.getMappedRange(initialOffset, initialOffset, data => !data?.isEmptyTagCompletion)?.[0];
        while (!htmlRange && initialOffset < pugDoc.pugTextDocument.getText().length) {
            initialOffset++;
            htmlRange = pugDoc.sourceMap.getMappedRange(initialOffset, initialOffset, data => !data?.isEmptyTagCompletion)?.[0];
        }
        if (!htmlRange)
            return;
        const htmlScanner = htmlLs.createScanner(pugDoc.htmlTextDocument.getText(), htmlRange.start);
        let offset;
        let end;
        // @ts-expect-error
        const scanner = {
            scan: () => {
                offset = undefined;
                end = undefined;
                return htmlScanner.scan();
            },
            getTokenOffset: () => {
                getTokenRange();
                return offset;
            },
            getTokenEnd: () => {
                getTokenRange();
                return end;
            },
            getTokenText: htmlScanner.getTokenText,
            getTokenLength: htmlScanner.getTokenLength,
            getTokenError: htmlScanner.getTokenError,
            getScannerState: htmlScanner.getScannerState,
        };
        return scanner;
        function getTokenRange() {
            if (offset === undefined || end === undefined) {
                const htmlOffset = htmlScanner.getTokenOffset();
                const htmlEnd = htmlScanner.getTokenEnd();
                const pugRange = pugDoc.sourceMap.getSourceRange(htmlOffset, htmlEnd)?.[0];
                if (pugRange) {
                    offset = pugRange.start;
                    end = pugRange.end;
                }
                else {
                    offset = -1;
                    end = -1;
                }
            }
        }
    };
}
exports.register = register;
//# sourceMappingURL=scanner.js.map