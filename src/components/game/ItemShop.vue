<template>
  <div class="col m-2 card shop-card-size">
    <h1>Shop</h1>
    <div class="row">
      <div class="col">
        <button
          class="btn btn-primary button-size"
          :disabled="
            playerStore.money < 2000 ||
            playerStore.playerInventory.length === 30
          "
        >
          Buy Item
        </button>
        <h3>Item price: 2000 gold</h3>
        <h3>Hero's money: {{ playerStore.money }} gold</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "../../stores/playerStore";
const playerStore = usePlayerStore();
</script>

<style scoped>
.shop-card-size {
  width: 300px;
  height: 270px;
}

.button-size {
  width: 100px;
  height: 100px;
}
</style>
