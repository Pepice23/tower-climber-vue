<template>
  <div class="col text-white" v-if="monsterStore.monsterVisible">
    <h3>Level: {{ playerStore.floor }}</h3>
    <img
      :src="monsterStore.monsterAvatar"
      alt="Monster"
      class="picture-size m-2"
    />
    <MonsterHPBar />
  </div>
</template>

<script setup>
import { usePlayerStore } from "../../stores/playerStore";
import { useMonsterStore } from "../../stores/monsterStore";
import MonsterHPBar from "./MonsterHPBar.vue";
const playerStore = usePlayerStore();
const monsterStore = useMonsterStore();
</script>

<style scoped>
.picture-size {
  width: 100px;
  height: 100px;
}
</style>
