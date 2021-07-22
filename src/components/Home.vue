<template>
  <!-- 渐进式动画效果 -->
  <transition name="el-fade-in-linear">
    <div class="home">
      <el-button
        :disabled="isLoading"
        @click="jumpToPage('navigator')"
        class="nav-button"
        >Navigator
      </el-button>
      <el-button
        :disabled="true"
        @click="jumpToPage('feature_list')"
        class="nav-button"
        >FeatureList
      </el-button>
      <el-button
        :disabled="isLoading"
        @click="jumpToPage('hello_world')"
        class="nav-button"
        >HelloWorld
      </el-button>
      <el-button
        :disabled="isLoading"
        @click="jumpToPage('topic')"
        class="nav-button"
        >Topic
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

    const jumpToPage = (path: string) => {
      isLoading.value = true;

      setTimeout(() => {
        router.push({
          path: '/' + path,
          // query: {
          //   id: "666",
          // },
        });
      }, 200);
    };

    return {
      isLoading,
      jumpToPage,
    };
  },
});
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
}
.nav-button {
  width: 130px;
  margin: 5px 0;
}
</style>
