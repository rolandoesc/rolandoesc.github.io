<template>
<li class="experience">
	<p>
		{{ job["role"] }},
		<a 
			:href="job['companyURL']" 
			target="_blank" 
			:class="job['companyGlow']"
      rel="noreferrer"
		><u>{{ job["company"] }}</u></a
		>
	</p>
	<p>{{ job["location"] }}, {{ job["duration"] }}</p>
</li>
</template>

<script>
export default {
 props: {
	 job: {
		 type: Object,
		 required: true
	 }
 }
}
</script>

<style lang="scss">

li.experience {
	@apply flex flex-col my-2 list-disc;
	p {
		@apply font-bold;
	}
}

@screen xl {
	li.experience {
		@apply flex flex-col my-2 list-disc py-2;
		user-select: none;
		p {
			@apply font-bold;
		}
	}
}

.etsy-glow {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, #F1641E, #F1641E 50%, black 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none;
}

.yeeko-glow {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, #DE006E, #DE006E 50%, black 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none;
}

.aiwifi-glow {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, #2bc474, #2bc474 50%, black 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none;
}

.a3-glow {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, #6EC1E4, #6EC1E4 50%, black 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none;
}

.kinedu-glow {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, #0086D8, #0086D8 50%, black 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none;
}

.ipp-glow {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, #37b6c3, #37b6c3 50%, black 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 275ms ease;
  text-decoration: none;
}
.ipp-glow:hover,
.kinedu-glow:hover,
.aiwifi-glow:hover,
.a3-glow:hover,
.yeeko-glow:hover,
.etsy-glow:hover {
    background-position: 0 100%;
}

@screen xs {
  .ipp-glow,
  .kinedu-glow,
  .aiwifi-glow,
  .a3-glow,
  .yeeko-glow,
  .etsy-glow {
    background-position: 0 100%;
  }
}

</style>