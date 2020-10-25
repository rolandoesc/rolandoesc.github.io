<template>
  <footer class="footer">
    <p>
      2020. All Rights Reserved
    </p>
    <IconLinks/>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.footer {
  scroll-behavior: smooth;
  @apply border-t-4 h-12 flex w-4/5 mx-auto border-black justify-between py-4 mb-4;
}

@media screen and (max-width: 679px) {
  .footer {
    @apply flex-col text-left;
    width: 90%;
  }
  .icon-links {
    @apply justify-start -ml-4 my-4 pb-2;
  }
}
</style>