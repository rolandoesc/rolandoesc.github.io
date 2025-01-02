export { default as VButton } from '../../components/VButton.vue'
export { default as CommonCardDots } from '../../components/common/CardDots.vue'
export { default as CommonDotsDivider } from '../../components/common/DotsDivider.vue'
export { default as CommonDownArrow } from '../../components/common/DownArrow.vue'
export { default as CommonInputField } from '../../components/common/InputField.vue'
export { default as CommonMobileOverCard } from '../../components/common/MobileOverCard.vue'
export { default as CommonMobileSectionCard } from '../../components/common/MobileSectionCard.vue'
export { default as CommonModalMessage } from '../../components/common/ModalMessage.vue'
export { default as CommonNetworkIcon } from '../../components/common/NetworkIcon.vue'
export { default as CommonNetworkIconsList } from '../../components/common/NetworkIconsList.vue'
export { default as CommonOverCard } from '../../components/common/OverCard.vue'
export { default as CommonSectionCard } from '../../components/common/SectionCard.vue'
export { default as SectionsAboutMe } from '../../components/sections/about/AboutMe.vue'
export { default as SectionsAboutMeBio } from '../../components/sections/about/AboutMeBio.vue'
export { default as SectionsAboutMeDetailsDefault } from '../../components/sections/about/AboutMeDetailsDefault.vue'
export { default as SectionsAboutMeDetailsSmall } from '../../components/sections/about/AboutMeDetailsSmall.vue'
export { default as SectionsAboutMeExperiences } from '../../components/sections/about/AboutMeExperiences.vue'
export { default as SectionsAboutMeExperiencesDetails } from '../../components/sections/about/AboutMeExperiencesDetails.vue'
export { default as SectionsAboutMeSection } from '../../components/sections/about/AboutMeSection.vue'
export { default as SectionsAboutMeSkillsList } from '../../components/sections/about/AboutMeSkillsList.vue'
export { default as SectionsAboutExperience } from '../../components/sections/about/Experience.vue'
export { default as SectionsAboutSkill } from '../../components/sections/about/Skill.vue'
export { default as SectionsBlogpostsBlogPostCard } from '../../components/sections/blogposts/BlogPostCard.vue'
export { default as SectionsBlogpostsBlogPostsList } from '../../components/sections/blogposts/BlogPostsList.vue'
export { default as SectionsBlogpostsBlogPostsSection } from '../../components/sections/blogposts/BlogPostsSection.vue'
export { default as SectionsContactForm } from '../../components/sections/contact/ContactForm.vue'
export { default as SectionsContactMeSection } from '../../components/sections/contact/ContactMeSection.vue'
export { default as SectionsFooter } from '../../components/sections/footer/Footer.vue'
export { default as SectionsIntro } from '../../components/sections/intro/Intro.vue'
export { default as SectionsIntroSection } from '../../components/sections/intro/IntroSection.vue'
export { default as SectionsSmallviewTooSmall } from '../../components/sections/smallview/TooSmall.vue'
export { default as SectionsPortfolioCard } from '../../components/sections/portfolio/PortfolioCard.vue'
export { default as SectionsPortfolioList } from '../../components/sections/portfolio/PortfolioList.vue'
export { default as SectionsPortfolioSection } from '../../components/sections/portfolio/PortfolioSection.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
