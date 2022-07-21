<template>
  <div class="landing-container">
    <IntroSection :is-small="isSmall" />
    <PortfolioSection />
    <AboutMeSection />
    <DotsDivider class="section-divider" />
    <blog-posts-section/>
    <DotsDivider class="section-divider" />
    <ContactMeSection />
    <Footer/>
  </div>
</template>
<script>
import BlogPostsSection from '../components/sections/blogposts/BlogPostsSection.vue';
export default {
  head() {
    return {
      title: `"Chamo" Escalona | Software Engineer`
    };
  },
  components: { BlogPostsSection },
  computed: {
    isSmall() {
      return this.$breakpoints.is === "xs";
    },
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
