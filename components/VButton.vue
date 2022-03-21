<template>
  <button
    @click="emitClick"
    class="btn"
    :class="buttonDisabledClass"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    jumpTo: {
      type: String,
      required: false,
      default: "",
    },
    openSite: {
      type: String,
      required: false,
      default: "",
    },
  },
  methods: {
    emitClick($event) {
      if (this.jumpTo.length) this.jump(this.jumpTo);
      else if (this.openSite.length) this.openNewSite(this.openSite);
      else this.$emit("click", $event);
    },
    jump(jumpTo) {
      const url = location.href;
      location.href = "#" + jumpTo;
      history.replaceState(null, null, url);
    },
    openNewSite(site) {
      window.open(site);
    },
  },
  computed: {
    elementTag() {
      return !this.jumpTo.length ? "a" : "button";
    },
    aTagAttributes() {
      return this.elementTag === "a"
        ? { href: `#${this.jumpTo}` }
        : { onclick: this.emitClick };
    },
    buttonDisabledClass() {
      return this.disabled ? "btn-disabled" : null;
    },
  },
};
</script>