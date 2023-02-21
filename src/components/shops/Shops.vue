<template>
  <div class="row">
    <h1 class="m-2">Shops</h1>
    <div class="col"><ItemShop /></div>
    <div class="col"><ArmorShop /></div>
    <div class="col"><UpgradeShop /></div>
  </div>
</template>

<script setup>
import ItemShop from "./ItemShop.vue";
import ArmorShop from "./ArmorShop.vue";
import UpgradeShop from "./UpgradeShop.vue";
</script>

<style scoped></style>
