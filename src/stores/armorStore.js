import { defineStore } from "pinia";
import { ref } from "vue";
import {
  ceymaniteArmor,
  chintoidArmor,
  conclaiteArmor,
  demdingeriteArmor,
  fresirineArmor,
  inyocociteArmor,
  jasentineArmor,
  pecoycraseArmor,
  zirhemiteArmor,
} from "../helpers/armorHelper.js";

export const useArmorStore = defineStore("armor", () => {
  const armors = ref([
    fresirineArmor,
    ceymaniteArmor,
    chintoidArmor,
    jasentineArmor,
    inyocociteArmor,
    pecoycraseArmor,
    demdingeriteArmor,
    zirhemiteArmor,
    conclaiteArmor,
  ]);

  function filterArmor(armor) {
    armors.value = armors.value.filter((a) => a.name !== armor.name);
  }

  return { filterArmor, armors };
});
