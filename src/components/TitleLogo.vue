<!--TEMPLATE JS-->
<script setup>
import { useUserStore} from "@/store"

import { storeToRefs} from "pinia"
const {message} = storeToRefs(useUserStore())
</script>
<!--TEMPLATE HTML-->
<template>
  <div>
    <h2 class="movIn">
      {{ message }}
    </h2>
  </div>
</template>
