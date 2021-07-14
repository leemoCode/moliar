import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';

import { longtouchDirective } from './controller/longtouchDirective';

const app = createApp(App);
// 全局注入长按指令
app.directive('longtouch', longtouchDirective);
app.use(ElementPlus);
app.use(router);
app.mount('#app');
