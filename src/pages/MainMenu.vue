<template>
  <div class="row"><h1>Welcome to Tower Climber</h1></div>
  <div class="row m-2">
    <div class="col m-2">
      <button class="btn btn-primary" @click="newGame">New Game</button>
    </div>
    <div class="col m-2">
      <button class="btn btn-primary">Load Game</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "../router";
import { usePlayerStore } from "../stores/playerStore";

const store = usePlayerStore();

function newGame() {
  router.push("/creator");
  store.checkIfFolderExists();
}
</script>

<style scoped></style>
