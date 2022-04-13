'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const empty = obj => Object.keys(obj).length === 0;
const extend = (listToExtend, list) => // eslint-disable-next-line prefer-spread
listToExtend.push.apply(listToExtend, list);
const translate = (string, chrMap) => {
  const tempArray = string.split('');
  return tempArray.map(char => chrMap[char] || char).join('');
}; // mod implementation that works for negative numbers

const sorted = matches => matches.sort((m1, m2) => m1.i - m2.i || m1.j - m2.j);
const buildRankedDictionary = orderedList => {
  const result = {};
  let counter = 1; // rank starts at 1, not 0

  orderedList.forEach(word => {
    result[word] = counter;
    counter += 1;
  });
  return result;
};

exports.buildRankedDictionary = buildRankedDictionary;
exports.empty = empty;
exports.extend = extend;
exports.sorted = sorted;
exports.translate = translate;
//# sourceMappingURL=helper.js.map
