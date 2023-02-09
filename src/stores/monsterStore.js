import { defineStore } from "pinia";
import { getRandomNumber } from "../helpers/playerHelper";
import { usePlayerStore } from "./playerStore.js";

export const useMonsterStore = defineStore("monster", {
  state: () => ({
    monsterDamage: 1,
    monsterDefense: 1,
    monsterAvatar: "",
    monsterVisible: true,
  }),
  actions: {
    setRandomMonsterAvatar() {
      this.monsterAvatar = `src/assets/enemies/enemy${getRandomNumber(
        1,
        25
      )}.jpeg`;
    },
    setMonsterDamage() {
      const playerStore = usePlayerStore();
      this.monsterDamage =
        (playerStore.floor * playerStore.monsterCount + 1) * 10;
    },
    setMonsterDefense() {
      const playerStore = usePlayerStore();
      this.monsterDefense =
        (playerStore.floor * playerStore.monsterCount + 1) * 10;
    },
    setUpMonster() {
      this.setRandomMonsterAvatar();
      this.setMonsterDamage();
      this.setMonsterDefense();
    },
  },
});
