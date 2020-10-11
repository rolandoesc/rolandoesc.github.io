<template>
  <div class="section">
    <div class="flex flex-col">

    <p class="text-xl text-justify px-2 my-4">
      One of the great joys of my life has been to become an amateur photographer, I'd like to share you some of my favourite photographies I've taken. You can also check out my <b id="instagram"><a href="https://instagram.com/rolandoesc" target="_blank">Instagram</a></b>
    </p>
    <div class="flex">
      <div class="photo-gallery">
        <InstagramPhoto v-for="(photo, photoIndex) in photos" :key="photoIndex" :image="photo" />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import photos from "~/plugins/igphotos.js";
export default {
  data() {
    return {
      photos: photos,
    };
  },
};
</script>

<style lang="scss" scoped>
#instagram {
  background: -webkit-linear-gradient(#ffdf9e,#ffc273,#e56969,#c1558b,#8a49a1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>