<template>
  <div class="row m-2">
    <div class="col">
      <CharacterCard />
    </div>
    <div class="col">
      <h1>{{ playerStore.outcome }}</h1>
    </div>
    <div class="col m-2">
      <MonsterCard />
      <div v-if="playerStore.monsterCount === 15">
        <h3 class="text-white">Time remaining:</h3>
        <BossTimer />
      </div>
    </div>
  </div>
</template>

<script setup>
import CharacterCard from "../player/CharacterCard.vue";
import MonsterCard from "./MonsterCard.vue";
import { usePlayerStore } from "../../stores/playerStore";
import BossTimer from "../player/BossTimer.vue";

const playerStore = usePlayerStore();
</script>

<style scoped></style>
