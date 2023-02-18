<template>
  <DeveloperConsole />
  <div
    class="row m-3"
    style="
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    "
    :style="{ backgroundImage: 'url(' + playerStore.background + ')' }"
  >
    <StageDisplay />
    <CombatScreen />
    <div class="row m-2">
      <div class="col m-2">
        <button
          class="btn btn-dark"
          @click="playerAttack"
          :disabled="battleStore.monsterDied"
        >
          <img
            src="/assets/UI/attack-button.png"
            alt="attack button"
            class="attack-button"
          />
        </button>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="row">
        <PlayerEquipment />
        <div class="row">
          <ItemShop />
        </div>
      </div>
    </div>
    <div class="col">
      <ItemLog />
    </div>
  </div>
  <div class="row">
    <ArmorShop />
  </div>
</template>

<script setup>
import StageDisplay from "../components/game/StageDisplay.vue";
import { usePlayerStore } from "../stores/playerStore";
import { useMonsterStore } from "../stores/monsterStore";
import { useFileOperationsStore } from "../stores/fileOperationsStore";
import { window } from "@tauri-apps/api";
import { TauriEvent } from "@tauri-apps/api/event";
import { appWindow } from "@tauri-apps/api/window";
import PlayerEquipment from "../components/player/PlayerEquipment.vue";
import ItemShop from "../components/game/ItemShop.vue";

import CombatScreen from "../components/game/CombatScreen.vue";
import ItemLog from "../components/player/ItemLog.vue";
import ArmorShop from "../components/game/ArmorShop.vue";
import { useBattleStore } from "../stores/battleStore.js";
import DeveloperConsole from "../components/developer/DeveloperConsole.vue";

const monsterStore = useMonsterStore();
monsterStore.setRandomMonsterAvatar();

const fileOperationsStore = useFileOperationsStore();

const playerStore = usePlayerStore();
const battleStore = useBattleStore();

window.getCurrent().listen(TauriEvent.WINDOW_CLOSE_REQUESTED, () => {
  fileOperationsStore.savePlayerToFile();
  fileOperationsStore.saveEquipmentToFile();

  appWindow.close();
});

function playerAttack() {
  monsterStore.monsterCurrentHP -= playerStore.playerDamagePerClick;
  if (monsterStore.monsterCurrentHP <= 0) {
    monsterStore.monsterCurrentHP = 0;
  }
}

battleStore.battle();
</script>

<style scoped>
.attack-button {
  width: 150px;
  height: 150px;
}
</style>
