import { defineStore } from "pinia";
import { ref } from "vue";

export const useEquipmentStore = defineStore("equipment", () => {
  const weapon = ref({
    equipmentName: "Weapon",
    equipmentLevel: 0,
    equipmentPerClickDamage: 0,
    equipmentPerSecDamage: 0,
    equipmentRarity: 1,
    equipmentSlot: 1,
    dmgPercent: 0,
    defPercent: 0,
    picturePath: "",
  });
  const armor = ref({ name: "Armor", imagePath: "", dmgMultiplier: 0 });
  return { weapon, armor };
});
