<template>
  <div v-if="data" class="post-item">
    <UserInfo
      class="user-info"
      :user-name="data.userName"
      :post-at="data.postAt"
    />

    <div class="post-body">
      <div class="post-content" @click="goPostDetail">{{ data.content }}</div>

      <!-- 暂时模拟图片 -->
      <!-- <div class="post-img" v-if="data.imgList && data.imgList.length">
        <img v-for="(item, index) in data.imgList" :key="index" :src="item" />
      </div> -->
      <div v-if="data.imgList && data.imgList.length" class="post-img">
        <div v-for="(item, index) in data.imgList" :key="index">
          <div v-if="index < 3" class="mock-img"></div>
        </div>
      </div>
      <!-- 暂时模拟图片 -->

      <div
        v-if="data && data.url && data.urlInfo"
        class="post-url"
        @click="jumpToLink(data.url)"
      >
        <div class="url-button operate-icon"></div>
        {{ data.urlInfo }}
      </div>

      <div class="bottom-bar">
        <div class="share">
          <div class="share-button operate-icon"></div>
        </div>
        <div class="comment" @click="goPostDetail">
          <div class="comment-button operate-icon"></div>
          <div>{{ data.commentNum }}</div>
        </div>
        <div class="praise">
          <div class="praise-button operate-icon"></div>
          <div>{{ data.praiseNum }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { translateTimeStamp } from '../controller/useTranslateTimeStamp';
import router from '../router';
import UserInfo from './UserInfo.vue';

export default defineComponent({
  name: 'Template',
  components: {
    UserInfo,
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
    const goPostDetail = () => {
      router.push({
        path: '/post_detail',
      });
    };

    const jumpToLink = (url: string) => {
      window.location.href = url;
    };

    return {
      goPostDetail,
      jumpToLink,
      translateTimeStamp,
    };
  },
});
</script>

<style scoped>
.post-item {
  display: flex;
  flex-direction: column;

  margin-bottom: 42px;
}
.user-info {
  margin: 0 30px 30px 30px;
}
.post-body {
  display: flex;
  flex-direction: column;
  margin: 25px 60px 10px 81px;
}
.post-content {
  font-size: 48px;
  color: #1f1e1e;
  overflow: hidden;
}
.post-img {
  display: flex;
  flex-direction: row;

  margin-top: 30px;
}
.post-url {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 90px;
  border-radius: 15px;
  background: #eae8e8;
  color: gray;
  font-size: 33px;

  margin-top: 30px;
}
.bottom-bar {
  display: flex;
  flex-direction: row;

  margin-top: 30px;
  font-size: 36px;
  color: #8c8a8a;
}
.operate-icon {
  width: 60px;
  height: 60px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  margin-right: 24px;
}
.share {
  flex-basis: 500px;
}
.comment {
  display: flex;
  flex-direction: row;
  flex-basis: 500px;
}
.praise {
  display: flex;
  flex-direction: row;
}
.share-button {
  background-image: url('../assets/share.png');
}
.comment-button {
  background-image: url('../assets/comment.png');
}
.praise-button {
  background-image: url('../assets/like.png');
}
.url-button {
  width: 45px;
  height: 45px;
  background-image: url('../assets/link.png');
}

.mock-img {
  width: 300px;
  height: 200px;
  background: #d4d0d0;

  margin-right: 9px;
}
</style>
