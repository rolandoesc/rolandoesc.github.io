<template>
  <div id="about-me">
    <SectionCard :rotate="smallView" large-card :left="left" :right="right">
      <div id="about-me-details">
        <slot />
      </div>
    </SectionCard>
  </div>
</template>

<script>
import SectionCard from "../../common/SectionCard.vue";
export default {
  components: {
    SectionCard,
  },
  props: ["left", "right", "smallView"],
};
</script>

<style lang="scss" scoped>
#about-me {
  @apply w-5/6 flex-col mb-auto mt-20 mx-auto relative;
  height: 90vh;
  max-height: 90vh;
}

#about-me-details {
  @apply h-full flex w-full p-6;
}
@media screen and (max-width: 679px) {
  #about-me {
    @apply w-full;
  }
}
</style>
