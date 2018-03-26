'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _math = require('./modules/math');

Object.defineProperty(exports, 'add', {
  enumerable: true,
  get: function get() {
    return _math.add;
  }
});
Object.defineProperty(exports, 'subtract', {
  enumerable: true,
  get: function get() {
    return _math.subtract;
  }
});
Object.defineProperty(exports, 'multiply', {
  enumerable: true,
  get: function get() {
    return _math.multiply;
  }
});
Object.defineProperty(exports, 'divide', {
  enumerable: true,
  get: function get() {
    return _math.divide;
  }
});