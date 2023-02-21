<template>
  <div class="col m-2 equipment-border text-black">
    <div class="row">
      <div class="col">
        <img
          :src="props.equipment.imagePath"
          :alt="props.equipment.name"
          class="picture-size m-2"
        />
      </div>
      <div class="col">
        <h3>{{ props.equipment.name }}</h3>
        <h3>Damage Multiplier:{{ props.equipment.dmgMultiplier }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  equipment: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.picture-size {
  width: 100px;
  height: 100px;
}
</style>
