<!--TEMPLATE JS-->
<script setup>
import { useUserStore } from '@/stores/user';
const store = useUserStore()

</script>
<!--TEMPLATE HTML-->
<template>
  <span v-if="store.logged">
      joueur : {{store.name}}
  </span>
</template>
