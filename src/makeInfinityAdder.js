'use strict';

/***
 * return {function} */

function makeInfinityAdder() {
  let sumNumber = 0;
  const add = (a) => {
    if (a === undefined) {
      const result = sumNumber;

      sumNumber = 0;

      return result;
    }

    sumNumber += a;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
