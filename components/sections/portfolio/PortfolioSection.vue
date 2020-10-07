<template>
  <section class="section column">
    <div id="section-title">
      <h1>
        Portfolio
      </h1>
    </div>
    <PortfolioList />
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#section-title {
  @apply w-4/5 flex mx-auto;
  h1 {
    @apply text-left;
  }
}
</style>