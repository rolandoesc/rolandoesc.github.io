<template>
  <li class="skill">
    <img :src="icon" :alt="skillDetails['name'] + ' icon'" />
    <span>{{ skillDetails["name"] }}</span>
  </li>
</template>

<script>
export default {
  props: {
    skillDetails: {
      type: Object,
      required: true,
    },
  },
  computed: {
    icon() {
      return require(`~/assets/${this.skillDetails.icon}.svg`);
    },
  },
};
</script>

<style lang="scss" scoped>
.skill {
  @apply flex-col text-center mx-auto;
  img {
    @apply w-8 mx-auto;
    height: 43px;
  }
  span {
    @apply text-sm align-bottom;
  }
}
</style>
