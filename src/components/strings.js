/**
 * Capitalizes the first letter of a string
 * @param {string} string
 * @returns {string} capitalized string
 */
exports.capitalizeString = str => {
  const lowercaseStr = str.toLowerCase();
  const firstLetter = lowercaseStr[0].toUpperCase();
  const remainingWord = lowercaseStr.substr(1);
  return firstLetter + remainingWord;
};

/**
 * Converts a string to upper case
 * @param {string} string
 * @returns {string} uppercase string
 */
exports.toUpper = str => {
  return str.toUpperCase();
};

/**
 * Converts a string to lower case
 * @param {string} string
 * @returns {string} lowercase string
 */
exports.toLower = str => {
  return str.toLowerCase();
};
