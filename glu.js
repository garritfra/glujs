/**
 * Pi with 10 decimal digits
 */
exports.PI = 3.14159265359;
/**
 * Pi / 2 with 10 decimal digits
 */
exports.HALF_PI = 1.57079632679;
/**
 * Pi / 4 with 10 decimal digits
 */
exports.QUARTER_PI = 0.78539816339;
/**
 * Euler's number
 */
exports.e = 2.71828182846;
/**
 * Earths gravity at sea level in m/s2
 */
exports.GRAVITY_EARTH = 9.80665;
/**
 * Speed of light in a vacuum in m/s
 */
exports.SPEED_OF_LIGHT = 299792458;
/**
 * Standard atmosphere in Pa
 */
exports.STANDARD_ATMOSPHERE = 101325;

//--------------------------------------------

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
  if (typeof arr === "number") return arr;
  var sum = 0;
  arr.map(function(num) {
    sum += num;
  });
  return sum;
}
exports.sum = sum;

//-----------------------------------------------

/**
 * returns the current time
 * @returns {Date} Current Time
 */
exports.now = function() {
  return new Date();
};

//-----------------------------------------------

/**
 * Capitalizes the first letter of a string
 * @param {string} string 
 */
function capitalizeString(str) {
    var lowercaseStr = str.toLowerCase();
    var firstLetter = lowercaseStr[0].toUpperCase();
    var remainingWord = lowercaseStr.substr(1);
    var capitalizedString = firstLetter + remainingWord;
    return capitalizedString;
}
exports.capitalizeString = capitalizeString;

/**
 * Converts a string to upper case
 * @param {string} str 
 */
function toUpper(str) {
  return str.toUpperCase();
}
exports.toUpper = toUpper;