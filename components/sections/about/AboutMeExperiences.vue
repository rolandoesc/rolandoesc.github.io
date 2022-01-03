<template>
  <ul class="experiences-list">
    <Experience 
      v-for="(job, jobIndex) in experiences"
      :key="jobIndex"
      :job="job"
    />
  </ul>
</template>

<script>
import experiences from "~/assets/lists/experiences.json";
export default {
  data() {
    return {
      experiences: experiences.list,
    };
  },
};
</script>

<style lang="scss" scoped>

.experiences-list {
  @apply list-outside px-4;
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