/**
 * Adds two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
exports.add = (a, b) => {
  return a + b;
};
/**
 * Subtracts two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
exports.subtract = (a, b) => {
  return a - b;
};
/**
 * Multiplies two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
exports.multiply = (a, b) => {
  return a * b;
};
/**
 * Divides two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
exports.divide = (a, b) => {
  return a / b;
};
/**
 * returns the sum of an array
 * @param {Array<number>} arr Array
 */
exports.sum = arr => {
  if (arr.length == 0) return undefined;

  return arr.reduce((element, max) => {
    return (max += element);
  });
};

/**
 * returns the lowest element in an array
 * @param {Array<number>} arr
 */
exports.min = arr => {
  if (!(arr instanceof Array)) return NaN;
  return arr.sort().shift();
};

/**
 * returns the largest element in an array
 * @param {Array<number>} arr
 */
exports.max = arr => {
  if (!(arr instanceof Array)) return NaN;
  return arr.sort().pop();
};

/**
 * calculates a given number to the power of the given number
 * @param {number} number
 * @param {number} exponent
 * @returns {number} number to the power of the exponent
 */
exports.pow = (num, exp) => {
  return num ** exp;
};

/**
 * returns the absolute number of a given parameter
 * @example glu.abs(-5) = 5
 * @param {number} number
 */
exports.abs = num => {
  return num < 0 ? -num : num;
};

exports.isEven = num => {
  return num % 2 == 0;
};

exports.isOdd = num => !exports.isEven(num);
