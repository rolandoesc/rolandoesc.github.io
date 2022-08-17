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
export default {};
</script>

<style>
.section#about-me-section-small {
  height: auto;
}
</style>