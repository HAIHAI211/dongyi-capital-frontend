export default {
  computed: {
    localeIsCn() {
      return this.$i18n.locale === "cn";
    },
    isDesktop() {
      return ["lg", "xl", "xxl"].includes(this.$mq);
    }
  }
};
