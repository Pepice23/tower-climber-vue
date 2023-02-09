import { defineStore } from "pinia";
import { generateRandomItem } from "../helpers/itemCreator.js";
import { useEquipmentStore } from "./equipmentStore.js";
import { compareItemsDamageAndDefense } from "../helpers/playerHelper.js";
import { usePlayerStore } from "./playerStore.js";

export const useInventoryStore = defineStore("inventory", {
  state: () => ({ playerInventory: [] }),
  actions: {
    addItemToInventory() {
      const playerStore = usePlayerStore();
      const item = generateRandomItem(
        playerStore.playerLevel,
        playerStore.itemStartId
      );
      this.playerInventory.push(item);
      playerStore.itemStartId++;
      this.compareItems();
    },
    removeItemFromInventory(id) {
      this.playerInventory = this.playerInventory.filter((item) => {
        return item.id !== id;
      });
    },
    sellAllItem(targetRarity) {
      const playerStore = usePlayerStore();
      this.playerInventory = this.playerInventory.filter((item) => {
        if (item.equipmentRarity === targetRarity) {
          playerStore.money += item.price;
        }
        return item.equipmentRarity !== targetRarity;
      });
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
