<template>
  <div class="row m-2 equipment-border box-size">
    <div class="col">
      <div class="row m-2">
        <div class="col">
          <h3>{{ props.upgrade.upgradeName }}</h3>
          <h3>{{ props.upgrade.description }}</h3>
          <h3>
            Level: {{ props.upgrade.currentLevel }}/{{ props.upgrade.maxLevel }}
          </h3>
          <h3>
            Upgrade Price: {{ numberFormatter.format(props.upgrade.cost) }} Gold
          </h3>
          <h3 v-if="props.upgrade.lootPercent">
            + {{ props.upgrade.lootPercent }} % Loot Chance
          </h3>
          <h3 v-if="props.upgrade.dmgPercent">
            + {{ props.upgrade.dmgPercent }} % Damage
          </h3>
          <button class="btn btn-primary" @click="buyUpgrade(upgrade)">
            Buy Upgrade
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { numberFormatter } from "../../helpers/playerHelper.js";
import { useUpgradeStore } from "../../stores/upgradeStore.js";
import { usePlayerStore } from "../../stores/playerStore.js";
const upgradeStore = useUpgradeStore();
const playerStore = usePlayerStore();

const props = defineProps({
  upgrade: {
    type: Object,
    required: true,
  },
});

function buyUpgrade(upgrade) {
  if (upgrade === upgradeStore.lootChanceUpgrade) {
    upgradeStore.upgradeLootChance();
    console.log(playerStore.lootChance);
    if (upgrade.currentLevel === upgrade.maxLevel) {
      upgradeStore.filterUpgrade(upgrade);
    }
  }
}
</script>

<style scoped>
.equipment-border {
  border: 1px solid black;
}
.box-size {
  width: 350px;
  height: 350px;
}
</style>
