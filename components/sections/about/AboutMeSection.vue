<template>
  <section class="section column centered-block w-full pt-4 relative" id="about-me">
    <template v-if="smallView">
      <div class="relative">
      <OverCard cover-card />
      <AboutMe>
        <AboutMeBio />
      </AboutMe>

      </div>
      <div class="relative">
      <OverCard cover-card right-side />
      <AboutMe>
        <AboutMeExperiencesDetails />
      </AboutMe>

      </div>
    </template>
    <template v-else>
      <OverCard cover-card right-side />
      <AboutMe>
        <AboutMeBio />
        <AboutMeExperiencesDetails />
      </AboutMe>
    </template>
  </section>
</template>

<script>
export default {
  computed: {
    smallView() {
      const { is } = this.$breakpoints;
      return is === "xs" || is === "sm";
    },
  },
};
</script>

<style lang="scss" scoped>
@screen sm {
  .section#about-me {
    @apply bg-red-400;
    height: 175vh;
  }
}
</style>