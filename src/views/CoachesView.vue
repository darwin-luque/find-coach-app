<template>
  <div>
    <h1>Coaches</h1>
    <areas-filter @filter="setFilterAreasIds" />
    <coaches-list :filteredAreasIds="filteredAreasIds" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AreasFilter from '../components/areas/AreasFilter.vue';
import CoachesList from '../components/coaches/CoachesList.vue';

export default defineComponent({
  components: { CoachesList, AreasFilter },
  data() {
    return {
      filteredAreasIds: [] as string[],
    };
  },
  methods: {
    setFilterAreasIds(newFilteredAreasIds: string[]) {
      this.filteredAreasIds = newFilteredAreasIds;
    },
  },
});
</script>

<style scoped>
h1 {
  color: var(--color-primary);
}
</style>
