<template>
  <div v-if="topicList && topicList.length" class="topic-card">
    <div class="card-icon">icon</div>

    <div class="card-content">
      <div class="card-top">
        <div class="card-title">热门话题</div>
        <div class="topic-heat">{{ heatNumber }}万人正在参与</div>
        <div class="topic-more" @click="jumpToTopicList">查看全部话题 ></div>
      </div>

      <div class="topic-form">
        <div
          class="topic-item"
          v-for="(item, index) in topicList"
          :key="'topic_' + index"
          @click="jumpToTopic(item.url)"
        >
          {{ item.topic }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '../router';

export default defineComponent({
  name: 'TopicCard',
  setup() {
    const heatNumber = 180;

    const jumpToTopicList = () => {
      console.log('<< jumpToTopicList');

      router.push({
        path: '/topic_list',
      });
    };

    const jumpToTopic = (url: string) => {
      console.log('<< jumpToTopic', url);

      router.push({
        path: '/topic_detail',
      });
    };

    const topicList = [
      {
        topic: '热门话题榜单第一名',
        url: '',
      },
      {
        topic: '热门话题榜单第一名',
        url: '',
      },
      {
        topic: '热门话题榜单第一名',
        url: '',
      },
      {
        topic: '热门话题榜单第一名',
        url: '',
      },
      {
        topic: '热门话题榜单第一名',
        url: '',
      },
      {
        topic: '热门话题榜单第一名',
        url: '',
      },
      {
        topic: '热门话题榜单第一名',
        url: '',
      },
      {
        topic: '热门话题榜单第一名',
        url: '',
      },
    ];

    return {
      heatNumber,
      topicList,
      jumpToTopicList,
      jumpToTopic,
    };
  },
});
</script>

<style scoped>
.topic-card {
  width: 900px;
  border-radius: 30px;
  background: #e5e3e3;
  margin: 30px;
  padding: 30px;
  display: flex;
  flex-direction: row;
}
.card-icon {
  width: 45px;
  height: 45px;
  border-radius: 45px;
  background: white;
  margin-right: 12px;
  padding: 9px;
  font-size: 24px;
}
.card-content {
  width: 810px;
}
.card-top {
  display: flex;
  flex-direction: row;
}
.card-title {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 36px;
}
.topic-heat {
  font-size: 24px;
  margin-top: 15px;
  margin-left: 45px;
}
.topic-more {
  font-size: 30px;
  float: right;
  flex: 1;
  text-align: right;
  color: #7f7d7d;
  margin-top: 15px;
}
.topic-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 12px;
}
.topic-item {
  border-radius: 36px;
  background: #aba9a9;
  height: 60px;
  font-size: 27px;
  flex-basis: 300px;
  margin: 12px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
