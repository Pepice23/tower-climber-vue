import { defineStore } from "pinia";
import { ref } from "vue";
import { usePlayerStore } from "./playerStore.js";

export const useUpgradeStore = defineStore("upgrade", () => {
  const lootChanceUpgrade = ref({
    upgradeName: "Loot Chance",
    description: "Increase your chance to find loot",
    cost: 2000,
    currentLevel: 0,
    maxLevel: 10,
    perLevel: 10,
    lootPercent: 0,
  });

  const alexanderThePet = ref({
    upgradeName: "Alexander the Pet",
    description: "Alexander the Dragon will help you fight",
    cost: 5000,
    currentLevel: 0,
    maxLevel: 5,
    imagePath: "/assets/pet/alexander.png",
    dmgMultiplier: 0,
    perLevel: 2,
  });

  const normalUpgrades = ref([lootChanceUpgrade, alexanderThePet]);

  function upgradeLootChance() {
    const playerStore = usePlayerStore();
    playerStore.money -= lootChanceUpgrade.value.cost;
    lootChanceUpgrade.value.currentLevel++;
    lootChanceUpgrade.value.cost += 2000;
    lootChanceUpgrade.value.lootPercent =
      lootChanceUpgrade.value.perLevel * lootChanceUpgrade.value.currentLevel;
    playerStore.lootChance = lootChanceUpgrade.value.lootPercent;
  }

  function upgradeAlexanderThePet() {
    const playerStore = usePlayerStore();
    playerStore.money -= alexanderThePet.value.cost;

    alexanderThePet.value.currentLevel++;
    alexanderThePet.value.cost += 5000;
    alexanderThePet.value.dmgMultiplier =
      alexanderThePet.value.perLevel * alexanderThePet.value.currentLevel;
    playerStore.totalDamagePerSec();
    playerStore.totalDamagePerClick();
  }

  function filterUpgrade(upgrade) {
    normalUpgrades.value = normalUpgrades.value.filter(
      (u) => u.value.upgradeName !== upgrade.upgradeName
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
