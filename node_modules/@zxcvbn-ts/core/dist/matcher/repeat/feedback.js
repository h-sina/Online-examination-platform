'use strict';

var Options = require('../../Options.js');

var repeatMatcher = (match => {
  let warning = Options["default"].translations.warnings.extendedRepeat;

  if (match.baseToken.length === 1) {
    warning = Options["default"].translations.warnings.simpleRepeat;
  }

  return {
    warning,
    suggestions: [Options["default"].translations.suggestions.repeated]
  };
});

module.exports = repeatMatcher;
//# sourceMappingURL=feedback.js.map
