'use strict';

var uppercase = require('./variants/scoring/uppercase.js');
var l33t = require('./variants/scoring/l33t.js');

var dictionaryMatcher = (({
  rank,
  reversed,
  l33t: l33t$1,
  sub,
  token
}) => {
  const baseGuesses = rank; // keep these as properties for display purposes

  const uppercaseVariations = uppercase(token);
  const l33tVariations = l33t({
    l33t: l33t$1,
    sub,
    token
  });
  const reversedVariations = reversed && 2 || 1;
  const calculation = baseGuesses * uppercaseVariations * l33tVariations * reversedVariations;
  return {
    baseGuesses,
    uppercaseVariations,
    l33tVariations,
    calculation
  };
});

module.exports = dictionaryMatcher;
//# sourceMappingURL=scoring.js.map
