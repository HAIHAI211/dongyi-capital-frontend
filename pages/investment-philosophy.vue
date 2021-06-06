<template>
  <div class="page">
    <dc-banner class="invest-banner-bgimg" t1="investment" t2="philosophy" />
    <section class="dc-container pb-10">
      <dc-title title="sec_title_2_1" desc="sec_subTitle_2_1" />
      <h3 class="text-darkblue text-lg font-semibold text-center pt-6">
        {{ $t("sec_h_2_1") }}
      </h3>
      <div class="pt-4">
        <img
          :src="
            require(`@/assets/img/invest/world${localeIsCn ? '' : '-en'}.svg`)
          "
          class="w-full"
        />
      </div>
    </section>
    <section
      class="
        invest2-bgimg
        dc-container
        bg-container
        h-104
        md:h-112
        lg:h-152
        flex flex-col
        items-center
      "
    >
      <h3
        class="
          text-white text-sm
          lg:text-base
          pt-6
          md:pt-8
          lg:pt-12
          pb-10
          md:pb-20
        "
      >
        {{ $t("sec_h_2_2") }}
      </h3>
      <div class="flex space-x-4 md:space-x-12 lg:space-x-24">
        <dc-vicon
          v-for="(item, index) in 4"
          :key="item + 'dvicon'"
          :index="index"
          class="w-20 md:w-36 bg-black"
          :class="[index % 2 === 1 ? 'top-10' : '']"
        />
      </div>
    </section>
    <article
      class="
        dc-container
        py-8
        space-y-2
        text-base
        leading-7
        text-darkblue
        tracking-wide
      "
    >
      <p>{{ $t("k1") }}</p>
      <p>{{ $t("k2") }}</p>
    </article>
    <img src="~assets/svg/invest/hand.svg" />
    <section class="dc-container relative pb-24 lg:pb-32">
      <dc-title title="sec_title_2_2" desc="sec_subTitle_2_2" />
      <div class="mobile:hidden flex mb-16">
        <div class="lg:w-100 bg-black flex-shrink-0 flex items-center">
          <dc-img
            src="invest/earth.png"
            class="w-full object-center object-contain"
          />
        </div>
        <div class="shadow-lg p-4 flex-grow bg-dcwhite">
          <div class="flex items-center mb-4">
            <img src="~assets/svg/invest/gold1.svg" class="w-8 mr-3" />
            <h4 class="text-darkblue text-xl font-bold leading-none">
              {{ $t("gg1") }}
            </h4>
          </div>

          <h5 class="text-darkblue tracking-wider">
            {{ $t("gg1_1") }}
          </h5>
        </div>
      </div>

      <div class="mobile:hidden flex">
        <div class="lg:w-100 flex-shrink-0 flex items-center" style="background:#0a0923;">
          <dc-img
            src="invest/night.png"
            class="w-full object-center object-contain"
          />
        </div>

        <div class="shadow-lg p-4 flex-grow bg-dcwhite">
          <div class="flex items-center mb-4">
            <img src="~assets/svg/invest/gold2.svg" class="w-8 mr-3" />
            <h4 class="text-darkblue text-xl font-bold leading-none">
              {{ $t("gg2") }}
            </h4>
          </div>

          <div class="text-darkblue tracking-wider">
            <p>{{ $t("gg2_1") }}</p>
            <p>{{ $t("gg2_2") }}</p>
            <p>{{ $t("gg2_3") }}</p>
            <p>{{ $t("gg2_4") }}</p>
          </div>
        </div>
      </div>
      <div class="lg:hidden space-y-8">
        <div class="shadow-lg rounded overflow-hidden">
          <dc-img
            src="invest/earth.png"
            class="w-full h-48 object-cover object-center"
          />
          <div class="p-2">
            <div class="flex items-center pb-3">
              <img src="~assets/svg/invest/gold1.svg" class="w-6 mr-3" />
              <h4 class="text-darkblue text-sm">{{ $t("gg1") }}</h4>
            </div>

            <h5 class="text-darkblue text-xs tracking-wider leading-5">
              <p>{{ $t("gg1_1") }}</p>
            </h5>
          </div>
        </div>
        <div class="shadow-lg rounded overflow-hidden">
          <dc-img
            src="invest/night.png"
            class="w-full object-cover object-center"
          />
          <div class="p-2">
            <div class="flex items-center pb-3">
              <img src="~assets/svg/invest/gold2.svg" class="w-6 mr-3" />
              <h4 class="text-darkblue text-sm">{{ $t("gg2") }}</h4>
            </div>

            <h5 class="text-darkblue text-xs tracking-wider leading-5">
              <p>{{ $t("gg2_1") }}</p>
              <p>{{ $t("gg2_2") }}</p>
              <p>{{ $t("gg2_3") }}</p>
              <p>{{ $t("gg2_4") }}</p>
            </h5>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import dcBanner from "../components/dc-banner.vue";
import ComponentMixin from "@/mixins/ComponentMixin";
import DcVicon from "@/components/dc-vicon.vue";
export default {
  mixins: [ComponentMixin],
  components: { dcBanner, DcVicon },
};
</script>

<style></style>
