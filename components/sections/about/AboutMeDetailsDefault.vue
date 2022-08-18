<template>
  <section
    class="section-details"
    id="about-me-section"
    role="region"
    aria-labelledby="About me bio"
  >
    <OverCard cover-card right-side />
    <AboutMe small-view>
      <AboutMeBio />
      <AboutMeExperiencesDetails />
    </AboutMe>
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
