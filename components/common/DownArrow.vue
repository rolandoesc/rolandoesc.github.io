<template>

  <div class="arrow"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.arrow {
  @apply flex mx-auto absolute;
  border-color: black;
  border-right-width: 8px;
  border-radius: 4px;
  border-bottom-width: 8px;
  border-right-style: solid;
  border-bottom-style: solid;
  height: 50px;
  width: 50px;
  left: 48.5%;
  bottom: 10%;
  animation: scroll 0.75s alternate infinite;
}

@keyframes scroll {
  0% {
    transform: translateY(-5px) rotate(45deg);
    opacity: 0;
  }
  100% {
    transform: translateY(5px) rotate(45deg);
    opacity: 1;
  }
}
</style>