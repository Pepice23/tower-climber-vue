<template>
  <div class="row">
    <h1>Choose your hero</h1>
  </div>
  <div class="row">
    <div class="col m-2" v-for="hero in heroes">
      <button
        class="btn"
        @click="selectHero(hero)"
        :class="playerStore.avatar.name === hero.name ? 'btn-success' : ''"
      >
        <img :src="hero.picturePath" :alt="hero.name" class="picture-size" />
      </button>
    </div>
    <div class="row">
      <button
        class="btn btn-primary"
        @click="savePlayerToFile"
        :disabled="heroSelected === false"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script setup>
import { heroes } from "../helpers/playerHelper";
import { usePlayerStore } from "../stores/playerStore";
import { ref } from "vue";
import router from "../router";
import { useFileOperationsStore } from "../stores/fileOperationsStore";

const playerStore = usePlayerStore();
const fileStore = useFileOperationsStore();

let heroSelected = ref(false);

function selectHero(hero) {
  playerStore.avatar = hero;
  heroSelected.value = true;
}

function savePlayerToFile() {
  fileStore.savePlayerToFile();
  alert("Hero Saved");
  router.push("/game");
}
</script>

<style>
.picture-size {
  width: 100px;
  height: 100px;
}
</style>
