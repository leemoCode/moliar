<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import router from "./router";

export default defineComponent({
  name: "App",
  setup() {
    const curPage = ref("home");

    router.push({
      path: curPage.value,
    });

    return {
      curPage,
    };
  },
});
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
}
</style>
