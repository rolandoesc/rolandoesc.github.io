<template>
  <div class="portfolio-list">
    <ul class="portfolio-list__grid">
      <PortfolioCard
        v-for="listItem in list"
        :key="listItem.name"
        :portfolio-details="listItem"
      />
    </ul>
  </div>
</template>

<script>
import portfolio from "~/assets/lists/portfolio.json";
import PortfolioCard from "./PortfolioCard.vue";
export default {
  name: "PortfolioList",
  components: {
    PortfolioCard,
  },
  data() {
    return {
      list: portfolio.list,
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
