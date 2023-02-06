import { createRouter, createWebHistory } from "vue-router";
import MainMenu from "../pages/MainMenu.vue";
import CharacterCreator from "../pages/CharacterCreator.vue";

const routes = [
  { path: "/", name: "MainMenu", component: MainMenu },
  { path: "/creator", name: "Creator", component: CharacterCreator },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
