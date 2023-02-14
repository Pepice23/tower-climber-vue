<template>
  <div class="col m-2 equipment-border text-black">
    <div class="row">
      <div class="col">
        <img
          :src="equipmentStore.armor.imagePath"
          :alt="equipmentStore.armor.name"
          class="picture-size m-2"
        />
      </div>
      <div class="col">
        <h3>{{ equipmentStore.armor.name }}</h3>
        <h3>Damage Multiplier:{{ equipmentStore.armor.dmgMultiplier }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useEquipmentStore } from "../../stores/equipmentStore.js";
const equipmentStore = useEquipmentStore();
</script>

<style scoped>
.picture-size {
  width: 100px;
  height: 100px;
}
</style>
