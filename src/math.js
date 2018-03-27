
/**
 * Adds two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divides two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
export function divide(a, b) {
  return a / b;
}
/**
 * returns the sum of an array
 * @param {Array<number>} arr Array
 */
export function sum(arr) {
  if (typeof arr === "number") {
    return arr;
  }

  let sum = 0;
  arr.map(num => {
    sum += num;
  });
  return sum;
}
