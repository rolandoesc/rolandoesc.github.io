<template>
  <li class="blog-card">
    <div class="blog-card__over-card"></div>
    <div class="blog-card__image">
      <a :href="postDetails.url" target="_blank">
        <img
          :src="postDetails.cover_image"
          alt="Article I made from dev.to"
          class="image"
        />
      </a>
    </div>
    <div class="blog-card__info">
      <hr class="blog-card__divider" />
      <h2 class="blog-card__project__name">
        <a :href="postDetails.url" target="_blank" class="glow">{{
          postDetails.title
        }}</a>
      </h2>
      <p class="blog-card__project__description">
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

<style lang="scss" scoped>
.blog-card {
  @apply relative w-full flex flex-col bg-white;
  height: 60vh;
  border: solid black 4pt;
  border-radius: 20px;
  z-index: 0;

  .blog-card__over-card {
    @apply absolute bg-transparent;
    -webkit-box-shadow: 8px 2px 21px 3px rgba(0, 0, 0, 0.41);
    -moz-box-shadow: 8px 2px 21px 3px rgba(0, 0, 0, 0.41);
    box-shadow: 8px 2px 21px 3px rgba(0, 0, 0, 0.41);
    width: 105%;
    height: 108%;
    z-index: -3;
    left: 10px;
    bottom: -4%;
    border-radius: 25px;
  }
}

.blog-card__image {
  max-height: 45%;
  height: 45%;
  .image {
    @apply object-contain bg-white;
    height: 100%;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
}

.blog-card__info {
  height: 55% !important;
  @apply pt-2;
  @apply flex flex-col px-1;
}
h2.blog-card__project__name {
  @apply font-thin text-2xl uppercase text-left pl-2 pt-2;
  height: 35%;
}
p.blog-card__project__description {
  @apply text-base text-justify px-2;
}

hr.blog-card__divider {
  width: 40%;
  @apply border-black ml-2 px-2;
  border-top-color: black !important;
}
@screen md {
  .blog-card {
    height: 55vh;
  }
}
@screen sm {
  .blog-card {
    height: 60vh;
  }
}
@screen xs {
  .blog-card {
    height: 60vh;
  }
}
</style>
