<template>
  <!-- <section class="section column centered-block w-full pt-4 bg-green-400"> -->
    <div id="intro">
      <section-card>
        <div id="intro-details">
          <h1 id="title">Welcome!</h1>
          <!-- <hr class="mx-auto" /> -->
          <!-- <p>{{$breakpoints}}</p> -->
          <h2>My name is Rolando Escalona,</h2>
          <p>
            I'm a Front End Developer who loves
            <br />creating ideas into something real.
          </p>
          <div id="links">
            <v-button class="mr-1 w-1/2">Portfolio</v-button>
            <v-button class="ml-1 w-1/2">Contact</v-button>
          </div>
          <div id="icon-links">
            <a :href="icon['link']" v-for="icon in iconDetails" :key="icon['name']" target="_blank" class="icon-index">
              <img :src="icon['icon']" alt class="w-6" />
            </a>
          </div>
        </div>
      </section-card>
    </div>
  <!-- </section> -->
</template>
<script>
export default {
  data() {
    return {
      iconDetails: [
        {
          name: "Twitter",
          icon: require("~/assets/twitter-brands.svg"),
          link: "https://twitter.com/rolandoesc",
        },
        {
          name: "GitHub",
          icon: require("~/assets/github-brands.svg"),
          link: "https://github.com/rolandoesc",
        },
        {
          name: "LinkedIn",
          icon: require("~/assets/linkedin-brands.svg"),
          link: "https://linkedin.com/in/rolandoesc/",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#intro {
  @apply w-2/3 flex-col mb-auto mt-20 mx-auto;
  height: 60vh;
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
#links {
  @apply flex justify-center my-4;
}
#icon-links {
  @apply flex justify-center;
  a {
    @apply mx-4;
  }
}
// .venezuelan {
//   background: -webkit-linear-gradient(0deg,
//     #ffcc00,
//     #00247d,
//     #cf142b
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }
</style>