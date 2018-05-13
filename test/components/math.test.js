const {
  add,
  subtract,
  multiply,
  divide,
  sum,
  min,
  max
} = require("../../dist/index");

describe("add", () => {
  it("adds two positive numbers", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("adds two negative numbers", () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it("adds strings", () => {
    expect(add("test", 2)).toBe("test2");
  });
});

describe("Subtract", () => {
  it("subtracts two positive numbers", () => {
    expect(subtract(1, 2)).toBe(-1);
  });

  it("subtracts two negative numbers", () => {
    expect(subtract(-1, -2)).toBe(1);
  });
});

describe("Multiply", () => {
  it("multiplies two positive numbers", () => {
    expect(multiply(2, 2)).toBe(4);
  });

  it("multiplies two negative numbers", () => {
    expect(multiply(-2, -2)).toBe(4);
  });
});

describe("Divide", () => {
  it("divides two positive numbers", () => {
    expect(divide(2, 2)).toBe(1);
  });

  it("divides two negative numbers", () => {
    expect(divide(-2, -4)).toBe(0.5);
  });

  it("divides 0 to get Infinity", () => {
    expect(divide(5, 0)).toBe(Infinity);
  });
});

describe("Sum", () => {
  it("adds all values of an array", () => {
    expect(sum([1, -2, 3])).toBe(2);
  });

  it("adds all values of an array with strings", () => {
    expect(sum([1, 2, "test", 3])).toBe("3test3");
  });

  xit("adds a two dimentional array");

  it("doesn't get a value and returns undefined", () => {
    expect(sum([])).toBe(undefined);
  });
});

describe("min", () => {
  it("finds the lowest value", () => {
    expect(min([1, 2, 3])).toBe(1);
  });

  it("finds the lowest value including strings", () => {
    expect(min(1, 2, "test")).toBe(undefined);
  });

  it("doesn't get a value and returns undefined", () => {
    expect(min([])).toBe(undefined);
  });
});

describe("max", () => {
  it("finds the highest value", () => {
    expect(max([1, 2, 3])).toBe(3);
  });

  it("finds the highest value including strings", () => {
    expect(max(1, 2, "test")).toBe(undefined);
  });

  it("doesn't get a value and returns undefined", () => {
    expect(max([])).toBe(undefined);
  });
});
