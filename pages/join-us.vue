<template>
  <div class="page">
    <dc-banner src="/join/p4-banner" t1="join" t2="us" />
    <div
      class="dc-container lg:flex lg:p-8 items-center justify-center mobile:space-y-4 mobile:p-4"
    >
      <div
        class="flex items-center px-4 py-3 mobile:rounded-lg mobile:shadow-sm mobile:bg-white"
      >
        <img src="~assets/svg/join/phone.svg" class="mr-3 w-7" />
        <a class="text-thinblue underline" href="tel:86-021-6212 6500"
          >+86-021-6212 6500</a
        >
      </div>
      <div
        class="flex items-center px-4 py-3 mobile:rounded-lg mobile:shadow-sm mobile:bg-white"
      >
        <img src="~assets/svg/join/email.svg" class="mr-3 w-7" />
        <a class="text-thinblue underline" href="mailto:info@dongyicapital.com"
          >info@dongyicapital.com</a
        >
      </div>
      <div
        class="flex items-center px-4 py-3 mobile:rounded-lg mobile:shadow-sm mobile:bg-white"
      >
        <img src="~assets/svg/join/desktop.svg" class="mr-3 w-7" />
        <a class="text-thinblue underline" href="http://www.dongyicapital.com"
          >http://www.dongyicapital.com</a
        >
      </div>
    </div>
    <div class="dc-container flex justify-center mobile:hidden">
      <img src="~assets/img/join/s1.png" />
      <img src="~assets/img/join/s2.png" />
      <img src="~assets/img/join/s3.png" />
      <img src="~assets/img/join/s4.png" />
    </div>
    <client-only>
      <div class="dc-container lg:hidden mt-8">
        <swiper :options="swiperOptions">
          <swiper-slide class=" rounded-md overflow-hidden shadow-md">
            <img src="~assets/img/join/s1.png" class="w-full" />
          </swiper-slide>
          <swiper-slide class=" rounded-md overflow-hidden shadow-md">
            <img src="~assets/img/join/s2.png" class="w-full" />
          </swiper-slide>
          <swiper-slide class=" rounded-md overflow-hidden shadow-md">
            <img src="~assets/img/join/s3.png" class="w-full" />
          </swiper-slide>
          <swiper-slide class=" rounded-md overflow-hidden shadow-md">
            <img src="~assets/img/join/s4.png" class="w-full" />
          </swiper-slide>
        </swiper>
      </div>
    </client-only>
    <div class="dc-container flex my-12 items-center justify-center ">
      <img src="~assets/svg/join/logo@red.svg" class="w-32 mr-3" />
      <div class="flex flex-col">
        <div class="flex items-center">
          <img src="~assets/svg/join/point1.svg" class="w-4 m-3" />
          <span>{{ $t("address_1") }}</span>
        </div>
        <div class="flex items-center">
          <img src="~assets/svg/join/point2.svg" class="w-4 m-3" />
          <span>{{ $t("address_2") }}</span>
        </div>
      </div>
    </div>
    <section
      class="bg-p3blue dc-container  h-96 lg:h-120 flex justify-center items-center"
    >
      <div
        id="map-container"
        class="rounded-lg w-full h-60 lg:w-160 lg:h-96"
      ></div>
    </section>
    <section class="bg-white dc-container pb-16">
      <dc-title title="rc_title" class=" mb-8" />
      <div class="flex flex-col lg:flex-row">
        <div class=" mobile:pb-6 lg:pr-2 leading-8 lg:text-lg">
          <h1 class=" font-bold pb-3">{{ $t("rc_1") }}</h1>
          <p>{{ $t("rc_2") }}</p>
          <p>{{ $t("rc_3") }}</p>
          <p>
            {{ $t("rc_4") }}
            <a
              class=" text-lightblue underline"
              href="mailto:info@dongyicapital.com"
              >info@dongyicapital.com</a
            >
          </p>
        </div>
        <img :src="require('@/assets/img/join/rc.png')" class=" w-full lg:w-144"/>
      </div>
    </section>
  </div>
</template>

<script>
import ComponentMixin from "@/mixins/ComponentMixin";
export default {
  mixins: [ComponentMixin],
  mounted() {
    console.log("百度地图script loaded");

    // 创建地图
    const map = new BMapGL.Map("map-container");
    map.centerAndZoom(new BMapGL.Point(121.435654, 31.209595), 14);
    map.enableScrollWheelZoom(true);
    const points = [
      new BMapGL.Point(121.440082, 31.215378),
      new BMapGL.Point(121.440139, 31.221874)
    ];

    for (let i = 0; i < points.length; i++) {
      // 创建图标
      const icon = new BMapGL.Icon(
        require(`/static/map-p${i + 1}.png`),
        new BMapGL.Size(20, 30)
      );

      // 创建Marker标注，使用图标
      const marker = new BMapGL.Marker(points[i], {
        icon
      });
      // 将标注添加到地图
      map.addOverlay(marker);
    }
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: true,
        effect: "coverflow",
        slidesPerView: 2,
        centeredSlides: true
      }
    };
  }
};
</script>

<style></style>
