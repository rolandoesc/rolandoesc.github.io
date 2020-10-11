<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form class="form" id="contact-form">
      <div id="contact-details">
        <InputField name="firstName" placeholder="Name" v-model="name" rules="alpha_spaces|required" />
        <InputField name="lastName" placeholder="Last Name" v-model="lastName" />
        <InputField name="email" placeholder="E-mail" rules="email|required" v-model="email" />
      </div>
      <div id="contact-message">
        <InputField name="message" placeholder="Message" is-textbox v-model="message" rules="required" />
      </div>
      <div id="send-button">
        <VButton @click="sendEmail()" :disabled="clickEnabled(invalid)">Send</VButton>
      </div>
    </form>
    <ModalMessage :show-modal.sync="showModal" :status="status" v-if="showModal"/>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { sendEmail } from "@/plugins/email.js";
export default {
  components: {
    ValidationObserver,
  },
  data() {
    return {
      name: "",
      lastName: "",
      email: "",
      message: "",
      disabled: false,
      showModal: false,
      status: 0
    };
  },
  methods: {
    async sendEmail() {
      this.disabled = true
      const form = document.getElementById("contact-form");
      this.status = await sendEmail(form);
      this.showModal = true
      this.disabled = false
      this.status < 400 ? this.clearForm() : null;
    },
    clickEnabled(firstValidation) {
      return firstValidation && !this.disabled
    },
    clearForm() {
      this.firstName = ""
      this.lastName = ""
      this.email = ""
      this.message = ""
    }
  },
};
</script>

<style lang="scss" scoped>
.form {
  @apply flex flex-col py-2;
  #contact-details {
    @apply flex w-full pb-2;
    * {
      @apply px-1;
    }
    *:first-child {
      @apply pr-1 pl-0;
    }
    *:last-child {
      @apply pr-0 pl-1;
    }
  }
  #contact-message {
    @apply flex w-full pb-2;
  }
  #send-button {
    @apply pb-2;
  }
}
</style>