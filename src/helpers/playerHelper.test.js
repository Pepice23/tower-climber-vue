import { it, expect, describe } from "vitest";
import { getRandomNumber, numberFormatter } from "./playerHelper.js";

describe("getRandomNumber()", () => {
  it("should choose a random number between the min and max", () => {
    const min = 1;
    const max = 3;
    const result = getRandomNumber(min, max);
    expect(result).greaterThanOrEqual(min);
    expect(result).lessThanOrEqual(max);
    expect(result).not.lessThan(min);
    expect(result).not.greaterThan(max);
  });
});

describe("numberFormatter()", () => {
  it("should format numbers", () => {
    const result = numberFormatter.format(1000);
    expect(result).equal("1K");
  });
});
