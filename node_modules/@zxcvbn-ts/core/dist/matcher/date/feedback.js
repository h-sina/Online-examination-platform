'use strict';

var Options = require('../../Options.js');

var dateMatcher = (() => {
  return {
    warning: Options["default"].translations.warnings.dates,
    suggestions: [Options["default"].translations.suggestions.dates]
  };
});

module.exports = dateMatcher;
//# sourceMappingURL=feedback.js.map
