<template>
  <div class="back-button" v-longtouch="(longTouchEvent, clickEvent)">
    <i class="el-icon-arrow-left"></i>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from './router';

export default defineComponent({
  name: 'App',
  setup() {
    const homePageName = 'home';

    router.push({
      path: homePageName,
    });

    const goBack = () => {
      router.go(-1); // 后退一步
    };

    const longTouchEvent = () => {
      console.log('goBack');
      goBack();
    };

    const clickEvent = () => {
      console.log('just a test clickEvent');
    };

    return {
      homePageName,

      goBack,

      longTouchEvent,
      clickEvent,
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
