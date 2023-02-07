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
      this.itemStartId++;
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
    removeItemFromInventory(id) {
      this.playerInventory = this.playerInventory.filter((item) => {
        return item.id !== id;
      });
    },
    totalDamage() {
      const equipmentStore = useEquipmentStore();
      this.playerDamage =
        equipmentStore.headArmor.equipmentDamage +
        equipmentStore.shoulderArmor.equipmentDamage +
        equipmentStore.chestArmor.equipmentDamage +
        equipmentStore.handArmor.equipmentDamage +
        equipmentStore.legArmor.equipmentDamage +
        equipmentStore.footArmor.equipmentDamage +
        equipmentStore.ring.equipmentDamage +
        equipmentStore.trinket.equipmentDamage +
        equipmentStore.necklace.equipmentDamage +
        equipmentStore.weapon.equipmentDamage;
    },
    totalDefense() {
      const equipmentStore = useEquipmentStore();
      this.playerDefense =
        equipmentStore.headArmor.equipmentDefense +
        equipmentStore.shoulderArmor.equipmentDefense +
        equipmentStore.chestArmor.equipmentDefense +
        equipmentStore.handArmor.equipmentDefense +
        equipmentStore.legArmor.equipmentDefense +
        equipmentStore.footArmor.equipmentDefense +
        equipmentStore.ring.equipmentDefense +
        equipmentStore.trinket.equipmentDefense +
        equipmentStore.necklace.equipmentDefense +
        equipmentStore.weapon.equipmentDefense;
    },
    equipItem(item) {
      this.removeItemFromInventory(item.id);
      this.compareItems();
      this.totalDamage();
      this.totalDefense();
    },
  },
});
