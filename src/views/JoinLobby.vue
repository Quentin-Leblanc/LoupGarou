<!--TEMPLATE JS-->
<script>
import { store } from "@/store";
import { db } from "@/firebase";

export default {
  name: "JoinLobby",

  data() {
    return {
      store,
      db,
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
  </div>
</template>
