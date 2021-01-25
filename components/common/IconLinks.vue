<template>
  <div class="icon-links">
    <IconLink :icon="icon" v-for="icon in iconDetails" :key="icon['name']"/>
  </div>
</template>

<script>
import iconDetails from "@/plugins/icons.js"
export default {
  data() {
    return {
      iconDetails: iconDetails
    };
  },
};
</script>

<style lang="scss" scoped>
</style>