<template>
  <div class="back-button" @click="goBackHome">
    <i class="el-icon-arrow-left"></i>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import router from './router';

export default defineComponent({
  name: 'App',
  setup() {
    const homePageName = 'home';
    const curPage = ref(homePageName);

    router.push({
      path: curPage.value,
    });

    const goBackHome = () => {
      router.push({
        path: homePageName,
      });
    };

    return {
      curPage,
      goBackHome,
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

.back-button {
  margin: 10px;
}
</style>
