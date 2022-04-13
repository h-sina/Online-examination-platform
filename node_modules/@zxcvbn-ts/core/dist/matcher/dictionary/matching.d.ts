import { DictionaryMatch } from '../../types';
import Reverse from './variants/matching/reverse';
import L33t from './variants/matching/l33t';
interface DictionaryMatchOptions {
    password: string;
}
declare class MatchDictionary {
    l33t: L33t;
    reverse: Reverse;
    constructor();
    match({ password }: DictionaryMatchOptions): import("../../types").MatchExtended[];
    defaultMatch({ password }: DictionaryMatchOptions): DictionaryMatch[];
}
export default MatchDictionary;
