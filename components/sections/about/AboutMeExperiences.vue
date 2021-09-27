<template>
  <ul class="experiences-list">
    <li
      v-for="(job, jobIndex) in experiences"
      :key="jobIndex"
      class="experience"
    >
      <h3>
        {{ job["role"] }},
        <a :href="job['companyURL']" target="_blank" class="glow"
          ><u>{{ job["company"] }}</u></a
        >
      </h3>
      <p>{{ job["location"] }}, {{ job["duration"] }}</p>
    </li>
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
  li.experience {
    @apply flex flex-col my-2 list-disc;
    h3 {
      @apply font-bold italic;
    }
  }
}
@screen xl {
  .experiences-list {
    @apply py-6;
    li.experience {
      @apply flex flex-col my-2 list-disc py-2;
      user-select: none;
      h3 {
        @apply font-bold italic;
      }
    }
  }
}
@screen xs {
  .experiences-list {
    @apply px-0;
  }
}
</style>