<template>
  <div class="col">
    <div class="progress position-relative" style="height: 30px">
      <div
        class="progress-bar"
        role="progressbar"
        :style="{ width: props.width + '%' }"
      >
        <h5
          class="justify-content-center d-flex position-absolute w-100 text-black"
          v-if="!props.boss"
        >
          {{ props.name }}: {{ props.current }}/{{ props.max }}
        </h5>
        <h5
          class="justify-content-center d-flex position-absolute w-100 text-black"
          v-if="props.boss"
        >
          {{ props.bossProgress }}
        </h5>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  current: {
    type: Number,
    required: false,
  },
  max: {
    type: Number,
    required: false,
  },
  boss: {
    type: Boolean,
    required: false,
    default: false,
  },
  bossProgress: {
    type: String,
    required: false,
  },
});

import { usePlayerStore } from "../stores/playerStore";
const playerStore = usePlayerStore();
</script>

<style scoped></style>
