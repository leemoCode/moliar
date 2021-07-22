<template>
  <div v-if="topicList && topicList.length" class="topic-list">
    <TopicItem
      v-for="(item, index) in topicList"
      :key="'topic_' + index"
      :index="index"
      :item-data="item"
      @click="jumpToTopic(id)"
    />
    <div class="load-bar">
      <div v-if="loadStatus === 'loading'" class="load-loading">-加载中-</div>
      <div v-else-if="loadStatus === 'completed'" class="load-complete">
        -已加载全部话题-
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TopicItem from './TopicItem.vue';
import router from '../router';

export default defineComponent({
  name: 'TopicList',
  components: {
    TopicItem,
  },
  setup() {
    const topicList = [
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '荐',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '新',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '荐',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '新',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '荐',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '新',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '新',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '新',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '荐',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '新',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '荐',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '新',
        id: '',
      },
      {
        title: '#热门话题标题#',
        imgUrl: 'xx',
        heatNumer: '2.5',
        joinNumber: '90.6',
        tag: '荐',
        id: '',
      },
    ];

    const jumpToTopic = () => {
      console.log('<< jumpToTopic');

      router.push({
        path: '/topic_detail',
      });
    };

    const loadStatus = 'completed';
    return { topicList, loadStatus, jumpToTopic };
  },
});
</script>

<style scoped>
.topic-list {
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}
.load-bar {
  height: 120px;
  font-size: 33px;
  color: gray;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
