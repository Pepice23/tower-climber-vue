<template>
  <div class="row m-2 equipment-border box-size">
    <div class="col">
      <div class="row m-2">
        <div class="col">
          <h3>Armor Name: {{ props.armor.name }}</h3>
          <h3>Available from floor: {{ props.armor.availableFromFloor }}</h3>
          <img
            :src="props.armor.imagePath"
            :alt="props.armor.name"
            class="picture-size"
          />
          <h3>Damage Multiplier: {{ props.armor.dmgMultiplier }}x</h3>
          <h3>Armor Recipe Price: {{ props.armor.price }}</h3>
          <button class="btn btn-primary">Buy Armor Recipe</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h3>Ores To Craft: {{ props.armor.oresToCraft }}</h3>
          <h3>
            Total Ore Price:
            {{ props.armor.oresToCraft * 10 * props.armor.dmgMultiplier }}
          </h3>
          <button class="btn btn-primary">Buy Ores</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h2>Crafting</h2>
          <button class="btn btn-primary" @click="craftArmor(armor)">
            Craft Armor
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePlayerStore } from "../../stores/playerStore.js";
import { useEquipmentStore } from "../../stores/equipmentStore.js";

const props = defineProps({
  armor: {
    type: Object,
    required: true,
  },
});

const playerStore = usePlayerStore();
const equipmentStore = useEquipmentStore();

function craftArmor(armor) {
  equipmentStore.armor = armor;
  playerStore.totalDamagePerClick();
  playerStore.totalDamagePerSec();
}
</script>

<style scoped>
.picture-size {
  width: 100px;
  height: 100px;
}
.equipment-border {
  border: 1px solid black;
}
.box-size {
  width: 400px;
  height: 600px;
}
</style>
