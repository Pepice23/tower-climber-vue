<template>
  <h1>Upgrade Shop</h1>
  <div class="col" v-for="upgrade in upgradeStore.normalUpgrades">
    <UpgradeShopCard :upgrade="upgrade" class="m-2" />
  </div>
</template>

<script setup>
import UpgradeShopCard from "./UpgradeShopCard.vue";
import { useUpgradeStore } from "../../stores/upgradeStore.js";
const upgradeStore = useUpgradeStore();
</script>

<style scoped></style>
