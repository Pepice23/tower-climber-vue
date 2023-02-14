import { defineStore } from "pinia";
import { useEquipmentStore } from "./equipmentStore.js";

import { getRandomNumber } from "../helpers/playerHelper.js";
import { generateRandomItem } from "../helpers/itemCreator.js";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    playerVisible: true,
    playerDamagePerClick: 10,
    playerDamagePerSecond: 10,
    playerLevel: 1,
    money: 2000,
    floor: 1,
    monsterCount: 1,
    currentXP: 0,
    nextLevelXP: 50,
    avatar: {},
    itemStartId: 0,
    hasSavedGame: false,
    outcome: "",
    background: "/assets/background/bg-1.png",
    bossTimer: 30,
    bossTimerMax: 30,
    itemLog: "",
  }),
  actions: {
    totalDamagePerSec() {
      const equipmentStore = useEquipmentStore();
      if (equipmentStore.armor.dmgMultiplier > 0) {
        this.playerDamagePerSecond =
          equipmentStore.weapon.equipmentPerSecDamage *
            equipmentStore.armor.dmgMultiplier +
          this.playerLevel * 5;
      } else {
        this.playerDamagePerSecond =
          equipmentStore.weapon.equipmentPerSecDamage + this.playerLevel * 5;
      }
    },
    totalDamagePerClick() {
      const equipmentStore = useEquipmentStore();
      if (equipmentStore.armor.dmgMultiplier > 0) {
        this.playerDamagePerClick =
          equipmentStore.weapon.equipmentPerClickDamage *
            equipmentStore.armor.dmgMultiplier +
          this.playerLevel * 5;
      } else {
        this.playerDamagePerClick =
          equipmentStore.weapon.equipmentPerClickDamage + this.playerLevel * 5;
      }
    },
    subtractMoney(amount) {
      this.money -= amount;
    },
    checkLevelUp() {
      if (this.currentXP >= this.nextLevelXP) {
        this.playerLevel += 1;
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
    getNewWeapon() {
      const equipmentStore = useEquipmentStore();
      const item = generateRandomItem(this.playerLevel, this.itemStartId);
      if (
        item.equipmentPerSecDamage >
          equipmentStore.weapon.equipmentPerSecDamage &&
        item.equipmentPerClickDamage >
          equipmentStore.weapon.equipmentPerClickDamage
      ) {
        this.itemLog = `You found a ${item.equipmentName}! It is better than your current weapon!`;
        setTimeout(() => {
          equipmentStore.weapon = item;
          this.totalDamagePerClick();
          this.totalDamagePerSec();
          this.itemLog = "";
        }, 3000);
      } else {
        this.itemLog = `You found a ${item.equipmentName}! It is not better than your current weapon! You sold it for ${item.price} gold.`;
        this.money += item.price;
        setTimeout(() => {
          this.itemLog = "";
        }, 3000);
      }
      this.itemStartId += 1;
    },
    chooseRandomBackground() {
      this.background = `/assets/background/bg-${getRandomNumber(1, 57)}.png`;
    },
  },
});
