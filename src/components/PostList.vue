<template>
  <div v-for="item in data" :key="item.id">
    <PostItem :data="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PostItem from './PostItem.vue';

export default defineComponent({
  name: 'PostList',
  components: {
    PostItem,
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
