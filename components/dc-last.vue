<template>
  <a
    class="last-card w-full lg:w-72 h-28 shadow-lg hover:shadow-xl flex flex-col relative dc-up p-4"
    :href="href"
  >
    <img
      src="~assets/svg/about/blue-arrow.svg"
      class="w-4 h-4 absolute right-4 top-1/2"
    />
    <img
      class="object-contain"
      :class="[index === 0 || index === 4 ? 'w-12' : 'w-32']"
    :src="require(`@/assets/svg/about/c${index + 1}.svg`)" />
    <span class=" text-sm text-darkblue absolute bottom-2">{{
      $t(`last_c_${index + 1}`)
    }}</span>
  </a>
</template>
<script>
import ComponentMixin from "@/mixins/ComponentMixin";
export default {
  mixins: [ComponentMixin],
  props: ["index"],
  computed: {
    href() {
      switch (this.index) {
        case 0:
          return 'https://www.china-ftz.com/indexcn.asp'
        case 1:
          return 'http://www.600773sh.com/'
        case 2:
          return 'https://www.wynca.com/'
        case 3:
          return 'https://www.snowkey.com/'
        case 4:
          return 'http://www.002646.com/about/'
        case 5:
          return 'http://www.tcelir.com/cn/'
        case 6:
          return 'http://www.busonline.cc/index/findAll'
        case 7:
          return 'http://www.hzyllh.com/'
        case 8:
          return 'https://www.seuic.com/'
        case 9:
          return 'http://www.shumingdata.com/'
        case 10:
          return ''
      }
    }
  }
};
</script>
<style></style>
