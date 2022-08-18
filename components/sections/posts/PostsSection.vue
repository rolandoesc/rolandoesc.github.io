<template></template>

<script>
export default {
  name: "PostsSection",
  methods: {
    fetchPosts() {
      console.log(this.$axios);
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style></style>
