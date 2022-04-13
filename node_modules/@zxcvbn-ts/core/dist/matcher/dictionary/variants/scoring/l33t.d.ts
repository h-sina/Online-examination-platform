import { LooseObject } from '../../../../types';
export interface L33tOptions {
    l33t: string;
    sub: LooseObject;
    token: string;
}
export interface GetCountsOptions {
    token: string;
    subs: LooseObject;
    subbed: string;
}
declare const _default: ({ l33t, sub, token }: L33tOptions) => number;
export default _default;
