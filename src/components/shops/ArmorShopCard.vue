<template>
  <div class="row m-2 equipment-border box-size">
    <div class="col">
      <div class="row m-2">
        <div class="col">
          <h3>{{ props.armor.name }}</h3>
          <h3>Available from floor: {{ props.armor.availableFromFloor }}</h3>
          <img
            :src="props.armor.imagePath"
            :alt="props.armor.name"
            class="picture-size"
          />
          <h3>Damage:{{ props.armor.dmgMultiplier }}x</h3>
          <h3>
            Recipe Price: {{ numberFormatter.format(props.armor.price) }} Gold
          </h3>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h3>
            Ores To Craft:
            {{ numberFormatter.format(props.armor.oresToCraft) }}
          </h3>
          <h3>
            Total Ore Price:
            {{
              numberFormatter.format(
                props.armor.oresToCraft * 10 * props.armor.dmgMultiplier
              )
            }}
            Gold
          </h3>
        </div>
      </div>
      <div class="row m-2">
        <div class="col">
          <h1>Crafting</h1>
          <h2>Total price: {{ numberFormatter.format(totalPrice) }} Gold</h2>
        </div>
      </div>
      <div class="row m-2">
        <div class="col">
          <button
            class="btn btn-success w-75"
            @click="craftArmor(armor)"
            :disabled="
              totalPrice > playerStore.money ||
              equipmentStore.armor === armor ||
              equipmentStore.armor.dmgMultiplier >= props.armor.dmgMultiplier
            "
          >
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
import { computed } from "vue";
import { useArmorStore } from "../../stores/armorStore.js";
import { numberFormatter } from "../../helpers/playerHelper.js";

const props = defineProps({
  armor: {
    type: Object,
    required: true,
  },
});

const playerStore = usePlayerStore();
const equipmentStore = useEquipmentStore();
const armorStore = useArmorStore();
const totalPrice = computed(() => {
  return (
    props.armor.oresToCraft * 10 * props.armor.dmgMultiplier + props.armor.price
  );
});

function craftArmor(armor) {
  playerStore.money -= totalPrice.value;
  equipmentStore.armor = armor;
  playerStore.totalDamagePerClick();
  playerStore.totalDamagePerSec();
  armorStore.filterArmor(armor);
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
