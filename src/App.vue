
<script>

import NicknameFormVue from './components/NicknameForm.vue';
import CreateLobby from './components/CreateLobby.vue';
import JoinLobby from './components/JoinLobby.vue';
import LobbyStart from './components/LobbyStart.vue';

  export default {
      name: "App",
      components:{
        NicknameFormVue,
        CreateLobby,
        JoinLobby,
        LobbyStart,
      },
      data() {
        return {
          step: 1,   
          form: {
            pseudo: null,
            error: false,
          },
          infosLobby : null,
          isFaded: false,
          outFaded: false,
        };
      },
      methods: {
        //step2
        onFormSuccess(nickName){
          this.form.pseudo = nickName
          this.step = 0;
          setTimeout(() => {
            this.step = 2;
          }, 500);
          setTimeout(() => {
            this.isFaded = true;
          }, 250);

        },
        //step2.1
        showCreateParty(){
          this.step = 0;
          setTimeout(() => {
          this.step = 2.1;
          }, 500);
        },
        //step2.2
        showJoinParty(){
          this.step = 0;
          setTimeout(() => {
          this.step = 2.2;
          }, 500);
        },
        // step 3
        onLobbyCreated(infosLobby){
          console.log('Nom de la partie : ', infosLobby.name);
          console.log('Type de partie (open = true) : ', infosLobby.open)
          this.step = 0;
          this.infosLobby = infosLobby
          
          setTimeout(() => {
          this.step = 3;
          }, 500);
        }

        
      },
    };
  </script>


<template >
  <div class="content gradient_black" :class="{ gradient_red: isFaded }">
    <div class="container">


      <!--::::::::  Step 1 - ::::::::::::--->
      <transition name="fade">
        <div v-if="step == 1" class="step1">
          <NicknameFormVue :onFormSuccess=onFormSuccess />
        </div>
      </transition>
      
      <!--::::::::  transition ::::::::::::
      <div
        class="griffeSVG displayNone"
        :class="{ displayBlock: isFaded, opacityNone: outFaded }"
      >
      --->
      
      <!--::::::::  Step 2 - menu lobby ::::::::::::--->
      <transition name="fade">
        <div v-if="step == 2" class="step2">
              <div class="buttons_lobby">
                  <button v-on:click="showCreateParty" type="button" class="btn btn-primary">Créer une partie</button>
                  <button v-on:click="showJoinParty" type="button" class="btn btn-primary">Rejoindre une partie</button>
              </div>
        </div>
      </transition>

      <!--::::::::  Step 2.1 - create lobby ::::::::::::--->
      <transition name="fade">
        <div v-if="step == 2.1" class="step2_1">
          <CreateLobby :onLobbyCreated=onLobbyCreated />
        </div>
      </transition>

      <!--::::::::  Step 2.2 - join lobby ::::::::::::--->
      <transition name="fade">
        <div v-if="step == 2.2" class="step2_2">
          <JoinLobby />
        </div>
      </transition>

      <!--::::::::  Step 3 - lobby ::::::::::::--->
      <transition name="fade">
        <div v-if="step == 3" class="step3">
          <LobbyStart :infosLobby=infosLobby :pseudo=form.pseudo />
        </div>
      </transition>
    
    </div>
  </div>
</template>


