import { defineStore } from "pinia";
import { generateRandomItem } from "../helpers/itemCreator.js";
import { useEquipmentStore } from "./equipmentStore.js";
import { compareItemsDamageAndDefense } from "../helpers/playerHelper.js";
import { usePlayerStore } from "./playerStore.js";

export const useInventoryStore = defineStore("inventory", {
  state: () => ({
    playerInventory: [],
    poorButton: false,
    uncommonButton: false,
    rareButton: false,
    epicButton: false,
    legendaryButton: false,
  }),
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
      this.switchRarityButton(item);
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
    switchRarityButton(item) {
      if (item.equipmentRarity === 1 && this.poorButton === false) {
        this.poorButton = true;
      }
      if (item.equipmentRarity === 2 && this.uncommonButton === false) {
        this.uncommonButton = true;
      }
      if (item.equipmentRarity === 3 && this.rareButton === false) {
        this.rareButton = true;
      }
      if (item.equipmentRarity === 4 && this.epicButton === false) {
        this.epicButton = true;
      }
      if (item.equipmentRarity === 5 && this.legendaryButton === false) {
        this.legendaryButton = true;
      }
    },
  },
});
