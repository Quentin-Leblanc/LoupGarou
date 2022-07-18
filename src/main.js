import "./assets/css/custom.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/* eslint-disable */
import firebase from "./firebase";

createApp(App).use(router).mount("#app");
