<template>
  <div id="about-me-experiences">
    <AboutMeExperiences />
    <DotsDivider />
    <AboutMeSkillsList />
  </div>
</template>

<script>
import DotsDivider from "../../common/DotsDivider.vue";
import AboutMeExperiences from "./AboutMeExperiences.vue";
import AboutMeSkillsList from "./AboutMeSkillsList.vue";
export default {
  components: {
    AboutMeExperiences,
    DotsDivider,
    AboutMeSkillsList,
  },
};
</script>

<style lang="scss" scoped>
#about-me-experiences {
  @apply w-full flex flex-col text-left justify-around px-2;
}
@media screen and (max-width: 679px) {
  #about-me-experiences {
    @apply px-0;
  }
}
</style>
