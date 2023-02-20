<template>
  <div
    class="row m-3"
    style="
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    "
    :style="{ backgroundImage: 'url(' + playerStore.background + ')' }"
  >
    <StageDisplay />
    <Battle />
    <div class="row m-2">
      <div class="col m-2">
        <button
          class="btn btn-dark"
          @click="playerAttack"
          :disabled="battleStore.monsterDied"
        >
          <img
            src="/assets/UI/attack-button.png"
            alt="attack button"
            class="attack-button"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Battle from "./Battle.vue";
import { useMonsterStore } from "../../stores/monsterStore.js";
import { usePlayerStore } from "../../stores/playerStore.js";
import { useBattleStore } from "../../stores/battleStore.js";
import StageDisplay from "./StageDisplay.vue";

const battleStore = useBattleStore();
const playerStore = usePlayerStore();
const monsterStore = useMonsterStore();
function playerAttack() {
  monsterStore.monsterCurrentHP -= playerStore.playerDamagePerClick;
  if (monsterStore.monsterCurrentHP <= 0) {
    monsterStore.monsterCurrentHP = 0;
  }
}
</script>

<style scoped>
.attack-button {
  width: 150px;
  height: 150px;
}
</style>
