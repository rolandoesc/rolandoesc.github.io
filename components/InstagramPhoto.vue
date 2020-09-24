<template>
  <div class="w-full flex my-auto p-2 h-full border align-middle items-center">
    <img :src="image.src" alt="" class="w-full">
  </div>
</template>

<script>
  export default {
    props: {
      image: {}
    },
    mounted() {
      console.log(process.env.INSTAGRAM_ACCOUNT_ID)
    }
  }
</script>

<style lang="scss" scoped>

</style>