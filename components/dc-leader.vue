<template>
  <div class="shadow-lg bg-white p-3 rounded-sm mt-6">
    <div class="card-head flex items-center">
      <div
        class="w-16 h-16 rounded-full overflow-hidden border border-gray-200 shadow-md"
      >
        <img
          :src="index === 0 ? require(`@/assets/img/about/leader1.jpeg`) : require(`@/assets/svg/about/l2.svg`)"
          class="w-full object-contain object-center"
        />
      </div>
      <h3 class="text-darkblue text-xl pl-3">
        {{ $t(`l_${index + 1}_title`) }}
        {{localeIsCn ? '——' : '-'}}
        <span class="font-bold">{{ $t(`l_${index + 1}_name`) }}</span>
      </h3>
    </div>
    <div class="content mt-3">
      <p
        class=" text-dcgray text-base"
        :class="[localeIsCn ? 'leading-8' : 'leading-7']"
      >
        {{ $t(`l_${index + 1}_desc`) }}
      </p>
    </div>
  </div>
</template>
<script>
import ComponentMixin from "@/mixins/ComponentMixin";
export default {
  mixins: [ComponentMixin],
  props: ["index"]
};
</script>
<style></style>
