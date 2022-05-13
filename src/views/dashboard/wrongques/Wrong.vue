<!-- <template>123</template> -->
<!-- <script></script> -->

<template>
  <div>123</div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup () {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
