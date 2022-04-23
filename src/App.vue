<template>
  <the-header></the-header>
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
body,
html {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
