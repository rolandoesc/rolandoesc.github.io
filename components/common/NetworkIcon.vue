<template>
  <li class="network-icon">
    <a :href="icon['link']" target="_blank" >
      <img :src="currentIcon" :alt="icon['alt']" width="24" height="24"/>

    </a>
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