<template>
  <h1>Armor Shop</h1>
  <div class="col" v-for="armor in armorStore.armors" :key="armor.name">
    <ArmorShopCard
      :armor="armor"
      class="m-2"
      v-if="armor.availableFromFloor <= playerStore.floor"
    />
  </div>
</template>

<script setup>
import ArmorShopCard from "./ArmorShopCard.vue";
import { useArmorStore } from "../../stores/armorStore.js";
import { usePlayerStore } from "../../stores/playerStore.js";

const armorStore = useArmorStore();
const playerStore = usePlayerStore();
</script>

<style scoped></style>
