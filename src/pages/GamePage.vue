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
          class="btn btn-primary attack-button"
          @click="startBattle"
          :disabled="battleStarted"
        >
          ATTACK!
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
      <PlayerInventory />
    </div>
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
import PlayerInventory from "../components/player/PlayerInventory.vue";
import { ref } from "vue";
import { getRandomNumber } from "../helpers/playerHelper.js";
import { useInventoryStore } from "../stores/inventoryStore.js";
import router from "../router/index.js";
import CombatScreen from "../components/game/CombatScreen.vue";

const monsterStore = useMonsterStore();
monsterStore.setRandomMonsterAvatar();

const fileOperationsStore = useFileOperationsStore();

const playerStore = usePlayerStore();
const inventoryStore = useInventoryStore();

const battleStarted = ref(false);
const battleEnded = ref(true);

let combat;
let timerBoss;

window.getCurrent().listen(TauriEvent.WINDOW_CLOSE_REQUESTED, () => {
  fileOperationsStore.savePlayerToFile();
  fileOperationsStore.saveEquipmentToFile();
  fileOperationsStore.saveInventoryToFile();
  appWindow.close();
});

function battle() {
  if (playerStore.monsterCount < 15) {
    combat = setInterval(() => {
      monsterStore.monsterCurrentHP -= playerStore.playerDamagePerSecond;
      if (monsterStore.monsterCurrentHP <= 0) {
        clearInterval(combat);
        playerWins();
        setTimeout(() => {
          monsterStore.setUpMonster();
          monsterStore.monsterVisible = true;
          playerStore.playerVisible = true;
          playerStore.outcome = "";
          battle();
        }, 1000);
      }
    }, 1000);
  }
  if (playerStore.monsterCount === 15) {
    timerBoss = setInterval(() => {
      playerStore.bossTimer -= 1;
      monsterStore.monsterCurrentHP -= playerStore.playerDamagePerSecond;
      if (playerStore.bossTimer <= 0 && monsterStore.monsterCurrentHP > 0) {
        clearInterval(timerBoss);
        playerLoses();
        setTimeout(() => {
          monsterStore.setUpMonster();
          monsterStore.monsterVisible = true;
          playerStore.playerVisible = true;
          playerStore.outcome = "";
          playerStore.bossTimer = 30;
          battle();
        }, 1000);
      } else if (
        playerStore.bossTimer > 0 &&
        monsterStore.monsterCurrentHP <= 0
      ) {
        clearInterval(timerBoss);
        playerWins();
        setTimeout(() => {
          monsterStore.setUpMonster();
          monsterStore.monsterVisible = true;
          playerStore.playerVisible = true;
          playerStore.outcome = "";
          playerStore.bossTimer = 30;
          battle();
        }, 1000);
      }
    }, 1000);
  }
}

function playerWins() {
  playerStore.playerVisible = true;
  monsterStore.monsterVisible = false;
  playerStore.outcome = "You win!";
  playerStore.monsterCount += 1;
  playerStore.calculateXP();
  playerStore.checkLevelUp();
  checkNextFloor();
  // checkIfPlayerGetsLoot();
  addMoneyToPlayer();
  // checkInventoryFull();
  checkGameEnd();
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

    inventoryStore.addItemToInventory();
  }
}
function checkIfPlayerGetsLoot() {
  let diceRoll = getRandomNumber(1, 100);
  if (diceRoll >= 80) {
    inventoryStore.addItemToInventory();
  }
}

function addMoneyToPlayer() {
  playerStore.money += getRandomNumber(
    playerStore.floor * playerStore.monsterCount,
    playerStore.floor * playerStore.monsterCount * 2
  );
}

function checkInventoryFull() {
  if (inventoryStore.playerInventory.length === 30) {
    alert("Your inventory is full! You can't pick up any more items.");
    // stopBattle();
  }
}

function checkGameEnd() {
  if (playerStore.floor >= 100) {
    // stopBattle();
    alert("You have reached the end of the game! Congratulations!");
    alert(`You have reached level ${playerStore.playerLevel}!`);
    router.push("/");
  }
}

battle();

// function stopBattle() {
//   battleStarted.value = false;
//   battleEnded.value = true;
//   clearInterval(combat);
// }
</script>

<style scoped>
.attack-button {
  width: 100px;
  height: 100px;
}
</style>
