<template>
  <button @click="emit('toggle-favorite')">
    <i :class="{ press: favorite }"></i>
    <span :class="{ press: favorite }">favorite!</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['toggle-favorite'],
});
</script>

<style scoped>
button {
  border: none;
  background-color: transparent;
  margin: 0 1rem;
  position: relative;
}

i {
  cursor: pointer;
  padding: 10px 12px 8px;
  background: #fff;
  border-radius: 50%;
  display: inline-block;
  margin: 0;
  color: #aaa;
  transition: 0.2s;
}

i:hover {
  color: #e23b3b;
}

i:before {
  font-family: fontawesome;
  content: '\2665';
  font-style: normal;
}

span {
  position: absolute;
  bottom: 70px;
  left: 0;
  right: 0;
  visibility: hidden;
  transition: 0.6s;
  z-index: -2;
  font-size: 2px;
  color: transparent;
  font-weight: 400;
}

i.press {
  animation: size 0.4s;
  color: #e23b3b;
}

span.press {
  bottom: 120px;
  font-size: 14px;
  visibility: visible;
  animation: fade 1s;
}

@keyframes fade {
  0% {
    color: transparent;
  }
  50% {
    color: #e23b3b;
  }
  100% {
    color: transparent;
  }
}

@keyframes size {
  0% {
    padding: 10px 12px 8px;
  }
  50% {
    padding: 14px 16px 12px;
    margin-top: -4px;
  }
  100% {
    padding: 10px 12px 8px;
  }
}
</style>
