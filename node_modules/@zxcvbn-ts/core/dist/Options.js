'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helper = require('./helper.js');
var l33tTable = require('./data/l33tTable.js');
var translationKeys = require('./data/translationKeys.js');

class Options {
  constructor() {
    this.matchers = {};
    this.l33tTable = l33tTable;
    this.dictionary = {
      userInputs: []
    };
    this.rankedDictionaries = {};
    this.translations = translationKeys;
    this.graphs = {};
    this.availableGraphs = [];
    this.useLevenshteinDistance = false;
    this.levenshteinThreshold = 2;
    this.setRankedDictionaries();
  }

  setOptions(options = {}) {
    if (options.l33tTable) {
      this.l33tTable = options.l33tTable;
    }

    if (options.dictionary) {
      this.dictionary = options.dictionary;
      this.setRankedDictionaries();
    }

    if (options.translations) {
      this.setTranslations(options.translations);
    }

    if (options.graphs) {
      this.graphs = options.graphs;
    }

    if (options.useLevenshteinDistance !== undefined) {
      this.useLevenshteinDistance = options.useLevenshteinDistance;
    }

    if (options.levenshteinThreshold !== undefined) {
      this.levenshteinThreshold = options.levenshteinThreshold;
    }
  }

  setTranslations(translations) {
    if (this.checkCustomTranslations(translations)) {
      this.translations = translations;
    } else {
      throw new Error('Invalid translations object fallback to keys');
    }
  }

  checkCustomTranslations(translations) {
    let valid = true;
    Object.keys(translationKeys).forEach(type => {
      if (type in translations) {
        const translationType = type;
        Object.keys(translationKeys[translationType]).forEach(key => {
          if (!(key in translations[translationType])) {
            valid = false;
          }
        });
      } else {
        valid = false;
      }
    });
    return valid;
  }

  setRankedDictionaries() {
    const rankedDictionaries = {};
    Object.keys(this.dictionary).forEach(name => {
      rankedDictionaries[name] = this.getRankedDictionary(name);
    });
    this.rankedDictionaries = rankedDictionaries;
  }

  getRankedDictionary(name) {
    const list = this.dictionary[name];

    if (name === 'userInputs') {
      const sanitizedInputs = [];
      list.forEach(input => {
        const inputType = typeof input;

        if (inputType === 'string' || inputType === 'number' || inputType === 'boolean') {
          sanitizedInputs.push(input.toString().toLowerCase());
        }
      });
      return helper.buildRankedDictionary(sanitizedInputs);
    }

    return helper.buildRankedDictionary(list);
  }

  extendUserInputsDictionary(dictionary) {
    if (this.dictionary.userInputs) {
      this.dictionary.userInputs = [...this.dictionary.userInputs, ...dictionary];
    } else {
      this.dictionary.userInputs = dictionary;
    }

    this.rankedDictionaries.userInputs = this.getRankedDictionary('userInputs');
  }

  addMatcher(name, matcher) {
    if (this.matchers[name]) {
      console.info('Matcher already exists');
    } else {
      this.matchers[name] = matcher;
    }
  }

}
const zxcvbnOptions = new Options();

exports.Options = Options;
exports["default"] = zxcvbnOptions;
//# sourceMappingURL=Options.js.map
