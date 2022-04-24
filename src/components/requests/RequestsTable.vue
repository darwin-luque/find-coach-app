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

tr:last-child {
  margin-bottom: 0;
}

thead th:last-child,
tbody td:last-child,
thead th:first-child,
tbody td:first-child {
  width: 20%;
  text-align: center;
}

th,
td {
  padding: 1rem 0.5rem;
  vertical-align: top;
}

td {
  text-align: left;
}

thead th:last-child,
tbody td:last-child {
  width: 15%;
}
</style>
