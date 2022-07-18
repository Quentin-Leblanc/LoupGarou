<!--TEMPLATE JS-->
<script>
import { store } from '@/store';

  export default  {
      name: "JoinLobby",
    
      data() {
        return {
          store,

        };
      },
      methods: {

      },
      props: ['onLobbyJoined']
    };


</script>
<!--TEMPLATE HTML-->
<template>
<div>
    <h2>Liste des parties</h2>
    <button type="button" class="btn btn-primary"></button>
</div>
</template>