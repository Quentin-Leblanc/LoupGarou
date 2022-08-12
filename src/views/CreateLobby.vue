<!--TEMPLATE JS-->
<script>


export default {
  name: "CreateLobby",

  data() {
    return {
     
    };
  },
  methods: {},
  props: ["onLobbyCreated"],
};
</script>
<!--TEMPLATE HTML-->
<template>
  <div>
    <h2>Création de partie</h2>
    <!--nom de la partie (lobby.name) -->
    <div class="input-group">
      <input
        v-model="store.lobby.name"
        placeholder="Entrez le nom de votre partie"
        @keyup.enter="store.onLobbyCreated"
        type="text"
        class="form-control"
        aria-label="Recipient's lobby name"
        aria-describedby="basic-addon2"
      />
      <!-- submit -->
      <div class="input-group-append">
        <button
          v-on:click="store.onLobbyCreated"
          class="btn btn-light-red"
          type="button"
        >
          Créer
        </button>
      </div>
    </div>
    <!--public ou privé (lobby.open) bool-->
    <div class="form-check form-switch">
      <input
        v-model="store.lobby.open"
        class="form-check-input"
        type="checkbox"
        id="flexSwitchCheckChecked"
        checked
      />
      <label
        v-if="store.lobby.open == true"
        class="form-check-label"
        for="flexSwitchCheckChecked"
        >publique</label
      >
      <label
        v-if="store.lobby.open == false"
        class="form-check-label"
        for="flexSwitchCheckChecked"
        >privé</label
      >
    </div>
    <div
      v-if="store.form.error == true"
      class="alert alert-danger"
      role="alert"
    >
      Nom de partie incorrect
    </div>
  </div>
</template>
