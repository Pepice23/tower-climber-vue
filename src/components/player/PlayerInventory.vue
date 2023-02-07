<template>
  <h1>Players Inventory</h1>
  <div class="row m-2">
    <div class="col">
      <button class="btn btn-secondary">Sell All Poor Items</button>
    </div>
    <div class="col">
      <button class="btn btn-success">Sell All Uncommon Items</button>
    </div>
    <div class="col">
      <button class="btn btn-primary">Sell All Rare Items</button>
    </div>
    <div class="col">
      <button class="btn btn-info">Sell All Epic Items</button>
    </div>
    <div class="col">
      <button class="btn btn-warning">Sell All Legendary Items</button>
    </div>
  </div>
  <div class="row">
    <div class="col" v-for="item in playerStore.playerInventory">
      <InventoryCard :item="item" :key="item.id" />
    </div>
  </div>
</template>

<script setup>
import { usePlayerStore } from "../../stores/playerStore";
import InventoryCard from "./InventoryCard.vue";

const playerStore = usePlayerStore();
</script>

<style scoped></style>
