<template>
  <div class="col m-2 card shop-card-size">
    <h1>Shop</h1>
    <div class="row">
      <div class="col">
        <button
          class="btn btn-primary button-size"
          :disabled="playerStore.money < 2000"
          @click="buyItem"
        >
          Buy Item
        </button>
        <h3>Item price: 2000 gold</h3>
        <h3>Hero's money: {{ playerStore.money }} gold</h3>
      </div>
      <div class="col">
        <h3>Armor Name: {{ armor.name }}</h3>
        <img :src="armor.imagePath" :alt="armor.name" class="shop-card-size" />
        <h3>Damage Multiplier: {{ armor.dmgMultiplier }}</h3>
        <h3>Armor Price: {{ armor.price }}</h3>
        <button class="btn btn-primary">Buy Armor Recipe</button>
        <h3>Ores To Craft: {{ armor.oresToCraft }}</h3>
        <h3>Ore Price: {{ armor.oresToCraft * 10 }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePlayerStore } from "../../stores/playerStore";
import { fresirineArmor } from "../../helpers/armorHelper";

const playerStore = usePlayerStore();
const armor = fresirineArmor;

function buyItem() {
  playerStore.getNewWeapon();
  playerStore.subtractMoney(2000);
}
</script>

<style scoped>
.shop-card-size {
  width: 300px;
  height: 270px;
}

.button-size {
  width: 100px;
  height: 100px;
}
</style>
