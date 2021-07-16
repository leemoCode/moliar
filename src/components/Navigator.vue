<template>
  <div class="template">
    <div>{{ msg1 }}</div>
    <div>{{ msg }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useNavigator } from '../controller/useNavigator';

export default defineComponent({
  name: 'Navigator',
  setup() {
    const { msg } = useNavigator();

    const msg1 = 'Navigator';

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
