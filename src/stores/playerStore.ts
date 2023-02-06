import { defineStore } from "pinia";

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
  actions: {},
});
