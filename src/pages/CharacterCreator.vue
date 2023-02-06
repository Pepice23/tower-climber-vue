<template>
  <div class="row">
    <h1>Choose your hero</h1>
  </div>
  <div class="row">
    <div class="col m-2" v-for="hero in heroes">
      <button class="btn">
        <img :src="hero.picturePath" :alt="hero.name" class="picture-size" />
      </button>
    </div>
    <div class="row">
      <button class="btn btn-primary">Start</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { heroes } from "../helpers/playerHelper";
</script>

<style>
.picture-size {
  width: 100px;
  height: 100px;
}
</style>
