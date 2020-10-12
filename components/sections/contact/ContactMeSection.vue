<template>
  <section id="contact-section">
    <h1>
      Let's talk and make magic happen!
    </h1>
    <ContactForm />
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@media screen and (max-width: 679px) {
  #contact-section {
    h1 {
      @apply text-left pl-4;
    }
  }
}
</style>