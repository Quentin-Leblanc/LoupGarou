<script setup>
import Header from "@/components/HeaderC.vue"
</script>


<template>
  <div class="content gradient_black" :class="{ gradient_red: isFaded }">
    <Header />
    <div class="container">
      <!--   view en fonction de l'url -->
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>
