<template>
  <div class="col">
    <h3>Level: {{ playerStore.playerLevel }}</h3>
    <img
      :src="playerStore.avatar.picturePath"
      :alt="playerStore.avatar.name"
      class="picture-size m-2"
    />
    <h3>Damage: {{ playerStore.playerDamage }}</h3>
    <h3>Defense: {{ playerStore.playerDefense }}</h3>
    <XPBar />
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "../../stores/playerStore";
import XPBar from "./XPBar.vue";

const playerStore = usePlayerStore();
</script>

<style scoped>
.picture-size {
  width: 100px;
  height: 100px;
}
</style>
