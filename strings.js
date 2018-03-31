"use strict";
exports.__esModule = true;
function capitalizeString(str) {
    var lowercaseStr = str.toLowerCase();
    var firstLetter = lowercaseStr[0].toUpperCase();
    var remainingWord = lowercaseStr.substr(1);
    var capitalizedString = firstLetter + remainingWord;
    return capitalizedString;
}
exports.capitalizeString = capitalizeString;
