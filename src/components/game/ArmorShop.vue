<template>
  <h1>Armor Shop</h1>
  <div class="row">
    <ArmorShopCard
      v-for="armor in armors"
      :key="armor.name"
      :armor="armor"
      class="m-2"
    />
  </div>
</template>

<script setup>
import ArmorShopCard from "./ArmorShopCard.vue";
import { armors } from "../../helpers/armorHelper.js";
</script>

<style scoped></style>
