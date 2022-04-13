'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Matching = require('./Matching.js');
var index = require('./scoring/index.js');
var TimeEstimates = require('./TimeEstimates.js');
var Feedback = require('./Feedback.js');
var Options = require('./Options.js');
var debounce = require('./debounce.js');

const time = () => new Date().getTime();

const createReturnValue = (resolvedMatches, password, start) => {
  const feedback = new Feedback();
  const timeEstimates = new TimeEstimates();
  const matchSequence = index.mostGuessableMatchSequence(password, resolvedMatches);
  const calcTime = time() - start;
  const attackTimes = timeEstimates.estimateAttackTimes(matchSequence.guesses);
  return {
    calcTime,
    ...matchSequence,
    ...attackTimes,
    feedback: feedback.getFeedback(attackTimes.score, matchSequence.sequence)
  };
};

const main = (password, userInputs) => {
  if (userInputs) {
    Options["default"].extendUserInputsDictionary(userInputs);
  }

  const matching = new Matching();
  return matching.match(password);
};

const zxcvbn = (password, userInputs) => {
  const start = time();
  const matches = main(password, userInputs);

  if (matches instanceof Promise) {
    throw new Error('You are using a Promised matcher, please use `zxcvbnAsync` for it.');
  }

  return createReturnValue(matches, password, start);
};
const zxcvbnAsync = async (password, userInputs) => {
  const start = time();
  const matches = await main(password, userInputs);
  return createReturnValue(matches, password, start);
};

exports.zxcvbnOptions = Options["default"];
exports.debounce = debounce;
exports.zxcvbn = zxcvbn;
exports.zxcvbnAsync = zxcvbnAsync;
//# sourceMappingURL=index.js.map
