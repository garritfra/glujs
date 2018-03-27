import { expect } from "chai";
import { now } from "../dist/utils"

describe("now", () => {
  xit("returns the current time", () => {
    const currentTime = Date.now();
    expect(now()).to.equal(currentTime);
    
  })
})