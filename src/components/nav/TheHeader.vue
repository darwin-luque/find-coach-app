<template>
  <nav>
    <div>
      <router-link to="/">
        <h1>Find a Coach</h1>
      </router-link>
    </div>
    <ul>
      <li v-for="route in routes" :key="route.path">
        <router-link :to="route.path">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      routes: [
        { path: '/coaches', name: 'Coaches' },
        { path: '/requests', name: 'Requests' },
      ],
    };
  },
});
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin: 0 0 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  background: #424874;
}

h1 {
  color: #a6b1e1;
  font-family: 'Amatic SC', cursive;
  border: 1px solid #a6b1e1;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
}

ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0 1rem;
}

li:first-child {
  margin-left: 0;
}

li:last-child {
  margin-right: 0;
}

a,
a:visited {
  text-decoration: none;
  color: inherit;
}

li a {
  color: #dcd6f7;
  padding: 0.25rem 0.5rem;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

li a:hover,
li a.active {
  color: #a6b1e1;
  border-radius: 1rem;
  border-color: #a6b1e1;
}
</style>
