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
  background: var(--color-primary);
}

h1 {
  color: var(--color-tertiary);
  font-family: 'Amatic SC', cursive;
  border: 1px solid var(--color-tertiary);
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
}

li a {
  color: var(--color-quaternary);
  padding: 0.4rem 0.8rem;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
}

li a:hover,
li a.active {
  color: var(--color-tertiary);
  border-radius: 1.2rem;
  border-color: var(--color-tertiary);
}
</style>
