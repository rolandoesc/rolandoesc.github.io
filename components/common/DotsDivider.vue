<template>
  <ul class="dots-divider">
    <li v-for="n in 3" :key="n" class="dot"></li>
  </ul>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
ul.dots-divider {
  @apply w-full flex justify-center flex-row h-4;
  li.dot {
    @apply mx-2 w-4 h-4;
    border-radius: 50%;
    background-color: #0525A2;
  }
}
@media screen and (max-width: 679px) {
  ul.dots-divider {
    @apply justify-start;
  }
}
</style>