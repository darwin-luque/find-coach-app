<template>
  <base-container>
    <div>
      <button @click="fetchCoaches">Refresh</button>
      <app-spinner :size="60" v-if="coachesLoading" />
      <ul v-else>
        <coach-element v-for="coach in coaches" :key="coach.id" :coach="coach" />
      </ul>
    </div>
  </base-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { map, Observable, Subscription } from 'rxjs';
import { mapGetters } from 'vuex';
import CoachElement from './CoachElement.vue';
import BaseContainer from '../ui/BaseContainer.vue';
import AppSpinner from '../ui/AppSpinner.vue';
import { Coach } from '../../types';

export default defineComponent({
  components: { CoachElement, BaseContainer, AppSpinner },
  props: {
    filteredAreasIds: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      subscription: null as Subscription | null,
      coaches: [] as Coach[],
    };
  },
  computed: {
    ...mapGetters({
      coaches$: 'coaches/coaches$',
      coachesLoading: 'coaches/getLoading',
    }),
  },
  methods: {
    setCoaches(newCoaches$: Observable<Coach[]>) {
      const ids = [...this.filteredAreasIds] as string[];
      this.subscription = newCoaches$
        .pipe(
          map((coaches) =>
            coaches.filter((coach) =>
              ids.length > 0 ? ids.some((id) => coach.areas.includes(id)) : true,
            ),
          ),
        )
        .subscribe((coaches) => {
          this.coaches = coaches;
        });
    },
    fetchCoaches() {
      this.$store.dispatch('coaches/fetchCoaches');
    },
  },
  watch: {
    coaches$(newCoaches$: Observable<Coach[]>) {
      this.setCoaches(newCoaches$);
    },
    filteredAreasIds() {
      this.setCoaches(this.coaches$);
    },
  },
  mounted() {
    this.setCoaches(this.coaches$);
  },
  unmounted() {
    this.subscription?.unsubscribe();
  },
});
</script>

<style scoped>
div {
  text-align: left;
}

button {
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);
  background: transparent;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: transform 0.2s ease-in-out;
  margin: 1rem 2rem 0;
}

ul {
  padding: 0;
  margin: 1rem auto;
}

button:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
