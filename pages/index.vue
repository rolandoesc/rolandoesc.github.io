<template>
  <div class="landing-container" role="main">
    <intro-section :is-small="isSmall" />
    <portfolio-section />
    <AboutMeSection />
    <DotsDivider class="section-divider" />
    <BlogPostsSection />
    <DotsDivider class="section-divider" />
    <ContactMeSection />
    <Footer />
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
export default {
  components: {
    BlogPostsSection,
    IntroSection,
    PortfolioSection,
    AboutMeSection,
    DotsDivider,
    ContactMeSection,
    Footer,
  },
  computed: {
    isSmall() {
      return this.$breakpoints.is === "xs";
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
  background-color: white;
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
