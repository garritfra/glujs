/**
 * returns the current time
 * @returns {Date} Current Time
 */
exports.now = () => {
  return new Date();
};

/**
 * generates a random number between 0 and 1
 * @returns {number} random number between 0 and 1
 */
exports.random = () => {
  return (new Date().getMilliseconds() % 100) / 100;
};

/**
 * generates a random number between the two specified parameters
 * @param {number} from
 * @param {number} to
 * @returns {number} random number in between the two specified numbers
 */
exports.randomInt = (from, to) => {
  const range = Math.abs(to - from);
  const lowerNumber = from < to ? from : to;
  return new Date().getDate() % range + lowerNumber;
};
