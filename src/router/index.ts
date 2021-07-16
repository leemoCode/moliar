// 此处如提示export 'createWebHistory, createRouter' was not found in 'vue-router'
// 执行 npm install vue-router@next --save
import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../components/Home.vue';
import FeatureList from '../components/FeatureList.vue';
import HelloWorld from '../components/HelloWorld.vue';
import Navigator from '../components/Navigator.vue';

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
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
