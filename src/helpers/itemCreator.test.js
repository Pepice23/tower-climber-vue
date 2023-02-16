import { it, expect } from "vitest";
import { getRandomRarity } from "./itemCreator.js";

it("should test if after rolling the dice we get a rarity back", () => {
  const result = getRandomRarity();
  expect(result).not.undefined;
});
