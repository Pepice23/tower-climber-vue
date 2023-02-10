import { defineStore } from "pinia";
import { useEquipmentStore } from "./equipmentStore.js";
import { useInventoryStore } from "./inventoryStore.js";
import { getRandomNumber } from "../helpers/playerHelper.js";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    playerVisible: true,
    playerDamagePerClick: 10,
    playerDamagePerSecond: 10,
    playerLevel: 1,
    money: 12000,
    floor: 1,
    monsterCount: 1,
    currentXP: 0,
    nextLevelXP: 50,
    avatar: {},
    itemStartId: 0,
    hasSavedGame: false,
    outcome: "",
    background: "/assets/background/bg-2.png",
    bossTimer: 30,
    bossTimerMax: 30,
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
    checkLevelUp() {
      if (this.currentXP >= this.nextLevelXP) {
        this.playerLevel += 1;
        this.playerDamage += 5;
        this.playerDefense += 5;
        if (this.currentXP >= this.nextLevelXP) {
          this.currentXP = this.currentXP - this.nextLevelXP;
        }
        this.nextLevelXP = Math.floor(this.nextLevelXP * 1.15);
      }
    },
    calculateXP() {
      let xpPercent = getRandomNumber(4, 10);
      let base = xpPercent / 100;
      let xp = base * this.nextLevelXP;
      this.currentXP = Math.floor(this.currentXP + xp);
    },
  },
});
