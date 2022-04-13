'use strict';

var Options = require('../../Options.js');

var spatialMatcher = (match => {
  let warning = Options["default"].translations.warnings.keyPattern;

  if (match.turns === 1) {
    warning = Options["default"].translations.warnings.straightRow;
  }

  return {
    warning,
    suggestions: [Options["default"].translations.suggestions.longerKeyboardPattern]
  };
});

module.exports = spatialMatcher;
//# sourceMappingURL=feedback.js.map
