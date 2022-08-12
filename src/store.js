import { defineStore} from "pinia"

export const useUserStore = defineStore('user', {
  state: () => ({
    name: null,
    logged: false,

    // old store
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
  }),

  actions: {
    setUserName(name) {
      this.name = name;
    }
  },
  persist: true
},
);
