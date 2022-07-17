<!--TEMPLATE JS-->
<script>
  export default  {
      name: "LobbyStart",

      data() {
        return {
           
        };
      },
      methods: {

      },
      props: ['infosLobby', 'pseudo']
    };


</script>
<!--TEMPLATE HTML-->
<template>
<div>
    <h2>La partie commence</h2>
 {{ pseudo }} 
    <div class="alert alert-success" role="alert">
     
     <h4 class="alert-heading"> {{ infosLobby.name }}</h4>

      <hr/>
      <p  class="mb-0">Créée par : {{ pseudo }} - Partie 
      <span v-if="infosLobby.open ==  true">publique</span>
      <span v-if="infosLobby.open ==  false">privée</span>
      </p>
  
   
    </div>
</div>
</template>