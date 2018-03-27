import { expect } from "chai";
import { now } from "../dist/utils"

describe("now", () => {
  it("returns the current time", () => {
    const currentTime = Date.now();
    expect(now()).to.equal(currentTime);
    
  })
})