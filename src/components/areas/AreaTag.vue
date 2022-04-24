<template>
  <div :style="{ backgroundColor: area.color }">
    <p>{{ area.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    area: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
div {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
}

div:last-child {
  margin-right: 0;
}

p {
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0;
  margin: 0;
}
</style>
