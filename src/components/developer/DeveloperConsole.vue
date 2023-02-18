<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col">
          <h6>Time Controls:</h6>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button
            class="btn btn-secondary m-2"
            @click="battleStore.changeTimer(1000)"
          >
            1x
          </button>
          <button
            class="btn btn-secondary m-2"
            @click="battleStore.changeTimer(500)"
          >
            2x
          </button>
          <button
            class="btn btn-secondary m-2"
            @click="battleStore.changeTimer(250)"
          >
            4x
          </button>
        </div>
      </div>
    </div>
    <div class="col">
      <h3>Total Monster Count:</h3>
      <h3>{{ monsterStore.totalMonster }}</h3>
    </div>
  </div>
</template>

<script setup>
import { useMonsterStore } from "../../stores/monsterStore";
import { useBattleStore } from "../../stores/battleStore";
const battleStore = useBattleStore();
const monsterStore = useMonsterStore();
</script>

<style scoped></style>
