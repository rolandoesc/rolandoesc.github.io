<template>
  <section class="section-details" id="intro-section">
    <OverCard v-if="!isSmall" />
    <Intro :is-small="isSmall" />
    <DownArrow v-if="!isSmall" />
  </section>
</template>

<script>
export default {
  props: ["isSmall"]
};
</script>

<style lang="scss" scoped>
#intro-section {
  @apply pt-4;
}
</style>