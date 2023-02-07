import { defineStore } from "pinia";
import { generateRandomItem } from "../helpers/itemCreator.js";
import { compareItemsDamageAndDefense } from "../helpers/playerHelper.js";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    playerDamage: 10,
    playerDefense: 10,
    playerLevel: 1,
    money: 12000,
    floor: 1,
    monsterCount: 0,
    currentXP: 0,
    nextLevelXP: 50,
    avatar: {},
    playerInventory: [],
    itemStartId: 0,
    hasSavedGame: false,
  }),
  actions: {
    addItemToInventory() {
      const item = generateRandomItem(this.playerLevel, this.itemStartId);
      this.playerInventory.push(item);
    },
    compareItems() {
      compareItemsDamageAndDefense(this.playerInventory, this.headArmor);
      compareItemsDamageAndDefense(this.playerInventory, this.shoulderArmor);
      compareItemsDamageAndDefense(this.playerInventory, this.chestArmor);
      compareItemsDamageAndDefense(this.playerInventory, this.handArmor);
      compareItemsDamageAndDefense(this.playerInventory, this.legArmor);
      compareItemsDamageAndDefense(this.playerInventory, this.footArmor);
      compareItemsDamageAndDefense(this.playerInventory, this.ring);
      compareItemsDamageAndDefense(this.playerInventory, this.trinket);
      compareItemsDamageAndDefense(this.playerInventory, this.necklace);
      compareItemsDamageAndDefense(this.playerInventory, this.weapon);
    },
  },
});
