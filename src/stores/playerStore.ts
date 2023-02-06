import { defineStore } from "pinia";
import {
  BaseDirectory,
  createDir,
  exists,
  writeFile,
} from "@tauri-apps/api/fs";

export const usePlayerStore = defineStore("player", {
  state: () => ({
    playerDamage: 10,
    playerDefense: 10,
    playerLevel: 1,
    money: 0,
    floor: 1,
    monsterCount: 0,
    currentXP: 0,
    nextLevelXP: 50,
    avatar: {},
    playerInventory: [],
    itemStartId: 0,
    hasSavedGame: false,
  }),
  actions: {
    async savePlayerToFile() {
      try {
        await writeFile(
          "tower-climber/playerSave.json",
          JSON.stringify({
            character: {
              avatar: this.avatar,
              level: this.playerLevel,
              money: this.money,
              damage: this.playerDamage,
              defense: this.playerDefense,
              currentXP: this.currentXP,
              nextLevelXP: this.nextLevelXP,
              floorNumber: this.floor,
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
      this.hasSavedGame = await exists("tower-climber/playerSave.json", {
        dir: BaseDirectory.Document,
      });
    },
  },
});
