<!--TEMPLATE JS-->
<script>
  export default  {
      name: "CreateLobby",
    
      data() {
        return {
            lobby: {
                name : null,
                open : false,
            },
        };
      },
      methods: {
        checkLobbyData(){
           // convertir la (regex,null,>20) en fonction pour checker tous les inputs à  venir
           //console.log('Partie : ',this.lobby.name);
           this.onLobbyCreated(this.lobby);

        }
      },
      props: ['onLobbyCreated']
    };


</script>
<!--TEMPLATE HTML-->
<template>
<div>
    <h2>Création de  partie</h2>
        <!--nom de la partie (lobby.name) -->
        <div class="input-group">
             <input
              v-model="lobby.name"
              placeholder="Entrez le nom de votre partie"
              @keyup.enter="checkLobbyData"
              type="text"
              class="form-control"
              aria-label="Recipient's lobby name"
              aria-describedby="basic-addon2"
            />
                        <!-- submit -->
            <div class="input-group-append">
              <button
                v-on:click="checkLobbyData"
                class="btn btn-primary"
                type="button"
              >
                Créer
              </button>
            </div>
        </div>
        <!--public ou privé (lobby.open) bool-->
        <div class="form-check form-switch">
            <input  v-model="lobby.open" class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
            <label v-if="lobby.open == true" class="form-check-label" for="flexSwitchCheckChecked">publique</label>
            <label v-if="lobby.open == false" class="form-check-label" for="flexSwitchCheckChecked">privé</label>
        </div>
        
</div>
</template>