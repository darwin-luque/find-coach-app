<template>
  <form @submit.prevent="contactCoach">
    <label for="email">
      <span>Email:</span>
      <input
        type="email"
        id="email"
        name="email"
        :value="email.value"
        @input="updateEmail"
        :class="{ invalid: invalidEmail }"
      />
      <p v-show="invalidEmail">Invalid email</p>
    </label>
    <label for="message">
      <span>Message:</span>
      <textarea
        id="message"
        :value="message.value"
        @input="updateMessage"
        rows="5"
        :class="{ invalid: invalidMessage }"
      />
      <p v-show="invalidMessage">Invalid message</p>
    </label>
    <button :disabled="invalidForm" type="submit">Send</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FormField } from '../../types';
import { validateFormField } from '../../utils';

export default defineComponent({
  data() {
    return {
      email: {
        value: '',
        valid: false,
        touched: false,
        rules: {
          required: true,
          email: true,
        },
      } as FormField,
      message: {
        value: '',
        valid: false,
        touched: false,
        rules: {
          required: true,
        },
      } as FormField,
    };
  },
  props: {
    coachId: {
      type: String,
      required: true,
    },
  },
  computed: {
    invalidForm() {
      return !this.email.valid || !this.message.valid;
    },
    invalidEmail() {
      return !this.email.valid && this.email.touched;
    },
    invalidMessage() {
      return !this.message.valid && this.message.touched;
    },
  },
  methods: {
    contactCoach() {
      console.log({ email: this.email.value, message: this.message.value });
    },
    updateEmail(newEmail: Event) {
      this.email.value = (newEmail.target as HTMLInputElement).value;
      this.email.touched = true;
      const newValid = validateFormField(this.email);
      if (newValid !== this.email.valid) {
        this.email.valid = newValid;
      }
    },
    updateMessage(newMessage: Event) {
      this.message.value = (newMessage.target as HTMLInputElement).value ?? '';
      this.message.touched = true;
      const newValid = validateFormField(this.message);
      if (newValid !== this.message.valid) {
        this.message.valid = newValid;
      }
    },
  },
});
</script>

<style scoped>
label {
  display: block;
  width: 80%;
  margin: 2rem auto;
}
span {
  display: block;
  width: 80%;
  text-align: left;
  margin: 0 auto 0.5rem;
}
input,
textarea {
  width: 60%;
  margin: 0 auto;
  padding: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  border-radius: 0.5rem;
  border: 1px solid var(--color-tertiary);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-secondary);
}
.invalid,
.invalid:focus {
  border-color: var(--color-error);
}
p {
  color: var(--color-error);
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
}
button {
  background-color: var(--color-secondary);
  color: var(--color-quaternary);
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  transition: transform 0.2s ease-in-out;
}

button:disabled {
  background-color: var(--color-tertiary);
}
button:disabled:hover {
  cursor: not-allowed;
  transform: none;
}

button:hover {
  transform: scale(1.05);
  cursor: pointer;
}
</style>
