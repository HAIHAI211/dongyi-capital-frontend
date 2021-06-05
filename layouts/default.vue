<template>
  <div class="2xl:container">
    <div class="h-0 relative">
      <dc-header class="absolute" />
    </div>
    <nuxt />
    <dc-footer />
  </div>
</template>
<script>
import DcHeader from "@/components/dc-header.vue";
import DcFooter from "@/components/dc-footer.vue";
export default {
  components: { DcHeader, DcFooter },
  head() {
    return {
      script: [
        {
          hid: "bdMapJs",
          src: `//api.map.baidu.com/api?v=3.0&type=webgl&ak=${this.$config.BDMapAK}`,
          defer: false
        }
      ]
    };
  }
};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
