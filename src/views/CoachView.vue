<template>
  <base-container>
    <div class="container">
      <div class="header">
        <h3>{{ coach?.name }}</h3>
        <app-favorite-button
          :favorite="coach?.isFavorite"
          @toggle-favorite="toggleFavorite"
        />
      </div>
      <hr />
      <coach-info :coach="coach" />
    </div>
  </base-container>
  <router-view></router-view>
</template>

<script lang="ts">
import { Observable, Subscription } from 'rxjs';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import AppFavoriteButton from '../components/ui/AppFavoriteButton.vue';
import CoachInfo from '../components/coaches/CoachInfo.vue';
import BaseContainer from '../components/ui/BaseContainer.vue';
import { Coach } from '../types';

export default defineComponent({
  components: { BaseContainer, AppFavoriteButton, CoachInfo },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      coaches$: 'coaches/coaches$',
    }),
  },
  data() {
    return {
      subscription: null as Subscription | null,
      coach: undefined as Coach | undefined,
    };
  },
  methods: {
    setCoach(newCoaches$: Observable<Coach[]>) {
      this.subscription = newCoaches$.subscribe((coaches) => {
        this.coach = coaches.find((coach) => coach.id === this.id);
      });
    },
    toggleFavorite() {
      this.$store.dispatch('coaches/toggleCoachFavorite', this.coach);
    },
  },
  watch: {
    coach(coach?: Coach) {
      if (!coach) {
        this.$router.replace('/not-found');
      }
    },
    coaches$(newCoaches$: Observable<Coach[]>) {
      this.setCoach(newCoaches$);
    },
  },
  mounted() {
    console.log('mounted');
    this.setCoach(this.coaches$);
  },
  unmounted() {
    this.subscription?.unsubscribe();
  },
});
</script>

<style scoped>
.container {
  width: 80%;
  margin: 1rem auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 2rem;
  margin: 1rem 0;
}

h3 {
  font-size: 1.4rem;
  color: var(--color-primary);
  margin: 0;
  padding: 0;
}

hr {
  margin: 0 auto;
  border: none;
  height: 2px;
  background-color: var(--color-tertiary);
  width: 90%;
}
</style>
