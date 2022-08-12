import { defineStore } from "pinia"
import { API, GET_GAMES_LIST } from "./constantes"

export const useGameStore = defineStore(
    'game',
    {
        state: ()=> ({
            error: false,
            loading: false,
            gamesList: [],
            game: null
        }),
        actions: {
            async fetchGames() {
              this.gamesList = [{id:1, name:'toto'},{id:2, name:'tata'},{id:3, name:'titi'},{id:4, name:'tutu'}]
              this.loading = true
              try {
                this.games = await fetch(`${API}${GET_GAMES_LIST}`)
                .then((response) => response.json())
              } catch (error) {
                this.error = error
              } finally {
                this.loading = false
              }
            },
        }
    },
)