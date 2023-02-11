<template>
  <div class="row m-2">
    <h1>Equipment</h1>
    <div class="col equipment-border">
      <div class="row">
        <EquipmentCard
          :equipmentName="equipmentStore.weapon.equipmentName"
          :equipmentLevel="equipmentStore.weapon.equipmentLevel"
          :equipment-per-click-damage="
            equipmentStore.weapon.equipmentPerClickDamage
          "
          :equipmentPerSecDamage="equipmentStore.weapon.equipmentPerSecDamage"
          :equipmentRarity="equipmentStore.weapon.equipmentRarity"
          :picturePath="equipmentStore.weapon.picturePath"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import EquipmentCard from "./EquipmentCard.vue";
import { useEquipmentStore } from "../../stores/equipmentStore";
const equipmentStore = useEquipmentStore();
</script>

<style scoped>
.equipment-border {
  border: 1px solid black;
}
</style>
