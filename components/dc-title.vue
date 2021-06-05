<template>
  <div class="mb-5">
    <h1
      class="font-bold text-2xl pt-6 lg:pt-12"
      :class="[isWhite ? 'text-white' : 'text-darkblue ']"
    >
      {{ $t(title) }}
    </h1>
    <h2
      class="font-semibold text-xl"
      :class="[isWhite ? 'text-white' : 'text-darkblue ']"
    >
      {{ $t(desc) }}
    </h2>
    <h2 class="text-gold text-xl font-light tracking-wide" v-if="localeIsCn">
      {{ $t(title, "en") || $t(desc, "en") }}
    </h2>
    <div
      class=" h-px w-10 mt-4 transform scale-y-150"
      :class="[isWhite ? 'bg-white' : 'bg-lightblue']"
    />
  </div>
</template>
<script>
import ComponentMixin from "@/mixins/ComponentMixin";
export default {
  mixins: [ComponentMixin],
  props: ["title", "desc", "isWhite"]
};
</script>
<style></style>
