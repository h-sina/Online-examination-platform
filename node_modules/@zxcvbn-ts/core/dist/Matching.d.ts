import { MatchExtended, MatchingType } from './types';
declare type Matchers = {
    [key: string]: MatchingType;
};
declare class Matching {
    readonly matchers: Matchers;
    match(password: string): MatchExtended[] | Promise<MatchExtended[]>;
}
export default Matching;
