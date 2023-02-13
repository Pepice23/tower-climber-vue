<template>
  <div
    class="row m-3"
    style="
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    "
    :style="{ backgroundImage: 'url(' + playerStore.background + ')' }"
  >
    <StageDisplay />
    <CombatScreen />
    <div class="row m-2">
      <div class="col m-2">
        <button
          class="btn btn-dark"
          @click="playerAttack"
          :disabled="monsterDied"
        >
          <img
            src="/assets/UI/attack-button.png"
            alt="attack button"
            class="attack-button"
          />
        </button>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="row">
        <PlayerEquipment />
        <div class="row">
          <ItemShop />
        </div>
      </div>
    </div>
    <div class="col">
      <ItemLog />
    </div>
  </div>
  <div class="row">
    <ArmorShop />
  </div>
</template>

<script setup>
import StageDisplay from "../components/game/StageDisplay.vue";
import { usePlayerStore } from "../stores/playerStore";
import { useMonsterStore } from "../stores/monsterStore";
import { useFileOperationsStore } from "../stores/fileOperationsStore";
import { window } from "@tauri-apps/api";
import { TauriEvent } from "@tauri-apps/api/event";
import { appWindow } from "@tauri-apps/api/window";
import PlayerEquipment from "../components/player/PlayerEquipment.vue";
import ItemShop from "../components/game/ItemShop.vue";

import { ref } from "vue";
import { getRandomNumber } from "../helpers/playerHelper.js";

import router from "../router/index.js";
import CombatScreen from "../components/game/CombatScreen.vue";
import ItemLog from "../components/player/ItemLog.vue";
import ArmorShop from "../components/game/ArmorShop.vue";

const monsterStore = useMonsterStore();
monsterStore.setRandomMonsterAvatar();

const fileOperationsStore = useFileOperationsStore();

const playerStore = usePlayerStore();

const monsterDied = ref(false);

let combat;
let timerBoss;

window.getCurrent().listen(TauriEvent.WINDOW_CLOSE_REQUESTED, () => {
  fileOperationsStore.savePlayerToFile();
  fileOperationsStore.saveEquipmentToFile();

  appWindow.close();
});

function battle() {
  if (playerStore.monsterCount < 15) {
    combat = setInterval(() => {
      monsterStore.monsterCurrentHP -= playerStore.playerDamagePerSecond;

      if (monsterStore.monsterCurrentHP <= 0) {
        newNormalBattleSetup();
      }
    }, 1000);
  }
  if (playerStore.monsterCount === 15) {
    timerBoss = setInterval(() => {
      playerStore.bossTimer -= 1;
      monsterStore.monsterCurrentHP -= playerStore.playerDamagePerSecond;
      if (playerStore.bossTimer <= 0 && monsterStore.monsterCurrentHP > 0) {
        monsterDied.value = true;
        clearInterval(timerBoss);
        playerLoses();
        afterBossBattleSetup();
      } else if (
        playerStore.bossTimer > 0 &&
        monsterStore.monsterCurrentHP <= 0
      ) {
        monsterDied.value = true;
        clearInterval(timerBoss);
        playerWins();
        afterBossBattleSetup();
      }
    }, 1000);
  }
}

function newNormalBattleSetup() {
  monsterDied.value = true;
  clearInterval(combat);
  playerWins();
  setTimeout(() => {
    monsterStore.setUpMonster();
    monsterStore.monsterVisible = true;
    playerStore.playerVisible = true;
    playerStore.outcome = "";
    battle();
    monsterDied.value = false;
    playerStore.itemLog = "";
  }, 1200);
}

function afterBossBattleSetup() {
  setTimeout(() => {
    monsterStore.setUpMonster();
    monsterStore.monsterVisible = true;
    playerStore.playerVisible = true;
    playerStore.outcome = "";
    playerStore.bossTimer = 30;
    battle();
    monsterDied.value = false;
    playerStore.itemLog = "";
  }, 1200);
}

function playerWins() {
  playerStore.playerVisible = true;
  monsterStore.monsterVisible = false;
  playerStore.outcome = "You win!";
  playerStore.monsterCount += 1;
  playerStore.calculateXP();
  playerStore.checkLevelUp();
  checkNextFloor();
  checkIfPlayerGetsLoot();
  addMoneyToPlayer();
  checkGameEnd();
}

function playerAttack() {
  monsterStore.monsterCurrentHP -= playerStore.playerDamagePerClick;
  if (monsterStore.monsterCurrentHP <= 0) {
    monsterStore.monsterCurrentHP = 0;
  }
}

function playerLoses() {
  playerStore.playerVisible = false;
  monsterStore.monsterVisible = true;
  playerStore.outcome = "You lose!";
  playerStore.monsterCount = 0;
}

function checkNextFloor() {
  if (playerStore.monsterCount > 15) {
    playerStore.floor += 1;
    playerStore.monsterCount = 1;
    playerGetsNewWeapon();
    playerStore.chooseRandomBackground();
  }
}

function playerGetsNewWeapon() {
  playerStore.getNewWeapon();
}

function checkIfPlayerGetsLoot() {
  const diceRoll = getRandomNumber(1, 100);
  if (diceRoll >= 80) {
    playerGetsNewWeapon();
  }
}

function addMoneyToPlayer() {
  playerStore.money += getRandomNumber(
    playerStore.floor * playerStore.monsterCount,
    playerStore.floor * playerStore.monsterCount * 2
  );
}

function checkGameEnd() {
  if (playerStore.floor >= 100) {
    stopBattle();
    alert("You have reached the end of the game! Congratulations!");
    alert(`You have reached level ${playerStore.playerLevel}!`);
    router.push("/");
  }
}

battle();

function stopBattle() {
  monsterDied.value = true;
  clearInterval(combat);
  clearInterval(timerBoss);
}
</script>

<style scoped>
.attack-button {
  width: 150px;
  height: 150px;
}
</style>
