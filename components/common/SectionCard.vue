<template>
  <div class="card" :class="cardClasses">
    <MobileOverCard :right="right" />
    <CardDots v-if="hasDots" :class="[dotsBottom ? 'dots-bottom' : 'dots']" />
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    rotate: {
      type: Boolean,
      required: false,
      default: false,
    },
    largeCard: {
      type: Boolean,
      required: false,
      default: false,
    },
    hasDots: {
      type: Boolean,
      required: false,
      default: false,
    },
    dotsBottom: {
      type: Boolean,
      required: false,
      default: false,
    },
    topLeft: {
      type: Boolean,
      required: false,
      default: false,
    },
    left: {
      type: Boolean,
      required: false,
      default: false,
    },
    right: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    cardClasses() {
      let classes = this.largeCard ? "large-card" : null;
      classes += this.rotate ? " rotate" : null;
      let orientationOnSmall = this.topLeft
        ? " top-left-corner"
        : this.left
        ? " left-corner"
        : " right-corner";
      return classes + orientationOnSmall;
    },
  },
};
</script>

<style lang="scss" scoped>
.card-border {
  border-radius: 40px;
}

.card {
  @apply flex border border-black border-8 h-full w-full relative bg-white;
  @extend .card-border;
}
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
.rotate,
.rotate > * {
  @apply transform rotate-180;
}
.large-card.card::after {
  height: 20vh;
}
.large-card.card::before {
  height: 44vh;
}
@media screen and (max-width: 679px) {
  .card {
    @apply relative;
    z-index: 2;
  }
  .top-left-corner {
    position: absolute !important;
    top: -20px;
    left: -20px;
  }
  .left-corner {
    position: absolute !important;
    top: -20px;
    left: -20px;
  }
  .right-corner {
    position: absolute !important;
    top: -20px;
    right: -20px;
  }
}
</style>