/**
 * Capitalizes the first letter of a string
 * @param {string} string
 */
exports.capitalizeString = str => {
  var lowercaseStr = str.toLowerCase();
  var firstLetter = lowercaseStr[0].toUpperCase();
  var remainingWord = lowercaseStr.substr(1);
  var capitalizedString = firstLetter + remainingWord;
  return capitalizedString;
};

/**
 * Converts a string to upper case
 * @param {string} str
 */
exports.toUpper = str => {
  return str.toUpperCase();
};

/**
 * Converts a string to lower case
 * @param {string} str
 */
exports.toLower = str => {
  return str.toLowerCase();
};
