<template>
  <ul class="experiences-list">
    <Experience
      v-for="(job, jobIndex) in experiences"
      :key="jobIndex"
      :job="job"
      :is-small="isSmall"
    />
  </ul>
</template>

<script>
import Experience from "./Experience.vue";
import experiences from "~/assets/lists/experiences.json";
export default {
  props: {
    isSmall: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    Experience,
  },
  data() {
    return {
      experiences: experiences.list,
    };
  },
};
</script>

<style lang="scss" scoped>
.experiences-list {
  @apply list-outside list-disc px-4;
}

@screen xl {
  .experiences-list {
    @apply py-6;
  }
}
@screen xs {
  .experiences-list {
    @apply px-0;
  }
}
</style>
