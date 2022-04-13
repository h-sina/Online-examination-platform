import { CrackTimesDisplay, CrackTimesSeconds } from './types';
declare class TimeEstimates {
    translate(displayStr: string, value: number | undefined): string;
    estimateAttackTimes(guesses: number): {
        crackTimesSeconds: CrackTimesSeconds;
        crackTimesDisplay: CrackTimesDisplay;
        score: number;
    };
    guessesToScore(guesses: number): 1 | 2 | 3 | 4 | 0;
    displayTime(seconds: number): string;
}
export default TimeEstimates;
