<template>
  <div class="col">
    <h3>Level: {{ store.playerLevel }}</h3>
    <img
      :src="store.avatar.picturePath"
      :alt="store.avatar.name"
      class="picture-size m-2"
    />
    <h3>Damage: {{ store.playerDamage }}</h3>
    <h3>Defense: {{ store.playerDefense }}</h3>
    <XPBar />
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "../../stores/playerStore";
import XPBar from "./XPBar.vue";

const store = usePlayerStore();
</script>

<style scoped>
.picture-size {
  width: 100px;
  height: 100px;
}
</style>
