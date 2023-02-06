<template>
  <div class="row m-2">
    <StageDisplay />
    <div class="row m-2">
      <div class="col">
        <CharacterCard />
      </div>
      <div class="col">
        <h1>{outcome}</h1>
      </div>
      <div class="col">
        <MonsterCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StageDisplay from "../components/game/StageDisplay.vue";
import MonsterCard from "../components/game/MonsterCard.vue";
import CharacterCard from "../components/player/CharacterCard.vue";
import {useMonsterStore} from "../stores/monsterStore";

const monsterStore = useMonsterStore();
monsterStore.setRandomMonsterAvatar();
</script>

<style scoped></style>
