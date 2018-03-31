import { capitalizeString } from "../strings";
import { expect } from "chai";

describe("capitalizeString", () => {
  it("capitalizes a fully uppercased string", () => {
    expect(capitalizeString("BOB")).to.equal("Bob");
  });

  it("capitalizes a lower case string", () => {
    expect(capitalizeString("bob")).to.equal("Bob");
  });

  it("capitalizes the first character of a sentence", () => {
    expect(capitalizeString("alice Likes BOB")).to.equals("Alice likes bob");
  });
});
