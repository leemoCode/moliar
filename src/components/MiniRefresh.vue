<template>
  <div class="minirefresh-wrap">
    <div class="minirefresh-scroll">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import 'minirefresh/dist/debug/minirefresh.css';
import MiniRefreshTools from 'minirefresh';

export default defineComponent({
  name: 'MiniRefresh',
  setup() {
    const msg = 'MiniRefresh';

    setTimeout(() => {
      const miniRefresh = new MiniRefreshTools.theme.defaults({
        container: '#minirefresh',
        down: {
          callback: function () {
            // 下拉事件

            window.location.reload();
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
    };
  },
});
</script>

<style scoped>
.template {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
