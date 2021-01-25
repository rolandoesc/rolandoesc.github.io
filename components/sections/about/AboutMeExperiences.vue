<template>
  <ul class="experiences-list">
    <li v-for="(job, jobIndex) in experiences" :key="jobIndex" class="experience">
      <h3>
        {{job['role']}}, <a :href="job['companyURL']" target="_blank">{{job['company']}}</a>
      </h3>
      <p>
        {{job['location']}}, {{job['duration']}}
      </p>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        experiences: [
          {
            role: "Lead Front End Developer",
            company: "Aiwifi Insights",
            companyURL: "https://aiwifi.io",
            location: "Mexico City",
            duration: "Sept 2019 — Current Role"
          },
          {
            role: "Front End Developer",
            company: "Yeeko",
            companyURL: "https://yeeko.org/",
            location: "Mexico City",
            duration: "Mar 2019 — Sept 2019"
          },
          {
            role: "R&D — Front End Developer",
            company: "Sistemas aKúbica",
            companyURL: "https://akubica.com/en/",
            location: "Mexico City",
            duration: "Aug 2018 — March 2019"
          },
          {
            role: "Front End Developer",
            company: "IPP Consultores",
            companyURL: "http://www.ippconsultores.mx/",
            location: "Mexico City",
            duration: "Feb 2018 — Aug 2018"
          },
          {
            role: "Customer Loyalty",
            company: "Aliada MX",
            companyURL: "https://aliada.mx/",
            location: "Mexico City",
            duration: "Apr 2017 — Feb 2018"
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
a {
  position: relative;

  overflow: hidden;
  background: linear-gradient(to right, #0525a2, #0525a2 50%, black 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none; // text decorations are clipped in WebKit browsers
  &:hover {
    background-position: 0 100%;
  }
}
.experiences-list {
  @apply list-outside px-4;
  li.experience {
    @apply flex flex-col my-2 list-disc;
    h3 {
      @apply font-bold italic;
    }
  }
}
@screen xl {
  .experiences-list {
  @apply py-6;
  li.experience {
    @apply flex flex-col my-2 list-disc py-2;
    h3 {
      @apply font-bold italic;
    }
  }
}
}
@screen xs {
  .experiences-list {
    @apply px-0;
  }
}
</style>