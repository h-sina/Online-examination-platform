'use strict';

var levenshtein = require('../../levenshtein.js');
var helper = require('../../helper.js');
var Options = require('../../Options.js');
var reverse = require('./variants/matching/reverse.js');
var l33t = require('./variants/matching/l33t.js');

class MatchDictionary {
  constructor() {
    this.l33t = new l33t(this.defaultMatch);
    this.reverse = new reverse(this.defaultMatch);
  }

  match({
    password
  }) {
    const matches = [...this.defaultMatch({
      password
    }), ...this.reverse.match({
      password
    }), ...this.l33t.match({
      password
    })];
    return helper.sorted(matches);
  }

  defaultMatch({
    password
  }) {
    const matches = [];
    const passwordLength = password.length;
    const passwordLower = password.toLowerCase(); // eslint-disable-next-line complexity

    Object.keys(Options["default"].rankedDictionaries).forEach(dictionaryName => {
      const rankedDict = Options["default"].rankedDictionaries[dictionaryName];

      for (let i = 0; i < passwordLength; i += 1) {
        for (let j = i; j < passwordLength; j += 1) {
          const usedPassword = passwordLower.slice(i, +j + 1 || 9e9);
          const isInDictionary = (usedPassword in rankedDict);
          let foundLevenshteinDistance = {}; // only use levenshtein distance on full password to minimize the performance drop
          // and because otherwise there would be to many false positives

          const isFullPassword = i === 0 && j === passwordLength - 1;

          if (Options["default"].useLevenshteinDistance && isFullPassword && !isInDictionary) {
            foundLevenshteinDistance = levenshtein(usedPassword, rankedDict, Options["default"].levenshteinThreshold);
          }

          const isLevenshteinMatch = Object.keys(foundLevenshteinDistance).length !== 0;

          if (isInDictionary || isLevenshteinMatch) {
            const usedRankPassword = isLevenshteinMatch ? foundLevenshteinDistance.levenshteinDistanceEntry : usedPassword;
            const rank = rankedDict[usedRankPassword];
            matches.push({
              pattern: 'dictionary',
              i,
              j,
              token: password.slice(i, +j + 1 || 9e9),
              matchedWord: usedPassword,
              rank,
              dictionaryName: dictionaryName,
              reversed: false,
              l33t: false,
              ...foundLevenshteinDistance
            });
          }
        }
      }
    });
    return matches;
  }

}

module.exports = MatchDictionary;
//# sourceMappingURL=matching.js.map
