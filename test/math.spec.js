import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../dist/math';

describe("math tests", () => {
  it("adds 2 and 2", () => {
    expect(add(2, 2)).to.equal(4);
  });
});
