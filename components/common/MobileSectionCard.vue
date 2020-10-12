<template>
  <div class="card top-left-corner">
    <CardDots class="dots-bottom" />
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.dots {
  position: absolute;
  right: -8px;
  bottom: 35vh;
  z-index: 1;
}

.dots-bottom { 
  @apply transform rotate-90;
  position: absolute;
  right: 100px;
  bottom: -43px;
  z-index: 1;
}
.card-border {
  border-radius: 40px;
}
.top-left-corner {
  position: absolute !important;
  top: -20px;
  left: -20px;
}

.left-corner {
  position: absolute !important;
  left: -20px;
}
.right-corner {
  position: absolute !important;
  right: -20px;
}

.card {
  @apply flex border border-black border-8 h-full w-full relative bg-white border-t-0 border-l-0;
  @extend .card-border;
}
</style>