import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login.vue";
import CreateJoinLobby from "@/views/CreateJoinLobby.vue";
import CreateLobby from "@/views/CreateLobby.vue";
import JoinLobby from "@/views/JoinLobby.vue";
import OnLobby from "@/views/OnLobby.vue";

const routes = [
  {
    name: "Login",
    path: "/",
    component: Login,
  },
  {
    name: "CreateJoinLobby",
    path: "/choix-partie",
    component: CreateJoinLobby,
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
  {
    name: "OnLobby",
    path: "/partie/:id",
    component: OnLobby,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
