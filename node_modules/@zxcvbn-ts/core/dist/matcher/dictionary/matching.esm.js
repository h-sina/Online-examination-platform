import findLevenshteinDistance from '../../levenshtein.esm.js';
import { sorted } from '../../helper.esm.js';
import zxcvbnOptions from '../../Options.esm.js';
import MatchL33t$1 from './variants/matching/reverse.esm.js';
import MatchL33t from './variants/matching/l33t.esm.js';

class MatchDictionary {
  constructor() {
    this.l33t = new MatchL33t(this.defaultMatch);
    this.reverse = new MatchL33t$1(this.defaultMatch);
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
    return sorted(matches);
  }

  defaultMatch({
    password
  }) {
    const matches = [];
    const passwordLength = password.length;
    const passwordLower = password.toLowerCase(); // eslint-disable-next-line complexity

    Object.keys(zxcvbnOptions.rankedDictionaries).forEach(dictionaryName => {
      const rankedDict = zxcvbnOptions.rankedDictionaries[dictionaryName];

      for (let i = 0; i < passwordLength; i += 1) {
        for (let j = i; j < passwordLength; j += 1) {
          const usedPassword = passwordLower.slice(i, +j + 1 || 9e9);
          const isInDictionary = (usedPassword in rankedDict);
          let foundLevenshteinDistance = {}; // only use levenshtein distance on full password to minimize the performance drop
          // and because otherwise there would be to many false positives

          const isFullPassword = i === 0 && j === passwordLength - 1;

          if (zxcvbnOptions.useLevenshteinDistance && isFullPassword && !isInDictionary) {
            foundLevenshteinDistance = findLevenshteinDistance(usedPassword, rankedDict, zxcvbnOptions.levenshteinThreshold);
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

export { MatchDictionary as default };
//# sourceMappingURL=matching.esm.js.map
