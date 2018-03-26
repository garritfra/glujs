"use strict";

System.register(["./modules/math"], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_modulesMath) {
      var _exportObj = {};
      _exportObj.add = _modulesMath.add;
      _exportObj.subtract = _modulesMath.subtract;
      _exportObj.multiply = _modulesMath.multiply;
      _exportObj.divide = _modulesMath.divide;

      _export(_exportObj);
    }],
    execute: function () {
      require("babel-core").transform("code", {
        plugins: ["transform-es2015-modules-commonjs"]
      });
    }
  };
});