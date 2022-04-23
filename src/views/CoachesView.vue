<template>
  <div>
    <h1>Coaches</h1>
    <ul>
      <li v-for="coach in coaches" :key="coach.id">
        <p>{{ coach.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Observable, Subscription } from 'rxjs';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import { Coach } from '../types';

export default defineComponent({
  data() {
    return {
      subscription: null as Subscription | null,
      coaches: [] as Coach[],
    };
  },
  computed: {
    ...mapGetters({
      coaches$: 'coaches/coaches$',
    }),
  },
  methods: {
    setCoaches(newCoaches$: Observable<Coach[]>) {
      this.subscription = newCoaches$.subscribe((coaches) => {
        this.coaches = coaches;
      });
    },
  },
  watch: {
    coaches$(newCoaches$: Observable<Coach[]>) {
      this.setCoaches(newCoaches$);
    },
  },
  beforeCreate() {
    // disaple type check
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$store.dispatch('coaches/fetchCoaches');
  },
  unmounted() {
    this.subscription?.unsubscribe();
  },
});
</script>

<style scoped>
h1 {
  color: var(--color-primary);
}
</style>
