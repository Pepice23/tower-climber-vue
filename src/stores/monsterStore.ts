import { defineStore } from "pinia";
import { getRandomNumber } from "../helpers/playerHelper";

export const useMonsterStore = defineStore("monster", {
  state: () => ({ monsterDamage: 1, monsterDefense: 1, monsterAvatar: "" }),
  actions: {
    setRandomMonsterAvatar() {
      this.monsterAvatar = `src/assets/enemies/enemy${getRandomNumber(
        1,
        25
      )}.jpeg`;
    },
  },
});
