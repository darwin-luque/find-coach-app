<template>
  <li>
    <div class="header">
      <h3>{{ coach.name }}</h3>
      <app-favorite-button
        :favorite="coach.isFavorite"
        @toggle-favorite="toggleFavorite"
      />
    </div>
    <p>Fee: {{ coach.formattedFee }}</p>
    <div class="buttons">
      <button class="contact">Contact</button>
      <button class="details">View Details</button>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppFavoriteButton from '../ui/AppFavoriteButton.vue';

export default defineComponent({
  components: { AppFavoriteButton },
  props: {
    coach: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleFavorite() {
      this.$store.dispatch('coaches/toggleCoachFavorite', this.coach);
    },
  },
});
</script>

<style scoped>
li {
  width: 80%;
  margin: 1rem auto;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-tertiary);
  border-radius: 1rem;
  color: var(--color-secondary);
}

li:hover {
  border-color: var(--color-secondary);
}

li:first-child {
  margin-top: 0;
}

li:last-child {
  margin-bottom: 0;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h3 {
  margin: 1rem 0 0.5rem;
}

p {
  margin: 0.5rem 0;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  --side-padding: 1rem;
  width: calc(100% - var(--side-padding) * 2);
  padding: 0.5rem var(--side-padding);
}

button {
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  transition: transform 0.2s ease-in-out;
}

button:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.contact {
  background-color: var(--color-secondary);
  color: var(--color-tertiary);
  margin-left: 0;
}

.details {
  background-color: var(--color-tertiary);
  color: var(--color-secondary);
  margin-right: 0;
}
</style>
