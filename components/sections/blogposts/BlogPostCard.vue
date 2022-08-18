<template>
  <li class="element-card blog">
    <div class="element-card__over-card"></div>
    <div class="element-card__image">
      <a :href="postDetails.url" target="_blank">
        <img
          :src="postDetails.cover_image"
          alt="Article I made from dev.to"
          class="image"
        />
      </a>
    </div>
    <div class="element-card__info">
      <hr class="element-card__divider" />
      <h2 class="element-card__project__name">
        <a :href="postDetails.url" target="_blank" class="glow">{{
          postDetails.title
        }}</a>
      </h2>
      <p class="element-card__project__description">
        {{ postDetails.description }}
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    postDetails: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isSmall() {
      return this.$breakpoints.is === "xs";
    },
  },
};
</script>
