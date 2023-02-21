import { defineStore } from "pinia";
import { ref } from "vue";
import { usePlayerStore } from "./playerStore.js";

export const useUpgradeStore = defineStore("upgrade", () => {
  const lootChanceUpgrade = ref({
    upgradeName: "Loot Chance",
    description: "Increase your chance to find loot",
    cost: 1000,
    currentLevel: 0,
    maxLevel: 10,
    perLevel: 5,
    lootPercent: 0,
    buttonEnabled: true,
  });

  const alexanderThePet = ref({
    upgradeName: "Alexander the Pet",
    description: "Alexander the Pet will help you fight",
    cost: 5000,
    level: 0,
    maxLevel: 5,
    imagePath: "/assets/pet/alexander.png",
    dmgPercent: 20,
  });

  const normalUpgrades = ref([lootChanceUpgrade, alexanderThePet]);

  function upgradeLootChance() {
    const playerStore = usePlayerStore();

    lootChanceUpgrade.value.currentLevel++;
    lootChanceUpgrade.value.cost += 1000;
    lootChanceUpgrade.value.lootPercent =
      lootChanceUpgrade.value.perLevel * lootChanceUpgrade.value.currentLevel;
    playerStore.lootChance = lootChanceUpgrade.value.lootPercent;

    if (
      lootChanceUpgrade.value.currentLevel === lootChanceUpgrade.value.maxLevel
    ) {
      lootChanceUpgrade.value.buttonEnabled = false;
    }
  }

  function filterUpgrade(upgrade) {
    normalUpgrades.value = normalUpgrades.value.filter(
      (a) => a.name !== upgrade.name
    );
  }

  return {
    normalUpgrades,
    lootChanceUpgrade,
    alexanderThePet,
    upgradeLootChance,
    filterUpgrade,
  };
});
