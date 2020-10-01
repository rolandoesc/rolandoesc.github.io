<template>
  <button @click.prevent="emitClick" :class="{'btn-disabled': disabled}" :disabled="disabled">
    <slot/>
  </button>
</template>

<script>
  export default {
    props: {
      disabled: {
        type: Boolean,
        required: false
      }
    },
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
.btn-secondary {
  background-color: #0525A2;
}
.btn-disabled {
  // background-color: rgb(160, 160, 160);
  @apply bg-gray-600 cursor-not-allowed;
}
</style>