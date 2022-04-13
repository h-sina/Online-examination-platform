import { TranslationKeys, OptionsType, OptionsDictionary, OptionsL33tTable, OptionsGraph, RankedDictionaries, Matchers, Matcher } from './types';
export declare class Options {
    matchers: Matchers;
    l33tTable: OptionsL33tTable;
    dictionary: OptionsDictionary;
    rankedDictionaries: RankedDictionaries;
    translations: TranslationKeys;
    graphs: OptionsGraph;
    availableGraphs: string[];
    useLevenshteinDistance: boolean;
    levenshteinThreshold: number;
    constructor();
    setOptions(options?: OptionsType): void;
    setTranslations(translations: TranslationKeys): void;
    checkCustomTranslations(translations: TranslationKeys): boolean;
    setRankedDictionaries(): void;
    getRankedDictionary(name: string): import("./types").LooseObject;
    extendUserInputsDictionary(dictionary: (string | number)[]): void;
    addMatcher(name: string, matcher: Matcher): void;
}
declare const zxcvbnOptions: Options;
export default zxcvbnOptions;
