<template>
  <ul class="network-icons-list">
    <network-icon
      :icon="icon"
      v-for="icon in iconDetails"
      :key="icon['name']"
    />
  </ul>
</template>

<script>
import networks from '~/assets/lists/networks.json'
import NetworkIcon from './NetworkIcon.vue'
export default {
  components: { NetworkIcon },
  data() {
    return {
      iconDetails: networks.list,
    };
  },
};
</script>
