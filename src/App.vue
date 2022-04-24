<template>
  <the-header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from './components/nav/TheHeader.vue';

export default defineComponent({
  components: { TheHeader },
});
</script>

<style>
:root {
  --color-primary: #1e2022;
  --color-secondary: #52616b;
  --color-tertiary: #c9d6df;
  --color-quaternary: #f0f5f9;
}

body,
html {
  margin: 0;
  padding: 0;
  background: var(--color-quaternary);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-secondary);
}

ul {
  list-style: none;
}
</style>
