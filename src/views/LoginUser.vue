<!--TEMPLATE JS-->
<script>
import { useUserStore } from "@/stores/user";

export default {
  data() {
    return {
      name: "",
      error: false,
    };
  },
  setup() {
    const store = useUserStore();
    return { store };
  },
  methods: {
    checkName() {
      const validChars = /^[0-9a-zA-Z .,'-é]{1,40}$/i;
      const isValidName = validChars.test(this.name);
      if (isValidName) {
        const store = useUserStore();
        store.$patch({ name: this.name, logged: true });
        this.error = false;
        // router.push({ path: "/choix-partie" });
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<!--TEMPLATE HTML-->
<template>
  <div>
    <div class="logo">
      <img src="../assets/logo.png" />
    </div>
    <div class="input-group">
      <!-- pseudo -->
      <input
        v-model="name"
        placeholder="Entrez votre pseudo"
        @keyup.enter="checkName"
        type="text"
        class="form-control input-light-red"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />

      <!-- submit -->
      <div class="input-group-append">
        <button
          v-on:click="checkName"
          class="btn btn-light-red go"
          type="button"
        >
          Jouer
        </button>
      </div>
    </div>
    <div v-if="error == true" class="alert alert-danger" role="alert">
      Pseudo incorrect
    </div>
  </div>
</template>
