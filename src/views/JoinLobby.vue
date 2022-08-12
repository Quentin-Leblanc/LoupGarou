<!--TEMPLATE JS-->
<script setup>

import { useGameStore } from "@/stores/game"
import { storeToRefs } from "pinia"
const { gamesList } = storeToRefs(useGameStore());

const { fetchGames } = useGameStore()
fetchGames();
</script>
<!--TEMPLATE HTML-->
<template>
  <div>
    <h2>Liste des parties</h2>
    <ul>
      <li v-for="game in gamesList" :key="game.id">
        id : {{game.id}} name : {{game.name}}
      </li>

    </ul>
    <button type="button" class="btn btn-primary" v-on="fetchGames"></button>
  </div>
</template>
