<!--TEMPLATE JS-->
<script>
import { store } from "@/store";

export default {
  name: "CreateJoinLobby",

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
