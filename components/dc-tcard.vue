<template>
  <div
    class="w-full h-40 pt-2 lg:w-40 lg:h-100 lg:flex-col flex shadow-lg px-4 lg:pt-16 relative dc-scale"
    :class="[isEven ? 'bg-white text-darkblue' : 'bg-darkblue text-white']"
  >
    <span class="text-lightgold text-4xl font-light leading-10 pb-6"
      >0{{ index + 1 }}</span
    >
    <h6 class=" font-normal text-base lg:leading-8 mobile:pl-2">
      {{ $t(`tzh_f_t_${index + 1}`) }}
    </h6>
    <p
      class=" font-normal text-xs lg:leading-6 mobile:absolute mobile:pr-4 top-14"
    >
      {{ $t(`tzh_f_${index + 1}`) }}
    </p>
    <img
      :src="require(`@/assets/svg/index/t${index + 1}.svg`)"
      class="w-9 absolute right-4 lg:left-4 bottom-4"
    />
  </div>
</template>
<script>
import ComponentMixin from "@/mixins/ComponentMixin";
export default {
  mixins: [ComponentMixin],
  props: ["index"],
  computed: {
    isEven() {
      return this.index % 2 === 0;
    }
  }
};
</script>
<style></style>
