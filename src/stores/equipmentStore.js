import { defineStore } from "pinia";

export const useEquipmentStore = defineStore("equipment", {
  state: () => ({
    weapon: {
      equipmentName: "Weapon",
      equipmentLevel: 0,
      equipmentPerClickDamage: 0,
      equipmentPerSecDamage: 0,
      equipmentRarity: 1,
      equipmentSlot: 1,
      dmgPercent: 0,
      defPercent: 0,
      picturePath: "",
    },
    armor: {
      armorName: "Armor",
      availableFromFloor: 0,
      price: 0,
      oresToCraft: 0,
      imagePath: "",
      dmgMultiplier: 0,
    },
  }),
  actions: {},
});
