<template>
  <li>
    <coach-header
      :name="coach.name"
      :certified="coach.certified"
      :isFavorite="coach.isFavorite"
      @toggle-favorite="toggleFavorite"
    />
    <area-tag v-for="area in coach.areasData" :area="area" :key="area.id" />
    <p>Fee: {{ coach.formattedFee }}</p>
    <div class="buttons">
      <router-link :to="`/coaches/${coach.id}/contact`" class="contact">
        Contact
      </router-link>
      <router-link :to="`/coaches/${coach.id}`" class="details">View Details</router-link>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AreaTag from '../areas/AreaTag.vue';
import CoachHeader from './CoachHeader.vue';

export default defineComponent({
  components: { CoachHeader, AreaTag },
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
  --padding-sides: 1rem;
  width: 80%;
  min-width: calc(300px - calc(2 * var(--padding-sides)));
  margin: 1rem auto;
  padding: 0.5rem var(--padding-sides);
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

a,
a:visited {
  text-decoration: none;
}

a {
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  transition: transform 0.2s ease-in-out;
}

a:hover {
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
