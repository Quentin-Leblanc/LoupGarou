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
};
</script>
<!--TEMPLATE HTML-->
<template>
  <div>
    <h2 class="movIn">
      {{ store.lobby.name }}
    </h2>

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
