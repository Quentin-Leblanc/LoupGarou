<!--TEMPLATE JS-->
<script>
import { store } from "@/store";

export default {
  name: "TitleLogo",

  data() {
    return {
      store,
    };
  },
};
</script>
<!--TEMPLATE HTML-->
<template>
  <div>
    <h2 class="movIn">
      {{ store.message }}
    </h2>
  </div>
</template>
