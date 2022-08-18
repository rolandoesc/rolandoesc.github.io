<template>
  <component :is="renderedComponent" />
</template>

<script>
import AboutMeDetailsSmall from "./AboutMeDetailsSmall";
import AboutMeDetailsDefault from "./AboutMeDetailsDefault";
export default {
  props: {
    isSmall: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    "small-details": AboutMeDetailsSmall,
    default: AboutMeDetailsDefault,
  },
  computed: {
    smallView() {
      const { w } = this.$breakpoints;
      return w < 767;
    },
    renderedComponent() {
      return this.smallView ? "small-details" : "default";
    },
  },
};
</script>
