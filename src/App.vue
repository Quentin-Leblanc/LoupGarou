
<script>

import NicknameFormVue from './components/NicknameForm.vue';

  export default {
      name: "App",
      components:{
        NicknameFormVue
      },
      data() {
        return {
          step: 1,   
          message: "Bienvenue les p'tits loups",
          form: {
            pseudo: null,
            error: false,
          },
          isFaded: false,
          outFaded: false,
        };
      },
      methods: {
        onFormSuccess(nickName){
          this.form.pseudo = nickName
          this.step = 2;
          setTimeout(() => {
            this.isFaded = true;
          }, 250);
          setTimeout(() => {
            this.outFaded = true;
          }, 700);
        }

        
      },
    };
  </script>


<template >
  <div class="content gradient_black" :class="{ gradient_red: isFaded }">
    <div class="container">
      <h2
        class="movIn"
        :class="{ fadeAnim: !isFaded, moveUp: isFaded, opacityNone: isFaded }"
      >
        {{ message }}
      </h2>

      <!--::::::::  Step 1 - Intro ::::::::::::--->
      <transition name="fade">
        <div v-if="step == 1" class="step1">
          <NicknameFormVue :onFormSuccess=onFormSuccess />
        </div>
      </transition>



      <!--::::::::  transition ::::::::::::--->
      <div
        class="griffeSVG displayNone"
        :class="{ displayBlock: isFaded, opacityNone: outFaded }"
      >
        <object
          :class="{ scaleAnim: isFaded }"
          data="./assets/img/svg/griffe_anim.svg"
          width="400"
          height="400"
        ></object>
      </div>

      <!--::::::::  Step 2 - Intro ::::::::::::--->
    </div>
  </div>
</template>



