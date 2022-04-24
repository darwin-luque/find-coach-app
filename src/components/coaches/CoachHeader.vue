<template>
  <div class="header">
    <h3>{{ name }}<sup v-show="certified">✔️</sup></h3>
    <app-favorite-button
      :favorite="isFavorite"
      @toggle-favorite="$emit('toggle-favorite')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppFavoriteButton from '../ui/AppFavoriteButton.vue';

export default defineComponent({
  components: { AppFavoriteButton },
  props: {
    name: {
      type: String,
      default: '',
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
    certified: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}

h3 {
  font-size: 1.4rem;
  color: var(--color-primary);
  margin: 0;
  padding: 0;
}

sup {
  margin-left: 0.25rem;
  font-size: 0.5rem;
}
</style>
