// 此处如提示export 'createWebHistory, createRouter' was not found in 'vue-router'
// 执行 npm install vue-router@next --save
import { createRouter, createWebHashHistory } from "vue-router";

import FeatureList from "../components/FeatureList.vue";
import LongTouchDemo from "../components/LongTouchDemo.vue";
const routes = [
  {
    path: "/featureList",
    name: "FeatureList",
    component: FeatureList,
  },
  {
    path: "/longTouchDemo",
    name: "LongTouchDemo",
    component: LongTouchDemo,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
