<template>
  <div id="intro">
    <section-card has-dots :dots-bottom="isSmall" top-left>
      <div id="intro-details">
        <h1 id="title" role="banner">Welcome!</h1>
        <h2>
          My name is Rolando Escalona
          <br />
          <i>(but you can call me Chamo)</i>,
        </h2>
        <p>
          I am a Software Engineer who loves
          <br />turning ideas into something real.
        </p>
        <div id="button-links">
          <v-button jump-to="portfolio-section">Portfolio</v-button>
          <v-button jump-to="contact-section">Contact</v-button>
        </div>
        <NetworkIconsList />
      </div>
    </section-card>
  </div>
</template>
<script>
export default {
  props: {
    isSmall: {
      type: Boolean,
      required: true,
    }
  },
};
</script>
<style lang="scss" scoped>
#intro {
  @apply w-2/3 flex-col mb-auto mt-20 mx-auto;
  height: 60vh;
  user-select: none;
}
#intro-details {
  @apply h-full flex flex-col w-1/2 mx-auto justify-center relative;
  z-index: 3;
  h2 {
    @apply font-bold;
  }
  p {
    @apply font-thin;
  }
}
#title {
  @apply mx-auto uppercase font-extrabold flex flex-col -mb-3;
  text-decoration: underline;
  font-size: 6rem;
}

@media screen and (max-width: 679px) {
  #intro {
    @apply w-full flex-col mb-auto -mt-4 mr-auto bg-transparent relative;
    height: 90vh;
  }
  #intro-details {
    @apply h-full flex flex-col w-3/4  justify-center relative text-left;
    z-index: 3;
    h2 {
      @apply font-bold;
    }
    p {
      @apply font-thin;
    }
  }
  #title {
    font-size: 4.5rem;
    margin-left: 0;
    text-decoration: none;
  }
  #button-links {
    @apply flex-col w-4/5 justify-between h-24;
    *:first-child {
      @apply my-4;
      width: 100% !important;
      margin: auto !important;
    }
    *:last-child {
      width: 100% !important;
      margin: auto !important;
    }
  }
}
#button-links {
  @apply flex justify-center my-4;
  *:first-child {
    @apply mr-1 w-1/2;
  }
  *:last-child {
    @apply ml-1 w-1/2;
  }
}
</style>