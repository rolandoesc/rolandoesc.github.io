<template>
  <section
    class="section-details"
    id="about-me-section-small"
    role="region"
    aria-labelledby="About me bio"
  >
    <div class="relative">
      <AboutMe right :small-view="false">
        <AboutMeBio />
      </AboutMe>
    </div>
    <div class="relative">
      <AboutMe left :small-view="false">
        <AboutMeExperiencesDetails />
      </AboutMe>
    </div>
  </section>
</template>

<script>
import AboutMe from "./AboutMe.vue";
import AboutMeBio from "./AboutMeBio.vue";
import AboutMeExperiencesDetails from "./AboutMeExperiencesDetails.vue";
export default {
  components: {
    AboutMe,
    AboutMeBio,
    AboutMeExperiencesDetails,
  },
};
</script>

<style>
.section#about-me-section-small {
  height: auto;
}
</style>
