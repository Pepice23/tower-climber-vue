import { ref } from "vue";
import { defineStore } from "pinia";
import { getRandomNumber } from "../helpers/playerHelper.js";
import { usePlayerStore } from "./playerStore.js";

export const useMonsterStore = defineStore("monster", () => {
  const monsterCurrentHP = ref(30);
  const monsterMaxHP = ref(30);
  const monsterAvatar = ref("");
  const monsterVisible = ref(true);
  const totalMonster = ref(1);
  const baseMonsterHP = ref(1.12);
  function setRandomMonsterAvatar() {
    monsterAvatar.value = `/assets/enemies/enemy${getRandomNumber(1, 25)}.jpeg`;
  }
  function setMonsterHP() {
    monsterMaxHP.value = Math.floor(
      Math.pow(baseMonsterHP.value, totalMonster.value)
    );
    monsterCurrentHP.value = monsterMaxHP.value;
  }
  function setUpMonster() {
    setRandomMonsterAvatar();
    setMonsterHP();
  }
  function checkTotalMonster() {
    const playerStore = usePlayerStore();
    if (totalMonster.value > playerStore.floor * 15) {
      totalMonster.value = playerStore.floor * 15 - playerStore.monsterCount;
    }
  }

  return {
    monsterCurrentHP,
    monsterMaxHP,
    monsterAvatar,
    monsterVisible,
    totalMonster,
    baseMonsterHP,
    setRandomMonsterAvatar,
    setUpMonster,
    checkTotalMonster,
  };
});
