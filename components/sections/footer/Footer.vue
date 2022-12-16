<template>
  <footer class="footer" role="contentinfo">
    <p><span id="current-year"></span>. All Rights Reserved</p>
  </footer>
</template>
<script>
export default {
  mounted() {
    const currentYearTag = document.getElementById("current-year");
    currentYearTag.innerText = new Date().getFullYear();
  },
};
</script>
