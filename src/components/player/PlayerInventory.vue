<template>
  <h1>Players Inventory</h1>
  <div class="row m-2">
    <div class="col">
      <button class="btn background-poor" @click="sellAllPoorItems">
        Sell All Poor Items
      </button>
    </div>
    <div class="col">
      <button class="btn background-uncommon" @click="sellAllUncommonItems">
        Sell All Uncommon Items
      </button>
    </div>
    <div class="col">
      <button class="btn background-rare" @click="sellAllRareItems">
        Sell All Rare Items
      </button>
    </div>
    <div class="col">
      <button class="btn background-epic" @click="sellAllEpicItems">
        Sell All Epic Items
      </button>
    </div>
    <div class="col">
      <button class="btn background-legendary" @click="sellAllLegendaryItems">
        Sell All Legendary Items
      </button>
    </div>
  </div>
  <div class="row inventory-border m-2">
    <div class="col" v-for="item in inventoryStore.playerInventory">
      <InventoryCard :item="item" :key="item.id" />
    </div>
  </div>
</template>

<script setup>
import InventoryCard from "./InventoryCard.vue";
import { useInventoryStore } from "../../stores/inventoryStore.js";

const inventoryStore = useInventoryStore();

const sellAllPoorItems = () => {
  inventoryStore.sellAllItem(1);
};

const sellAllUncommonItems = () => {
  inventoryStore.sellAllItem(2);
};

const sellAllRareItems = () => {
  inventoryStore.sellAllItem(3);
};
const sellAllEpicItems = () => {
  inventoryStore.sellAllItem(4);
};

const sellAllLegendaryItems = () => {
  inventoryStore.sellAllItem(5);
};
</script>

<style scoped>
.background-poor {
  background-color: #9d9d9d;
}

.background-uncommon {
  background-color: #1eff00;
}

.background-rare {
  background-color: #0070dd;
}

.background-epic {
  background-color: #a335ee;
}

.background-legendary {
  background-color: #ff8000;
}

.inventory-border {
  border: 1px solid black;
}
</style>
