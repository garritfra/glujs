require("babel-core").transform("code", {
  plugins: ["transform-es2015-modules-commonjs"]
});

export {add, subtract, multiply, divide} from './modules/math';
