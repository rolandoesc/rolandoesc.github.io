<template>
  <div class="landing-container">
    <IntroSection />
    <AboutMeSection/>
    <ContactMeSection />
  </div>
</template>
<style>
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
