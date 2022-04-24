<template>
  <div>
    <h1>Requests</h1>
    <base-container>
      <app-spinner v-if="loading" />
      <requests-table v-else-if="requests && requests.length > 0" :requests="requests" />
    </base-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import RequestsTable from '../components/requests/RequestsTable.vue';
import AppSpinner from '../components/ui/AppSpinner.vue';
import BaseContainer from '../components/ui/BaseContainer.vue';

export default defineComponent({
  components: { RequestsTable, BaseContainer, AppSpinner },
  computed: {
    ...mapGetters({
      requests: 'requests/getRequests',
      loading: 'requests/getLoading',
    }),
  },
});
</script>

<style scoped></style>
