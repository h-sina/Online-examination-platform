import { MatchEstimated, MatchExtended } from '../../types';
export interface DictionaryReturn {
    baseGuesses: number;
    uppercaseVariations: number;
    l33tVariations: number;
    calculation: number;
}
declare const _default: ({ rank, reversed, l33t, sub, token, }: MatchExtended | MatchEstimated) => DictionaryReturn;
export default _default;
