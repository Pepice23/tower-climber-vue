<template>
  <div class="col m-2">
    <h1>Weapon Shop</h1>
    <div class="row">
      <div class="col">
        <button
          class="btn btn-primary button-size"
          :disabled="playerStore.money < 2000"
          @click="buyItem"
        >
          Buy Item
        </button>
        <h3>Item price: 2000 gold</h3>
        <h3>Hero's money: {{ playerStore.money }} gold</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePlayerStore } from "../../stores/playerStore";

const playerStore = usePlayerStore();

function buyItem() {
  playerStore.getNewWeapon();
  playerStore.subtractMoney(2000);
}
</script>

<style scoped>
.button-size {
  width: 100px;
  height: 100px;
}
</style>
