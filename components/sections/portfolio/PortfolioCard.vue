<template>
  <div class="portfolio-card">
    <div class="portfolio-card__over-card"></div>
    <div class="portfolio-card__image">
      <a :href="portfolioDetails.link" target="_blank">
        <img
          :src="portfolioDetails.image"
          alt
          class="image"
        />
      </a>
    </div>
    <div class="portfolio-card__info">
      <hr class="portfolio-card__divider" />
      <h2 class="portfolio-card__project__name">
        <a :href="portfolioDetails.link" target="_blank">{{portfolioDetails.name}}</a>
      </h2>
      <p
        class="portfolio-card__project__description"
      >{{portfolioDetails.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    portfolioDetails: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio-card {
  @apply relative w-full flex flex-col bg-white;
  height: 60vh;
  // width: 18vw;
  border: solid black 4pt;
  border-radius: 20px;
  z-index: 0;

  .portfolio-card__over-card {
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

.portfolio-card__image {
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

.portfolio-card__info {
  height: 55% !important;
  @apply pt-2;
  @apply flex flex-col px-1;
}
h2.portfolio-card__project__name {
  @apply font-thin text-2xl uppercase text-left pl-2 pt-2;
  height: 35%;
}
p.portfolio-card__project__description {
  @apply text-base text-justify px-2;
}

hr.portfolio-card__divider {
  width: 40%;
  @apply border-black ml-2 px-2;
  border-top-color: black !important;
}
@screen md {
  .portfolio-card {
    height: 40vh;
    // width: 22vw;
  }
}
@screen sm {
  .portfolio-card {
    height: 60vh;
    // width: 26vw;
  }
}
@screen xs {
  .portfolio-card {
    height: 60vh;
    // width: 80%;
  }
}
</style>