<template>
  <div class="relative text-white flex flex-col items-center">
    <img
      :src="require(`@/assets/img/invest/v${index + 1}.svg`)"
      class="absolute top-0 left-0 w-full"
    />
    <h6
      class="text-xs md:text-lg font-semibold text-center pt-28 md:pt-48 absolute flex flex-col"
    >
      {{ $t(`v${index + 1}`) }}
      <span
        v-if="localeIsCn"
        class="text-base  font-light pt-2 md:pt-4 transform scale-50 origin-top"
        >{{ $t(`v${index + 1}`, "en") }}</span
      >
    </h6>
  </div>
</template>
<script>
import ComponentMixin from "@/mixins/ComponentMixin";
export default {
  mixins: [ComponentMixin],
  props: ["index"]
};
</script>
