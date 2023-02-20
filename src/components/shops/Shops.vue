<template>
  <div class="row">
    <h1 class="m-2">Shops</h1>
    <div class="col"><ItemShop /></div>
    <div class="col"><ArmorShop /></div>
    <div class="col"><UpgradeShop /></div>
  </div>
</template>

<script setup>
import ItemShop from "../game/ItemShop.vue";
import ArmorShop from "../game/ArmorShop.vue";
import UpgradeShop from "../game/UpgradeShop.vue";
</script>

<style scoped></style>
