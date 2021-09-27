<template>
  <li :href="icon['link']" target="_blank" class="network-icon">
    <img :src="currentIcon" :alt="icon['alt']" />
  </li>
</template>

<script>
export default {
  props: {
    icon: {
      type: Object,
      required: true,
    },
  },
  computed: {
    currentIcon() {
      return require(`~/assets/${this.icon.icon}-brands.svg`);
    },
  },
};
</script>