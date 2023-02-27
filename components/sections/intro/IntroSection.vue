<template>
  <section
    id="intro-section"
    class="section-details"
    role="region"
    aria-labelledby="Intro"
  >
    <over-card class="show-on-large" />

    <intro />
    <down-arrow />
  </section>
</template>

<script>
import DownArrow from "../../common/DownArrow.vue";
import OverCard from "../../common/OverCard.vue";
import Intro from "./Intro.vue";

export default {
  components: {
    OverCard,
    Intro,
    DownArrow,
  },
};
</script>

<style lang="scss" scoped>
#intro-section {
  @apply pt-4;
}
</style>
