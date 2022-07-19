<!--TEMPLATE JS-->
<script>
import { store } from "@/store";
import { firebase } from "@/firebase";

export default {
  name: "JoinLobby",

  data() {
    return {
      store,
      firebase,
    };
  },
  methods: {},
  props: ["onLobbyJoined"],
};
</script>
<!--TEMPLATE HTML-->
<template>
  <div>
    <h2>Liste des parties</h2>
    <button type="button" class="btn btn-primary"></button>
    <p>{{ firebase.rooms2 }}</p>
  </div>
</template>
