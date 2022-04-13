'use strict';

var Options = require('../../Options.js');

var regexMatcher = (match => {
  if (match.regexName === 'recentYear') {
    return {
      warning: Options["default"].translations.warnings.recentYears,
      suggestions: [Options["default"].translations.suggestions.recentYears, Options["default"].translations.suggestions.associatedYears]
    };
  }

  return {
    warning: '',
    suggestions: []
  };
});

module.exports = regexMatcher;
//# sourceMappingURL=feedback.js.map
