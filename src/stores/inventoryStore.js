import { defineStore } from "pinia";
import { generateRandomItem } from "../helpers/itemCreator.js";
import { useEquipmentStore } from "./equipmentStore.js";
import { compareItemsDamageAndDefense } from "../helpers/playerHelper.js";

export const useInventoryStore = defineStore("inventory", {
  state: () => ({ playerInventory: [] }),
  actions: {
    addItemToInventory() {
      const item = generateRandomItem(this.playerLevel, this.itemStartId);
      this.playerInventory.push(item);
      this.itemStartId++;
    },
    removeItemFromInventory(id) {
      this.playerInventory = this.playerInventory.filter((item) => {
        return item.id !== id;
      });
    },
    sellAllItem(targetRarity) {
      this.playerInventory = this.playerInventory.filter((item) => {
        if (item.equipmentRarity === targetRarity) {
          this.money += item.price;
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
