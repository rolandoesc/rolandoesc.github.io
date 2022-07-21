<template>
  <section id="about-me-bio">
    <h1>About Me!</h1>
    <div id="bio">
      <p>
        Venezuelan, curious and talkative are the main adjectives that describe
        me. I have been a Front End Developer since 2018, and have experience in
        creating web apps for different working markets, such as NGOs, startups
        &amp; companies in tech and public policy consultancy.
        <br />
        <br />
        I have been living abroad since 2016, working as an English teacher in
        Colombia, customer loyalty member in a startup and currently as Software
        Engineer in Mexico. I consider myself as someone who seeks to be
        empathetic among others and enjoys teaching what he knows to anyone
        who's eager to learn. Photography and cooking are my favorites hobbies,
        including traveling, latin music, swimming and talking about my cat Ceniza. ❤️🐈‍⬛
      </p>
    </div>
    <div id="download-cv">
      <a
        class="btn btn-secondary"
        href="/static/cv.pdf"
        download="[en]cv_rolando_escalona.pdf"
        >Download CV</a
      >
    </div>
  </section>
</template>
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
      p {
        @apply my-auto py-6;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  br:first-child {
    display: none;
  }
}
</style>