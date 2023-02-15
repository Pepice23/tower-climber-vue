import { it, expect } from "vitest";
import { getRandomNumber, numberFormatter } from "./playerHelper.js";

it("should choose a random number between the min and max", () => {
  const result = getRandomNumber(1, 3);
  expect(result).greaterThanOrEqual(1);
  expect(result).lessThanOrEqual(3);
});

it("should format numbers", () => {
  const result = numberFormatter.format(1000);
  expect(result).equal("1K");
});
