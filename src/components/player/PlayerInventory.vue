<template>
  <h1>Players Inventory</h1>
  <div class="row m-2">
    <div class="col">
      <button
        class="btn background-poor"
        @click="sellAllPoorItems"
        :disabled="!inventoryStore.poorButton"
      >
        Sell All Poor Items
      </button>
    </div>
    <div class="col">
      <button
        class="btn background-uncommon"
        @click="sellAllUncommonItems"
        :disabled="!inventoryStore.uncommonButton"
      >
        Sell All Uncommon Items
      </button>
    </div>
    <div class="col">
      <button
        class="btn background-rare"
        @click="sellAllRareItems"
        :disabled="!inventoryStore.rareButton"
      >
        Sell All Rare Items
      </button>
    </div>
    <div class="col">
      <button
        class="btn background-epic"
        @click="sellAllEpicItems"
        :disabled="!inventoryStore.epicButton"
      >
        Sell All Epic Items
      </button>
    </div>
    <div class="col">
      <button
        class="btn background-legendary"
        @click="sellAllLegendaryItems"
        :disabled="!inventoryStore.legendaryButton"
      >
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
  inventoryStore.poorButton = false;
};

const sellAllUncommonItems = () => {
  inventoryStore.sellAllItem(2);
  inventoryStore.uncommonButton = false;
};

const sellAllRareItems = () => {
  inventoryStore.sellAllItem(3);
  inventoryStore.rareButton = false;
};
const sellAllEpicItems = () => {
  inventoryStore.sellAllItem(4);
  inventoryStore.epicButton = false;
};

const sellAllLegendaryItems = () => {
  inventoryStore.sellAllItem(5);
  inventoryStore.legendaryButton = false;
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
