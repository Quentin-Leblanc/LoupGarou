import { createWebHistory, createRouter } from "vue-router";
import HomeAccueil from "@/views/HomeAccueil.vue";
import CreateLobby from "@/views/CreateLobby.vue";
import JoinLobby from "@/views/JoinLobby.vue";

const routes = [
  {
    name: "HomeAccueil",
    path: "/",
    component: HomeAccueil,
  },
  {
    name: "CreateLobby",
    path: "/creer-partie",
    component: CreateLobby,
  },
  {
    name: "JoinLobby",
    path: "/rejoindre-partie",
    component: JoinLobby,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;