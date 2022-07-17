import { reactive } from 'vue'
import  router  from '@/router'

export const store = reactive({
    
        // Step 1
        message: "Bienvenue les p'tits loups",
        form: {
        pseudo: null,
        error: false,
        },

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
            console.log("Votre pseudo est : ", this.form.pseudo);
            this.step = 0;
            setTimeout(() => {
              this.step = 2;
                router.push({ path: '/creer-partie' });
            }, 500);
            setTimeout(() => {
              this.isFaded = true;
            }, 250);
          }
        },
     
});