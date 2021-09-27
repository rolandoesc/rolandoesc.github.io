<template>
  <ul class="network-icons-list">
    <NetworkIcon :icon="icon" v-for="icon in iconDetails" :key="icon['name']"/>
  </ul>
</template>

<script>
import networks from "~/assets/lists/networks.json"
export default {
  data() {
    return {
      iconDetails: networks.list
    };
  },
};
</script>