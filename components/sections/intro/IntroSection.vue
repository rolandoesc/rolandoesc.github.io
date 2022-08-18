<template>
  <section
    id="intro-section"
    class="section-details"
    role="region"
    aria-labelledby="Intro"
  >
    <over-card v-if="!isSmall" />

    <intro :is-small="isSmall" />
    <down-arrow v-if="!isSmall" />
  </section>
</template>

<script>
import DownArrow from '../../common/DownArrow.vue'
import OverCard from '../../common/OverCard.vue'
import Intro from './Intro.vue'

export default {
  components: {
    OverCard,
    Intro,
    DownArrow
  },
  props: {
    isSmall: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#intro-section {
  @apply pt-4;
}
</style>
