<template>
  <div class="row m-2">
    <div class="col">
      <div class="progress position-relative" style="height: 30px">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: store.floor + '%' }"
          aria-valuenow="{$floor}"
          aria-valuemin="1"
          aria-valuemax="100"
        ></div>
        <h5 class="justify-content-center d-flex position-absolute w-100">
          Floor: {{ store.floor }}/100
        </h5>
      </div>
    </div>
    <div class="col">
      <div class="progress position-relative" style="height: 30px">
        <div
          class="progress-bar"
          role="progressbar"
          :style="{ width: (store.monsterCount / 15) * 100 + '%' }"
          aria-valuemin="1"
          aria-valuemax="100"
        ></div>
        <h5 class="justify-content-center d-flex position-absolute w-100">
          Monster: {{ store.monsterCount }}/15
        </h5>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "../../stores/playerStore";
const store = usePlayerStore();
</script>

<style scoped></style>
