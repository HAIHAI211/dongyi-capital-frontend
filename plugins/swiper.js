import Vue from "vue";
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
  EffectCoverflow
} from "swiper/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import "swiper/swiper-bundle.min.css";

SwiperClass.use([
  Pagination,
  Mousewheel,
  Navigation,
  Autoplay,
  EffectCoverflow
]);
Vue.use(
  getAwesomeSwiper(SwiperClass) /* { default options with global component } */
);
