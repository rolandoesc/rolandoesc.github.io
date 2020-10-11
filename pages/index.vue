<template>
  <div class="landing-container">
    <IntroSection />
    <PortfolioSection />
    <AboutMeSection/>
    <DotsDivider id="contact-divider"/>
    <ContactMeSection />
  </div>
</template>
<style>
#contact-divider {
  @apply my-8;
}
.landing-container {
  @apply border my-0 w-full flex-col min-h-screen flex justify-center text-center items-center relative;
  background: url('~assets/images/holders/Background_Desktop.png');
}

@media screen and (max-width: 677px) {
  .landing-container {
    background: url('~assets/images/holders/Background_Mobile.png');
  }
}

</style>
