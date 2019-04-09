const { makeArray, makeRandomArray } = require("../../src/index");
describe("Arrays", () => {
  describe("makeArray", () => {
    it("creates a new array", () => {
      expect(makeArray()).toEqual([]);
      expect(makeArray()).toBeInstanceOf(Array);
    });

    it("Creates an array with the values of a given array", () => {
      expect(makeArray([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });
  describe("makeRandomArray", () => {
    it("makes a random array", () => {
      expect(makeRandomArray(4).length).toEqual(4);
    });
  });
});
