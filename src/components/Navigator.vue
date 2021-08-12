<template>
  <div class="minirefresh-wrap" id="minirefresh">
    <div class="minirefresh-scroll">
      <div class="template" slot="content">
        <div>{{ msg1 }}</div>
        <div>{{ msg1 }}</div>
        <div>{{ msg1 }}</div>
        <div>{{ msg1 }}</div>
        <div>{{ msg1 }}</div>
        <div>{{ msg1 }}</div>
        <div>{{ msg1 }}</div>
        <div>{{ msg }}</div>
        <!-- <div class="test-button" ref="ele" v-test>button</div> -->
        <div class="load-try ripple">水波纹效果</div>
        <div class="load-try" @click="tst">普通效果</div>
      </div>
    </div>
  </div>
  <!-- <MiniRefresh id="minirefresh"> -->

  <!-- </MiniRefresh> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useNavigator } from '../controller/useNavigator';
// import { test } from '../controller/useRipple/index.js';

// import MiniRefresh from './MiniRefresh.vue';

import 'minirefresh/dist/debug/minirefresh.css';
import MiniRefreshTools from 'minirefresh';

export default defineComponent({
  name: 'Navigator',
  components: {
    // MiniRefresh,
  },
  setup() {
    const { msg } = useNavigator();

    const msg1 = 'Navigator';

    const ele = ref(null);

    const tst = () => {
      console.log('11');
    };

    console.log('11');

    setTimeout(() => {
      const miniRefresh = new MiniRefreshTools.theme.defaults({
        container: '#minirefresh',
        down: {
          callback: function () {
            // 下拉事件

            // window.location.reload();
            miniRefresh.endDownLoading();
          },
        },
        up: {
          callback: function () {
            // 上拉事件

            // 注意，由于默认情况是开启满屏自动加载的，所以请求失败时，请务必endUpLoading(true)，防止无限请求
            miniRefresh.endUpLoading();
          },
        },
      });
    }, 200);

    return {
      msg,
      msg1,
      ele,
      tst,
    };
  },
});
</script>

<style scoped>
/* @import '../controller/useRipple/ripple.scss'; */

.template {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.load-try {
  display: inline-block;
  font-size: 42px;
  font-weight: 500;
  color: #000;
  border-radius: 21px;
  line-height: 72px;
  margin: auto;
  width: 294px;
}

.load-try :hover {
  background: rgba(0, 0, 0, 0.9);
}

.ripple {
  position: relative;
  overflow: hidden;
}

.ripple:after {
  content: '';
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.9) 10%,
    transparent 10.01%
  );
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.3s, opacity 0.7s;
}

.ripple:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}
</style>
