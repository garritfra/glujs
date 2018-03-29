/**
 * Adds two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Subtracts two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
export function multiply(a: number, b: number):number {
  return a * b;
}

/**
 * Divides two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
export function divide(a: number, b: number):number {
  return a / b;
}
/**
 * returns the sum of an array
 * @param {Array<number>} arr Array
 */
export function sum(arr: Array<number>):number {
  if (typeof arr === "number") return arr;

  let sum: number = 0;
  arr.map(num => {
    sum += num;
  });
  return sum;
}
