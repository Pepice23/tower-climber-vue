import { defineStore } from "pinia";
import {
  BaseDirectory,
  createDir,
  exists, readTextFile,
  writeFile,
} from "@tauri-apps/api/fs";
import { usePlayerStore } from "./playerStore";

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
              damage: playerStore.playerDamage,
              defense: playerStore.playerDefense,
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
        playerStore.playerDamage = playerDataJson.character.damage;
        playerStore.playerDamage = playerDataJson.character.defense;
        playerStore.currentXP = playerDataJson.character.currentXP;
        playerStore.nextLevelXP = playerDataJson.character.nextLevelXP;
        playerStore.floor = playerDataJson.character.floorNumber;
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
