import Vue from 'vue'

const screens = {
  xs: 100,
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

const getBreakpoint = w => {
  if (xs(w)) return 'xs'
  else if (sm(w)) return 'sm'
  else if (md(w)) return 'md'
  else if (lg(w)) return 'lg'
  else if (xl(w)) return 'xl'
  else return 'all'
}
const debounce = function(func, wait) {
  var timeout
  return () => {
    const later = function() {
      timeout = null
    }
    const callNow = !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func()
  }
}

const breakpoints = Vue.observable({
  w: window.innerWidth,
  h: window.innerHeight,
  is: getBreakpoint(window.innerWidth)
})

window.addEventListener(
  'resize',
  debounce(() => {
    breakpoints.w = window.innerWidth
    breakpoints.h = window.innerHeight
    breakpoints.is = getBreakpoint(window.innerWidth)
  }, 100),
  false
)

Vue.prototype.$breakpoints = breakpoints