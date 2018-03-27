export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

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
