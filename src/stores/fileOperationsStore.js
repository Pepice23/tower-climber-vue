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
import { useInventoryStore } from "./inventoryStore.js";

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
        playerStore.playerDefense = playerDataJson.character.defense;
        playerStore.currentXP = playerDataJson.character.currentXP;
        playerStore.nextLevelXP = playerDataJson.character.nextLevelXP;
        playerStore.floor = playerDataJson.character.floorNumber;
      } catch (e) {
        console.error(e);
      }
    },
    async saveEquipmentToFile() {
      const equipmentStore = useEquipmentStore();
      try {
        await writeFile(
          "tower-climber/equipmentSave.json",
          JSON.stringify({
            equipment: {
              headArmor: equipmentStore.headArmor,
              shoulderArmor: equipmentStore.shoulderArmor,
              chestArmor: equipmentStore.chestArmor,
              handArmor: equipmentStore.handArmor,
              legArmor: equipmentStore.legArmor,
              footArmor: equipmentStore.footArmor,
              ringArmor: equipmentStore.ring,
              trinketArmor: equipmentStore.trinket,
              necklaceArmor: equipmentStore.necklace,
              weapon: equipmentStore.weapon,
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
      try {
        const equipment = await readTextFile(
          "tower-climber/equipmentSave.json",
          {
            dir: BaseDirectory.Document,
          }
        );
        const equipmentJson = JSON.parse(equipment);
        equipmentStore.headArmor = equipmentJson.equipment.headArmor;
        equipmentStore.shoulderArmor = equipmentJson.equipment.shoulderArmor;
        equipmentStore.chestArmor = equipmentJson.equipment.chestArmor;
        equipmentStore.handArmor = equipmentJson.equipment.handArmor;
        equipmentStore.legArmor = equipmentJson.equipment.legArmor;
        equipmentStore.footArmor = equipmentJson.equipment.footArmor;
        equipmentStore.ring = equipmentJson.equipment.ringArmor;
        equipmentStore.trinket = equipmentJson.equipment.trinketArmor;
        equipmentStore.necklace = equipmentJson.equipment.necklaceArmor;
        equipmentStore.weapon = equipmentJson.equipment.weapon;
      } catch (e) {
        console.error(e);
      }
    },
    async saveInventoryToFile() {
      const playerStore = usePlayerStore();
      const inventoryStore = useInventoryStore();
      try {
        await writeFile(
          "tower-climber/inventorySave.json",
          JSON.stringify({
            inventory: inventoryStore.playerInventory,
            itemStartId: playerStore.itemStartId,
          }),
          {
            dir: BaseDirectory.Document,
          }
        );
      } catch (e) {
        console.error(e);
      }
    },
    async loadInventoryFromFile() {
      const playerStore = usePlayerStore();
      const inventoryStore = useInventoryStore();
      try {
        const inventory = await readTextFile(
          "tower-climber/inventorySave.json",
          {
            dir: BaseDirectory.Document,
          }
        );
        const inventoryJson = JSON.parse(inventory);
        inventoryStore.playerInventory = inventoryJson.inventory;
        playerStore.itemStartId = inventoryJson.itemStartId;
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
