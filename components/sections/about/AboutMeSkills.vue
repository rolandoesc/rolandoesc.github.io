<template>
  <div class="skills">
    <div class="skill" v-for="(skill, index) in skillsIcons" :key="index">

      <img :src="skill['icon']" :alt="skill['name']">
      <span>{{skill['name']}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        skillsIcons: [
        {
          name: "HTML",
          icon: require("~/assets/html5-brands.svg"),
          // link: "https://twitter.com/rolandoesc",
        },
        {
          name: "CSS",
          icon: require("~/assets/css3-alt-brands.svg"),
          // link: "https://github.com/rolandoesc",
        },
        {
          name: "JavaScript",
          icon: require("~/assets/js-brands.svg"),
          // link: "https://linkedin.com/in/rolandoesc/",
        },
        {
          name: "Vue.JS",
          icon: require("~/assets/vuejs-brands.svg"),
          // link: "https://linkedin.com/in/rolandoesc/",
        },
      ],
      }
    }
  }
</script>

<style lang="scss" scoped>
.skills {
  @apply flex;
  .skill {
    @apply flex-col text-center mx-auto;
    img {
      @apply w-8 mx-auto;
    }
    span {
      @apply text-sm;
    }
  }
}
</style>