<template>
  <div class="flex flex-col items-center text-white dc-scale mobile:mb-7">
    <img :src="src" class=" mb-2 md:mb-4 w-12 h-12 object-contain" />
    <h5 class="text-xs">{{ $t(title) }}</h5>
    <h6 v-if="localeIsCn" class=" font-light text-xs transform scale-75">
      {{ $t(title, "en") }}
    </h6>
    <img src="~assets/svg/index/points.svg" class="my-1 mb:my-2" />
    <h4 class="md:text-sm text-xs">{{ $t(subTitle) }}</h4>
  </div>
</template>
<script>
import ComponentMixin from "@/mixins/ComponentMixin";
export default {
  mixins: [ComponentMixin],
  props: ["src", "title", "subTitle"]
};
</script>
<style></style>
