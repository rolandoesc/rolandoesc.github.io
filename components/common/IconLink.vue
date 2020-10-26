<template>
  <a
    :href="icon['link']"
    target="_blank"
    class="icon-index"
  >
    <img :src="icon['icon']" alt class="w-6" />
  </a>
</template>

<script>
  export default {
    props: ["icon"]
  }
</script>