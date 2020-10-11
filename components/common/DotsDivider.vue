<template>
  <div class="dots-divider">
    <div v-for="n in 3" :key="n" class="dot"></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
div.dots-divider {
  @apply w-full flex justify-center flex-row h-4;
  div.dot {
    @apply mx-2 w-4 h-4;
    border-radius: 50%;
    background-color: #0525A2;
  }
}
</style>