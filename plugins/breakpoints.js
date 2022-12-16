import Vue from 'vue'

const screens = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
}

const xs = val => val >= screens.xs && val < screens.sm
const sm = val => val >= screens.sm && val < screens.md
const md = val => val >= screens.md && val < screens.lg
const lg = val => val >= screens.lg && val < screens.xl
const xl = val => val >= screens.xl

export const BREAKPOINTS_CONSTANTS = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
  DEFAULT: "all",
}

const getBreakpoint = w => {
  if (xs(w)) return BREAKPOINTS_CONSTANTS.XS
  else if (sm(w)) return BREAKPOINTS_CONSTANTS.SM
  else if (md(w)) return BREAKPOINTS_CONSTANTS.MD
  else if (lg(w)) return BREAKPOINTS_CONSTANTS.LG
  else if (xl(w)) return BREAKPOINTS_CONSTANTS.XL
  else return BREAKPOINTS_CONSTANTS.DEFAULT
}
const debounce = function (func, wait) {
  var timeout
  return () => {
    const later = function () {
      timeout = null
    }
    const callNow = !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func()
  }
}

const isSmall = w => getBreakpoint(w) === BREAKPOINTS_CONSTANTS.XS;
const canBeDisplayed = w => !(getBreakpoint(w) === BREAKPOINTS_CONSTANTS.DEFAULT);
const breakpoints = Vue.observable({
  w: window.innerWidth,
  h: window.innerHeight,
  is: getBreakpoint(window.innerWidth),
  isSmall: isSmall(window.innerWidth),
  canBeDisplayed: canBeDisplayed(window.innerWidth),
})

window.addEventListener(
  'resize',
  debounce(() => {
    breakpoints.w = window.innerWidth
    breakpoints.h = window.innerHeight
    breakpoints.is = getBreakpoint(window.innerWidth)
    breakpoints.isSmall = isSmall(window.innerWidth)
    breakpoints.canBeDisplayed = canBeDisplayed(window.innerWidth)
  }, 100),
  false
)

Vue.prototype.$breakpoints = breakpoints