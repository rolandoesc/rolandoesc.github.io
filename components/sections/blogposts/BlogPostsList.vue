<template>
  <div class="blogposts-list">
    <ul class="blogposts-list__grid" v-if="posts.length > 0">
      <BlogPostCard v-for="post in posts" :key="post.id" :post-details="post" />
    </ul>
  </div>
</template>

<script>
import BlogPostCard from "./BlogPostCard.vue";
export default {
  components: { BlogPostCard },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.blogposts-list {
  @apply flex flex-row w-2/3 mx-auto my-auto;
}

.blogposts-list__grid {
  @apply grid gap-4 grid-cols-3;
}

@screen lg {
  .blogposts-list {
    @apply w-4/5;
  }
}
@screen md {
  .blogposts-list__grid {
    @apply grid-cols-2;
  }
}
@screen sm {
  .blogposts-list__grid {
    @apply grid-cols-1 px-8;
  }
}
@screen xs {
  .blogposts-list__grid {
    @apply grid-cols-1;
  }
}
</style>
