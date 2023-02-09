<template>
  <div class="inventory-border m-2 text-white card-size">
    <div
      class="row m-2"
      :class="{
        'background-poor': props.item.equipmentRarity === 1,
        'background-uncommon': props.item.equipmentRarity === 2,
        'background-rare': props.item.equipmentRarity === 3,
        'background-epic': props.item.equipmentRarity === 4,
        'background-legendary': props.item.equipmentRarity === 5,
      }"
    >
      <div class="col m-2">
        <button @click="equipItem(item)">
          <img
            :src="props.item.picturePath"
            :alt="props.item.equipmentName"
            class="picture-size m-2"
          />
        </button>
      </div>
      <div class="col m-2">
        <h6>{{ props.item.equipmentName }}</h6>
        <h6>Level:{{ props.item.equipmentLevel }}</h6>
        <h6>Damage:{{ props.item.equipmentDamage }}</h6>
        <h6>Defense:{{ props.item.equipmentDefense }}</h6>
      </div>
    </div>
    <div class="row">
      <div class="col">
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

.inventory-border {
  border: 1px solid black;
}

.card-size {
  width: 245px;
  height: 345px;
}
</style>
