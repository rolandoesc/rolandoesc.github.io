<template>
  <div id="about-me">
    <section-card rotate large-card>
      <div id="about-me-details">
        <slot />
      </div>
    </section-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#about-me {
  @apply w-5/6 flex-col mb-auto mt-20 mx-auto relative;
  height: 80vh;
  max-height: 90vh;
}

#about-me-details {
  @apply h-full flex w-full p-6;
}
</style>