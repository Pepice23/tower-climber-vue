import { defineStore } from "pinia";
import { useEquipmentStore } from "./equipmentStore.js";
import { useInventoryStore } from "./inventoryStore.js";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    playerVisible: true,
    playerDamage: 10,
    playerDefense: 10,
    playerLevel: 1,
    money: 12000,
    floor: 1,
    monsterCount: 0,
    currentXP: 0,
    nextLevelXP: 50,
    avatar: {},
    itemStartId: 0,
    hasSavedGame: false,
  }),
  actions: {
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
      const inventoryStore = useInventoryStore();
      inventoryStore.removeItemFromInventory(item.id);
      inventoryStore.compareItems();
      this.totalDamage();
      this.totalDefense();
    },
    subtractMoney(amount) {
      this.money -= amount;
    },
  },
});
