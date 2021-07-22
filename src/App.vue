<template>
  <!-- 吸顶效果 -->
  <el-affix :offset="5">
    <div class="back-button">
      <div class="back-item">
        <i class="el-icon-arrow-left" @click="goBack"></i>
      </div>
      <div class="back-item">
        <i class="el-icon-house" v-longtouch="(longTouchEvent, clickEvent)"></i>
      </div>
    </div>
  </el-affix>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from './router';

export default defineComponent({
  name: 'App',
  setup() {
    const homePageName = 'home';

    const goBack = () => {
      router.go(-1); // 后退一步
    };

    const goHome = () => {
      router.push({
        path: homePageName,
      });
    };

    const longTouchEvent = () => {
      console.log('goHome');
      goHome();
    };

    const clickEvent = () => {
      console.log('just a test clickEvent');
    };

    goHome();

    return {
      homePageName,

      longTouchEvent,
      clickEvent,
      goBack,
    };
  },
});
</script>

<style scoped>
.back-button {
  display: flex;
  flex-direction: row;
}

.back-item {
  margin: 0 5px;
  font-size: 45px;
}
</style>
