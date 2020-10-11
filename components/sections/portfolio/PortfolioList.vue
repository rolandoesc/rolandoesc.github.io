<template>
  <div class="portfolio-list">
    <div class="portfolio-list__grid">
      <PortfolioCard v-for="listItem in list" :key="listItem.name" :portfolio-details="listItem" />
    </div>
  </div>
</template>

<script>
import PORTFOLIOLIST from "./portfolio-list.js";
export default {
  data() {
    return {
      list: PORTFOLIOLIST,
    };
  },
};
</script>

<style lang="scss" scoped>
.portfolio-list {
  @apply flex flex-row w-2/3 mx-auto my-auto;
}

.portfolio-list__grid {
  @apply grid gap-12 grid-cols-3;
}

@screen lg {
  .portfolio-list {
    @apply w-4/5;
  }
  // .portfolio-list__grid {
  //   @apply grid-cols-2;
  // }
}
@screen md {
  .portfolio-list__grid {
    @apply grid-cols-2;
  }
}
@screen sm {
  .portfolio-list__grid {
    @apply grid-cols-1 px-8;
  }
}
@screen xs {
  .portfolio-list__grid {
    @apply grid-cols-1;
  }
}
</style>