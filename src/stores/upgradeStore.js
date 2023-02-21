import { defineStore } from "pinia";
import { ref } from "vue";
import { usePlayerStore } from "./playerStore.js";
import {
  alexanderThePet,
  lootChanceUpgrade,
} from "../helpers/upgradeHelper.js";

export const useUpgradeStore = defineStore("upgrade", () => {
  let normalUpgrades = ref([lootChanceUpgrade, alexanderThePet]);

  function upgradeLootChance() {
    const playerStore = usePlayerStore();
    playerStore.money -= lootChanceUpgrade.cost;
    lootChanceUpgrade.currentLevel++;
    lootChanceUpgrade.cost += 2000;
    lootChanceUpgrade.lootPercent =
      lootChanceUpgrade.perLevel * lootChanceUpgrade.currentLevel;
    playerStore.lootChance = lootChanceUpgrade.lootPercent;
  }

  function upgradeAlexanderThePet() {
    const playerStore = usePlayerStore();
    playerStore.money -= alexanderThePet.cost;

    alexanderThePet.currentLevel++;
    alexanderThePet.cost += 5000;
    alexanderThePet.dmgMultiplier =
      alexanderThePet.perLevel * alexanderThePet.currentLevel;
    playerStore.totalDamagePerSec();
    playerStore.totalDamagePerClick();
  }

  function filterUpgrade(upgrade) {
    normalUpgrades.value = normalUpgrades.value.filter(
      (u) => u.upgradeName !== upgrade.upgradeName
    );
  }

  return {
    normalUpgrades,
    lootChanceUpgrade,
    alexanderThePet,
    upgradeLootChance,
    upgradeAlexanderThePet,
    filterUpgrade,
  };
});
