const glu = require("../../src/index");

describe("random", () => {
  it("generates a number between 0 and 1", () => {
    const randomNum = glu.random();
    expect(randomNum).toBeGreaterThanOrEqual(0);
    expect(randomNum).toBeLessThanOrEqual(1);
  });
});

describe("randomInt", () => {
  it("generates a number between 1 and 5", () => {
    const randomNum = glu.randomInt(1, 5);
    expect(randomNum).toBeGreaterThan(1);
    expect(randomNum).toBeLessThan(5);
  });

  it("can deal with reverse parameters", () => {
    const randomNum = glu.randomInt(5, 1);
    expect(randomNum).toBeGreaterThan(1);
    expect(randomNum).toBeLessThan(5);
  });
});
