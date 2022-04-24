<template>
  <base-container>
    <div class="container">
      <div class="header-container">
        <coach-header
          :name="coach?.name"
          :isFavorite="coach?.isFavorite"
          :certified="coach?.certified"
          @toggle-favorite="toggleFavorite"
        />
      </div>
      <hr />
      <coach-info :coach="coach" />
    </div>
  </base-container>
  <router-link :to="`/coaches/${id}/contact`">Contact</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { Observable, Subscription } from 'rxjs';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import CoachInfo from '../components/coaches/CoachInfo.vue';
import BaseContainer from '../components/ui/BaseContainer.vue';
import CoachHeader from '../components/coaches/CoachHeader.vue';
import { Coach } from '../types';

export default defineComponent({
  components: { BaseContainer, CoachInfo, CoachHeader },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      coaches$: 'coaches/coaches$',
      loading: 'coaches/getLoading',
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

.header-container {
  padding: 0 1rem 0 2rem;
}

hr {
  margin: 0 auto;
  border: none;
  height: 2px;
  background-color: var(--color-tertiary);
  width: 90%;
}

a,
a:visited {
  text-decoration: none;
  color: var(--color-secondary);
}

a {
  display: block;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin: 2rem 0.5rem;
  transition: transform 0.2s ease-in-out;
}

a:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
