<template>
  <div class="over-card" :class="cardClasses">
  </div>
</template>

<script>
  export default {
    props: {
      rightSide: {
        type: Boolean,
        required: false
      },
      coverCard: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    computed: {
      cardClasses() {
        let classes = '';
        classes += this.rightSide ? "right-to-left" : "left-to-right";
        classes += this.coverCard ? " cover-card" : " half-card";
        return classes
      }
    }
  }
</script>

<style lang="scss" scoped>
.over-card {
  @apply absolute bg-transparent;
  width: 87%;
  z-index: 2;
}

.right-to-left {
  right: 0;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  -webkit-box-shadow: 3px 2px 21px 14px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 3px 2px 21px 14px rgba(0, 0, 0, 0.41);
  box-shadow: 3px 2px 21px 14px rgba(0, 0, 0, 0.41);
}
.left-to-right {
  left: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  -webkit-box-shadow: 14px 2px 21px 3px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 14px 2px 21px 3px rgba(0, 0, 0, 0.41);
  box-shadow: 14px 2px 21px 3px rgba(0, 0, 0, 0.41);
}
.half-card {
  height: 40%;
  top: 25%;
}
.cover-card {
  height: 80%;
  top: 10%;
  width: 95%;
  z-index: 0;
}
</style>