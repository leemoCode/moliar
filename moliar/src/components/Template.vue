<template>
  <div class="template">
    <span>{{ msg }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTemplate } from '../controller/useTemplate';

export default defineComponent({
  name: 'Template',
  setup() {
    const { msg } = useTemplate();

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
