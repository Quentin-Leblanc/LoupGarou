<!--TEMPLATE JS-->
<script>
import { store } from "@/store";

export default {
  name: "OnLobby",

  data() {
    return {
      store,
    };
  },
  created: () => {store.loadCities(); console.log('getCities : ', store.rooms); },
  computed: {
    getPartyId: function() {return parseInt(this.$route.params.id)},
  },
};
</script>

<!--TEMPLATE HTML-->
<template>
  <div>
{{store.lobbies}}
    <p>nom de la partie</p>
    <h2 class="movIn">
      {{ store.lobby.name }}
    </h2>
    <p>id de la partie :</p>
    <h3>{{ $route.params.id }}</h3>
    <br />
    <div class="btn_players">
      <div>
        <span>Joueur 1</span>
        <button type="button" class="btn btn-danger light-red">
          {{ store.form.pseudo }}
        </button>
      </div>
      <div>
        <span>Joueur 2</span>
        <button type="button" class="btn btn-danger light-red">
          {{ store.form.pseudo }}
        </button>
      </div>
      <div>
        <span>Joueur 3</span>
        <button type="button" class="btn btn-danger light-red">
          {{ store.form.pseudo }}
        </button>
      </div>
      <div>
        <span>Joueur 4</span>
        <button type="button" class="btn btn-danger light-red">
          {{ store.form.pseudo }}
        </button>
      </div>
      <div>
        <span>Joueur 5</span>
        <button type="button" class="btn btn-danger light-red">
          {{ store.form.pseudo }}
        </button>
      </div>
      <div>
        <span>Joueur 6</span>
        <button type="button" class="btn btn-danger light-red">
          {{ store.form.pseudo }}
        </button>
      </div>
    </div>
  </div>
</template>
