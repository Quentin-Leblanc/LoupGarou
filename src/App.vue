<script>
//import AddComponent from './components/AddComponent.vue';

import { store } from "./store.js";

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
    //step2.1
    showCreateParty() {
      this.step = 0;
      setTimeout(() => {
        this.step = 2.1;
      }, 500);
    },
    //step2.2
    showJoinParty() {
      this.step = 0;
      setTimeout(() => {
        this.step = 2.2;
      }, 500);
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
