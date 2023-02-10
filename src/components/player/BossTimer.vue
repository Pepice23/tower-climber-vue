<template>
  <div class="progress position-relative text-black m-2" style="height: 30px">
    <div
      class="progress-bar bg-danger"
      role="progressbar"
      :style="{
        width: (playerStore.bossTimer / playerStore.bossTimerMax) * 100 + '%',
      }"
      aria-valuemin="1"
      aria-valuemax="100"
    ></div>
    <h5 class="justify-content-center d-flex position-absolute w-100">
      {{ playerStore.bossTimer }} sec
    </h5>
  </div>
</template>

<script setup>
import { usePlayerStore } from "../../stores/playerStore";
const playerStore = usePlayerStore();
</script>

<style scoped></style>
