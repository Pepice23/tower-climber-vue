import { describe, expect, test, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useArmorStore } from "./armorStore.js";
import {
  ceymaniteArmor,
  chintoidArmor,
  fresirineArmor,
} from "../helpers/armorHelper.js";

describe("Armor Store", () => {
  let store = null;
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("filters armor", () => {
    store = useArmorStore();

    store.armors = [fresirineArmor, ceymaniteArmor, chintoidArmor];

    store.filterArmor(fresirineArmor);
    expect(store.armors).toEqual([ceymaniteArmor, chintoidArmor]);
  });
});
