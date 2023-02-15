<template>
  <div class="progress position-relative text-black" style="height: 30px">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{
        width: (playerStore.currentXP / playerStore.nextLevelXP) * 100 + '%',
      }"
      aria-valuemin="1"
      aria-valuemax="100"
    ></div>
    <h5 class="justify-content-center d-flex position-absolute w-100">
      XP: {{ numberFormatter.format(playerStore.currentXP) }}/{{
        numberFormatter.format(playerStore.nextLevelXP)
      }}
    </h5>
  </div>
</template>

<script setup>
import { usePlayerStore } from "../../stores/playerStore";
import { numberFormatter } from "../../helpers/playerHelper.js";
const playerStore = usePlayerStore();
</script>

<style scoped></style>
