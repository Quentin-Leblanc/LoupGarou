const { createApp } = Vue

createApp({

    data() {
        return {
            step :  1,
            message: "Bienvenue les p'tits loups",
            form: {
                pseudo : null,
                error : false
            },
            isFaded : false,
            outFaded : false,
        }
    },
    methods: {
        checkPseudo(){
            const valideChars = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/i ;   
            if(this.form.pseudo == null || this.form.pseudo == "" || this.form.pseudo.length >= 20 || !valideChars.test(this.form.pseudo)){
                this.form.error = true
            }  else {
            this.step = 2
            console.log("Votre pseudo est ", this.form.pseudo)
            setTimeout(() => {
                this.isFaded = true;
              }, 250);
            setTimeout(() => {
            this.outFaded = true;
            }, 700);
            }
        }
    }


}).mount('body')