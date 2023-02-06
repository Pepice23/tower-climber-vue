<template>
  <div class="row"><h1>Welcome to Tower Climber</h1></div>
  <div class="row m-2">
    <div class="col m-2">
      <button class="btn btn-primary" @click="newGame">New Game</button>
    </div>
    <div class="col m-2">
      <button
        class="btn btn-primary"
        @click="loadGame"
        :disabled="playerStore.hasSavedGame === false"
      >
        Load Game
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "../router";
import { useFileOperationsStore } from "../stores/fileOperationsStore";
import { usePlayerStore } from "../stores/playerStore";

const playerStore = usePlayerStore();
const fileStore = useFileOperationsStore();

checkForSave();
function checkForSave() {
  fileStore.checkIfSaveExists();
}

function newGame() {
  router.push("/creator");
  fileStore.checkIfFolderExists();
}

function loadGame() {
  fileStore.loadPlayerFromFile();
  fileStore.loadEquipmentFromFile();
  router.push("/game");
}
</script>

<style scoped></style>
