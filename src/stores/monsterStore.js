import { defineStore } from "pinia";
import { getRandomNumber } from "../helpers/playerHelper";
import { usePlayerStore } from "./playerStore.js";

export const useMonsterStore = defineStore("monster", {
  state: () => ({
    monsterCurrentHP: 30,
    monsterMaxHP: 30,
    monsterAvatar: "",
    monsterVisible: true,
    totalMonster: 1,
  }),
  actions: {
    setRandomMonsterAvatar() {
      this.monsterAvatar = `/assets/enemies/enemy${getRandomNumber(
        1,
        25
      )}.jpeg`;
    },
    setMonsterHP() {
      this.monsterMaxHP = Math.floor(Math.pow(1.12, this.totalMonster));
      this.monsterCurrentHP = this.monsterMaxHP;
    },
    setUpMonster() {
      this.setRandomMonsterAvatar();
      this.setMonsterHP();
    },
    checkTotalMonster() {
      const playerStore = usePlayerStore();
      if (this.totalMonster > playerStore.floor * 15) {
        this.totalMonster = playerStore.floor * 15 - playerStore.monsterCount;
      }
    },
  },
});
