<template>
  <div class="row m-2">
    <h1>Equipment</h1>
    <div class="col equipment-border">
      <div class="row">
        <EquipmentCard
          :equipmentName="equipmentStore.headArmor.equipmentName"
          :equipmentLevel="equipmentStore.headArmor.equipmentLevel"
          :equipmentDamage="equipmentStore.headArmor.equipmentDamage"
          :equipmentDefense="equipmentStore.headArmor.equipmentDefense"
          :equipmentRarity="equipmentStore.headArmor.equipmentRarity"
          :picturePath="equipmentStore.headArmor.picturePath"
        />
        <EquipmentCard
          :equipmentName="equipmentStore.shoulderArmor.equipmentName"
          :equipmentLevel="equipmentStore.shoulderArmor.equipmentLevel"
          :equipmentDamage="equipmentStore.shoulderArmor.equipmentDamage"
          :equipmentDefense="equipmentStore.shoulderArmor.equipmentDefense"
          :equipmentRarity="equipmentStore.shoulderArmor.equipmentRarity"
          :picturePath="equipmentStore.shoulderArmor.picturePath"
        />
        <EquipmentCard
          :equipmentName="equipmentStore.chestArmor.equipmentName"
          :equipmentLevel="equipmentStore.chestArmor.equipmentLevel"
          :equipmentDamage="equipmentStore.chestArmor.equipmentDamage"
          :equipmentDefense="equipmentStore.chestArmor.equipmentDefense"
          :equipmentRarity="equipmentStore.chestArmor.equipmentRarity"
          :picturePath="equipmentStore.chestArmor.picturePath"
        />
      </div>
      <div class="row">
        <EquipmentCard
          :equipmentName="equipmentStore.handArmor.equipmentName"
          :equipmentLevel="equipmentStore.handArmor.equipmentLevel"
          :equipmentDamage="equipmentStore.handArmor.equipmentDamage"
          :equipmentDefense="equipmentStore.handArmor.equipmentDefense"
          :equipmentRarity="equipmentStore.handArmor.equipmentRarity"
          :picturePath="equipmentStore.handArmor.picturePath"
        />
        <EquipmentCard
          :equipmentName="equipmentStore.legArmor.equipmentName"
          :equipmentLevel="equipmentStore.legArmor.equipmentLevel"
          :equipmentDamage="equipmentStore.legArmor.equipmentDamage"
          :equipmentDefense="equipmentStore.legArmor.equipmentDefense"
          :equipmentRarity="equipmentStore.legArmor.equipmentRarity"
          :picturePath="equipmentStore.legArmor.picturePath"
        />
        <EquipmentCard
          :equipmentName="equipmentStore.footArmor.equipmentName"
          :equipmentLevel="equipmentStore.footArmor.equipmentLevel"
          :equipmentDamage="equipmentStore.footArmor.equipmentDamage"
          :equipmentDefense="equipmentStore.footArmor.equipmentDefense"
          :equipmentRarity="equipmentStore.footArmor.equipmentRarity"
          :picturePath="equipmentStore.footArmor.picturePath"
        />
      </div>
      <div class="row">
        <EquipmentCard
          :equipmentName="equipmentStore.ring.equipmentName"
          :equipmentLevel="equipmentStore.ring.equipmentLevel"
          :equipmentDamage="equipmentStore.ring.equipmentDamage"
          :equipmentDefense="equipmentStore.ring.equipmentDefense"
          :equipmentRarity="equipmentStore.ring.equipmentRarity"
          :picturePath="equipmentStore.ring.picturePath"
        />
        <EquipmentCard
          :equipmentName="equipmentStore.trinket.equipmentName"
          :equipmentLevel="equipmentStore.trinket.equipmentLevel"
          :equipmentDamage="equipmentStore.trinket.equipmentDamage"
          :equipmentDefense="equipmentStore.trinket.equipmentDefense"
          :equipmentRarity="equipmentStore.trinket.equipmentRarity"
          :picturePath="equipmentStore.trinket.picturePath"
        />
        <EquipmentCard
          :equipmentName="equipmentStore.necklace.equipmentName"
          :equipmentLevel="equipmentStore.necklace.equipmentLevel"
          :equipmentDamage="equipmentStore.necklace.equipmentDamage"
          :equipmentDefense="equipmentStore.necklace.equipmentDefense"
          :equipmentRarity="equipmentStore.necklace.equipmentRarity"
          :picturePath="equipmentStore.necklace.picturePath"
        />
      </div>
      <div class="row">
        <EquipmentCard
          :equipmentName="equipmentStore.weapon.equipmentName"
          :equipmentLevel="equipmentStore.weapon.equipmentLevel"
          :equipmentDamage="equipmentStore.weapon.equipmentDamage"
          :equipmentDefense="equipmentStore.weapon.equipmentDefense"
          :equipmentRarity="equipmentStore.weapon.equipmentRarity"
          :picturePath="equipmentStore.weapon.picturePath"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EquipmentCard from "./EquipmentCard.vue";
import { useEquipmentStore } from "../../stores/equipmentStore";
const equipmentStore = useEquipmentStore();
</script>

<style scoped>
.equipment-border {
  border: 1px solid black;
}
</style>
