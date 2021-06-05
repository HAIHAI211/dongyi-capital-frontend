<template>
  <div class="page">
    <div
      class="dc-bg-container bg-container pt-32 mobile:pt-24 h-100 mobile:h-64 bg-darkblue relative"
      :style="{
        backgroundImage: 'url(' + require('@/assets/img/index/banner.png') + ')'
      }"
    >
      <template v-if="localeIsCn">
        <h1
          class="text-white font-semibold text-2xl leading-10 tracking-wider mobile:text-lg mobile:leading-5"
        >
          把握<span
            class="font-bold text-3xl tracking-widest mobile:text-xl"
            >科技创新、</span
          ><span class="font-bold text-3xl tracking-widest mobile:text-xl"
            >碳中和</span
          >带来的产业结构调整机遇
        </h1>
        <h2 class="text-white font-normal text-xs text-opacity-40">
          Seizing the opportunities of
          Industrial Restructuring brought by<br />
          Technology Innovation and Carbon Neutrality
        </h2>
      </template>
      <template v-else>
        <h1
          class="text-white font-semibold text-2xl leading-10 tracking-wider mobile:text-lg mobile:leading-5 "
        >
          Seizing the opportunities of <br v-if="isDesktop"/>
          <span class="font-bold text-3xl mobile:text-xl mobile:leading-6"
            >Industrial Restructuring  brought by <br v-if="isDesktop"/> Technology Innovation and
            Carbon Neutrality</span
          >
        </h1>
      </template>
      <img
        src="~assets/svg/kj.svg"
        class="w-40 mt-8 mobile:mx-auto mobile:mt-4 mobile:w-32"
      />
    </div>
    <section class="dc-container pb-10">
      <dc-title title="sec_title_1" desc="sec_subTitle_1" />

      <article
        class="flex flex-col lg:flex-row lg:space-x-14 xl:space-x-20 space-y-4 lg:space-y-0"
      >
        <div class="text-base leading-8 text-dcgray text-justify">
          <p>
            {{ $t("sec_content_1_2") }}
          </p>
        </div>
        <img
          src="~assets/img/index/AI.png"
          class="self-start lg:w-96 xl:w-160 flex-shrink-0"
        />
      </article>
    </section>
    <section
      class="dc-container h-120 bg-container flex flex-col items-center"
      :style="{
        backgroundImage: 'url(' + require('@/assets/img/index/sea.png') + ')'
      }"
    >
      <h3 class="text-white font-semibold text-base pt-8 md:pb-14 pb-8">
        {{ $t("r_title") }}
      </h3>
      <div
        class="md:flex md:items-center md:space-x-14 grid grid-cols-2 grid-rows-2"
      >
        <dc-ricon
          v-for="item in ricons"
          :key="item.title"
          :title="item.title"
          :subTitle="item.subTitle"
          :src="item.src"
        />
      </div>
    </section>
    <div class="dc-container">
      <dc-title title="sec_title_2" desc="sec_subTitle_2" />
      <div class=" lg:hidden space-y-5">
        <div class="shadow-xl bg-white">
          <img
            src="~assets/img/index/tp1.png"
            class="object-cover h-32 md:h-44 w-full"
          />
          <div class="p-4">
            <p class="text-darkblue">{{ $t("sec_content_2_1") }}</p>
            <!-- <img src="~assets/svg/index/right-arrow.svg" class="w-3 mt-4 hidden" /> -->
          </div>
        </div>
        <div class="shadow-xl bg-white">
          <div class="bg-black">
            <img
              src="~assets/img/index/tp2.png"
              class="object-contain h-32 w-full"
            />
          </div>
          <div class="p-4">
            <p class="text-darkblue">{{ $t("sec_content_2_2") }}</p>
            <!-- <img src="~assets/svg/index/right-arrow.svg" class="w-3 mt-4" /> -->
          </div>
        </div>
        <div class="shadow-xl bg-white">
          <img
            src="~assets/img/index/tp3.png"
            class="object-cover h-32 w-full"
          />
          <div class="p-4">
            <p class="text-darkblue">{{ $t("sec_content_2_3") }}</p>
            <!-- <img src="~assets/svg/index/right-arrow.svg" class="w-3 mt-4" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="mobile:hidden text-white lg:leading-10 md:leading-8 leading-6">
      <div
        class="grid grid-cols-2 grid-rows-3 text-white mobile:flex  mobile:flex-col mobile:space-y-3"
      >
        <div class="bg-darkblue max-h-96">
          <div class="flex flex-col p-4 justify-center h-full">
            <p>{{ $t("sec_content_2_1") }}</p>
            <img src="~assets/svg/index/right-arrow.svg" class=" w-3 mt-4" />
          </div>
        </div>
        <div class="max-h-96">
          <img
            src="~assets/img/index/tp1.png"
            class="object-cover h-full w-full"
          />
        </div>
        <div class="max-h-96">
          <img
            src="~assets/img/index/tp2.png"
            class="object-cover h-full w-full"
          />
        </div>
        <div class="bg-darkblue max-h-96">
          <div class="flex flex-col p-3">
            <p>{{ $t("sec_content_2_2") }}</p>
            <img src="~assets/svg/index/right-arrow.svg" class=" w-3 mt-4" />
          </div>
        </div>
        <div class="bg-darkblue  max-h-96">
          <div class="flex flex-col p-4 justify-center h-full">
            <p>{{ $t("sec_content_2_3") }}</p>
            <img src="~assets/svg/index/right-arrow.svg" class=" w-3 mt-4" />
          </div>
        </div>
        <div class="max-h-96">
          <img
            src="~assets/img/index/tp3.png"
            class="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>

    <div class="dc-container mt-12 relative pb-20">
      <div
        class="absolute bg-dcwhite h-96  -top-20 left-0 w-full mobile:hidden"
      />
      <h4 class="text-black text-xl text-center pb-7 relative mobile:text-left lg:max-w-2xl lg:mx-auto">
        {{ $t("tzh_title") }}
      </h4>
      <div
        class="flex flex-col lg:flex-row lg:justify-center mobile:items-center mobile:space-y-3"
      >
        <dc-tcard
          v-for="(item, index) in 6"
          :key="index + 'tcard'"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ComponentMixin from "@/mixins/ComponentMixin";
import DcTitle from "@/components/dc-title";
import DcRicon from "@/components/dc-ricon";
import DcTcard from "@/components/dc-tcard.vue";
export default {
  mixins: [ComponentMixin],
  data() {
    return {
      ricons: [
        {
          title: "r_title_1",
          subTitle: "r_subTitle_1",
          src: require("@/assets/svg/index/r1.svg")
        },
        {
          title: "r_title_2",
          subTitle: "r_subTitle_2",
          src: require("@/assets/svg/index/r2.svg")
        },
        {
          title: "r_title_3",
          subTitle: "r_subTitle_3",
          src: require("@/assets/svg/index/r3.svg")
        },
        {
          title: "r_title_4",
          subTitle: "r_subTitle_4",
          src: require("@/assets/svg/index/r4.svg")
        }
      ]
      // tcards: [
      //   {
      //     title: "tzh_f_t_1",
      //     icon: require("@/assets/svg/index/t1.svg")
      //   }
      // ]
    };
  },
  head() {
    // return this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      title: this.$t("title")
    };
  },
  components: { DcTitle, DcRicon, DcTcard }
};
</script>

<style lang="scss" scoped></style>
