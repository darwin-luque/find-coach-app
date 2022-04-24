<template>
  <base-container>
    <h3>Contact Coach</h3>
    <contact-coach-form :coach="coach" />
  </base-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactCoachForm from '../components/coaches/ContactCoachForm.vue';
import BaseContainer from '../components/ui/BaseContainer.vue';

export default defineComponent({
  components: { BaseContainer, ContactCoachForm },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
h3 {
  font-size: 1.4rem;
  color: var(--color-primary);
  margin: 0;
  padding: 0;
}
</style>
