const { createApp } = Vue

createApp({

    data() {
        return {
            step1 :  true,
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
            const valideChars =  /^[a-zA-Z][0-9a-zA-Z .,'-]*$/i ;   
            if(this.form.pseudo == null || this.form.pseudo == "" || this.form.pseudo.length >= 20 || !valideChars.test(this.form.pseudo)){
                this.form.error = true
            }  else {
            this.step1 = false
            console.log("Votre pseudo est ", this.form.pseudo)
            setTimeout(() => {
                this.isFaded = true;
              }, 250);
            setTimeout(() => {
            this.outFaded = true;
            }, 800);
            }
        }
    }


}).mount('body')