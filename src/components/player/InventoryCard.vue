<template>
  <div
    class="col m-2 inventory-border"
    :class="{
      'background-poor': props.item.equipmentRarity === 1,
      'background-uncommon': props.item.equipmentRarity === 2,
      'background-rare': props.item.equipmentRarity === 3,
      'background-epic': props.item.equipmentRarity === 4,
      'background-legendary': props.item.equipmentRarity === 5,
    }"
  >
    <button class="btn" @click="equipItem(item)">
      <div class="row text-white">
        <div class="col">
          <img
            :src="props.item.picturePath"
            :alt="props.item.equipmentName"
            class="picture-size m-2"
          />
        </div>
        <div class="col">
          <h6>{{ props.item.equipmentName }}</h6>
          <h6>Level:{{ props.item.equipmentLevel }}</h6>
          <h6>Damage:{{ props.item.equipmentDamage }}</h6>
          <h6>Defense:{{ props.item.equipmentDefense }}</h6>
          <h5 class="text-success" v-if="props.item.dmgPercent > 0">
            DMG Difference: {{ props.item.dmgPercent }}%
          </h5>

          <h5 class="text-danger" v-if="props.item.dmgPercent < 0">
            DMG Difference: {{ props.item.dmgPercent }}%
          </h5>

          <h5 class="text-success" v-if="props.item.defPercent > 0">
            DEF Difference: {{ props.item.defPercent }}%
          </h5>

          <h5 class="text-danger" v-if="props.item.defPercent < 0">
            DEF Difference: {{ props.item.defPercent }}%
          </h5>
        </div>
      </div>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
import { useEquipmentStore } from "../../stores/equipmentStore.js";
import { usePlayerStore } from "../../stores/playerStore.js";

const playerStore = usePlayerStore();
const equipmentStore = useEquipmentStore();

const equipItem = (item) => {
  if (item.equipmentSlot === 1) {
    equipmentStore.headArmor = item;
  }
  if (item.equipmentSlot === 2) {
    equipmentStore.shoulderArmor = item;
  }
  if (item.equipmentSlot === 3) {
    equipmentStore.chestArmor = item;
  }
  if (item.equipmentSlot === 4) {
    equipmentStore.handArmor = item;
  }
  if (item.equipmentSlot === 5) {
    equipmentStore.legArmor = item;
  }
  if (item.equipmentSlot === 6) {
    equipmentStore.footArmor = item;
  }
  if (item.equipmentSlot === 7) {
    equipmentStore.ring = item;
  }
  if (item.equipmentSlot === 8) {
    equipmentStore.trinket = item;
  }
  if (item.equipmentSlot === 9) {
    equipmentStore.necklace = item;
  }
  if (item.equipmentSlot === 10) {
    equipmentStore.weapon = item;
  }
  playerStore.equipItem(item);
};
</script>

<style scoped>
.background-poor {
  background-color: #9d9d9d;
}

.background-uncommon {
  background-color: #1eff00;
}

.background-rare {
  background-color: #003292;
}

.background-epic {
  background-color: #17a2b8;
}

.background-legendary {
  background-color: #ff8000;
}

.picture-size {
  width: 100px;
  height: 100px;
}

.inventory-border {
  border: 1px solid black;
}
</style>
