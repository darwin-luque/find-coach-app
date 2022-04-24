<template>
  <table>
    <thead>
      <tr>
        <th>Email</th>
        <th>Message</th>
        <th>Coach ID</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="request in requests" :key="request.id">
        <td>{{ request.email }}</td>
        <td>{{ request.message }}</td>
        <td>{{ request.coachId }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    requests: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
table {
  width: 100%;
}

tr {
  border-bottom: 1px solid #ccc;
}
</style>
