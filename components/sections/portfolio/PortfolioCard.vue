<template>
  <li class="element-card portfolio">
    <div class="element-card__over-card"></div>
    <div class="element-card__image">
      <a :href="portfolioDetails.link" target="_blank">
        <img :src="image" :alt="portfolioDetails.alt" class="image" />
      </a>
    </div>
    <div class="element-card__info">
      <hr class="element-card__divider" />
      <h2 class="element-card__project__name">
        <a :href="portfolioDetails.link" target="_blank" class="glow">{{
          portfolioDetails.name
        }}</a>
      </h2>
      <p class="element-card__project__description">
        {{ portfolioDetails.description }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    portfolioDetails: {
      type: Object,
      required: true,
    },
  },
  computed: {
    image() {
      const imageSize = this.$breakpoints.isSmall ? "imageMobile" : "image";
      return require(`~/assets/images/projects${this.portfolioDetails[imageSize]}`);
    },
  },
};
</script>
