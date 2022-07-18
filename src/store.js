import { reactive } from "vue";
import router from "@/router";
import { db } from "@/firebase";
import { collection, querySnapshot } from "firebase/firestore";

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

  valideName(tested) {
    const valideChars = /^[a-zA-Z][0-9a-zA-Z .,'-]*$/i;
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
    }
  },

  onLobbyCreated() {
    if (this.valideName(this.lobby.name) == false) {
      this.form.error = true;
    } else {
      router.push({ path: "/partie" });
    }
  },


  onSnapshot(collection(db, 'room'), (querySnapshot) => {
    const rooms = [];
    querySnapshot.forEach((doc) => {
      rooms.push(doc.data().name);
    });
    console.log("Rooms: ", rooms.join(", "));
  });
  
  
});
