<template>
  <div class="landing-container" role="main">
    <template v-if="this.$breakpoints.canBeDisplayed">
      <IntroSection :is-small="isSmall" />
      <PortfolioSection />
      <AboutMeSection :is-small="isSmall" />
      <DotsDivider class="section-divider" />
      <BlogPostsSection />
      <DotsDivider class="section-divider" />
      <ContactMeSection />
      <Footer />
    </template>
    <TooSmall v-else />
  </div>
</template>
<script>
import BlogPostsSection from "../components/sections/blogposts/BlogPostsSection.vue";
import IntroSection from "../components/sections/intro/IntroSection.vue";
import PortfolioSection from "../components/sections/portfolio/PortfolioSection.vue";
import AboutMeSection from "../components/sections/about/AboutMeSection.vue";
import DotsDivider from "../components/common/DotsDivider";
import ContactMeSection from "../components/sections/contact/ContactMeSection.vue";
import Footer from "../components/sections/footer/Footer.vue";
import TooSmall from "../components/sections/smallview/TooSmall.vue";
export default {
  components: {
    BlogPostsSection,
    IntroSection,
    PortfolioSection,
    AboutMeSection,
    DotsDivider,
    ContactMeSection,
    Footer,
    TooSmall,
  },
  computed: {
    isSmall() {
      return this.$breakpoints.isSmall;
    },
  },
  head() {
    return {
      title: '"Chamo" Escalona | Software Engineer',
    };
  },
};
</script>
<style>
.section-divider {
  @apply my-8;
}
.landing-container {
  @apply my-0 w-full flex-col min-h-screen flex justify-center text-center items-center relative;
  background: url("~assets/images/holders/Background_Desktop.png");
  overflow-x: hidden !important;
}

@media screen and (max-width: 679px) {
  .landing-container {
    background: url("~assets/images/holders/Background_Mobile.png");
  }
  .section-divider {
    @apply pl-2;
  }
}
</style>
