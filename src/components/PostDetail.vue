<template>
  <div class="post-body">
    <UserInfo :user-name="postDetail.userName" :post-at="postDetail.postAt" />
    <div class="post-content">{{ postDetail.content }}</div>
    <div class="post-img"></div>
    <div class="topic-heat">{{ postDetail.heatNumer }}万人在看</div>
  </div>
  <div class="post-comment">评论区</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserInfo from './UserInfo.vue';

export default defineComponent({
  name: 'PostDetail',
  components: {
    UserInfo,
  },
  setup() {
    const getPostDetail = () => {
      return {
        id: '3213',
        content: '部分侵害用户权益行为的APP被通报 你手机里下过吗？',
        commentNum: 57484,
        praiseNum: 7767,
        postAt: 1624335132,
        userName: '用户666',
        imgList: [1, 2, 3, 4],
        url: '',
        urlInfo: '韩媒：韩国“无指登山家”金洪彬坠入冰隙 下落不明',
        heatNumer: 3.1,
      };
    };

    const postDetail = getPostDetail();
    return { postDetail };
  },
});
</script>

<style scoped>
.post-body {
  font-size: 48px;
  margin: 60px 60px 15px 60px;
}
.post-content {
  margin-top: 24px;
}
.post-comment {
  height: 1200px;
  font-size: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #f4f0f0;
}
.post-img {
  width: 900px;
  height: 600px;
  background: #f0ecec;
  margin: 24px 0;
}
.topic-heat {
  font-size: 36px;
  color: #c5c3c3;
}
</style>
