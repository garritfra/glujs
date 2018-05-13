"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
/**
 * Converts a string to lower case
 * @param {string} str
 */
function toLower(str) {
    return str.toLowerCase();
}
exports.toLower = toLower;
