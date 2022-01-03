<template>
  <footer class="footer">
    <p>
      <span id="current-year">2021</span>. All Rights Reserved
    </p>
  </footer>
</template>
<script>
export default {
  mounted() {
    const currentYearTag = document.getElementById("current-year");
    currentYearTag.innerText = new Date().getFullYear();
  }
}
</script>
