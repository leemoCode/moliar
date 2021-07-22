<template>
  <div class="template">
    <TopicCard />
    <div class="place-holder">评论占位符</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopicCard from './TopicCard.vue';

export default defineComponent({
  name: 'Topic',
  components: {
    TopicCard,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.template {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.place-holder {
  width: 900px;
  height: 350px;
  border: 2px solid black;
  margin: 20px;
}
</style>
