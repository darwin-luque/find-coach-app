<template>
  <div class="info">
    <coach-info-point
      v-for="(value, key) in info"
      :key="key"
      :name="key"
      :content="value"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CoachInfoPoint from './CoachInfoPoint.vue';

export default defineComponent({
  components: { CoachInfoPoint },
  props: {
    coach: {
      type: Object,
      required: true,
    },
  },
  computed: {
    info() {
      return {
        description: this.coach?.description,
        fee: this.coach?.formattedFee,
        phone: this.coach?.contactInformation.phone,
        email: this.coach?.contactInformation.email,
      };
    },
  },
});
</script>

<style scoped>
.info {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
