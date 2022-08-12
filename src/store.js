import { reactive } from "vue";
import router from "@/router";

/* eslint-disable */
import { db, sendPseudoToDb, createLobbyToDb, docId, getCities } from "@/firebase";

export const store = reactive({
  // Step 1
  message: "Bienvenue les p'tits loups",
  form: {
    pseudo: null,
    error: false,
  },
  lobby: {
    name: null,
    open: false,
    players: {},
  },
  lobbies: {},
  rooms: [],
  lobItems: [],
  valideName(tested) {
    const valideChars = /^[a-zA-Z][0-9a-zA-Z .,'-é]*$/i;
    if (
      tested == null ||
      tested == "" ||
      tested.length >= 40 ||
      !valideChars.test(tested)
    ) {
      return false;
    } else {
      return true;
    }
  },
  checkPseudo() {
    if (this.valideName(this.form.pseudo) == false) {
      this.form.error = true;
    } else {
      router.push({ path: "/choix-partie" });
      // envoi pseudo vers db
      sendPseudoToDb();
    }
  },
  onLobbyCreated() {
    if (this.valideName(this.lobby.name) == false) {
      this.form.error = true;
    } else {
      // envoi infos lobby vers db
      createLobbyToDb();

      //  router.push({ path: "/partie/", params: });
    }
  },
  async loadCities() {
    console.log('loadCities', getCities().then(a=>{
      console.log('non',{a});
      return a;
    }))
    this.rooms = await getCities().then(a=>{console.log('non',{a}); return a})
  }
});
