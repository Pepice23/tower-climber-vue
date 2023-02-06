<template>
  <div class="row m-2">
    <StageDisplay />
    <div class="row m-2">
      <div class="col">
        <CharacterCard />
      </div>
      <div class="col">
        <h1>{outcome}</h1>
      </div>
      <div class="col">
        <MonsterCard />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button class="btn btn-primary attack-button" @click="addXP(50)">
          Start Battle
        </button>
      </div>
      <div class="col">
        <button class="btn btn-primary attack-button">Stop Battle</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StageDisplay from "../components/game/StageDisplay.vue";
import MonsterCard from "../components/game/MonsterCard.vue";
import CharacterCard from "../components/player/CharacterCard.vue";
import { usePlayerStore } from "../stores/playerStore";
import { useMonsterStore } from "../stores/monsterStore";
import { useFileOperationsStore } from "../stores/fileOperationsStore";
import { window } from "@tauri-apps/api";
import { TauriEvent } from "@tauri-apps/api/event";
import { appWindow } from "@tauri-apps/api/window";

const monsterStore = useMonsterStore();
monsterStore.setRandomMonsterAvatar();

const fileOperationsStore = useFileOperationsStore();

const playerStore = usePlayerStore();

window.getCurrent().listen(TauriEvent.WINDOW_CLOSE_REQUESTED, () => {
  fileOperationsStore.savePlayerToFile();
  // saveEquipmentToFile();
  // saveInventoryToFile();
  appWindow.close();
});

function addXP(xp: number) {
  playerStore.currentXP += xp;
}
</script>

<style scoped></style>
