'use strict';

var Options = require('../../Options.js');

var sequenceMatcher = (() => {
  return {
    warning: Options["default"].translations.warnings.sequences,
    suggestions: [Options["default"].translations.suggestions.sequences]
  };
});

module.exports = sequenceMatcher;
//# sourceMappingURL=feedback.js.map
