const { capitalizeString, toUpper, toLower } = require("../../dist/index");

describe("capitalizeString", () => {
  it("capitalizes a lowercase string", () => {
    expect(capitalizeString("teststring")).toBe("Teststring");
  });

  it("capitalizes only the first letter of an uppercase string", () => {
    expect(capitalizeString("TESTSTRING")).toBe("Teststring");
  });
});

describe("toUpper", () => {
  it("returns a fully uppercase string", () => {
    expect(toUpper("teststring")).toBe("TESTSTRING");
  });

  it("leaves an uppercase string as is", () => {
    expect(toUpper("TESTSTRING")).toBe("TESTSTRING");
  });
});

describe("toLower", () => {
  it("returns a fully lowercase string", () => {
    expect(toLower("teststring")).toBe("teststring");
  });

  it("leaves an lowercase string as is", () => {
    expect(toLower("teststring")).toBe("teststring");
  });
});
