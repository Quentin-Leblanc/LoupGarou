<!--TEMPLATE JS-->
<script>
import { store } from "@/store";
import TitleLogo from "@/components/TitleLogo.vue";

export default {
  name: "CreateJoinLobby",
  components: {
    TitleLogo,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
  props: ["onChoixPartie"],
};
</script>
<!--TEMPLATE HTML-->
<template>
  <div>
    <TitleLogo />
    <div class="nav-choix">
      <router-link to="/creer-partie">
        <button type="button" class="btn btn-danger light-red">
          Créer une partie
        </button>
      </router-link>

      <router-link to="/rejoindre-partie">
        <button type="button" class="btn btn-danger light-red">
          Rejoindre une partie
        </button>
      </router-link>
    </div>
  </div>
</template>
