import { createRouter, createWebHistory } from "vue-router";
import MainMenu from "../components/MainMenu.vue";

const routes = [{ path: "/", name: "MainMenu", component: MainMenu }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
