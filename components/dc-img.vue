<template>
  <client-only>
    <img :src="realSrc" />
  </client-only>
</template>
<script>
export default {
  props: ["src"],
  computed: {
    realSrc() {
      switch (this.$config.webp) {
        case 0:
          return "";
        case true:
          return require(`@/assets/img/${this.src}.webp`);
        case false:
          return require(`@/assets/img/${this.src}`);
      }
    },
  },
};
</script>
