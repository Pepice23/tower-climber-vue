import { defineStore } from "pinia";
import {
  BaseDirectory,
  createDir,
  exists,
  readTextFile,
  writeFile,
} from "@tauri-apps/api/fs";
import { usePlayerStore } from "./playerStore";
import { useEquipmentStore } from "./equipmentStore";
import { useArmorStore } from "./armorStore.js";

export const useFileOperationsStore = defineStore("fileOperations", {
  state: () => ({}),
  actions: {
    async savePlayerToFile() {
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
            },
          }),
          {
            dir: BaseDirectory.Document,
          }
        );
      } catch (e) {
        console.error(e);
      }
    },
    async loadPlayerFromFile() {
      const playerStore = usePlayerStore();
      try {
        const playerData = await readTextFile("tower-climber/playerSave.json", {
          dir: BaseDirectory.Document,
        });
        const playerDataJson = JSON.parse(playerData);
        playerStore.avatar = playerDataJson.character.avatar;
        playerStore.playerLevel = playerDataJson.character.level;
        playerStore.money = playerDataJson.character.money;
        playerStore.playerDamagePerSecond =
          playerDataJson.character.damagePerSec;
        playerStore.playerDamagePerClick =
          playerDataJson.character.damagePerClick;
        playerStore.currentXP = playerDataJson.character.currentXP;
        playerStore.nextLevelXP = playerDataJson.character.nextLevelXP;
        playerStore.floor = playerDataJson.character.floorNumber;
      } catch (e) {
        console.error(e);
      }
    },
    async saveEquipmentToFile() {
      const equipmentStore = useEquipmentStore();
      const armorStore = useArmorStore();
      try {
        await writeFile(
          "tower-climber/equipmentSave.json",
          JSON.stringify({
            equipment: {
              weapon: equipmentStore.weapon,
              armor: equipmentStore.armor,
              availableArmors: armorStore.armors,
            },
          }),
          {
            dir: BaseDirectory.Document,
          }
        );
      } catch (e) {
        console.error(e);
      }
    },
    async loadEquipmentFromFile() {
      const equipmentStore = useEquipmentStore();
      const armorStore = useArmorStore();
      try {
        const equipment = await readTextFile(
          "tower-climber/equipmentSave.json",
          {
            dir: BaseDirectory.Document,
          }
        );
        const equipmentJson = JSON.parse(equipment);
        equipmentStore.weapon = equipmentJson.equipment.weapon;
        equipmentStore.armor = equipmentJson.equipment.armor;
        armorStore.armors = equipmentJson.equipment.availableArmors;
      } catch (e) {
        console.error(e);
      }
    },

    async checkIfFolderExists() {
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
    },
    async checkIfSaveExists() {
      const playerStore = usePlayerStore();
      playerStore.hasSavedGame = await exists("tower-climber/playerSave.json", {
        dir: BaseDirectory.Document,
      });
    },
  },
});
