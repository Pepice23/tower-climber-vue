import { defineStore } from "pinia";
import { ref } from "vue";
import { usePlayerStore } from "./playerStore.js";
import { useMonsterStore } from "./monsterStore.js";
import router from "../router/index.js";

export const useBattleStore = defineStore("battle", () => {
  const monsterDied = ref(false);

  function battle() {
    const playerStore = usePlayerStore();
    if (playerStore.monsterCount < 15) {
      normalBattle();
    }
    if (playerStore.monsterCount === 15) {
      bossBattle();
    }
  }

  function newBattleSetup() {
    const monsterStore = useMonsterStore();
    const playerStore = usePlayerStore();

    setTimeout(() => {
      monsterStore.setUpMonster();
      monsterStore.monsterVisible = true;
      playerStore.playerVisible = true;
      playerStore.outcome = "";
      battle();
      if (playerStore.bossTimer !== 30) {
        playerStore.bossTimer = 30;
      }
      monsterDied.value = false;
    }, 1000);
  }

  function normalBattle() {
    const monsterStore = useMonsterStore();
    const playerStore = usePlayerStore();

    const combat = setInterval(() => {
      monsterStore.monsterCurrentHP -= playerStore.playerDamagePerSecond;
      if (monsterStore.monsterCurrentHP <= 0) {
        monsterStore.monsterCurrentHP = 0;
        clearInterval(combat);
        playerWins();
        monsterDied.value = true;
        newBattleSetup();
      }
    }, 1000);
  }

  function bossBattle() {
    const playerStore = usePlayerStore();
    const monsterStore = useMonsterStore();
    const timerBoss = setInterval(() => {
      playerStore.bossTimer -= 1;
      monsterStore.monsterCurrentHP -= playerStore.playerDamagePerSecond;
      if (playerStore.bossTimer <= 0 && monsterStore.monsterCurrentHP > 0) {
        monsterDied.value = true;
        clearInterval(timerBoss);
        playerLoses();
        newBattleSetup();
      }
      if (playerStore.bossTimer > 0 && monsterStore.monsterCurrentHP <= 0) {
        monsterDied.value = true;
        clearInterval(timerBoss);
        playerWins();
        newBattleSetup();
      }
    }, 1000);
  }
  function playerWins() {
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
    checkGameEnd();
  }

  function playerLoses() {
    const playerStore = usePlayerStore();
    const monsterStore = useMonsterStore();

    playerStore.playerVisible = false;
    monsterStore.monsterVisible = true;
    playerStore.outcome = "You lose!";
    playerStore.monsterCount = 1;
    monsterStore.checkTotalMonster();
  }

  function checkGameEnd() {
    const playerStore = usePlayerStore();
    if (playerStore.floor >= 101) {
      alert("You have reached the end of the game! Congratulations!");
      alert(`You have reached level ${playerStore.playerLevel}!`);
      router.push("/");
    }
  }

  return {
    battle,
    monsterDied,
  };
});
