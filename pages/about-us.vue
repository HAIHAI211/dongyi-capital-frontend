<template>
  <div class="page">
    <dc-banner class="about-banner-bgimg"  t1="about" t2="us" />
    <section class="dc-container bg-gray-50 lg:bg-white">
      <dc-title title="sec_title_3_1" desc="sec_subTitle_3_1" class="mb-8" />

      <div class="lg:flex mb-10 lg:items-start mobile:hidden">
        <div class="w-36 mr-10 flex-shrink-0">
          <img src="~assets/svg/about/dong.svg" class="w-full" />
        </div>
        <div class="text-dcgray text-base lg:leading-10 text-justify">
          <p class="font-semibold">{{ $t("d_t") }}</p>
          <p>{{ $t("d_1") }}</p>
          <p>{{ $t("d_2") }}</p>
          <p>{{ $t("d_3") }}</p>
          <p>{{ $t("d_4") }}</p>
        </div>
      </div>

      <div class="lg:flex mb-10 lg:items-start mobile:hidden">
        <div class="w-36 mr-10 flex-shrink-0">
          <img src="~assets/svg/about/yi.svg" class="w-full" />
        </div>
        <div class="text-dcgray text-base lg:leading-10 text-justify">
          <p class="font-semibold">{{ $t("y_2") }}</p>
          <p>{{ $t("y_3") }}</p>
          <p>{{ $t("y_4") }}</p>
          <p>{{ $t("y_5") }}</p>
          <p>{{ $t("y_6") }}</p>
        </div>
      </div>

      <div class="shadow-lg lg:hidden p-4 mb-8 rounded-md bg-white">
        <div class="flex items-center mb-3">
          <div class="w-12 h-12 overflow-hidden shadow-md flex-shrink-0">
            <img
              src="~assets/svg/about/dong.svg"
              class="w-full object-contain object-center"
            />
          </div>
          <span class="font-semibold text-xl ml-3">{{ $t("d_t") }}</span>
        </div>
        <div class="text-dcgray text-base leading-7">
          <p>
            {{ $t("d_1") }}
          </p>
          <p>{{ $t("d_2") }}</p>
          <p>{{ $t("d_3") }}</p>
          <p>{{ $t("d_4") }}</p>
        </div>
      </div>

      <div class="shadow-lg lg:hidden p-4 mb-8 rounded-md bg-white">
        <div class="flex items-center mb-3">
          <div class="w-12 h-12 overflow-hidden shadow-md flex-shrink-0">
            <img
              src="~assets/svg/about/yi.svg"
              class="w-full object-contain object-center"
            />
          </div>
          <span class="font-semibold text-xl ml-3">{{ $t("y_2") }}</span>
        </div>
        <div class="text-dcgray text-base leading-7">
          <p>{{ $t("y_3") }}</p>
          <p>{{ $t("y_4") }}</p>
          <p>{{ $t("y_5") }}</p>
          <p>{{ $t("y_6") }}</p>
        </div>
      </div>
    </section>
    <section
      class="hand-bgimg bg-container bg-deepdarkblue"
    >
      <div
        class="blue-bgimg dc-container bg-container h-full mobile:pb-10 pb-10"
      >
        <dc-title
          title="sec_title_3_2"
          desc="sec_subTitle_3_2"
          :isWhite="true"
        />
        <div class="flex flex-col items-center mobile:hidden mb-8">
          <div
            class="leader-card flex lg:w-200 lg:h-96 shadow-lg bg-white dc-scale hover:shadow-2xl"
          >
            <div class="flex-grow pt-14 pl-14 pr-8">
              <h3 class="text-darkblue text-2xl">
                {{ $t("l_1_title") }}——
                <span class="font-bold">{{ $t("l_1_name") }}</span>
              </h3>
              <div
                class="bg-gold w-12 h-px transform scale-y-150 my-3 rounded-lg"
              />
              <p
                class="text-darkblue text-base text-justify"
                :class="[localeIsCn ? 'leading-10' : 'leading-6']"
              >
                {{ $t("l_1_desc") }}
              </p>
            </div>
            <img
              src="~assets/img/about/leader1.png"
              class="h-full object-contain object-center flex-shrink-0"
            />
          </div>
        </div>
        <div class="flex flex-col items-center mobile:hidden">
          <div
            class="leader-card flex w-full h-52 lg:w-200 lg:h-96 shadow-lg bg-white dc-scale hover:shadow-2xl"
          >
            <div class="flex-grow pt-14 pl-14 pr-8">
              <h3 class="text-darkblue text-2xl">
                {{ $t("l_2_title") }}——
                <span class="font-bold">{{ $t("l_2_name") }}</span>
              </h3>
              <div
                class="bg-gold w-12 h-px transform scale-y-150 my-3 rounded-lg"
              />
              <p
                class="text-darkblue text-base text-justify"
                :class="[localeIsCn ? 'leading-10' : 'leading-6']"
              >
                {{ $t("l_2_desc") }}
              </p>
            </div>
            <img
              src="~assets/img/about/leader2.png"
              class="h-full object-contain object-center flex-shrink-0"
            />
          </div>
        </div>
        <dc-leader
          v-for="(item, index) in 2"
          :key="item + 'dcleader'"
          :index="index"
          class="lg:hidden"
        />
      </div>
    </section>
    <section
      class="meeting-bgimg bg-container dc-container h-80 bg-mibu mobile:h-64 flex justify-center items-center"
    >
      <div class="text-white font-light leading-6 lg:leading-9 space-y-2 lg:w-200">
        <p>{{ $t("l_3_title") }}{{ $t("l_3_p_1") }}</p>
        <p>{{ $t("l_3_p_2") }}</p>
        <p>{{ $t("l_3_p_3") }}</p>
      </div>
    </section>
    <section class="dc-container">
      <dc-title title="last_title" />
      <div class="flex justify-center pb-10">
        <div
          class="lg:grid lg:grid-cols-3 2xl:grid-cols-4 gap-10 mobile:space-y-4 mobile:w-full"
        >
          <dc-last
            v-for="(item, index) in 11"
            :key="item + 'company'"
            :index="index"
          />
        </div>
      </div>
    </section>
    <section class="area dc-container bg-p3blue pb-6">
      <dc-title title="area_title" :isWhite="true" />
      <div v-for="(item, index) in 2" :key="index + 'area'" class="mb-10">
        <img :src="require(`@/assets/img/about/area${item}.png`)" class="w-full"/>
        <h3 class="text-gold text-xl font-bold pt-4 pb-2">
          {{ $t(`area_h_${item}`) }}
        </h3>
        <p class="text-white text-sm leading-5">
          {{ $t(`area_p_${item}`) }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import dcTitle from "@/components/dc-title.vue";
import ComponentMixin from "@/mixins/ComponentMixin";
export default {
  mixins: [ComponentMixin],
  components: { dcTitle },
};
</script>

<style></style>
