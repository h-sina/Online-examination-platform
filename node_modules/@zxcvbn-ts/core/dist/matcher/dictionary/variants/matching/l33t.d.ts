import { L33tMatch, LooseObject, OptionsL33tTable } from '../../../../types';
declare type Subs = string[][][];
declare class MatchL33t {
    defaultMatch: Function;
    constructor(defaultMatch: Function);
    match({ password }: {
        password: string;
    }): L33tMatch[];
    relevantL33tSubtable(password: string, table: OptionsL33tTable): LooseObject;
    enumerateL33tSubs(table: OptionsL33tTable): LooseObject[];
    getSubs(keys: string[], subs: Subs, table: OptionsL33tTable): Subs;
    dedup(subs: Subs): Subs;
}
export default MatchL33t;
