import { expect } from "chai";
import { add, subtract, multiply, divide } from "../dist/math";

describe("add", () => {
  it("calculates 2 + 2 = 4", () => {
    expect(add(2, 2)).to.equal(4);
  });

  it("calculates 5 + (-4) = 1", () => {
    expect(add(5, -4)).to.equal(1);
  });
  it("calculates 0.5 + 0.2 = 0.7", () => {
    expect(add(0.5, 0.2)).to.equal(0.7);
  });
});

describe("Subtract", () => {
  it("calculates 5 - 4 = 1", () => {
    expect(subtract(5, 4)).to.equal(1);
  });
  it("calculates 0.5 - 0.2 = 0.3", () => {
    expect(subtract(0.5, 0.2)).to.equal(0.3);
  });
});

describe("Multiply", () => {
  it("calculates 5 * 4 = 20", () => {
    expect(multiply(5, 4)).to.equal(20);
  });
  it("calculates 0.5 * 0.2 = 0.1", () => {
    expect(multiply(0.5, 0.2)).to.equal(0.1);
  });
});

describe("Divide", () => {
  it("calculates 5 / 4 = 20", () => {
    expect(divide(5, 4)).to.equal(1.25);
  });
  it("calculates 0.5 / 0.2 = 0.1", () => {
    expect(divide(0.5, 0.2)).to.equal(2.5);
  });
});
