<template>
  <section id="blog-section" role="region" aria-labelledby="Chamo's blog posts">
    <h1>Blog</h1>
    <BlogPostsList :posts="posts" />
  </section>
</template>

<script>
import BlogPostsList from "./BlogPostsList.vue";
export default {
  components: {
    BlogPostsList,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      this.$axios
        .get("https://dev.to/api/articles?username=rolandoesc")
        .then(({ data: posts }) => (this.posts = posts));
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style></style>
