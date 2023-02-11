import { defineStore } from "pinia";
import { getRandomNumber } from "../helpers/playerHelper";
import { usePlayerStore } from "./playerStore.js";

export const useMonsterStore = defineStore("monster", {
  state: () => ({
    monsterCurrentHP: 30,
    monsterMaxHP: 30,
    monsterAvatar: "",
    monsterVisible: true,
    xpBackground: "/assets/UI/bar-test.png",
  }),
  actions: {
    setRandomMonsterAvatar() {
      this.monsterAvatar = `/assets/enemies/enemy${getRandomNumber(
        1,
        25
      )}.jpeg`;
    },
    setMonsterHP() {
      const playerStore = usePlayerStore();
      this.monsterMaxHP = playerStore.floor * playerStore.monsterCount * 100;
      this.monsterCurrentHP = this.monsterMaxHP;
    },
    setUpMonster() {
      this.setRandomMonsterAvatar();
      this.setMonsterHP();
    },
  },
});
