<template>
  <div class="icon-links">
    <a
      :href="icon['link']"
      v-for="icon in iconDetails"
      :key="icon['name']"
      target="_blank"
      class="icon-index"
    >
      <img :src="icon['icon']" alt class="w-6" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconDetails: [
        {
          name: "Telegram",
          icon: require("~/assets/telegram-brands.svg"),
          link: "https://t.me/rolandoesc",
        },
        {
          name: "Twitter",
          icon: require("~/assets/twitter-brands.svg"),
          link: "https://twitter.com/rolandoesc",
        },
        {
          name: "GitHub",
          icon: require("~/assets/github-brands.svg"),
          link: "https://github.com/rolandoesc",
        },
        {
          name: "LinkedIn",
          icon: require("~/assets/linkedin-brands.svg"),
          link: "https://linkedin.com/in/rolandoesc/",
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 679px) {
  .icon-links {
    @apply w-4/5 flex justify-start text-left;
    a.icon-index {
      @apply mx-4;
    }
  }
}
.icon-links {
  @apply flex justify-center;
  a.icon-index {
    @apply mx-4;
  }
}
</style>