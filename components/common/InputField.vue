<template>
  <div class="contact-field">
    <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
      <div class="error-container absolute">
        <span class="error-message" :class="{'error': errors[0]}">{{ errors[0] }}</span>
      </div>
      <textarea
        v-if="isTextbox"
        type="text"
        :name="name"
        :placeholder="placeholder"
        v-model="inputValue"
        :class="{'input-error': errors[0]}"
      ></textarea>
      <input 
        v-else 
        type="text" 
        :name="name" 
        :placeholder="placeholder"
        v-model="inputValue"
        :class="{'input-error': errors[0]}"
      />
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
      default: () => {
        return [];
      }
    },
    rules: {},
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
  textarea,
  input {
    @apply border-b border-black pb-1 appearance-none w-full;
    border-bottom-width: 2px;
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
  // margin-top: 18px;
  // margin-left: 5px;
}

.error-message {
  width: 100%;
  border-radius: 2px;
  padding: 4px 4px;
  bottom: 0;
  position: absolute;
  // margin-top: -6px;
  // margin-left: 5px;
  // opacity: 0.9;
  right: 0;
  // bottom: 20px;
}

.input-error {
  @apply border border-red-500 border-red-500;
}

.input-error:focus {
  @apply border border-red-500;
}

.error {
  // opacity: 0.9;
  @apply bg-red-600 text-white text-xs border border-red-700 shadow-xl;
  z-index: 50;

}

.input-error::placeholder {
  @apply text-red-600;
}
</style>