const utils = require("./utils");

exports.makeArray = arr => {
  return arr || [];
};

exports.makeRandomArray = itemCount => {
  let arr = [];
  for (let i = 0; i < itemCount; i++) {
    arr.push(Math.random());
  }
  return arr;
};
