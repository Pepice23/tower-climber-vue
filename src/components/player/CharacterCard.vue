<template>
  <div class="col text-white" v-if="playerStore.playerVisible">
    <h3>Level: {{ playerStore.playerLevel }}</h3>
    <img
      :src="playerStore.avatar.picturePath"
      :alt="playerStore.avatar.name"
      class="picture-size m-2"
    />
    <h3>
      Damage per Click:
      {{ numberFormatter.format(playerStore.playerDamagePerClick) }}
    </h3>
    <h3>
      Damage per Second:
      {{ numberFormatter.format(playerStore.playerDamagePerSecond) }}
    </h3>
    <XPBar />
  </div>
</template>

<script setup>
import { usePlayerStore } from "../../stores/playerStore";
import XPBar from "./XPBar.vue";
import { numberFormatter } from "../../helpers/playerHelper.js";

const playerStore = usePlayerStore();
</script>

<style scoped>
.picture-size {
  width: 100px;
  height: 100px;
}
</style>
