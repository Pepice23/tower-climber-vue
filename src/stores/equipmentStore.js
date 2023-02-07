import { defineStore } from "pinia";

export const useEquipmentStore = defineStore("equipment", {
  state: () => ({
    headArmor: {
      equipmentName: "Helmet",
      equipmentLevel: 0,
      equipmentDamage: 0,
      equipmentDefense: 0,
      equipmentRarity: 1,
      equipmentSlot: 1,
      dmgPercent: 0,
      defPercent: 0,
      picturePath: "",
    },
    shoulderArmor: {
      equipmentName: "Pauldron",
      equipmentLevel: 0,
      equipmentDamage: 0,
      equipmentDefense: 0,
      equipmentRarity: 1,
      equipmentSlot: 2,
      dmgPercent: 0,
      defPercent: 0,
      picturePath: "",
    },
    chestArmor: {
      equipmentName: "Breastplate",
      equipmentLevel: 0,
      equipmentDamage: 0,
      equipmentDefense: 0,
      equipmentRarity: 1,
      equipmentSlot: 3,
      dmgPercent: 0,
      defPercent: 0,
      picturePath: "",
    },
    handArmor: {
      equipmentName: "Gauntlets",
      equipmentLevel: 0,
      equipmentDamage: 0,
      equipmentDefense: 0,
      equipmentRarity: 1,
      equipmentSlot: 4,
      dmgPercent: 0,
      defPercent: 0,
      picturePath: "",
    },
    legArmor: {
      equipmentName: "Legplates",
      equipmentLevel: 0,
      equipmentDamage: 0,
      equipmentDefense: 0,
      equipmentRarity: 1,
      equipmentSlot: 5,
      dmgPercent: 0,
      defPercent: 0,
      picturePath: "",
    },
    footArmor: {
      equipmentName: "Sabatons",
      equipmentLevel: 0,
      equipmentDamage: 0,
      equipmentDefense: 0,
      equipmentRarity: 1,
      equipmentSlot: 6,
      dmgPercent: 0,
      defPercent: 0,
      picturePath: "",
    },
    ring: {
      equipmentName: "Ring",
      equipmentLevel: 0,
      equipmentDamage: 0,
      equipmentDefense: 0,
      equipmentRarity: 1,
      equipmentSlot: 7,
      dmgPercent: 0,
      defPercent: 0,
      picturePath: "",
    },
    trinket: {
      equipmentName: "Trinket",
      equipmentLevel: 0,
      equipmentDamage: 0,
      equipmentDefense: 0,
      equipmentRarity: 1,
      equipmentSlot: 8,
      dmgPercent: 0,
      defPercent: 0,
      picturePath: "",
    },
    necklace: {
      equipmentName: "Necklace",
      equipmentLevel: 0,
      equipmentDamage: 0,
      equipmentDefense: 0,
      equipmentRarity: 1,
      equipmentSlot: 9,
      dmgPercent: 0,
      defPercent: 0,
      picturePath: "",
    },
    weapon: {
      equipmentName: "Weapon",
      equipmentLevel: 0,
      equipmentDamage: 0,
      equipmentDefense: 0,
      equipmentRarity: 1,
      equipmentSlot: 10,
      dmgPercent: 0,
      defPercent: 0,
      picturePath: "",
    },
  }),
  actions: {},
});