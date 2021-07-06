<template>
  <div class="template">
    <span>{{ msg1 }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTemplate } from '../controller/useTemplate';

export default defineComponent({
  name: 'Template',
  setup() {
    const { msg } = useTemplate();

    const msg1 = 'featureList';

    return {
      msg,
      msg1,
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
