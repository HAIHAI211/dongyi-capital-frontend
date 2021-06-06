<template>
  <footer
    class="footer-bgimg h-36 bg-container pt-10 flex flex-col items-center"
  >
    <img src="~assets/logo.svg" class="w-16" />
    <div
      class="
        text-white
        font-light
        text-sm
        leading-5
        transform
        pt-3
        text-center
        flex flex-col
        items-center
      "
    >
      <a href="http://beian.miit.gov.cn/">沪ICP备2020025478号-1</a>
      <a
        href=" http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010502005445"
        >沪公网安备 31010502005445号</a
      >
      <span>版权所有 ©2020 上海东义资产管理有限公司</span>
    </div>
  </footer>
</template>
<script>
import ComponentMixin from "@/mixins/ComponentMixin";
export default {
  mixins: [ComponentMixin],
  props: [],
};
</script>
<style></style>
