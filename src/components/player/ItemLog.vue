<template>
  <div class="row m-2">
    <h1>Item Log</h1>
    <h3 class="m-2">
      {{ playerStore.itemLog }}
    </h3>
  </div>
</template>

<script setup>
import { usePlayerStore } from "../../stores/playerStore.js";

const playerStore = usePlayerStore();
</script>

<style scoped></style>
