<template>
  <div class="modal-bg">
    <div class="modal-card">
      <div class="modal-card__details">
        <h4 v-html="message"></h4>
        <VButton @click="closeModal">Close</VButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["status", "showModal"],
  methods: {
    closeModal() {
      this.$emit("update:showModal", false)
    }
  },
  computed: {
    message() {
      return this.status > 399
        ? `Error <br> There was a problem, please try again`
        : "Your message has been sent successfully!";
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-bg {
  @apply fixed inset-0 w-full h-screen flex items-center justify-center;
  z-index: 3;
  background: rgba(0, 0, 0, 0.7);
}

.modal-card {
  @apply p-4 h-auto flex items-center flex-col justify-center bg-white max-w-xl whitespace-normal;
  .modal-card__details {
    @apply w-full break-words;
    h4 {
      @apply pt-4 px-4 pb-6 text-3xl;
    }
  }
}
</style>