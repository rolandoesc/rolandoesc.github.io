<template>
  <div id="about-me-bio">
    <h1>About Me!</h1>
    <p>
      Venezuelan, curious and talkative are the main adjectives that describe me. I've been a
      <u>Front End Developer</u> since 2018, having the chance to create web apps for different working markets, such as NGOs, startups &amp; companies in tech and public policy consultancy.
    </p>
    <p>I've been living abroad since 2016, working as an English teacher in Colombia, customer loyalty member in a startup and currently as front end dev in Mexico. I consider myself as someone who is truly given to people and enjoy teaching what I know to anyone who's eager to learn. Photography and cooking are my favorites hobbies, including traveling, latin music and swimming.</p>
    <div>
      <v-button class="btn-secondary">Download CV</v-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#about-me-bio {
  @apply w-1/2 flex flex-col text-left justify-around px-2;
  h1 {
    @apply text-6xl;
  }
  p {
    @apply text-justify pr-1;
    bleed: 1pt;
  }
}
</style>