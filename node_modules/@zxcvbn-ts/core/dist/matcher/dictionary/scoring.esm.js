import uppercaseVariant from './variants/scoring/uppercase.esm.js';
import l33tVariant from './variants/scoring/l33t.esm.js';

var dictionaryMatcher = (({
  rank,
  reversed,
  l33t,
  sub,
  token
}) => {
  const baseGuesses = rank; // keep these as properties for display purposes

  const uppercaseVariations = uppercaseVariant(token);
  const l33tVariations = l33tVariant({
    l33t,
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

export { dictionaryMatcher as default };
//# sourceMappingURL=scoring.esm.js.map
