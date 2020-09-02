<template>
  <div :class="holderClass" id="about">
    <div :class="innerElementClasses">
      <img :src="photo" alt="" class="profile-image">
    </div>
    <!-- <p>People call me Chamo since I'm Venezuelan, feel free to call me however you like. :)</p>-->
    <div :class="innerElementClasses">
      <p class="text-lg">Latino, friendly, curious, proactive, caring and talkative are the main adjectives that describe me. I consider myself as someone who is truly given to people and help them grow no matter what, as a communicative person, I adore good conversations about new topics where I can improve my knowledge in everything. I also enjoy photography as one of my favorites hobbies, including traveling, dancing to Latin rhythms and swimming. </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        photo: require('~/assets/images/profile_picture.jpg')
      }
    },
    computed: {
      isSmall() {
        return this.$breakpoints.is === 'xs' || this.$breakpoints.is === 'sm'
      },
      holderClass() {
        return this.isSmall ? 'column padding' : 'section'
      },
      innerElementClasses() {
        return this.isSmall ? 'column padding centered' : 'half-side centered'
      }
    }
  }
</script>

<style lang="scss" scoped>
#about {
  @apply min-h-screen justify-center align-middle items-center;
}
.padding {
  @apply px-4;
}
.profile-image {
  @apply rounded-full max-w-xs mx-auto;
}
</style>