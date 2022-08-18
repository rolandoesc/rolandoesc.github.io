<template>
  <ul class="skills">
    <Skill
      v-for="skill in skillsIcons"
      :key="skill.name"
      :skillDetails="skill"
    />
  </ul>
</template>

<script>
import Skill from "./Skill.vue";
import skills from "~/assets/lists/skills.json";
export default {
  components: {
    Skill,
  },
  data() {
    return {
      skillsIcons: skills.list,
    };
  },
};
</script>

<style>
.skills {
  @apply flex;
}
</style>
