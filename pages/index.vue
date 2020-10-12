<template>
  <div class="landing-container">
    <IntroSection :is-small="isSmall" />
    <PortfolioSection />
    <AboutMeSection />
    <DotsDivider id="contact-divider" />
    <ContactMeSection />
  </div>
</template>
<script>
export default {
  computed: {
    isSmall() {
      return this.$breakpoints.is === "xs";
    },
  },
};
</script>
<style>
#contact-divider {
  @apply my-8;
}
.landing-container {
  @apply border my-0 w-full flex-col min-h-screen flex justify-center text-center items-center relative;
  background: url("~assets/images/holders/Background_Desktop.png");
  overflow-x: hidden !important;
}

@media screen and (max-width: 679px) {
  .landing-container {
    background: url("~assets/images/holders/Background_Mobile.png");
  }
  #contact-divider {
    @apply pl-2;
  }
}
</style>
