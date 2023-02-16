import { defineStore } from "pinia";
import { useMonsterStore } from "./monsterStore.js";
import { usePlayerStore } from "./playerStore.js";
import router from "../router/index.js";

export const useBattleStore = defineStore("battle", {
  state: () => ({ monsterDied: false }),
  actions: {
    battle() {
      const playerStore = usePlayerStore();
      if (playerStore.monsterCount < 15) {
        this.normalBattle();
      }
      if (playerStore.monsterCount === 15) {
        this.bossBattle();
      }
    },
    newBattleSetup() {
      const monsterStore = useMonsterStore();
      const playerStore = usePlayerStore();

      setTimeout(() => {
        monsterStore.setUpMonster();
        monsterStore.monsterVisible = true;
        playerStore.playerVisible = true;
        playerStore.outcome = "";
        this.battle();
        if (playerStore.bossTimer !== 30) {
          playerStore.bossTimer = 30;
        }
        this.monsterDied = false;
      }, 1000);
    },
    normalBattle() {
      const monsterStore = useMonsterStore();
      const playerStore = usePlayerStore();

      const combat = setInterval(() => {
        monsterStore.monsterCurrentHP -= playerStore.playerDamagePerSecond;
        if (monsterStore.monsterCurrentHP <= 0) {
          monsterStore.monsterCurrentHP = 0;
          clearInterval(combat);
          this.playerWins();
          this.monsterDied = true;
          this.newBattleSetup();
        }
      }, 1000);
    },
    bossBattle() {
      const playerStore = usePlayerStore();
      const monsterStore = useMonsterStore();
      const timerBoss = setInterval(() => {
        playerStore.bossTimer -= 1;
        monsterStore.monsterCurrentHP -= playerStore.playerDamagePerSecond;
        if (playerStore.bossTimer <= 0 && monsterStore.monsterCurrentHP > 0) {
          this.monsterDied = true;
          clearInterval(timerBoss);
          this.playerLoses();
          this.newBattleSetup();
        }
        if (playerStore.bossTimer > 0 && monsterStore.monsterCurrentHP <= 0) {
          this.monsterDied = true;
          clearInterval(timerBoss);
          this.playerWins();
          this.newBattleSetup();
        }
      }, 1000);
    },
    playerWins() {
      const playerStore = usePlayerStore();
      const monsterStore = useMonsterStore();

      playerStore.playerVisible = true;
      monsterStore.monsterVisible = false;
      playerStore.outcome = "You win!";
      playerStore.monsterCount += 1;
      monsterStore.totalMonster += 1;
      playerStore.calculateXP();
      playerStore.checkLevelUp();
      playerStore.checkNextFloor();
      playerStore.checkIfPlayerGetsLoot();
      playerStore.addMoney();
      monsterStore.checkTotalMonster();
      this.checkGameEnd();
    },
    playerLoses() {
      const playerStore = usePlayerStore();
      const monsterStore = useMonsterStore();

      playerStore.playerVisible = false;
      monsterStore.monsterVisible = true;
      playerStore.outcome = "You lose!";
      playerStore.monsterCount = 1;
      monsterStore.checkTotalMonster();
    },

    checkGameEnd() {
      const playerStore = usePlayerStore();
      if (playerStore.floor >= 101) {
        alert("You have reached the end of the game! Congratulations!");
        alert(`You have reached level ${playerStore.playerLevel}!`);
        router.push("/");
      }
    },
  },
});
