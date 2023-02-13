<template>
  <div class="col m-2 equipment-border text-white">
    <div class="row">
      <div class="col">
        <img :src="picturePath" :alt="armorName" class="picture-size m-2" />
      </div>
      <div class="col">
        <h6>{{ armorName }}</h6>
        <h6>Level:{{ availableFromLevel }}</h6>
        <h6>Ores To Craft:{{ oresToCraft }}</h6>
        <h6>Price:{{ price }}</h6>
        <h6>Damage Multiplier:{{ dmgMultiplier }}</h6>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  armorName: String,
  availableFromLevel: Number,
  oresToCraft: Number,
  price: Number,
  dmgMultiplier: Number,
  picturePath: String,
});
</script>

<style scoped>
.picture-size {
  width: 100px;
  height: 100px;
}
</style>
