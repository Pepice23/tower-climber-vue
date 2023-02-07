<template>
  <h1>Players Inventory</h1>
  <div class="row m-2">
    <div class="col">
      <button class="btn btn-secondary" @click="sellAllPoorItems">
        Sell All Poor Items
      </button>
    </div>
    <div class="col">
      <button class="btn btn-success" @click="sellAllUncommonItems">
        Sell All Uncommon Items
      </button>
    </div>
    <div class="col">
      <button class="btn btn-primary" @click="sellAllRareItems">
        Sell All Rare Items
      </button>
    </div>
    <div class="col">
      <button class="btn btn-info" @click="sellAllEpicItems">
        Sell All Epic Items
      </button>
    </div>
    <div class="col">
      <button class="btn btn-warning" @click="sellAllLegendaryItems">
        Sell All Legendary Items
      </button>
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

const sellAllPoorItems = () => {
  playerStore.sellAllItem(1);
};

const sellAllUncommonItems = () => {
  playerStore.sellAllItem(2);
};

const sellAllRareItems = () => {
  playerStore.sellAllItem(3);
};
const sellAllEpicItems = () => {
  playerStore.sellAllItem(4);
};

const sellAllLegendaryItems = () => {
  playerStore.sellAllItem(5);
};
</script>

<style scoped></style>
