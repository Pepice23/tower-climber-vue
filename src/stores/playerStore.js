import { defineStore } from "pinia";
import { ref } from "vue";
import { useEquipmentStore } from "./equipmentStore.js";
import { getRandomNumber } from "../helpers/playerHelper.js";
import { generateRandomItem } from "../helpers/itemCreator.js";
import { useMonsterStore } from "./monsterStore.js";

export const usePlayerStore = defineStore("player", () => {
  const playerVisible = ref(true);
  const playerDamagePerClick = ref(10);
  const playerDamagePerSecond = ref(10);
  const playerLevel = ref(1);
  const money = ref(2000);
  const floor = ref(1);
  const monsterCount = ref(1);
  const currentXP = ref(0);
  const nextLevelXP = ref(50);
  const avatar = ref({});
  const itemStartId = ref(0);
  const hasSavedGame = ref(false);
  const outcome = ref("");
  const background = ref("/assets/background/bg-1.png");
  const bossTimer = ref(30);
  const bossTimerMax = ref(30);
  const itemLog = ref("");

  function totalDamagePerSec() {
    const equipmentStore = useEquipmentStore();
    if (equipmentStore.armor.dmgMultiplier > 0) {
      playerDamagePerSecond.value =
        equipmentStore.weapon.equipmentPerSecDamage *
          equipmentStore.armor.dmgMultiplier +
        playerLevel.value * 5;
    } else {
      playerDamagePerSecond.value =
        equipmentStore.weapon.equipmentPerSecDamage + playerLevel.value * 5;
    }
  }

  function totalDamagePerClick() {
    const equipmentStore = useEquipmentStore();
    if (equipmentStore.armor.dmgMultiplier > 0) {
      playerDamagePerClick.value =
        equipmentStore.weapon.equipmentPerClickDamage *
          equipmentStore.armor.dmgMultiplier +
        playerLevel.value * 5;
    } else {
      playerDamagePerClick.value =
        equipmentStore.weapon.equipmentPerClickDamage + playerLevel.value * 5;
    }
  }

  function addMoney() {
    money.value += getRandomNumber(
      floor.value * monsterCount.value,
      floor.value * monsterCount.value * 2
    );
  }
  function subtractMoney(amount) {
    money.value -= amount;
  }

  function checkLevelUp() {
    if (currentXP.value >= nextLevelXP.value) {
      playerLevel.value += 1;
      totalDamagePerClick();
      totalDamagePerSec();
      if (currentXP.value >= nextLevelXP.value) {
        currentXP.value = currentXP.value - nextLevelXP.value;
      }
      nextLevelXP.value = Math.floor(nextLevelXP.value * 1.15);
    }
  }

  function calculateXP() {
    let xpPercent = getRandomNumber(4, 10);
    let base = xpPercent / 100;
    let xp = base * nextLevelXP.value;
    currentXP.value = Math.floor(currentXP.value + xp);
  }

  function getNewWeapon() {
    const equipmentStore = useEquipmentStore();
    const item = generateRandomItem(playerLevel.value, itemStartId.value);
    if (
      item.equipmentPerSecDamage >
        equipmentStore.weapon.equipmentPerSecDamage &&
      item.equipmentPerClickDamage >
        equipmentStore.weapon.equipmentPerClickDamage
    ) {
      itemLog.value = `You found a ${item.equipmentName}! It is better than your current weapon!`;
      equipmentStore.weapon = item;
      totalDamagePerClick();
      totalDamagePerSec();
      setTimeout(() => {
        itemLog.value = "";
      }, 3000);
    } else {
      itemLog.value = `You found a ${item.equipmentName}! It is not better than your current weapon! You sold it for ${item.price} gold.`;
      money.value += item.price;
      setTimeout(() => {
        itemLog.value = "";
      }, 3000);
    }
    itemStartId.value += 1;
  }
  function chooseRandomBackground() {
    background.value = `/assets/background/bg-${getRandomNumber(1, 57)}.png`;
  }

  function checkNextFloor() {
    const monsterStore = useMonsterStore();
    if (monsterCount.value > 15) {
      floor.value += 1;
      monsterCount.value = 1;
      getNewWeapon();
      chooseRandomBackground();
      if (floor.value % 10 === 0) {
        monsterStore.baseMonsterHP -= 0.01;
      }
    }
  }
  function checkIfPlayerGetsLoot() {
    const roll = getRandomNumber(1, 100);
    if (roll >= 80) {
      getNewWeapon();
    }
  }

  return {
    playerVisible,
    playerLevel,
    playerDamagePerClick,
    playerDamagePerSecond,
    money,
    floor,
    monsterCount,
    currentXP,
    nextLevelXP,
    avatar,
    itemStartId,
    hasSavedGame,
    outcome,
    background,
    bossTimer,
    bossTimerMax,
    itemLog,
    totalDamagePerSec,
    totalDamagePerClick,
    addMoney,
    subtractMoney,
    checkLevelUp,
    calculateXP,
    getNewWeapon,
    checkNextFloor,
    checkIfPlayerGetsLoot,
  };
});
