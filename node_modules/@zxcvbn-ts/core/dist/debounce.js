'use strict';

/**
 * @link https://davidwalsh.name/javascript-debounce-function
 */
var debounce = ((func, wait, isImmediate) => {
  let timeout;
  return function debounce(...args) {
    const context = this;

    const later = () => {
      timeout = undefined;

      if (!isImmediate) {
        func.apply(context, args);
      }
    };

    const shouldCallNow = isImmediate && !timeout;

    if (timeout !== undefined) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(later, wait);

    if (shouldCallNow) {
      return func.apply(context, args);
    }

    return undefined;
  };
});

module.exports = debounce;
//# sourceMappingURL=debounce.js.map
