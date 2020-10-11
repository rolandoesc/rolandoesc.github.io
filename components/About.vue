<template>
  <div :class="holderClass" id="about">
    <div :class="innerElementClasses">
      <img :src="photo" alt class="profile-image" />
    </div>
    <div :class="innerElementClasses">
      <p class="text-lg text-justify px-2">
        Latino, friendly, curious, proactive, caring and talkative are the main adjectives that describe me. I consider myself as someone who is truly given to people and help them grow no matter what, as a communicative person, I adore good conversations about new topics where I can improve my knowledge in everything. I also enjoy photography as one of my favorites hobbies, including traveling, swimming and dancing to Latin rhythms.
        <br/>
        <br/>
        People call me Chamo since I'm Venezuelan, feel free to call me however you like. :)
        <br/>
        <br/>
         Here's are some playlists I listen to most of the time when I <i>[please insert any activity]</i>. 
      </p>
      <hr class="divider">
      <div class="spotify-playlists">
        <iframe src="https://open.spotify.com/embed/playlist/4sNZGpVAsfnyI4IkjdpcN7" class="w-1/2 pl-2 pr-1" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <iframe src="https://open.spotify.com/embed/playlist/4dAo3D2LXWk2BoBx0i485e" class="w-1/2 pr-2 pl-1" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photo: require("~/assets/images/profile_picture.jpg"),
    };
  },
  computed: {
    isSmall() {
      return this.$breakpoints.is === "xs" || this.$breakpoints.is === "sm";
    },
    holderClass() {
      return this.isSmall ? "column padding" : "section";
    },
    innerElementClasses() {
      return this.isSmall ? "column padding centered" : "half-side centered";
    },
  },
};
</script>

<style lang="scss" scoped>
#about {
  @apply min-h-screen justify-center align-middle items-center;
}
.padding {
  @apply px-4;
}
.profile-image {
  @apply rounded-full max-w-xs mx-auto p-2;
}
</style>