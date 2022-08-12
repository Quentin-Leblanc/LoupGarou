import "./assets/css/custom.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import {createPinia} from "pinia";
import pinaPluginPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia();
const app = createApp(App);
pinia.use(pinaPluginPersistedState)

app
    .use(router)
    .use(pinia)
    .mount("#app");
