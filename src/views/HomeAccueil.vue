

<!--TEMPLATE JS-->
<script>
import { store } from '../store.js';

  export default {
      name: "NicknameForm",
    
      data() {
        return {
          store,
        };
      }

   
    };
    
</script>

<!--TEMPLATE HTML-->
<template >
      <h2
        class="movIn"
      >
        {{ store.message }}
      </h2>


          <div class="input-group">
            <!-- pseudo -->
            <input
              v-model="store.form.pseudo"
              placeholder="Entrez votre pseudo"
              @keyup.enter="store.checkPseudo"
              type="text"
              class="form-control  input-light-red"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />

            <!-- submit -->
            <div class="input-group-append">
              <button
                v-on:click="store.checkPseudo"
                class="btn btn-light-red go"
                type="button"
              >
                Jouer 
              </button>
            </div>
          </div>
          <div
            v-if="store.form.error == true"
            class="alert alert-danger"
            role="alert"
          >
            Pseudo incorrect
          </div>
</template>

