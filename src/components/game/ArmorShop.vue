<template>
  <h1>Armor Shop</h1>
  <div class="col" v-for="armor in armors" :key="armor.name">
    <ArmorShopCard :armor="armor" class="m-2" />
  </div>
</template>

<script setup>
import ArmorShopCard from "./ArmorShopCard.vue";
import { armors } from "../../helpers/armorHelper.js";
import { usePlayerStore } from "../../stores/playerStore.js";

const playerStore = usePlayerStore();
</script>

<style scoped></style>
