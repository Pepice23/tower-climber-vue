<template>
  <div
    class="col m-2 equipment-border text-white"
    :class="{
      'background-poor': equipmentRarity === 1,
      'background-uncommon': equipmentRarity === 2,
      'background-rare': equipmentRarity === 3,
      'background-epic': equipmentRarity === 4,
      'background-legendary': equipmentRarity === 5,
    }"
  >
    <div class="row">
      <div class="col">
        <img :src="picturePath" :alt="equipmentName" class="picture-size m-2" />
      </div>
      <div class="col">
        <h6>{{ equipmentName }}</h6>
        <h6>Level:{{ equipmentLevel }}</h6>
        <h6>
          Damage/Click:{{ numberFormatter.format(equipmentPerClickDamage) }}
        </h6>
        <h6>Damage/Sec:{{ numberFormatter.format(equipmentPerSecDamage) }}</h6>
      </div>
    </div>
  </div>
</template>

<script setup>
import { numberFormatter } from "../../helpers/playerHelper.js";

defineProps({
  equipmentName: String,
  equipmentLevel: Number,
  equipmentPerClickDamage: Number,
  equipmentPerSecDamage: Number,
  equipmentRarity: Number,
  picturePath: String,
});
</script>

<style scoped>
.background-poor {
  background-color: #9d9d9d;
}

.background-uncommon {
  background-color: #1eff00;
}

.background-rare {
  background-color: #0070dd;
}

.background-epic {
  background-color: #a335ee;
}

.background-legendary {
  background-color: #ff8000;
}

.picture-size {
  width: 100px;
  height: 100px;
}

.equipment-border {
  border: 1px solid black;
}
</style>
