<template>
  <header
    class="dc-bg-container bg-transparent w-full top-0 left-0 py-3 md:py-9 z-40"
    v-scroll="handleScroll"
  >
    <div class="fixed text-red-200 left-0 top-0" v-if="$config.isDev">
      {{ $mq }} {{ mqTexts[$mq] }}
    </div>
    <div class="flex justify-between items-center">
      <nuxt-link :to="localePath('/', $i18n.locale)" v-slot="{ navigate }" custom class="dc-scale">
        <img
          class="logo cursor-pointer"
          src="~/assets/logo.svg"
          @click="navigate"
        />
      </nuxt-link>
      <nav v-if="isDesktop">
        <ul class="flex space-x-8">
          <nuxt-link
            v-for="(item,index) in navs"
            :key="item.to"
            :to="localePath(item.to, $i18n.locale)"
            v-slot="{ navigate }"
            custom
            class="dc-scale"
          >
            <li
              @click="navigate"
              class="list-none flex flex-col items-center text-white"
            >
              <span class="text font-normal text-base leading-snug">{{
                $t(item.text)
              }}</span>
              <span
                class="desc font-light text-xs leading-normal"
                v-if="localeIsCn"
                >{{ item.desc }}</span
              >
              <div class=" w-6 h-px bg-gold mt-2 transform scale-y-150" v-if="currentRouteIndex === index"/>
            </li>
          </nuxt-link>
          <lang-switch class="text-white font-extralight"/>
        </ul>
      </nav>
      <img
        class="menu cursor-pointer w-10 dc-scale"
        v-else
        @click="menuVisible = true"
        src="~/assets/svg/menu@white.svg"
      />
    </div>
    <transition name="fade">
      <dc-menu :navs="navs" v-if="menuVisible" @close="menuVisible = false" />
    </transition>
  </header>
</template>
<script>
import ComponentMixin from "@/mixins/ComponentMixin";
import { TimelineLite, Back, TweenMax, Sine } from "gsap";
import DcMenu from "./dc-menu.vue";
export default {
  mixins: [ComponentMixin],
  components: { DcMenu },
  data() {
    return {
      menuVisible: false,
      navs: [
        {
          to: "/",
          name: 'index',
          text: "index",
          desc: "Home Page"
        },
        {
          to: "/investment-philosophy",
          name: 'investment-philosophy',
          text: "investmentPhilosophy",
          desc: "Investment Philosophy"
        },
        {
          to: "/about-us",
          name: 'about-us',
          text: "aboutUs",
          desc: "About Us"
        },
        {
          to: "/join-us",
          name: 'join-us',
          text: "joinUs",
          desc: "Join Us"
        }
      ],
      mqTexts: {
        xs: `小于等于640px`, // <= 640
        sm: "640px ~ 768px", // 641 ~ 768
        md: "769px ~ 1024px", // 769 ~ 1024
        lg: "1025px ~ 1280px", // 1025 ~ 1280
        xl: "1281px ~ 1536px", // 1281 ~ 1536
        xxl: "大于等于1536px"
      },
      headerStatus: "transparent"
    };
  },
  methods: {
    handleScroll(evt, el) {
      if (window.scrollY > 100) {
        if (["blue", "toBlue"].includes(this.headerStatus)) return;
        console.log("> 150 ", this.headerStatus);
        TweenMax.to(el, 0.8, {
          // y: -6,
          position: "fixed",
          backgroundColor: "#102C5A",
          boxShadow: "3px 3px 6px rgba(0,0,0,0.2)",
          opacity: 0.98,
          ease: Sine.easeOut,
          onStart: () => {
            this.headerStatus = "toBlue";
          },
          onComplete: () => {
            this.headerStatus = "blue";
          }
        });
      } else {
        if (["transparent", "toTransparent"].includes(this.headerStatus))
          return;
        console.log("<= 150 ", this.headerStatus);
        TweenMax.to(el, 0.8, {
          // y: 6,
          position: "absolute",
          backgroundColor: "rgba(16,44,90,0)",
          //           .shadow-xl {
          //     --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          //     box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
          // }
          boxShadow: "none",
          opacity: 1,
          ease: Sine.easeIn,
          onStart: () => {
            this.headerStatus = "toTransparent";
          },
          onComplete: () => {
            this.headerStatus = "transparent";
          }
        });
      }
      // return window.scrollY > 100;
    }
  },
  computed: {
    currentRouteIndex() {
      const currentRouteName = this.$nuxt.$route.name.split('___')[0]
      // return this.$nuxt.$route.name
      return this.navs.findIndex(item => item.name === currentRouteName)
    }
  }
};
</script>
<style lang="scss" scoped>
nav {
  ul {
    li {
      &.active {
        .text {
          font-weight: 500;
          text-shadow: 0 0 4px rgba(255, 255, 255, 0.61);
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
