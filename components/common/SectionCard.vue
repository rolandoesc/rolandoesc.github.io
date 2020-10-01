<template>
  <div class="card" :class="cardClasses">
    <div class="dots"></div>
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    rotate: {
      type: Boolean,
      required: false,
      default: false
    },
    largeCard: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    cardClasses() {
      let classes = this.largeCard ? "large-card" : null
      classes += this.rotate ? " rotate" : null;
      return classes
    },

  }
};
</script>

<style lang="scss" scoped>
.card-border {
  border-radius: 40px;
}

.card {
  @apply flex border border-black border-8 h-full w-full relative border-r-0 bg-white;
  @extend .card-border;
  .dots {
    position: absolute;
    right: 0;
    bottom: 62.5%;
    z-index: 2;
    height: 6vh;
    @apply border-r-8 border-dotted border-black bg-transparent;
  }
}

.card::after {
  position: absolute;
  right: -1.5px;
  top: -1px;
  z-index: 1;
  height: 14.5vh;
  display: block;
  width: 100px;
  content: "";
  @apply border-black;
  border-right-width: 9px;
  border-top-left-radius: 39px;
  border-top-right-radius: 39px;

}
.card::before {
  position: absolute;
  right: -1.5px;
  bottom: -1px;
  z-index: 1;
  height: 34.75vh;
  display: block;
  width: 100px;
  content: "";

  @apply  border-black;
  border-right-width: 9px;
  border-bottom-right-radius: 39px;
  border-bottom-left-radius: 39px;

}
.rotate, .rotate > * {
  @apply transform rotate-180;

}
.large-card.card::after {
  height: 20vh;
}
.large-card.card::before {
  height: 44vh;
}
</style>