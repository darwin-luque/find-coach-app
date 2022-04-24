<template>
  <base-container>
    <div>
      <h3>Filter by Area(s)</h3>
      <div class="areas">
        <label v-for="area in areas" :key="area.id" :for="area.id">
          <span>{{ area.name }}</span>
          <input
            type="checkbox"
            v-model="selected"
            :id="area.id"
            :name="area.id"
            :value="area.id"
          />
        </label>
      </div>
    </div>
  </base-container>
</template>

<script lang="ts">
import { Observable, Subscription } from 'rxjs';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import { Area } from '../../types';
import BaseContainer from '../ui/BaseContainer.vue';

export default defineComponent({
  components: { BaseContainer },
  data() {
    return {
      subscription: null as Subscription | null,
      areas: [] as Area[],
      selected: [] as string[],
    };
  },
  emits: ['filter'],
  computed: {
    ...mapGetters({
      areas$: 'areas/areas$',
      loading: 'areas/getLoading',
    }),
  },
  methods: {
    setAreas(newAreas$: Observable<Area[]>) {
      this.subscription = newAreas$.subscribe((areas) => {
        this.areas = areas;
      });
    },
  },
  watch: {
    areas$(newCoaches$: Observable<Area[]>) {
      this.setAreas(newCoaches$);
    },
    selected(newSelected: string[]) {
      this.$emit('filter', newSelected);
    },
  },
  mounted() {
    this.setAreas(this.areas$);
  },
});
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
}

h3 {
  width: 100%;
  text-align: center;
}

.areas {
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

label {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
