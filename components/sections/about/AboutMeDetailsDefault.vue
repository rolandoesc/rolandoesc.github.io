<template>
  <section
    class="section-details"
    id="about-me-section"
    role="region"
    aria-labelledby="About me bio"
  >
    <OverCard class="show-on-large" cover-card right-side />
    <AboutMe class="show-on-large" small-view>
      <AboutMeBio />
      <AboutMeExperiencesDetails />
    </AboutMe>
    <div class="relative show-on-small">
      <AboutMe right>
        <AboutMeBio />
      </AboutMe>
    </div>
    <div class="relative show-on-small">
      <AboutMe left>
        <AboutMeExperiencesDetails :is-small="true" />
      </AboutMe>
    </div>
  </section>
</template>
<script>
import OverCard from "../../common/OverCard.vue";
import AboutMe from "./AboutMe.vue";
import AboutMeBio from "./AboutMeBio.vue";
import AboutMeExperiencesDetails from "./AboutMeExperiencesDetails.vue";
export default {
  components: {
    OverCard,
    AboutMe,
    AboutMeBio,
    AboutMeExperiencesDetails,
  },
};
</script>
