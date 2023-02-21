import { defineStore } from "pinia";
import { usePlayerStore } from "./playerStore.js";

import {
  writeFile,
  BaseDirectory,
  readTextFile,
  exists,
  createDir,
} from "@tauri-apps/api/fs";
import { useMonsterStore } from "./monsterStore.js";
import { useEquipmentStore } from "./equipmentStore.js";
import { useArmorStore } from "./armorStore.js";
import { useUpgradeStore } from "./upgradeStore.js";

export const useFileOperationsStore = defineStore("fileOperations", () => {
  async function savePlayerToFile() {
    const playerStore = usePlayerStore();
    try {
      await writeFile(
        "tower-climber/playerSave.json",
        JSON.stringify({
          character: {
            avatar: playerStore.avatar,
            level: playerStore.playerLevel,
            money: playerStore.money,
            damagePerSec: playerStore.playerDamagePerSecond,
            damagePerClick: playerStore.playerDamagePerClick,
            currentXP: playerStore.currentXP,
            nextLevelXP: playerStore.nextLevelXP,
            floorNumber: playerStore.floor,
            totalMonster: (playerStore.floor - 1) * 15 + 1,
          },
        }),
        {
          dir: BaseDirectory.Document,
        }
      );
    } catch (e) {
      console.error(e);
    }
  }

  async function loadPlayerFromFile() {
    const playerStore = usePlayerStore();
    try {
      const playerData = await readTextFile("tower-climber/playerSave.json", {
        dir: BaseDirectory.Document,
      });
      const playerDataJson = JSON.parse(playerData);
      const monsterStore = useMonsterStore();
      playerStore.avatar = playerDataJson.character.avatar;
      playerStore.playerLevel = playerDataJson.character.level;
      playerStore.money = playerDataJson.character.money;
      playerStore.playerDamagePerSecond = playerDataJson.character.damagePerSec;
      playerStore.playerDamagePerClick =
        playerDataJson.character.damagePerClick;
      playerStore.currentXP = playerDataJson.character.currentXP;
      playerStore.nextLevelXP = playerDataJson.character.nextLevelXP;
      playerStore.floor = playerDataJson.character.floorNumber;
      monsterStore.totalMonster = playerDataJson.character.totalMonster;
    } catch (e) {
      console.error(e);
    }
  }

  async function saveEquipmentToFile() {
    const equipmentStore = useEquipmentStore();
    const armorStore = useArmorStore();
    const upgradeStore = useUpgradeStore();
    try {
      await writeFile(
        "tower-climber/equipmentSave.json",
        JSON.stringify({
          equipment: {
            weapon: equipmentStore.weapon,
            armor: equipmentStore.armor,
            availableArmors: armorStore.armors,
            availableUpgrades: upgradeStore.normalUpgrades,
          },
        }),
        {
          dir: BaseDirectory.Document,
        }
      );
    } catch (e) {
      console.error(e);
    }
  }

  async function loadEquipmentFromFile() {
    const equipmentStore = useEquipmentStore();
    const armorStore = useArmorStore();
    const upgradeStore = useUpgradeStore();
    try {
      const equipment = await readTextFile("tower-climber/equipmentSave.json", {
        dir: BaseDirectory.Document,
      });
      const equipmentJson = JSON.parse(equipment);
      equipmentStore.weapon = equipmentJson.equipment.weapon;
      equipmentStore.armor = equipmentJson.equipment.armor;
      armorStore.armors.value = equipmentJson.equipment.availableArmors;
      upgradeStore.normalUpgrades = equipmentJson.equipment.availableUpgrades;
    } catch (e) {
      console.error(e);
    }
  }

  async function checkIfFolderExists() {
    try {
      const folderExists = await exists("tower-climber", {
        dir: BaseDirectory.Document,
      });
      if (!folderExists) {
        await createDir("tower-climber", {
          dir: BaseDirectory.Document,
          recursive: true,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
  async function checkIfSaveExists() {
    const playerStore = usePlayerStore();
    playerStore.hasSavedGame = await exists("tower-climber/playerSave.json", {
      dir: BaseDirectory.Document,
    });
  }

  return {
    savePlayerToFile,
    loadPlayerFromFile,
    saveEquipmentToFile,
    loadEquipmentFromFile,
    checkIfFolderExists,
    checkIfSaveExists,
  };
});
