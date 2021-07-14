<template>
  <!-- 渐进式动画效果 -->
  <transition name="el-fade-in-linear">
    <div class="home" v-if="isShowMainPage">
      <el-button :disabled="true" @click="goMainPage('navigator')"
        >Navigator
      </el-button>
      <el-button :disabled="isLoading" @click="goMainPage('featureList')"
        >Feature List
      </el-button>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import router from '../router';

export default defineComponent({
  name: 'App',
  setup() {
    const isLoading = ref(false);
    const isShowMainPage = ref(true);

    const goMainPage = (path: string) => {
      isLoading.value = true;

      setTimeout(() => {
        isShowMainPage.value = false;
        router.push({
          path: '/' + path,
          // query: {
          //   id: "666",
          // },
        });
      }, 1000);
    };

    return {
      isLoading,
      isShowMainPage,

      goMainPage,
    };
  },
});
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
}
</style>
