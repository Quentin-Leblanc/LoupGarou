
<script>

  export default {
      name: "NicknameForm",
    
      data() {
        return {
          form: {
            pseudo: null,
            error: false,
          }
        };
      },
      methods: {
        checkPseudo() {
          const valideChars = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/i;
          if (
            this.form.pseudo == null ||
            this.form.pseudo == "" ||
            this.form.pseudo.length >= 20 ||
            !valideChars.test(this.form.pseudo)
          ) {
            this.form.error = true;
          } else {
            console.log("Votre pseudo est ", this.form.pseudo);
            this.onFormSuccess(this.form.pseudo);
            
          }
        },
      },
      props: ['onFormSuccess']
    };
  </script>

<template >
          <div class="input-group">
            <!-- pseudo -->
            <input
              v-model="form.pseudo"
              placeholder="Entrez votre pseudo"
              @keyup.enter="checkPseudo"
              type="text"
              class="form-control"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />

            <!-- submit -->
            <div class="input-group-append">
              <button
                v-on:click="checkPseudo"
                class="btn btn-dark go"
                type="button"
              >
                Jouer
              </button>
            </div>
          </div>
          <div
            v-if="form.error == true"
            class="alert alert-danger"
            role="alert"
          >
            Pseudo incorrect
          </div>
</template>

