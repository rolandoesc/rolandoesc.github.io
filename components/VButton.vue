<template>
  <button @click="emitClick" :class="{'btn-disabled': disabled}" :disabled="disabled">
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
    emitClick() {
      this.jumpTo.length
        ? this.jump(this.jumpTo)
        : this.openSite.length
          ? this.openNewSite(this.openSite)
          : this.$emit("click");
    },
    jump(jumpTo) {
      const url = location.href;
      location.href = "#" + jumpTo;
      history.replaceState(null, null, url);
    },
    openNewSite(site) {
      window.open(site)
    }
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
  },
};
</script>

<style lang="scss" scoped>
button {
  @apply uppercase bg-black text-white px-2 font-light text-2xl;
}
.btn-secondary {
  background-color: #0525a2;
}
.btn-disabled {
  @apply bg-gray-600 cursor-not-allowed;
}
</style>