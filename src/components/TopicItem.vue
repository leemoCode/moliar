<template>
  <div class="topic-item">
    <div class="topic-img">
      <!-- <img src="itemData.imgUrl"> -->
      小图片
      <div class="topic-index">{{ index + 1 }}</div>
    </div>

    <div class="topic-info">
      <div class="topic-title">{{ itemData.title }}</div>
      <div class="topic-heat">
        {{ itemData.heatNumer }}万人正在热议，{{ itemData.joinNumber }}万人参与
      </div>
    </div>

    <div v-if="itemData && itemData.tag" class="topic-tag">
      {{ itemData.tag }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopicItem',
  props: {
    itemData: {
      type: Object,
      default: () => {
        return {};
      },
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.topic-item {
  display: flex;
  flex-direction: row;
  width: 960px;
  margin: 15px 50px;
}
.topic-img {
  position: relative;
  width: 120px;
  height: 120px;
  background: #d1d0d0;
  border-radius: 30px;
  margin-right: 30px;

  font-size: 24px;

  /* 图片文字居中专用 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.topic-index {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  top: -12px;
  left: -12px;

  border-radius: 24px;
  width: 36px;
  height: 36px;
  border: 3px solid gray;
  background: white;

  z-index: 999;
}
.topic-info {
  flex-basis: 800px;
}
.topic-title {
  font-size: 36px;
  font-weight: 600;
}
.topic-heat {
  margin-top: 36px;
  font-size: 24px;
  color: #807c7c;
}
.topic-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  width: 60px;
  height: 60px;
  background: #807c7c;
  color: white;
  border-radius: 45px;
}
</style>
