<template>
  <button @click="emitClick">
    <slot/>
  </button>
</template>

<script>
  export default {
    
    methods: {
      emitClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="scss" scoped>
button {
  @apply uppercase bg-black text-white px-2 font-light text-2xl;
}
</style>