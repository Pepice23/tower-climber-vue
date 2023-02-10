<template>
  <div class="progress position-relative text-black" style="height: 30px">
    <div
      class="progress-bar bg-success"
      role="progressbar"
      :style="{
        width:
          (monsterStore.monsterCurrentHP / monsterStore.monsterMaxHP) * 100 +
          '%',
      }"
      aria-valuemin="1"
      aria-valuemax="100"
    ></div>
    <h5 class="justify-content-center d-flex position-absolute w-100">
      HP: {{ monsterStore.monsterCurrentHP }}
    </h5>
  </div>
</template>

<script setup>
import { useMonsterStore } from "../../stores/monsterStore.js";
const monsterStore = useMonsterStore();
</script>

<style scoped></style>
