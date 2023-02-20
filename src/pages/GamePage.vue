<template>
  <DeveloperConsole />
  <BattleScreen />
  <div class="row">
    <div class="col">
      <PlayerEquipment />
    </div>
    <div class="col">
      <ItemLog />
    </div>
  </div>
  <Shops />
</template>

<script setup>
import { usePlayerStore } from "../stores/playerStore";
import { useMonsterStore } from "../stores/monsterStore";
import { useFileOperationsStore } from "../stores/fileOperationsStore";
import { useBattleStore } from "../stores/battleStore.js";

import ItemLog from "../components/player/ItemLog.vue";
import DeveloperConsole from "../components/developer/DeveloperConsole.vue";
import BattleScreen from "../components/game/BattleScreen.vue";
import Shops from "../components/shops/Shops.vue";
import PlayerEquipment from "../components/player/PlayerEquipment.vue";

import { window } from "@tauri-apps/api";
import { TauriEvent } from "@tauri-apps/api/event";
import { appWindow } from "@tauri-apps/api/window";

const monsterStore = useMonsterStore();
const fileOperationsStore = useFileOperationsStore();
const playerStore = usePlayerStore();
const battleStore = useBattleStore();

monsterStore.setRandomMonsterAvatar();

window.getCurrent().listen(TauriEvent.WINDOW_CLOSE_REQUESTED, () => {
  fileOperationsStore.savePlayerToFile();
  fileOperationsStore.saveEquipmentToFile();

  appWindow.close();
});

battleStore.battle();
</script>

<style scoped></style>
