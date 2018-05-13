"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
/**
 * returns the lowest element in an array
 * @param {Array<number>} arr
 */
function min(arr) {
    var min = arr[0];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}
exports.min = min;
/**
 * returns the largest element in an array
 * @param {Array<number>} arr
 */
function max(arr) {
    var max = arr[0];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var element = arr_2[_i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
exports.max = max;
