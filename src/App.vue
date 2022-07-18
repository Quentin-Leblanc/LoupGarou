<script>
/** import AddComponent from './components/AddComponent.vue'; **/

import { store } from "./store.js";
import { db } from "@/firebase";
import { collection, querySnapshot } from "firebase/firestore";
import { cp } from "fs";
import { ref, onMounted } from "vue";

export default {
  name: "App",
  components: {
    //   AddComponent,
  },
  data() {
    return {
      store,
      step: 1,
      form: {
        pseudo: null,
        error: false,
      },
      infosLobby: null,
      isFaded: false,
      outFaded: false,
    };
  },
  methods: {
    //step2
    onFormSuccess(nickName) {
      this.form.pseudo = nickName;
      this.step = 0;
      setTimeout(() => {
        this.step = 2;
      }, 500);
      setTimeout(() => {
        this.isFaded = true;
      }, 250);
    },
  },
};
</script>
<template>
  <div class="content gradient_black" :class="{ gradient_red: isFaded }">
    <div class="container">
      <!--   view en fonction de l'url -->
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>
