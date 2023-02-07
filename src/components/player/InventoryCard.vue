<template>
  <div
    class="col m-2 inventory-border"
    :class="{
      'background-poor': item.equipmentRarity === 1,
      'background-uncommon': item.equipmentRarity === 2,
      'background-rare': item.equipmentRarity === 3,
      'background-epic': item.equipmentRarity === 4,
      'background-legendary': item.equipmentRarity === 5,
    }"
  >
    <button class="btn">
      <div class="row text-white">
        <div class="col">
          <img
            :src="item.picturePath"
            :alt="item.equipmentName"
            class="picture-size m-2"
          />
        </div>
        <div class="col">
          <h6>{{ item.equipmentName }}</h6>
          <h6>Level:{{ item.equipmentLevel }}</h6>
          <h6>Damage:{{ item.equipmentDamage }}</h6>
          <h6>Defense:{{ item.equipmentDefense }}</h6>
          <h5 class="text-success" v-if="item.dmgPercent > 0">
            DMG Difference: {{ item.dmgPercent }}%
          </h5>

          <h5 class="text-danger" v-if="item.dmgPercent < 0">
            DMG Difference: {{ item.dmgPercent }}%
          </h5>

          <h5 class="text-success" v-if="item.defPercent > 0">
            DEF Difference: {{ item.defPercent }}%
          </h5>

          <h5 class="text-danger" v-if="item.defPercent < 0">
            DEF Difference: {{ item.defPercent }}%
          </h5>
        </div>
      </div>
    </button>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
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
  background-color: #003292;
}

.background-epic {
  background-color: #50009f;
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
