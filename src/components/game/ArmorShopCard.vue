<template>
  <div
    class="row m-2 equipment-border"
    v-if="props.armor.availableFromFloor <= playerStore.floor"
  >
    <div class="row">
      <div class="col">
        <h3>Armor Name: {{ props.armor.name }}</h3>
        <img
          :src="props.armor.imagePath"
          :alt="props.armor.name"
          class="picture-size"
        />
        <h3>Damage Multiplier: {{ props.armor.dmgMultiplier }}</h3>
        <h3>Armor Price: {{ props.armor.price }}</h3>
        <button class="btn btn-primary">Buy Armor Recipe</button>
      </div>
      <div class="row">
        <div class="col">
          <h3>Ores To Craft: {{ props.armor.oresToCraft }}</h3>
          <h3>Ore Price: {{ props.armor.oresToCraft * 10 }}</h3>
          <button class="btn btn-primary">Buy Ore</button>
        </div>
        <div class="row">
          <div class="col">
            <h3>Crafting</h3>
            <button class="btn btn-primary">Craft Armor</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePlayerStore } from "../../stores/playerStore.js";

const props = defineProps({
  armor: {
    type: Object,
    required: true,
  },
});
const playerStore = usePlayerStore();
</script>

<style scoped>
.picture-size {
  width: 100px;
  height: 100px;
}
.equipment-border {
  border: 1px solid black;
}
</style>
