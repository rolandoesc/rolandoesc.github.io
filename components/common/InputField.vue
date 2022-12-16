<template>
  <div class="contact-field">
    <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
      <div class="error-container absolute">
        <span class="error-message" :class="{ error: errors[0] }">
          {{ errors[0] }}
        </span>
      </div>
      <div :class="[errors[0] ? 'field-error' : 'field']">
        <textarea
          v-if="isTextbox"
          type="text"
          :name="name"
          :placeholder="placeholder"
          v-model="inputValue"
          :class="{ 'input-error': errors[0] }"
        ></textarea>
        <input
          v-else
          type="text"
          :name="name"
          :placeholder="placeholder"
          v-model="inputValue"
          :class="{ 'input-error': errors[0] }"
        />
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  name: "InputField",
  components: {
    ValidationProvider,
  },
  props: {
    errors: {
      type: Array,
      required: false,
      default: () => [],
    },
    rules: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    name: {
      type: String,
      required: false,
      default: "",
    },
    isTextbox: {
      type: Boolean,
      required: false,
      default: false,
    },
    value: {
      type: String,
      required: false,
    },
  },
  computed: {
    inputValue: {
      set(value) {
        this.$emit("input", value);
      },
      get() {
        return this.value;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-field {
  @apply mb-2 w-full;
  .field {
    @apply border-b border-black;
    border-bottom-width: 2px;
  }
  textarea,
  input {
    @apply appearance-none w-full pb-1;
  }
  textarea {
    resize: none;
  }
  textarea:focus,
  input:focus {
    @apply outline-none;
  }
  textarea::placeholder,
  input::placeholder {
    @apply text-gray-900;
  }
}

.error-arrow .error-message::after {
  content: "";
  position: absolute;
  top: 100%;
  right: 85%;
  border-width: 6px;
  border-style: solid;
  border-color: #e53e3e transparent transparent transparent;
}

.error-container {
  position: relative;
  @apply pt-2;
}

.error-message {
  width: 100%;
  border-radius: 2px;
  padding: 4px 4px;
  bottom: 0;
  position: absolute;
  right: 0;
}

.input-error {
  @apply border border-red-500 border-red-500;
}

.input-error:focus {
  @apply border border-red-500;
}

.error {
  @apply bg-red-600 text-white text-xs border border-red-700 shadow-xl;
  z-index: 50;
}

.field-error {
  @apply border-b border-red-600;
  border-bottom-width: 2px;
}

.input-error::placeholder {
  @apply text-red-600;
}
</style>
