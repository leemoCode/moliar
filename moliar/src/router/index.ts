// 此处如提示export 'createWebHistory, createRouter' was not found in 'vue-router'
// 执行 npm install vue-router@next --save
import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../components/Home.vue";
const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
