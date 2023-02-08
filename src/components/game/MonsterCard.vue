<template>
  <div class="col" v-if="monsterStore.monsterVisible">
    <h3>Level: {{ playerStore.floor }}</h3>
    <img
      :src="monsterStore.monsterAvatar"
      alt="Monster"
      class="picture-size m-2"
    />
    <h3>Damage: {{ monsterStore.monsterDamage }}</h3>
    <h3>Defense: {{ monsterStore.monsterDefense }}</h3>
  </div>
</template>

<script setup>
import { usePlayerStore } from "../../stores/playerStore";
import { useMonsterStore } from "../../stores/monsterStore";
const playerStore = usePlayerStore();
const monsterStore = useMonsterStore();
</script>

<style scoped>
.picture-size {
  width: 100px;
  height: 100px;
}
</style>
