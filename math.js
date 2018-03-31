"use strict";
exports.__esModule = true;
/**
 * Adds two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
function add(a, b) {
    return a + b;
}
exports.add = add;
/**
 * Subtracts two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
function subtract(a, b) {
    return a - b;
}
exports.subtract = subtract;
/**
 * Multiplies two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
/**
 * Divides two numbers
 * @param {number} a number 1
 * @param {number} b number 2
 */
function divide(a, b) {
    return a / b;
}
exports.divide = divide;
/**
 * returns the sum of an array
 * @param {Array<number>} arr Array
 */
function sum(arr) {
    if (typeof arr === "number")
        return arr;
    var sum = 0;
    arr.map(function (num) {
        sum += num;
    });
    return sum;
}
exports.sum = sum;
