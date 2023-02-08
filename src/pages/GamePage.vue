<template>
  <div class="row m-2">
    <StageDisplay />
    <div class="row m-2">
      <div class="col">
        <CharacterCard />
      </div>
      <div class="col">
        <h1>{{ outcome }}</h1>
      </div>
      <div class="col">
        <MonsterCard />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button
          class="btn btn-primary attack-button"
          @click="startBattle"
          :disabled="battleStarted"
        >
          Start Battle
        </button>
      </div>
      <div class="col">
        <button
          class="btn btn-primary attack-button"
          @click="stopBattle"
          :disabled="battleEnded"
        >
          Stop Battle
        </button>
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
  </div>
</template>

<script setup>
import StageDisplay from "../components/game/StageDisplay.vue";
import MonsterCard from "../components/game/MonsterCard.vue";
import CharacterCard from "../components/player/CharacterCard.vue";
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

const monsterStore = useMonsterStore();
monsterStore.setRandomMonsterAvatar();

const fileOperationsStore = useFileOperationsStore();

const playerStore = usePlayerStore();
const inventoryStore = useInventoryStore();

const outcome = ref("");
const battleStarted = ref(false);
const battleEnded = ref(true);

window.getCurrent().listen(TauriEvent.WINDOW_CLOSE_REQUESTED, () => {
  fileOperationsStore.savePlayerToFile();
  fileOperationsStore.saveEquipmentToFile();
  fileOperationsStore.saveInventoryToFile();
  appWindow.close();
});

function battle() {
  if (
    playerStore.playerDamage >= monsterStore.monsterDefense &&
    monsterStore.monsterDamage <= playerStore.playerDefense
  ) {
    playerWins();
  } else {
    playerLoses();
  }
  setTimeout(() => {
    monsterStore.setRandomMonsterAvatar();
    monsterStore.monsterVisible = true;
    playerStore.playerVisible = true;
    outcome.value = "";
  }, 1000);
}

function playerWins() {
  playerStore.playerVisible = true;
  monsterStore.monsterVisible = false;
  outcome.value = "You win!";
  playerStore.monsterCount += 1;
  calculateXP();
  checkLevelUp();
  checkNextFloor();
  checkIfPlayerGetsLoot();
  addMoneyToPlayer();
  checkInventoryFull();
}

function calculateXP() {
  let xpPercent = getRandomNumber(4, 10);
  let base = xpPercent / 100;
  let xp = base * playerStore.nextLevelXP;
  playerStore.currentXP = Math.floor(playerStore.currentXP + xp);
}

function checkLevelUp() {
  if (playerStore.currentXP >= playerStore.nextLevelXP) {
    playerStore.playerLevel += 1;
    playerStore.playerDamage += 5;
    playerStore.playerDefense += 5;
    if (playerStore.currentXP >= playerStore.nextLevelXP) {
      playerStore.currentXP = playerStore.currentXP - playerStore.nextLevelXP;
    }
    playerStore.nextLevelXP = Math.floor(playerStore.nextLevelXP * 1.15);
  }
}

function checkNextFloor() {
  if (playerStore.monsterCount === 15) {
    playerStore.floor += 1;
    playerStore.monsterCount = 0;

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
    stopBattle();
  }
}

function playerLoses() {
  playerStore.playerVisible = false;
  monsterStore.monsterVisible = true;
  outcome.value = "You lose!";
  playerStore.monsterCount = 0;
}

function startBattle() {
  battleStarted.value = true;
  battleEnded.value = false;
  const combat = setInterval(battle, 1000);
}

function stopBattle() {
  battleStarted.value = false;
  battleEnded.value = true;
  clearInterval(combat);
}
</script>

<style scoped></style>
