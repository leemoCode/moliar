<template>
  <div class="template">
    <span>{{ msg }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useLongTouch } from '../controller/useLongTouch';
import { LongTouchEventInterface } from '../types/longtouch';

export default defineComponent({
  name: 'Template',
  directives: {
    longtouch: {
      // 指令的定义
      mounted(el, binding) {
        const { initLongTouch } = useLongTouch(el, binding.instance as LongTouchEventInterface);

        initLongTouch();
      },

      unmounted(el, binding) {
        const { uninstallLongTouch } = useLongTouch(el, binding.instance as LongTouchEventInterface);

        uninstallLongTouch();
      },
    },
  },
  setup() {
    // const { msg } = useLongTouch();

    return {
      // msg,
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
