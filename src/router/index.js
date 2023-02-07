import { createRouter, createWebHistory } from "vue-router";
import MainMenu from "../pages/MainMenu.vue";
import CharacterCreator from "../pages/CharacterCreator.vue";
import GamePage from "../pages/GamePage.vue";

const routes = [
  { path: "/", name: "MainMenu", component: MainMenu },
  { path: "/creator", name: "Creator", component: CharacterCreator },
  { path: "/game", name: "Game", component: GamePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
