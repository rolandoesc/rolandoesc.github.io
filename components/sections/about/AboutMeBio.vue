<template>
  <div id="about-me-bio">
    <h1>About Me!</h1>
    <div id="bio">
      <p>
        Venezuelan, curious and talkative are the main adjectives that describe me. I have been a
        <u>Front End Developer</u> since 2018, and have experience in creating web apps for different working markets, such as NGOs, startups &amp; companies in tech and public policy consultancy.
      </p>
      <p>I have been living abroad since 2016, working as an English teacher in Colombia, customer loyalty member in a startup and currently as Front End Developer in Mexico. I consider myself as someone who seeks to be empathetic among others and enjoys teaching what he knows to anyone who's eager to learn. Photography and cooking are my favorites hobbies, including traveling, latin music and swimming.</p>

    </div>
    <div id="download-cv">
      <v-button class="btn-secondary" open-site="https://drive.google.com/file/d/16D0bko7WaBh353O6hsPXiuRLoY9Hg56H/view?usp=sharing">Download CV</v-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#about-me-bio {
  @apply w-full flex flex-col text-left justify-around px-2;
  #bio {
    p {
      @apply text-justify pr-1;
      bleed: 1pt;
    }
  }
}
@screen xs {
  #about-me-bio {
    @apply pt-10;
  }
  #download-cv {
    @apply pt-2 text-center;
  }
}
@screen xl {
  #about-me-bio {
    @apply justify-start pt-20;
    #bio {
      p{
        @apply my-auto py-6;
      }
    }
  }
}
</style>