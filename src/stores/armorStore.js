import { defineStore } from "pinia";
import {
  fresirineArmor,
  ceymaniteArmor,
  chintoidArmor,
  jasentineArmor,
  inyocociteArmor,
  pecoycraseArmor,
  demdingeriteArmor,
  zirhemiteArmor,
  conclaiteArmor,
} from "../helpers/armorHelper.js";

export const useArmorStore = defineStore("armor", {
  state: () => ({
    armors: [
      fresirineArmor,
      ceymaniteArmor,
      chintoidArmor,
      jasentineArmor,
      inyocociteArmor,
      pecoycraseArmor,
      demdingeriteArmor,
      zirhemiteArmor,
      conclaiteArmor,
    ],
  }),
  actions: {
    filterArmor(armor) {
      this.armors = this.armors.filter((a) => a.name !== armor.name);
    },
  },
});
