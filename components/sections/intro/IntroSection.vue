<template>
  <section class="section-details" id="intro-section" role="region"
    aria-labelledby="Intro">
    <OverCard v-if="!isSmall" />
    <Intro :is-small="isSmall" />
    <DownArrow v-if="!isSmall" />
  </section>
</template>

<script>
export default {
  props: {
    isSmall: {
      type: Boolean,
      required: true,
    }
  }
};
</script>

<style lang="scss" scoped>
#intro-section {
  @apply pt-4;
}
</style>