<template>
  <div class="info-point">
    <p class="info-name">{{ name }}</p>
    <p class="info-content">{{ content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
});
</script>

<style scoped>
.info-point {
  width: 50%;
  min-width: 200px;
  text-align: left;
  margin: 0 auto;
}

.info-name {
  font-weight: 600;
  text-transform: capitalize;
}

.info-content {
  margin-left: 1rem;
}
</style>
