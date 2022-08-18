<template>
  <section id="contact-section" role="region" aria-labelledby="Contact me form">
    <h1>Let's talk and make magic happen!</h1>
    <ContactForm />
  </section>
</template>

<script>
import ContactForm from "./ContactForm.vue";
export default {
  components: {
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 679px) {
  #contact-section {
    h1 {
      @apply text-left pl-4 pr-12;
    }
  }
}
</style>
