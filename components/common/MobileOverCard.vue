<template>
  <div class="over-card" :class="orientation"></div>
</template>

<script>
export default {
  props: ["topLeft", "left", "right"],
  computed: {
    orientation() {
      console.log(this.right)
      return this.right ? "over-right" : "over-left"
    }
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 680px) {
  .over-card {
    display: none !important;
  }
}
.card-border {
  border-radius: 40px;
}

.over-card {
  @apply flex border border-transparent border-8 h-full w-full bg-transparent absolute;
  z-index: -3;
  top: 35px;
  @extend .card-border;
}

.over-left {
  left: -20px;
  -webkit-box-shadow: 3px 2px 21px 14px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 3px 2px 21px 14px rgba(0, 0, 0, 0.41);
  box-shadow: 3px 2px 21px 14px rgba(0, 0, 0, 0.41);
}

.over-right {
  right: -20px;
  -webkit-box-shadow: 14px 2px 21px 3px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 14px 2px 21px 3px rgba(0, 0, 0, 0.41);
  box-shadow: 14px 2px 21px 3px rgba(0, 0, 0, 0.41);
}
</style>