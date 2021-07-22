// 此处如提示export 'createWebHistory, createRouter' was not found in 'vue-router'
// 执行 npm install vue-router@next --save
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../components/Home.vue';
import FeatureList from '../components/FeatureList.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Navigator from '../components/Navigator.vue';
import Topic from '../components/Topic.vue';
import TopicList from '../components/TopicList.vue';
import TopicDetail from '../components/TopicDetail.vue';
import PostDetail from '../components/PostDetail.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/feature_list',
    name: 'FeatureList',
    component: FeatureList,
  },
  {
    path: '/hello_world',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/navigator',
    name: 'Navigator',
    component: Navigator,
  },
  {
    path: '/topic',
    name: 'Topic',
    component: Topic,
  },
  {
    path: '/topic_list',
    name: 'TopicList',
    component: TopicList,
  },
  {
    path: '/topic_detail',
    name: 'TopicDetail',
    component: TopicDetail,
  },
  {
    path: '/post_detail',
    name: 'PostDetail',
    component: PostDetail,
  },

  
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
