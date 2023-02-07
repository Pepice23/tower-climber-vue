import { defineStore } from "pinia";
import { generateRandomItem } from "../helpers/itemCreator.js";
import { compareItemsDamageAndDefense } from "../helpers/playerHelper.js";
import { useEquipmentStore } from "./equipmentStore.js";

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
      const equipmentStore = useEquipmentStore();
      compareItemsDamageAndDefense(
        this.playerInventory,
        equipmentStore.headArmor
      );
      compareItemsDamageAndDefense(
        this.playerInventory,
        equipmentStore.shoulderArmor
      );
      compareItemsDamageAndDefense(
        this.playerInventory,
        equipmentStore.chestArmor
      );
      compareItemsDamageAndDefense(
        this.playerInventory,
        equipmentStore.handArmor
      );
      compareItemsDamageAndDefense(
        this.playerInventory,
        equipmentStore.legArmor
      );
      compareItemsDamageAndDefense(
        this.playerInventory,
        equipmentStore.footArmor
      );
      compareItemsDamageAndDefense(this.playerInventory, equipmentStore.ring);
      compareItemsDamageAndDefense(
        this.playerInventory,
        equipmentStore.trinket
      );
      compareItemsDamageAndDefense(
        this.playerInventory,
        equipmentStore.necklace
      );
      compareItemsDamageAndDefense(this.playerInventory, equipmentStore.weapon);
    },
  },
});
