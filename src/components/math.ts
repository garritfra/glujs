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
export function multiply(a: number, b: number): number {
  return a * b;
}
/**
 * Divides two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
export function divide(a: number, b: number): number {
  return a / b;
}
/**
 * returns the sum of an array
 * @param {Array<number>} arr Array
 */
export function sum(arr: Array<number>) {
  if (arr.length == 0) return undefined;

  return arr.reduce((element, max) => {
    return (max += element);
  });
}

/**
 * returns the lowest element in an array
 * @param {Array<number>} arr
 */
export function min(arr: Array<number>): number {
  let min = arr[0];

  for (const element of arr) {
    if (element < min) {
      min = element;
    }
  }

  return min;
}

/**
 * returns the largest element in an array
 * @param {Array<number>} arr
 */
export function max(arr: Array<number>): number {
  let max = arr[0];

  for (const element of arr) {
    if (element > max) {
      max = element;
    }
  }

  return max;
}
