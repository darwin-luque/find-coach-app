<template>
  <div>
    <h1>Coaches</h1>
    <coaches-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CoachesList from '../components/coaches/CoachesList.vue';

export default defineComponent({
  components: { CoachesList },
});
</script>

<style scoped>
h1 {
  color: var(--color-primary);
}
</style>
