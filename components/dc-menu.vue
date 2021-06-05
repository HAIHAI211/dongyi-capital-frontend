<template>
  <div
    class="menu w-screen h-screen z-50 fixed left-0 top-0 flex items-center flex-col pt-8"
  >
    <img src="~assets/svg/close.svg" class=" cursor-pointer" @click="close" />
    <transition name="up">
      <ul class="flex flex-col space-y-4 mt-8" v-if="up">
        <nuxt-link
          v-for="item in navs"
          :key="item.to"
          :to="localePath(item.to, $i18n.locale)"
          v-slot="{ navigate }"
          custom
          class="dc-scale"
        >
          <li
            @click="nav(navigate, $event)"
            class="list-none flex flex-col items-center text-black"
          >
            <span class="text font-normal text-base leading-snug">{{
              $t(item.text)
            }}</span>
            <span
              class="desc font-light text-xs leading-normal"
              v-if="localeIsCn"
              >{{ item.desc }}</span
            >
          </li>
        </nuxt-link>
        <lang-switch @switch="close" class="text-center pt-4" />
      </ul>
    </transition>
  </div>
</template>
<script>
import ComponentMixin from "@/mixins/ComponentMixin";
import langSwitch from "./lang-switch.vue";
export default {
  components: { langSwitch },
  mixins: [ComponentMixin],
  props: ["navs"],
  data() {
    return {
      up: false
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    nav(navigate, $event) {
      navigate($event);
      this.$emit("close");
    }
  },
  mounted() {
    this.up = true;
  },
  beforeDestroy() {
    this.up = false;
  }
};
</script>
<style lang="scss" scoped>
.menu {
  background: #f5f5f5;
}
.up-enter-active,
.up-leave-active {
  transition: all 0.5s;
  transform: scale(1) translateY(0px);
}
.up-enter, .up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(0.5) translateY(-50%);
}
</style>
