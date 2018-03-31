import { expect } from "chai";
import { now } from "../utils"

describe("now", () => {
  xit("returns the current time", () => {
    const currentTime = Date.now();
    expect(now()).to.equal(currentTime);
    
  })
})