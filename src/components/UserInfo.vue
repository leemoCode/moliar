<template>
  <div class="user-info">
    <div class="user-avatar user-info-left"></div>
    <div class="user-info-right">
      <div class="user-name">{{ userName || '用户昵称' }}</div>
      <div class="post-time">{{ translateTimeStamp(postAt) }}发布</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { translateTimeStamp } from '../controller/useTranslateTimeStamp';

export default defineComponent({
  name: 'Template',
  props: {
    userName: {
      type: String,
      default: '',
    },
    postAt: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    return { translateTimeStamp };
  },
});
</script>

<style scoped>
.user-info {
  display: flex;
  flex-direction: row;
}
.user-info-right {
  display: flex;
  flex-direction: column;
}
.user-avatar {
  width: 120px;
  height: 120px;
  background: #d6d4d4;
  border-radius: 60px;

  margin-right: 30px;
}
.user-name {
  font-size: 48px;
  font-weight: 550;
}
.post-time {
  margin-top: 25px;
  font-size: 33px;
  color: #b3aeae;
}
</style>
