// 此处如提示export 'createWebHistory, createRouter' was not found in 'vue-router'
// 执行 npm install vue-router@next --save
import { createRouter, createWebHashHistory } from "vue-router";

import Template from "../components/Template.vue";
const routes = [
  {
    path: "/template",
    name: "Template",
    component: Template,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
