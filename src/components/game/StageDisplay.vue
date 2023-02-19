<template>
  <div class="row m-2">
    <StageProgress
      :max="100"
      :current="playerStore.floor"
      name="Floor"
      :width="playerStore.floor"
    />
    <StageProgress
      :max="15"
      :current="playerStore.monsterCount"
      name="Monster"
      :width="(playerStore.monsterCount / 15) * 100"
      v-if="playerStore.monsterCount < 15"
    />
    <StageProgress
      :max="15"
      :current="playerStore.monsterCount"
      :boss="true"
      :width="(playerStore.monsterCount / 15) * 100"
      :bossProgress="`Boss of the ${playerStore.floor}th floor`"
      v-if="playerStore.monsterCount === 15"
    />
  </div>
</template>

<script setup>
import { usePlayerStore } from "../../stores/playerStore";
import StageProgress from "../StageProgress.vue";
const playerStore = usePlayerStore();
</script>

<style scoped></style>
